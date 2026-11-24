/**
 * Google Ads conversion tracking with Consent Mode v2.
 * Safe for prerender: no window access at module load.
 * If VITE_GOOGLE_ADS_ID is unset, all exports are no-ops.
 */

import { readAnalyticsConsent, type AnalyticsConsent } from "@/lib/consent";

const ADS_ID = (import.meta.env.VITE_GOOGLE_ADS_ID as string | undefined)?.trim() || "";
const BOOK_LABEL = (import.meta.env.VITE_GADS_BOOK_LABEL as string | undefined)?.trim() || "";
const WHATSAPP_LABEL = (import.meta.env.VITE_GADS_WHATSAPP_LABEL as string | undefined)?.trim() || "";
const TEL_LABEL = (import.meta.env.VITE_GADS_TEL_LABEL as string | undefined)?.trim() || "";

const GCLID_COOKIE = "owd_gclid";
const GCLID_SESSION = "owd_gclid";
const GCLID_MAX_AGE_DAYS = 90;
const ADS_SCRIPT_ID = "gads-gtag";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

export function googleAdsConfigured(): boolean {
  return Boolean(ADS_ID);
}

function ensureGtagStub() {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };
}

let consentDefaultsSet = false;

/** Consent Mode v2 defaults — denied until the visitor accepts. Call once before config. */
export function setConsentDefaults() {
  if (typeof window === "undefined" || consentDefaultsSet) return;
  ensureGtagStub();
  window.gtag?.("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    wait_for_update: 500,
  });
  consentDefaultsSet = true;
}

export function updateAdsConsent(value: AnalyticsConsent) {
  if (typeof window === "undefined" || !window.gtag) return;
  const granted = value === "accepted";
  const state = granted ? "granted" : "denied";
  window.gtag("consent", "update", {
    ad_storage: state,
    ad_user_data: state,
    ad_personalization: state,
    analytics_storage: state,
  });
  if (granted) {
    persistGclidCookieFromSession();
  }
}

function adsScriptPresent() {
  if (typeof document === "undefined") return false;
  return Boolean(
    document.getElementById(ADS_SCRIPT_ID) ||
      (ADS_ID && document.querySelector(`script[src*="gtag/js?id=${ADS_ID}"]`))
  );
}

/**
 * Loads gtag.js for Google Ads when VITE_GOOGLE_ADS_ID is set.
 * Always sets Consent Mode defaults to denied first, then configs the Ads ID.
 * Re-applies a stored Accept choice after load.
 */
