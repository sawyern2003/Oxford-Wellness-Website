import { useState, useEffect } from "react";
import { Phone } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useCookieBannerOpen } from "@/hooks/useCookieBannerOpen";
import { isPainRoute, PAIN_BOOK_HREF } from "@/lib/brand";

const STICKY_BAR_ROUTES = [
  "/treatments/",
  "/menopause-clinic",
  "/sexual-wellness-oxford",
  "/womens-health-oxford",
];

function hasTreatmentStickyBar(path: string): boolean {
  return STICKY_BAR_ROUTES.some((route) => path.startsWith(route));
}

function setMobileStickyCta(active: boolean) {
  if (typeof document === "undefined") return;
  if (active) {
    document.documentElement.dataset.mobileStickyCta = "";
  } else {
    delete document.documentElement.dataset.mobileStickyCta;
  }
}

/**
 * Mobile Book + Call sticky bar after scroll. Treatment landing pages ship
 * their own sticky bar. Desktop WhatsApp lives in WhatsAppFab alone.
 * Hidden while the cookie banner is open.
 */
export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();
  const cookieBannerOpen = useCookieBannerOpen();
  const pain = isPainRoute(location);
  const hasSticky = hasTreatmentStickyBar(location);
  const bookHref = pain ? PAIN_BOOK_HREF : "/book";
  const showMobileBar = visible && !cookieBannerOpen && !hasSticky;

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileStickyCta(showMobileBar);
    return () => setMobileStickyCta(false);
  }, [showMobileBar]);

  if (!showMobileBar) return null;

  return (
    <>
      {/* Reserve space so content is not hidden behind the mobile sticky bar */}
      <div className="md:hidden h-16" aria-hidden="true" />
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-background border-t border-border shadow-lg z-[45] safe-area-pb">
        <div className="px-4 py-3 flex items-center gap-2">
          <a href={bookHref} className="js-book-cta flex-1" aria-label="Book a consultation">
            <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full h-10 text-sm font-medium">
              Book
            </Button>
          </a>
          <a href="tel:+447739309380" className="js-call-cta" aria-label="Call the clinic">
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full flex-shrink-0">
              <Phone size={18} />
            </Button>
          </a>
        </div>
      </div>
    </>
  );
}
