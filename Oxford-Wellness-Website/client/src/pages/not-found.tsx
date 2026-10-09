import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Home, Phone, Calendar, ArrowRight } from "lucide-react";
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
    <div className="min-h-screen pt-28 bg-white">
      <section className="py-16 md:py-20">
        <div className="container mx-auto px-6 text-center max-w-2xl">
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">404</p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-6">Page not found</h1>
          <p className="text-muted-foreground text-[15px] leading-relaxed mb-8">
            We can&apos;t find the page you were looking for. It may have been moved or renamed. Let us help you find what you need.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium"
              onClick={() => (window.location.href = "/")}
              data-testid="btn-go-home"
            >
              <Home size={16} className="mr-2" />
              Go to homepage
            </Button>
            <Button
              variant="outline"
              className="rounded-full px-7 h-11 text-sm border-border bg-white"
              onClick={() => window.location.assign("/book")}
              data-testid="btn-book-404"
            >
              <Calendar size={16} className="mr-2" />
              Book consultation
            </Button>
          </div>
        </div>
      </section>

      <section className="py-16 bg-muted/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="text-center mb-10">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-3">Browse</p>
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight">Popular pages</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {quickLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                data-testid={`link-404-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
                className="flex items-center justify-between bg-white rounded-2xl p-4 text-sm text-muted-foreground hover:text-secondary transition-colors group"
              >
                <span>{link.label}</span>
                <ArrowRight size={12} className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="py-12 bg-primary text-primary-foreground text-center">
        <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary-foreground/60 mb-4">Need help?</p>
        <h2 className="font-sans font-semibold text-2xl tracking-tight mb-6">Get in touch directly</h2>
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
            <span>Contact us</span>
          </Link>
        </div>
      </section>
    </div>
  );
}
