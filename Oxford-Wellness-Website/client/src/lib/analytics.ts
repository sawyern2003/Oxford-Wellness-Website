import {
  openCookieSettings,
  readAnalyticsConsent,
  writeAnalyticsConsent,
  type AnalyticsConsent,
} from "@/lib/consent";
import { googleAdsConfigured, updateAdsConsent } from "@/lib/googleAds";

export { OPEN_COOKIE_SETTINGS_EVENT, openCookieSettings, readAnalyticsConsent } from "@/lib/consent";
export type { AnalyticsConsent } from "@/lib/consent";

export const GA_MEASUREMENT_ID = "G-WLVKNL5BG9";

const SCRIPT_ID = "ga4-gtag";

type Gtag = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

function disableFlag(): string {
  return `ga-disable-${GA_MEASUREMENT_ID}`;
}

function setDisableFlag(disabled: boolean) {
  (window as Window & Record<string, boolean>)[disableFlag()] = disabled;
}

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name === "_gid" || name.startsWith("_ga_") || name.startsWith("_gcl_"));

  const host = window.location.hostname;
  const domains = ["", host, `.${host}`];
  for (const name of names) {
    for (const domain of domains) {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; path=/${domainPart}`;
    }
  }
}

function ensureGtagStub() {
  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };
}

function scriptAlreadyPresent() {
  return Boolean(
    document.getElementById(SCRIPT_ID) ||
      document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)
  );
}

/** Loads the Google Analytics tag once. Does nothing unless analytics cookies were accepted. */
export function loadGoogleAnalytics() {
  if (typeof window === "undefined") return;
  if (readAnalyticsConsent() !== "accepted") return;
  if ((window as Window & Record<string, boolean>)[disableFlag()]) return;

  ensureGtagStub();

  if (!scriptAlreadyPresent()) {
    const script = document.createElement("script");
    script.id = SCRIPT_ID;
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script);
  }

  window.gtag?.("js", new Date());
  window.gtag?.("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    anonymize_ip: true,
  });
}

const CAMPAIGN_PARAMS = ["utm_source", "utm_medium", "utm_campaign"] as const;
const CAMPAIGN_VALUE = /^[a-z0-9_-]{1,64}$/i;

/** Keeps the poster campaign parameters and drops every other query value. */
function campaignQuery(): string {
  const incoming = new URLSearchParams(window.location.search);
  const kept = new URLSearchParams();
  for (const key of CAMPAIGN_PARAMS) {
    const value = incoming.get(key);
    if (value && CAMPAIGN_VALUE.test(value)) kept.set(key, value);
  }
  const query = kept.toString();
  return query ? `?${query}` : "";
}

/**
 * Sends a page view without the hash or unrelated query string, so names,
 * email addresses, form fields, and consultation links are not sent.
 * Campaign parameters from the stairwell poster are kept for attribution.
 */
export function trackSanitizedPageView() {
  if (typeof window === "undefined") return;
  if (readAnalyticsConsent() !== "accepted") return;
  if ((window as Window & Record<string, boolean>)[disableFlag()]) return;
  loadGoogleAnalytics();
  if (!window.gtag) return;

  const path = window.location.pathname || "/";
  window.gtag("event", "page_view", {
    page_path: path,
    page_location: `${window.location.origin}${path}${campaignQuery()}`,
    page_title: document.title,
  });
}

export function saveAnalyticsConsent(value: AnalyticsConsent) {
  if (typeof window === "undefined") return;
  const previous = readAnalyticsConsent();
  if (!writeAnalyticsConsent(value)) return;

  // Consent Mode v2 update for Google Ads (and shared gtag) when configured.
  if (googleAdsConfigured()) {
    updateAdsConsent(value);
  }

  const loaded = scriptAlreadyPresent();

  if (value === "rejected") {
    setDisableFlag(true);
    clearAnalyticsCookies();
    if (loaded) window.location.reload();
    return;
  }

  setDisableFlag(false);
  if (previous === "rejected" && loaded) {
    window.location.reload();
  }
}
