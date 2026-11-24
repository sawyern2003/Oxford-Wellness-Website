import { useEffect, useState } from "react";
import {
  COOKIE_BANNER_CHANGE_EVENT,
  readAnalyticsConsent,
} from "@/lib/consent";

/**
 * True while the cookie banner is on screen (first visit or "Cookie settings").
 * Sticky CTAs should hide so Reject/Accept stay fully usable.
 */
export function useCookieBannerOpen(): boolean {
  const [open, setOpen] = useState(() => readAnalyticsConsent() === null);

  useEffect(() => {
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<{ open?: boolean }>).detail;
      if (detail && typeof detail.open === "boolean") {
        setOpen(detail.open);
      }
    };
    window.addEventListener(COOKIE_BANNER_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(COOKIE_BANNER_CHANGE_EVENT, onChange);
  }, []);

  return open;
}
