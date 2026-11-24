import { useState, useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { useCookieBannerOpen } from "@/hooks/useCookieBannerOpen";
import { isPainRoute, PAIN_BOOK_HREF } from "@/lib/brand";
import { CONSULTATION_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/whatsapp";

const STICKY_BAR_ROUTES = [
  "/treatments/",
  "/menopause-clinic",
  "/sexual-wellness-oxford",
  "/womens-health-oxford",
];

function hasTreatmentStickyBar(path: string): boolean {
  return STICKY_BAR_ROUTES.some((route) => path.startsWith(route));
}

/**
 * Global conversion CTAs. Treatment landing pages already ship their own sticky bar;
 * elsewhere we show a mobile Book + Call + WhatsApp bar and a desktop floating Book.
 * Hidden while the cookie banner is open so Reject/Accept stay usable.
 */
export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();
  const cookieBannerOpen = useCookieBannerOpen();
  const pain = isPainRoute(location);
  const hasSticky = hasTreatmentStickyBar(location);
  const bookHref = pain ? PAIN_BOOK_HREF : "/book";
  const whatsappUrl = whatsappHref(CONSULTATION_WHATSAPP_MESSAGE);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 300);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (cookieBannerOpen || !visible) return null;

  // Treatment pages: their StickyBar covers mobile; keep a desktop Book chip only.
  if (hasSticky) {
    return (
      <a
        href={bookHref}
        aria-label="Book a consultation"
        className="js-book-cta hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center rounded-full bg-primary text-white px-5 py-3 text-sm font-medium shadow-md hover:bg-primary/90 transition-colors"
      >
        Book
      </a>
    );
  }

  return (
    <>
      {/* Reserve space so content is not hidden behind the mobile sticky bar */}
      <div className="md:hidden h-16" aria-hidden="true" />
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-[45] safe-area-pb">
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
          <a
            href={whatsappUrl}
            className="js-whatsapp-cta"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp the clinic"
          >
            <Button variant="outline" size="icon" className="h-10 w-10 rounded-full flex-shrink-0">
              <MessageCircle size={18} />
            </Button>
          </a>
        </div>
      </div>
      <a
        href={bookHref}
        aria-label="Book a consultation"
        className="js-book-cta hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center rounded-full bg-primary text-white px-5 py-3 text-sm font-medium shadow-md hover:bg-primary/90 transition-colors"
      >
        Book
      </a>
    </>
  );
}
