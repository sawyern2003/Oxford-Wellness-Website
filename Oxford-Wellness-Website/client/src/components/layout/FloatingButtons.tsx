import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { isPainRoute, PAIN_CONTACT_HREF } from "@/lib/brand";

const STICKY_BAR_ROUTES = [
  "/treatments/",
  "/menopause-clinic",
  "/sexual-wellness-oxford",
  "/womens-health-oxford",
];

function hasStickyBar(path: string): boolean {
  return STICKY_BAR_ROUTES.some(route => path.startsWith(route));
}

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();
  const pain = isPainRoute(location);
  const hasSticky = hasStickyBar(location);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  // Don't show floating button on mobile when sticky bar is present
  if (hasSticky) {
    return (
      <a
        href="/book"
        aria-label="Book a consultation"
        className="hidden md:inline-flex fixed bottom-6 right-6 z-50 items-center rounded-full bg-primary text-white px-5 py-3 text-sm font-medium shadow-md hover:bg-primary/90 transition-colors"
      >
        Book
      </a>
    );
  }

  if (pain) {
    return (
      <a
        href={PAIN_CONTACT_HREF}
        aria-label="Enquire about a consultation"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full bg-primary text-white px-5 py-3 text-sm font-medium shadow-md hover:bg-primary/90 transition-colors"
      >
        Enquire
      </a>
    );
  }

  return (
    <a
      href="/book"
      aria-label="Book a consultation"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full bg-primary text-white px-5 py-3 text-sm font-medium shadow-md hover:bg-primary/90 transition-colors"
    >
      Book
    </a>
  );
}
