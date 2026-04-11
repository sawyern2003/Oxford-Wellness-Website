import { Link } from "wouter";
import { Facebook, Instagram, Shield, Award, CheckCircle } from "lucide-react";
import footerLogo from "@assets/oxford-wellness-doctor-branding.webp";

const trustBadges = [
  {
    icon: Shield,
    label: "GMC Registered",
    sub: "No. 4727817",
  },
  {
    icon: CheckCircle,
    label: "Fully Insured",
    sub: "Medical Indemnity",
  },
  {
    icon: Award,
    label: "20+ Years",
    sub: "Clinical Experience",
  },
];

export default function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      {/* Trust badges strip */}
      <div className="border-b border-primary-foreground/10 py-6">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {trustBadges.map((badge) => {
              const Icon = badge.icon;
              return (
                <div
                  key={badge.label}
                  className="flex items-center gap-3 border border-primary-foreground/10 px-4 py-3"
                  data-testid={`trust-badge-${badge.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <Icon size={20} className="text-secondary flex-shrink-0" />
                  <div>
                    <p className="text-sm font-semibold leading-tight">{badge.label}</p>
                    <p className="text-xs text-primary-foreground/60 leading-tight mt-0.5">{badge.sub}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main footer grid */}
      <div className="py-16">
        <div className="container mx-auto px-6 grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1 flex items-start">
            <img src={footerLogo} alt="The Oxford Wellness Doctor - Dr. Inga Taganova, medical aesthetics and women's wellness clinic, Oxford" className="w-48 rounded" loading="lazy" width="192" height="108" />
          </div>

          {/* Clinic Links */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Clinic</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              <li><Link href="/" className="hover:text-secondary transition-colors">Home</Link></li>
              <li><Link href="/about" className="hover:text-secondary transition-colors">About Dr. Taganova</Link></li>
              <li><Link href="/menopause-clinic-oxford" className="hover:text-secondary transition-colors">Menopause Clinic</Link></li>
              <li><Link href="/pricing" className="hover:text-secondary transition-colors">Pricing</Link></li>
              <li><Link href="/blog" className="hover:text-secondary transition-colors">Blog & Guides</Link></li>
              <li><Link href="/ai-consultation" className="hover:text-secondary transition-colors">Pre-Consultation</Link></li>
              <li><Link href="/shop" className="hover:text-secondary transition-colors">Shop</Link></li>
              <li><Link href="/contact" className="hover:text-secondary transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Treatments */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Treatments</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              <li><Link href="/treatments/anti-wrinkle-injections-oxford" className="hover:text-secondary transition-colors">Anti-Wrinkle</Link></li>
              <li><Link href="/treatments/dermal-fillers-oxford" className="hover:text-secondary transition-colors">Dermal Fillers</Link></li>
              <li><Link href="/treatments/lip-fillers-oxford" className="hover:text-secondary transition-colors">Lip Fillers</Link></li>
              <li><Link href="/treatments/profhilo-oxford" className="hover:text-secondary transition-colors">Profhilo</Link></li>
              <li><Link href="/treatments/morpheus8-oxford" className="hover:text-secondary transition-colors">Morpheus8</Link></li>
              <li><Link href="/treatments/medical-weight-loss-oxford" className="hover:text-secondary transition-colors">Medical Weight Loss</Link></li>
              <li><Link href="/treatments/chemical-peels-oxford" className="hover:text-secondary transition-colors">Chemical Peels</Link></li>
              <li><Link href="/treatments/skin-boosters-oxford" className="hover:text-secondary transition-colors">Skin Boosters</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Contact</h4>
            <address className="not-italic space-y-2.5 text-sm text-primary-foreground/80">
              <p>3 Woodstock Rd</p>
              <p>Oxford OX2 6HA</p>
              <a href="tel:+4407739309380" className="mt-4 block hover:text-secondary transition-colors">07739 309380</a>
              <a href="mailto:info@theoxfordwellnessdoctor.com" className="hover:text-secondary transition-colors text-xs">info@theoxfordwellnessdoctor.com</a>
              <a
                href="https://wa.me/447739309380?text=Hello%2C%20I%27d%20like%20to%20enquire%20about%20a%20consultation."
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-secondary transition-colors text-xs flex items-center gap-1.5 mt-1"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </address>
          </div>

          {/* Hours */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Hours</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/80">
              <li className="flex justify-between gap-3"><span>Friday</span> <span>4pm – 8pm</span></li>
              <li className="flex justify-between gap-3"><span>Saturday</span> <span>9am – 1pm</span></li>
              <li className="flex justify-between gap-3"><span>Sun–Thu</span> <span>Closed</span></li>
            </ul>
            <div className="flex space-x-4 mt-6">
              <a href="https://www.instagram.com/theoxfordwellnessdoctor/?hl=en" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-secondary transition-colors"><Instagram size={20} /></a>
              <a href="https://www.facebook.com/theoxfordwellnessdoctor/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="hover:text-secondary transition-colors"><Facebook size={20} /></a>
            </div>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-serif text-base font-semibold mb-5">Legal</h4>
            <ul className="space-y-2.5 text-sm text-primary-foreground/80">
              <li><Link href="/privacy-policy" className="hover:text-secondary transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms-and-conditions" className="hover:text-secondary transition-colors">Terms & Conditions</Link></li>
              <li><Link href="/complaints-procedure" className="hover:text-secondary transition-colors">Complaints Procedure</Link></li>
              <li><Link href="/cookie-policy" className="hover:text-secondary transition-colors">Cookie Policy</Link></li>
              <li className="pt-2 text-primary-foreground/60 text-xs">GMC No. 4727817</li>
            </ul>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 pb-8 border-t border-primary-foreground/10 pt-8 text-center text-sm text-primary-foreground/60">
        <p>&copy; {new Date().getFullYear()} The Oxford Wellness Doctor. All rights reserved. Dr. Inga Taganova, GMC No. 4727817.</p>
      </div>
    </footer>
  );
}
