import { useEffect, useState } from "react";
import { MOBILE_NAV_CHANGE_EVENT } from "@/lib/mobile-nav";

/**
 * True while the mobile nav menu is open.
 * Starts false so SSR / prerender markup matches the first client paint.
 */
export function useMobileNavOpen(): boolean {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onChange = (event: Event) => {
      const detail = (event as CustomEvent<{ open?: boolean }>).detail;
      if (detail && typeof detail.open === "boolean") {
        setOpen(detail.open);
      }
    };
    window.addEventListener(MOBILE_NAV_CHANGE_EVENT, onChange);
    return () => window.removeEventListener(MOBILE_NAV_CHANGE_EVENT, onChange);
  }, []);

  return open;
}
