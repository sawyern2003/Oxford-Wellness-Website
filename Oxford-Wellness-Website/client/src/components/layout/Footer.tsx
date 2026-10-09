import { Link, useLocation } from "wouter";
import { Facebook, Instagram } from "lucide-react";
import { isPainRoute, PAIN_CONTACT_HREF, SHOW_PAIN_DOCTOR } from "@/lib/brand";

export default function Footer() {
  const [location] = useLocation();
  const pain = isPainRoute(location);

  if (pain) {
    return (
      <footer className="bg-white border-t border-border">
        <div className="container-page py-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
            <div className="col-span-2 md:col-span-1">
              <p className="font-sans font-semibold text-primary mb-3">
                The Oxford Pain Doctor
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed max-w-[16rem]">
                Consultant-led, evidence-led chronic pain care with Dr Richard Sawyer.
              </p>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Care</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/oxford-pain-doctor/how-we-help" className="hover:text-secondary">How We Help</Link></li>
                <li><Link href="/oxford-pain-doctor/library" className="hover:text-secondary">Pain Library</Link></li>
                <li><Link href="/oxford-pain-doctor/about" className="hover:text-secondary">About Dr Richard</Link></li>
                <li><Link href={PAIN_CONTACT_HREF} className="hover:text-secondary">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Also here</p>
              <ul className="space-y-2 text-sm text-foreground/80">
                <li><Link href="/" className="hover:text-secondary">The Oxford Wellness Doctor</Link></li>
                <li><Link href="/about" className="hover:text-secondary">About Dr Inga</Link></li>
                <li><Link href="/privacy-policy" className="hover:text-secondary">Privacy</Link></li>
              </ul>
            </div>
            <div>
              <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Visit</p>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Belsyre Court<br />
                57 Woodstock Rd<br />
                Oxford OX2 6HJ
              </p>
              <a href="tel:+4407739309380" className="block text-sm text-foreground/80 mt-3 hover:text-secondary">
                07739 309380
              </a>
            </div>
          </div>
          <div className="border-t border-border pt-6 space-y-2">
            <p className="text-xs text-muted-foreground">
              © {new Date().getFullYear()} The Oxford Pain Doctor. Dr Richard Sawyer, GMC No. 03640384. Part of The Oxford Wellness Doctor.
            </p>
            <p className="text-xs text-muted-foreground">Website Designed by Nicholas Sawyer</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-white border-t border-border">
      <div className="container-page py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-10 mb-12">
          <div className="col-span-2 md:col-span-1">
            <p className="font-sans font-semibold text-primary mb-3">
              The Oxford Wellness Doctor
            </p>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-[16rem]">
              Private midlife care with Dr Inga Taganova – skin, body confidence and intimate wellness in Oxford.
            </p>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Care</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><Link href="/how-we-help" className="hover:text-secondary">How We Help</Link></li>
              <li><Link href="/symptoms-and-treatments" className="hover:text-secondary">Symptoms &amp; Treatment</Link></li>
              <li><Link href="/programme-finder" className="hover:text-secondary">Programme Finder</Link></li>
              <li><Link href="/treatments" className="hover:text-secondary">Treatments</Link></li>
              <li><Link href="/ai-consultation" className="hover:text-secondary">Pre Consult</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Clinic</p>
            <ul className="space-y-2 text-sm text-foreground/80">
              <li><Link href="/about" className="hover:text-secondary">About Dr Inga</Link></li>
              <li><Link href="/blog" className="hover:text-secondary">Journal</Link></li>
              <li><Link href="/contact" className="hover:text-secondary">Contact</Link></li>
              <li><Link href="/privacy-policy" className="hover:text-secondary">Privacy</Link></li>
              {SHOW_PAIN_DOCTOR ? (
                <li><Link href="/oxford-pain-doctor" className="hover:text-secondary">The Oxford Pain Doctor</Link></li>
              ) : null}
            </ul>
          </div>
          <div>
            <p className="text-xs font-medium tracking-wide uppercase text-muted-foreground mb-3">Visit</p>
            <p className="text-sm text-foreground/80 leading-relaxed">
              Belsyre Court<br />
              57 Woodstock Rd<br />
              Oxford OX2 6HJ
            </p>
            <a href="tel:+4407739309380" className="block text-sm text-foreground/80 mt-3 hover:text-secondary">
              07739 309380
            </a>
            <div className="flex gap-4 mt-4 text-muted-foreground">
              <a href="https://www.instagram.com/theoxfordwellnessdoctor/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary"><Instagram size={18} /></a>
              <a href="https://www.facebook.com/theoxfordwellnessdoctor/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary"><Facebook size={18} /></a>
            </div>
          </div>
        </div>
        <div className="border-t border-border pt-6 space-y-2">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} The Oxford Wellness Doctor. Dr Inga Taganova, GMC No. 4727817.{SHOW_PAIN_DOCTOR ? " Dr Richard Sawyer, GMC No. 03640384." : ""}
          </p>
          <p className="text-xs text-muted-foreground">Website Designed by Nicholas Sawyer</p>
        </div>
      </div>
    </footer>
  );
}