export function initGoogleAds() {
  if (typeof window === "undefined") return;
  if (!ADS_ID) return;
  if (adsInitialized) {
    captureClickIdsFromUrl();
    return;
  }
  adsInitialized = true;

  ensureGtagStub();
  setConsentDefaults();

  const stored = readAnalyticsConsent();
  if (stored === "accepted") {
    updateAdsConsent("accepted");
  }

  if (!adsScriptPresent()) {
    const script = document.createElement("script");
    script.id = ADS_SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${ADS_ID}`;
    document.head.appendChild(script);
  }

  window.gtag?.("js", new Date());
  window.gtag?.("config", ADS_ID, {
    conversion_linker: true,
    send_page_view: false,
  });

  captureClickIdsFromUrl();
  installConversionClickListener();
}

function consentAllowsAds(): boolean {
  return readAnalyticsConsent() === "accepted" && typeof window !== "undefined" && Boolean(window.gtag);
}

function sendConversion(label: string) {
  if (!ADS_ID || !label || !consentAllowsAds()) return;
  window.gtag?.("event", "conversion", {
    send_to: `${ADS_ID}/${label}`,
    transport_type: "beacon",
  });
}

function isGlowdayHref(href: string): boolean {
  return /glowday/i.test(href);
}

/** Internal /book links (with or without query/hash), absolute or relative. */
function isBookHref(href: string): boolean {
  try {
    const base =
      typeof window !== "undefined"
        ? window.location.origin
        : "https://www.theoxfordwellnessdoctor.com";
    const url = new URL(href, base);
    const path = url.pathname.replace(/\/+$/, "") || "/";
    return path === "/book";
  } catch {
    return /^\/book(\/|$|\?|#)/i.test(href);
  }
}

function isWhatsAppHref(href: string): boolean {
  return /wa\.me|api\.whatsapp\.com|^whatsapp:/i.test(href);
}

function isTelHref(href: string): boolean {
  return /^tel:/i.test(href);
}

function captureClickIdsFromUrl() {
  if (typeof window === "undefined") return;
  try {
    const params = new URLSearchParams(window.location.search);
    const id = params.get("gclid") || params.get("gbraid") || params.get("wbraid");
    if (!id) return;
    sessionStorage.setItem(GCLID_SESSION, id);
    if (readAnalyticsConsent() === "accepted") {
      writeGclidCookie(id);
    }
  } catch {
    /* ignore */
  }
}

function writeGclidCookie(id: string) {
  const maxAge = GCLID_MAX_AGE_DAYS * 24 * 60 * 60;
  document.cookie = `${GCLID_COOKIE}=${encodeURIComponent(id)}; Max-Age=${maxAge}; path=/; SameSite=Lax`;
}

function persistGclidCookieFromSession() {
  try {
    const id = sessionStorage.getItem(GCLID_SESSION);
    if (id) writeGclidCookie(id);
  } catch {
    /* ignore */
  }
}

function readStoredGclid(): string | null {
  try {
    const fromSession = sessionStorage.getItem(GCLID_SESSION);
    if (fromSession) return fromSession;
  } catch {
    /* ignore */
  }
  if (readAnalyticsConsent() !== "accepted") return null;
  try {
    const match = document.cookie.match(new RegExp(`(?:^|; )${GCLID_COOKIE}=([^;]*)`));
    return match ? decodeURIComponent(match[1]) : null;
  } catch {
    return null;
  }
}

/** Appends gclid to a Glowday URL when we have one and the URL does not already. */
export function appendGclidToGlowdayUrl(href: string): string {
  if (!isGlowdayHref(href)) return href;
  const gclid = readStoredGclid();
  if (!gclid) return href;
  try {
    const url = new URL(href, typeof window !== "undefined" ? window.location.origin : "https://www.theoxfordwellnessdoctor.com");
    if (url.searchParams.has("gclid")) return href;
    url.searchParams.set("gclid", gclid);
    return url.toString();
  } catch {
    return href;
  }
}

let listenerInstalled = false;
let adsInitialized = false;

function installConversionClickListener() {
  if (typeof document === "undefined" || listenerInstalled) return;
  listenerInstalled = true;

  document.addEventListener(
    "click",
    (event) => {
      const target = event.target as Element | null;
      const anchor = target?.closest?.("a");
      if (!anchor) return;

      const rawHref = anchor.getAttribute("href") || "";
      if (!rawHref) return;

      // Book conversion: Glowday anchors or internal /book CTAs (once per click).
      // Cross-origin Glowday iframes cannot be tracked; /book clicks cover treatment→book journeys.
      if (isGlowdayHref(rawHref) || isBookHref(rawHref)) {
        if (isGlowdayHref(rawHref)) {
          const withGclid = appendGclidToGlowdayUrl(rawHref);
          if (withGclid !== rawHref) {
            anchor.setAttribute("href", withGclid);
          }
        }
        if (BOOK_LABEL) sendConversion(BOOK_LABEL);
        return;
      }

      if (isWhatsAppHref(rawHref)) {
        if (WHATSAPP_LABEL) sendConversion(WHATSAPP_LABEL);
        return;
      }

      if (isTelHref(rawHref)) {
        if (TEL_LABEL) sendConversion(TEL_LABEL);
      }
    },
    true
  );
}
