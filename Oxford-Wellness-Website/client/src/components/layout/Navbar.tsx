import { Link, useLocation } from "wouter";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState, useEffect } from "react";

type NavLink = {
  name: string;
  href: string;
  dropdown?: { name: string; href: string }[];
};

const mainLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Women's Health",
    href: "/womens-health-oxford",
    dropdown: [
      { name: "Women's Health Hub", href: "/womens-health-oxford" },
      { name: "Menopause Clinic", href: "/menopause-clinic-oxford" },
      { name: "Perimenopause Support", href: "/perimenopause-oxford" },
      { name: "Post-Birth Recovery", href: "/postpartum-recovery-oxford" },
      { name: "Intimate Health", href: "/sexual-wellness-oxford" },
      { name: "Neauvia N Rose Injectable", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
      { name: "Votiva Forma V", href: "/treatments/votiva-forma-v-oxford" },
    ],
  },
  {
    name: "Aesthetic Treatments",
    href: "/treatments",
    dropdown: [
      { name: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
      { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
      { name: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
      { name: "Profhilo", href: "/treatments/profhilo-oxford" },
      { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
      { name: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
      { name: "Forma Facelift", href: "/treatments/forma-facelift-oxford" },
      { name: "Forma Plus Body", href: "/treatments/forma-plus-body-contouring-oxford" },
      { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
      { name: "Lumecca IPL", href: "/treatments/lumecca-ipl-oxford" },
      { name: "Excessive Sweating", href: "/treatments/excessive-sweating-treatment-oxford" },
      { name: "Filler Dissolving", href: "/treatments/filler-dissolving-oxford" },
      { name: "Jaw Slimming", href: "/treatments/jaw-slimming-teeth-grinding-oxford" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Pre-Consult", href: "/ai-consultation" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

const mobileLinks: NavLink[] = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  {
    name: "Women's Health",
    href: "/womens-health-oxford",
    dropdown: [
      { name: "Women's Health Hub", href: "/womens-health-oxford" },
      { name: "Menopause Clinic", href: "/menopause-clinic-oxford" },
      { name: "Perimenopause Support", href: "/perimenopause-oxford" },
      { name: "Post-Birth Recovery", href: "/postpartum-recovery-oxford" },
      { name: "Intimate Health", href: "/sexual-wellness-oxford" },
      { name: "Neauvia N Rose Injectable", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
      { name: "Votiva Forma V", href: "/treatments/votiva-forma-v-oxford" },
    ],
  },
  {
    name: "Aesthetic Treatments",
    href: "/treatments",
    dropdown: [
      { name: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
      { name: "Dermal Fillers", href: "/treatments/dermal-fillers-oxford" },
      { name: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
      { name: "Profhilo", href: "/treatments/profhilo-oxford" },
      { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
      { name: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
      { name: "Forma Facelift", href: "/treatments/forma-facelift-oxford" },
      { name: "Forma Plus Body", href: "/treatments/forma-plus-body-contouring-oxford" },
      { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
      { name: "Lumecca IPL", href: "/treatments/lumecca-ipl-oxford" },
      { name: "Excessive Sweating", href: "/treatments/excessive-sweating-treatment-oxford" },
      { name: "Filler Dissolving", href: "/treatments/filler-dissolving-oxford" },
      { name: "Jaw Slimming", href: "/treatments/jaw-slimming-teeth-grinding-oxford" },
    ],
  },
  { name: "Pricing", href: "/pricing" },
  { name: "Blog", href: "/blog" },
  { name: "Pre-Consult", href: "/ai-consultation" },
  { name: "Shop", href: "/shop" },
  { name: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const isActive = (href: string) => {
    if (href === "/") return location === "/";
    return location.startsWith(href);
  };

  const isDropdownActive = (link: NavLink) => {
    if (link.dropdown) {
      return link.dropdown.some((item) => isActive(item.href));
    }
    return false;
  };

  return (
    <header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 border-b border-transparent",
        scrolled
          ? "bg-background/95 backdrop-blur-md shadow-sm border-border py-3"
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <Link
          href="/"
          className="font-serif text-xl md:text-2xl font-medium tracking-tight text-secondary flex-shrink-0"
        >
          The Oxford Wellness Doctor
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center space-x-6">
          {mainLinks.map((link) => (
            link.dropdown ? (
              <div
                key={link.name}
                className="relative group"
                onMouseEnter={() => setOpenDropdown(link.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                <button
                  data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                  className={cn(
                    "text-xs uppercase tracking-widest hover:text-secondary transition-colors whitespace-nowrap flex items-center gap-1 py-2",
                    isDropdownActive(link) || isActive(link.href)
                      ? "text-secondary font-medium border-b border-secondary"
                      : "text-muted-foreground"
                  )}
                >
                  {link.name}
                  <ChevronDown size={12} className={cn("transition-transform", openDropdown === link.name && "rotate-180")} />
                </button>
                {openDropdown === link.name && (
                  <div className="absolute top-full left-0 pt-2 z-50">
                    <div className="w-56 bg-background border border-border shadow-lg">
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={cn(
                            "block px-4 py-3 text-xs uppercase tracking-wider hover:bg-secondary/10 hover:text-secondary transition-colors border-b border-border/30 last:border-b-0",
                            isActive(item.href) ? "text-secondary bg-secondary/5" : "text-muted-foreground"
                          )}
                        >
                          {item.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "text-xs uppercase tracking-widest hover:text-secondary transition-colors whitespace-nowrap",
                  isActive(link.href)
                    ? "text-secondary font-medium border-b border-secondary"
                    : "text-muted-foreground"
                )}
              >
                {link.name}
              </Link>
            )
          ))}
          <Button
            data-testid="nav-book-now"
            className="ml-2 bg-secondary text-primary hover:bg-secondary/90 rounded-none px-5 uppercase tracking-widest text-xs"
            onClick={() =>
              window.open(
                "https://www.glowday.com/clinic/the-oxford-wellness-doctor",
                "_blank"
              )
            }
          >
            Book Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          data-testid="nav-mobile-toggle"
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-background border-b border-border shadow-lg p-6 flex flex-col space-y-3 animate-in slide-in-from-top-5">
          {mobileLinks.map((link) => (
            link.dropdown ? (
              <div key={link.name} className="border-b border-border/30 pb-3">
                <div
                  className={cn(
                    "text-lg font-serif block py-2 flex items-center justify-between cursor-pointer",
                    isDropdownActive(link) || isActive(link.href) ? "text-secondary" : "text-muted-foreground"
                  )}
                  onClick={() => setOpenDropdown(openDropdown === link.name ? null : link.name)}
                >
                  {link.name}
                  <ChevronDown size={16} className={cn("transition-transform", openDropdown === link.name && "rotate-180")} />
                </div>
                {openDropdown === link.name && (
                  <div className="pl-4 pt-2 space-y-2">
                    {link.dropdown.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={cn(
                          "block py-2 text-sm font-light",
                          isActive(item.href) ? "text-secondary" : "text-muted-foreground"
                        )}
                        onClick={() => {
                          setIsOpen(false);
                          setOpenDropdown(null);
                        }}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`nav-mobile-${link.name.toLowerCase().replace(/\s+/g, "-")}`}
                className={cn(
                  "text-lg font-serif block py-2 border-b border-border/30",
                  isActive(link.href) ? "text-secondary" : "text-muted-foreground"
                )}
                onClick={() => setIsOpen(false)}
              >
                {link.name}
              </Link>
            )
          ))}
          <Button
            className="w-full mt-4 rounded-none bg-secondary text-primary uppercase tracking-widest"
            onClick={() => {
              setIsOpen(false);
              window.open(
                "https://www.glowday.com/clinic/the-oxford-wellness-doctor",
                "_blank"
              );
            }}
          >
            Book Now
          </Button>
        </div>
      )}
    </header>
  );
}
