import { useEffect, useState } from "react";
import {
  COOKIE_BANNER_CHANGE_EVENT,
  readAnalyticsConsent,
} from "@/lib/consent";

/**
 * True while the cookie banner is on screen (first visit or "Cookie settings").
 * Sticky CTAs should hide so Reject/Accept stay fully usable.
 *
 * Must not read localStorage during useState init: SSR always sees null, but
 * returning visitors have a stored choice on the client, which caused React
 * hydration error #418 (StickyBar null vs rendered) on treatment pages.
 */
export function useCookieBannerOpen(): boolean {
  // Assume banner open until after mount (hides sticky CTAs; matches prerender).
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(readAnalyticsConsent() === null);

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
