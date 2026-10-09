import { useState, useEffect } from "react";
import { useLocation } from "wouter";
import { isPainRoute, PAIN_CONTACT_HREF } from "@/lib/brand";

export default function FloatingButtons() {
  const [visible, setVisible] = useState(false);
  const [location] = useLocation();
  const pain = isPainRoute(location);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  if (!visible) return null;

  if (pain) {
    return (
      <a
        href={PAIN_CONTACT_HREF}
        aria-label="Enquire about a consultation"
        className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full bg-secondary text-secondary-foreground px-5 py-3 text-sm font-medium shadow-md hover:bg-secondary/90 transition-colors"
      >
        Enquire
      </a>
    );
  }

  return (
    <a
      href="/book"
      aria-label="Book a consultation"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center rounded-full bg-secondary text-primary px-5 py-3 text-sm font-medium shadow-md hover:bg-secondary/90 transition-colors"
    >
      Book
    </a>
  );
}
