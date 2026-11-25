import { useEffect, useState } from "react";
import { useCookieBannerOpen } from "@/hooks/useCookieBannerOpen";
import { useMobileNavOpen } from "@/hooks/useMobileNavOpen";
import { CONSULTATION_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/whatsapp";
import { cn } from "@/lib/utils";

const WHATSAPP_URL = whatsappHref(CONSULTATION_WHATSAPP_MESSAGE);

/**
 * Premium floating WhatsApp control — navy circle, cream glyph.
 * Fixed; does not affect document flow (no CLS). Hidden while the cookie
 * banner or mobile nav is open. Lifted above mobile sticky conversion bars
 * via html[data-mobile-sticky-cta].
 */
export default function WhatsAppFab() {
  const cookieBannerOpen = useCookieBannerOpen();
  const mobileNavOpen = useMobileNavOpen();
  // Start unentered so prerender + first paint match; fade/scale after mount.
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    let cancelled = false;
    const reduce =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduce) {
      setEntered(true);
      return;
    }

    const id = window.requestAnimationFrame(() => {
      if (!cancelled) setEntered(true);
    });
    return () => {
      cancelled = true;
      window.cancelAnimationFrame(id);
    };
  }, []);

  if (cookieBannerOpen || mobileNavOpen) return null;

  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener"
      aria-label="Message The Oxford Wellness Doctor on WhatsApp"
      data-testid="whatsapp-fab"
      className={cn(
        "whatsapp-fab group js-whatsapp-cta fixed z-40",
        "flex h-[52px] w-[52px] md:h-14 md:w-14 items-center justify-center",
        "rounded-full bg-[#293c56] text-[#f5ecdc]",
        "shadow-[0_8px_24px_rgba(41,60,86,0.22)]",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "transition-[opacity,transform] duration-300 ease-out",
        "motion-reduce:transition-none motion-reduce:opacity-100 motion-reduce:scale-100",
        entered ? "opacity-100 scale-100" : "opacity-0 scale-95"
      )}
    >
      <WhatsAppGlyph className="h-[26px] w-[26px] md:h-7 md:w-7" />
      <span
        className={cn(
          "pointer-events-none absolute right-full mr-3 hidden md:inline-flex",
          "whitespace-nowrap rounded-full bg-[#293c56] px-3.5 py-2",
          "text-xs font-medium text-[#f5ecdc] shadow-[0_6px_18px_rgba(41,60,86,0.18)]",
          "opacity-0 translate-x-1 transition-[opacity,transform] duration-200 ease-out",
          "group-hover:opacity-100 group-hover:translate-x-0",
          "group-focus-visible:opacity-100 group-focus-visible:translate-x-0",
          "motion-reduce:transition-none"
        )}
      >
        Message us on WhatsApp
      </span>
    </a>
  );
}

function WhatsAppGlyph({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
      focusable="false"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  );
}
