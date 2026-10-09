import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { isPainRoute, PAIN_BOOK_HREF, PAIN_CONTACT_HREF, SHOW_PAIN_DOCTOR } from "@/lib/brand";
import HowCanWeHelp from "@/components/layout/HowCanWeHelp";
import { helpPathHrefs } from "@/data/helpPaths";

const wellnessNavLinks = [
  { name: "About", href: "/about" },
  { name: "Journal", href: "/blog" },
  ...(SHOW_PAIN_DOCTOR ? [{ name: "Pain Doctor", href: "/oxford-pain-doctor" }] : []),
];

const painNavLinks = [
  { name: "About", href: "/oxford-pain-doctor/about" },
  { name: "How We Help", href: "/oxford-pain-doctor/how-we-help" },
  { name: "Library", href: "/oxford-pain-doctor/library" },
  { name: "Contact", href: PAIN_CONTACT_HREF },
  { name: "Wellness", href: "/" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [helpOpen, setHelpOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const headerRef = useRef<HTMLElement>(null);
  const helpCloseTimer = useRef<number | null>(null);
  const pain = isPainRoute(location);
  const navLinks = pain ? painNavLinks : wellnessNavLinks;
  const helpActive =
    !pain &&
    (location.startsWith("/programmes") ||
      helpPathHrefs.some((href) => location === href || location.startsWith(`${href}/`)));
  const homeHref = pain ? "/oxford-pain-doctor" : "/";
  const brand = pain ? "The Oxford Pain Doctor" : "The Oxford Wellness Doctor";

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setHelpOpen(false);
  }, [location]);

  const clearHelpClose = () => {
    if (helpCloseTimer.current !== null) {
      window.clearTimeout(helpCloseTimer.current);
      helpCloseTimer.current = null;
    }
  };

  const openHelp = () => {
    clearHelpClose();
    setHelpOpen(true);
  };

  const scheduleHelpClose = () => {
    clearHelpClose();
    helpCloseTimer.current = window.setTimeout(() => setHelpOpen(false), 160);
  };

  useEffect(() => () => clearHelpClose(), []);

  useEffect(() => {
    if (!helpOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setHelpOpen(false);
    };
    const onPointer = (event: MouseEvent) => {
      if (!headerRef.current?.contains(event.target as Node)) setHelpOpen(false);
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
    };
  }, [helpOpen]);

  const isActive = (href: string) => {
    if (href === "/" || href === "/oxford-pain-doctor") return location === href;
    return location.startsWith(href);
  };

  return (
    <header
      ref={headerRef}
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300",
        scrolled || helpOpen ? "bg-white/95 backdrop-blur-md border-b border-border/80 py-3" : "bg-white/80 py-4"
      )}
    >
      <div className="container-page flex items-center justify-between gap-4">
        <Link
          href={homeHref}
          className="font-sans font-semibold text-[15px] md:text-base text-primary tracking-tight flex-shrink-0"
        >
          {brand}
        </Link>

        <nav className="hidden lg:flex items-center gap-6 [&>button]:flex-shrink-0">
          {navLinks
            .filter((link) => !pain && link.href === "/about")
            .map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-sm whitespace-nowrap transition-colors",
                  isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                )}
              >
                {link.name}
              </Link>
            ))}
          {!pain ? (
            <button
              type="button"
              aria-expanded={helpOpen}
              aria-controls="how-can-we-help"
              onClick={() => setHelpOpen((open) => !open)}
              onMouseEnter={openHelp}
              onMouseLeave={scheduleHelpClose}
              className={cn(
                "text-sm whitespace-nowrap transition-colors",
                helpOpen || helpActive ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
              )}
            >
              How can we help?
            </button>
          ) : null}
          {navLinks.filter((link) => pain || link.href !== "/about").map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm whitespace-nowrap transition-colors",
                isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
              )}
            >
              {link.name}
            </Link>
          ))}
          {pain ? (
            <Link href={PAIN_BOOK_HREF}>
              <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-5 h-9 text-sm font-medium">
                Book
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/ai-consultation">
                <Button
                  variant="outline"
                  className="ml-2 rounded-full px-5 h-9 text-sm font-medium border-primary/20 text-primary hover:bg-primary/5"
                >
                  Pre Consult
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-5 h-9 text-sm font-medium"
                >
                  Book
                </Button>
              </Link>
            </>
          )}
        </nav>

        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {helpOpen && !pain ? (
        <div
          id="how-can-we-help"
          className="hidden lg:block border-t border-border/80"
          onMouseEnter={openHelp}
          onMouseLeave={scheduleHelpClose}
        >
          <div className="container-page py-8">
            <HowCanWeHelp row onNavigate={() => setHelpOpen(false)} />
          </div>
        </div>
      ) : null}

      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-border px-5 py-4 flex flex-col gap-1 max-h-[calc(100vh-4.5rem)] overflow-y-auto">
          {!pain ? (
            <div className="pb-2 mb-1 border-b border-border/50">
              <p className="py-3 text-base text-primary font-medium">How can we help?</p>
              <HowCanWeHelp onNavigate={() => setIsOpen(false)} />
            </div>
          ) : null}
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "py-3 text-base border-b border-border/50",
                isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {link.name}
            </Link>
          ))}
          {pain ? (
            <Link href={PAIN_BOOK_HREF}>
              <Button className="w-full mt-4 rounded-full bg-secondary text-secondary-foreground text-sm font-medium">
                Book a consultation
              </Button>
            </Link>
          ) : (
            <>
              <Link href="/ai-consultation">
                <Button
                  variant="outline"
                  className="w-full mt-4 rounded-full text-sm font-medium border-primary/20 text-primary"
                  onClick={() => setIsOpen(false)}
                >
                  Pre Consult
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  className="w-full mt-2 rounded-full bg-secondary text-primary text-sm font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Book consultation
                </Button>
              </Link>
            </>
          )}
        </div>
      )}
    </header>
  );
}
