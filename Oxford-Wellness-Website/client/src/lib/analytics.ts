export const GA_MEASUREMENT_ID = "G-WLVKNL5BG9";

const STORAGE_KEY = "owd-analytics-consent";
const SCRIPT_ID = "ga4-gtag";

export const OPEN_COOKIE_SETTINGS_EVENT = "owd-open-cookie-settings";

export type AnalyticsConsent = "accepted" | "rejected";

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

export function readAnalyticsConsent(): AnalyticsConsent | null {
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    return null;
  }
  return null;
}

export function openCookieSettings() {
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

function setDisableFlag(disabled: boolean) {
  (window as Window & Record<string, boolean>)[disableFlag()] = disabled;
}

function clearAnalyticsCookies() {
  const names = document.cookie
    .split(";")
    .map((part) => part.trim().split("=")[0])
    .filter((name) => name === "_ga" || name === "_gid" || name.startsWith("_ga_"));

  const host = window.location.hostname;
  const domains = ["", host, `.${host}`];
  for (const name of names) {
    for (const domain of domains) {
      const domainPart = domain ? `; domain=${domain}` : "";
      document.cookie = `${name}=; Max-Age=0; path=/${domainPart}`;
    }
  }
}

function scriptAlreadyPresent() {
  return Boolean(
    document.getElementById(SCRIPT_ID) ||
      document.querySelector(`script[src*="gtag/js?id=${GA_MEASUREMENT_ID}"]`)
  );
}

/** Loads the Google tag once. Does nothing unless analytics cookies were accepted. */
export function loadGoogleAnalytics() {
  if (readAnalyticsConsent() !== "accepted") return;
  if ((window as Window & Record<string, boolean>)[disableFlag()]) return;
  if (scriptAlreadyPresent()) return;

  window.dataLayer = window.dataLayer || [];
  window.gtag =
    window.gtag ||
    function gtag() {
      window.dataLayer?.push(arguments);
    };

  window.gtag("js", new Date());
  window.gtag("config", GA_MEASUREMENT_ID, {
    send_page_view: false,
    allow_google_signals: false,
    allow_ad_personalization_signals: false,
    anonymize_ip: true,
  });

  const script = document.createElement("script");
  script.id = SCRIPT_ID;
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
  document.head.appendChild(script);
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
  const previous = readAnalyticsConsent();
  try {
    localStorage.setItem(STORAGE_KEY, value);
  } catch {
    return;
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
