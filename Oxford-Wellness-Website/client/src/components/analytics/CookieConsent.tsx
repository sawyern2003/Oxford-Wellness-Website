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

export default function CookieConsent() {
  const [location] = useLocation();
  const [choice, setChoice] = useState<AnalyticsConsent | null>(() => readAnalyticsConsent());
  const [open, setOpen] = useState(() => readAnalyticsConsent() === null);

  useEffect(() => {
    const show = () => setOpen(true);
    window.addEventListener(OPEN_COOKIE_SETTINGS_EVENT, show);
    return () => window.removeEventListener(OPEN_COOKIE_SETTINGS_EVENT, show);
  }, []);

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
      className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-white"
    >
      <div className="container-page flex flex-col gap-4 py-4 md:flex-row md:items-center md:justify-between md:py-5">
        <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
          Analytics cookies stay off unless you accept them. They tell us which pages are visited. They are not used for names, email addresses, or information typed into forms.{" "}
          <Link href="/cookie-policy" className="text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary">
            Cookie policy
          </Link>
        </p>
        <div className="flex shrink-0 flex-wrap gap-3">
          <button
            type="button"
            className="h-11 rounded-full border border-border bg-white px-5 text-sm font-medium text-foreground hover:text-primary"
            onClick={() => choose("rejected")}
          >
            Reject analytics
          </button>
          <button
            type="button"
            className="h-11 rounded-full bg-secondary px-5 text-sm font-medium text-primary hover:bg-secondary/90"
            onClick={() => choose("accepted")}
          >
            Accept analytics
          </button>
        </div>
      </div>
    </div>
  );
}
