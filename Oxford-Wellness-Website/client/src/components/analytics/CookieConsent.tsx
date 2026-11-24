import { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import {
  OPEN_COOKIE_SETTINGS_EVENT,
  loadGoogleAnalytics,
  readAnalyticsConsent,
  saveAnalyticsConsent,
  trackSanitizedPageView,
  type AnalyticsConsent,
} from "@/lib/analytics";
import { dispatchCookieBannerChange } from "@/lib/consent";
import { googleAdsConfigured, initGoogleAds } from "@/lib/googleAds";

export default function CookieConsent() {
  const [location] = useLocation();
  const [choice, setChoice] = useState<AnalyticsConsent | null>(() => readAnalyticsConsent());
  const [open, setOpen] = useState(() => readAnalyticsConsent() === null);

  useEffect(() => {
    if (googleAdsConfigured()) initGoogleAds();
  }, []);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, show);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, show);
  }, []);

  // Keep sticky CTAs in sync (including first paint for first-time visitors).
  useEffect(() => {
    dispatchCookieBannerChange(open);
  }, [open]);

  useEffect(() => {
    if (choice !== "accepted") return;
    loadGoogleAnalytics();
    trackSanitizedPageView();
  }, [choice, location]);

  function choose(value: AnalyticsConsent) {
    setChoice(value);
    setOpen(false);
    saveAnalyticsConsent(value);
  }

  if (!open) return null;

  return (
    <div
      role="region"
      aria-label="Cookie choices"
      className="fixed inset-x-0 bottom-0 z-[60] border-t border-border bg-white shadow-lg"
    >
      <div className="container-page flex flex-col gap-3 py-3 md:flex-row md:items-center md:justify-between md:py-4">
        <p className="max-w-2xl text-xs md:text-sm leading-relaxed text-muted-foreground">
          Cookies for analytics and measuring bookings stay off unless you accept them.{" "}
          <Link href="/cookie-policy" className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary">
            Cookie policy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-2">
          <button
            type="button"
            className="h-9 md:h-10 rounded-full border border-border bg-white px-4 text-xs md:text-sm font-medium text-foreground hover:text-primary"
            onClick={() => choose("rejected")}
          >
            Reject
          </button>
          <button
            type="button"
            className="h-9 md:h-10 rounded-full bg-secondary px-4 text-xs md:text-sm font-medium text-secondary-foreground hover:bg-secondary/90"
            onClick={() => choose("accepted")}
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
