export const OPEN_COOKIE_SETTINGS_EVENT = "owd-open-cookie-settings";
/** Fired whenever the cookie banner opens or closes so sticky CTAs can yield. */
export const COOKIE_BANNER_CHANGE_EVENT = "owd-cookie-banner-change";

export type AnalyticsConsent = "accepted" | "rejected";

const STORAGE_KEY = "owd-analytics-consent";

export function readAnalyticsConsent(): AnalyticsConsent | null {
  if (typeof window === "undefined") return null;
  try {
    const value = localStorage.getItem(STORAGE_KEY);
    if (value === "accepted" || value === "rejected") return value;
  } catch {
    return null;
  }
  return null;
}

export function writeAnalyticsConsent(value: AnalyticsConsent): boolean {
  if (typeof window === "undefined") return false;
  try {
    localStorage.setItem(STORAGE_KEY, value);
    return true;
  } catch {
    return false;
  }
}

export function openCookieSettings() {
  if (typeof window === "undefined") return;
  window.dispatchEvent(new Event(OPEN_COOKIE_SETTINGS_EVENT));
}

export function dispatchCookieBannerChange(open: boolean) {
  if (typeof window === "undefined") return;
  window.dispatchEvent(
    new CustomEvent(COOKIE_BANNER_CHANGE_EVENT, { detail: { open } })
  );
}
