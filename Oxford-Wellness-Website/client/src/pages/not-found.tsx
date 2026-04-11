import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Phone, Calendar, ArrowRight, Search } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";

const quickLinks = [
  { label: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
  { label: "Lip Fillers", href: "/treatments/lip-fillers-oxford" },
  { label: "Profhilo", href: "/treatments/profhilo-oxford" },
  { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
  { label: "Medical Weight Loss", href: "/treatments/medical-weight-loss-oxford" },
  { label: "Menopause Clinic", href: "/menopause-clinic-oxford" },
  { label: "Pricing", href: "/pricing" },
  { label: "Blog & Guides", href: "/blog" },
];

export default function NotFound() {
  useSEO({
    title: "Page Not Found | The Oxford Wellness Doctor",
    description: "The page you're looking for doesn't exist. Find what you need at The Oxford Wellness Doctor - medical aesthetics and women's wellness in Oxford.",
  });

  return (
    <div className="min-h-screen pt-24 bg-muted/20">
      {/* Hero */}
      <section className="py-20 bg-white border-b border-border">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">404 Error</p>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6">Page Not Found</h1>
          <p className="text-muted-foreground font-light text-lg leading-relaxed mb-8">
            We can't find the page you were looking for. It may have been moved, renamed, or may never have existed. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              className="bg-primary text-white rounded-none px-8 py-6 uppercase tracking-widest hover:bg-primary/90"
              onClick={() => window.location.href = "/"}
              data-testid="btn-go-home"
            >
              <Home size={16} className="mr-2" />
              Go to Homepage
            </Button>
            <Button
              variant="outline"
              className="rounded-none px-8 py-6 uppercase tracking-widest border-primary text-primary hover:bg-primary hover:text-white"
              onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
              data-testid="btn-book-404"
            >
              <Calendar size={16} className="mr-2" />
              Book Consultation
            </Button>
          </div>
        </div>
      </section>

      {/* Popular Pages */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Browse Our Services</p>
            <h2 className="font-serif text-2xl text-primary">Popular Pages</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-404-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                className="flex items-center justify-between bg-white border border-border hover:border-primary p-4 text-sm text-muted-foreground hover:text-primary transition-all group"
              >
                <span>{link.label}</span>
                <ArrowRight size={12} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact strip */}
      <section className="py-12 bg-primary text-primary-foreground text-center">
        <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">Need Help?</p>
        <h2 className="font-serif text-2xl mb-6">Get in Touch Directly</h2>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a
            href="tel:+4407739309380"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
            data-testid="link-404-phone"
          >
            <Phone size={16} />
            <span>07739 309380</span>
          </a>
          <Link
            href="/contact"
            className="flex items-center gap-2 text-primary-foreground/80 hover:text-white transition-colors"
            data-testid="link-404-contact"
          >
            <ArrowRight size={16} />
            <span>Contact Us</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
