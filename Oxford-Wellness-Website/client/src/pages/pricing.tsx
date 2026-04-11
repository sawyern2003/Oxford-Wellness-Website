import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import FadeIn from "@/components/animations/FadeIn";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const pricingCategories = [
  {
    category: "Anti-Wrinkle Injections",
    items: [
      { name: "1 area (e.g. forehead lines)", price: "£190" },
      { name: "2 areas (e.g. forehead + frown lines)", price: "£250" },
      { name: "3 areas (e.g. forehead, frown + crow's feet)", price: "£300" },
      { name: "Dimpled chin / peau d'orange", price: "£150" },
      { name: "Bunny lines (add-on to another treatment)", price: "£50" },
      { name: "Dimpled chin (add-on)", price: "£50" },
      { name: "Downturned mouth (add-on)", price: "£50" },
    ],
    link: { label: "View anti-wrinkle treatment details", href: "/treatments/anti-wrinkle-injections-oxford" },
  },
  {
    category: "Jaw Slimming",
    items: [
      { name: "Jaw slimming / masseter reduction", price: "£250" },
    ],
    link: { label: "View jaw slimming details", href: "/treatments/jaw-slimming-oxford" },
  },
  {
    category: "Excessive Sweating (Hyperhidrosis)",
    items: [
      { name: "Hyperhidrosis treatment - armpits/underarms", price: "£500" },
    ],
    link: { label: "View excessive sweating treatment details", href: "/treatments/excessive-sweating-treatment-oxford" },
  },
  {
    category: "Dermal Fillers",
    items: [
      { name: "Dermal filler - 1.0ml", price: "£300" },
    ],
    link: { label: "View dermal fillers details", href: "/treatments/dermal-fillers-oxford" },
  },
  {
    category: "Lip Fillers",
    items: [
      { name: "Lip filler - 0.7ml", price: "£200" },
    ],
    link: { label: "View lip fillers details", href: "/treatments/lip-fillers-oxford" },
  },
  {
    category: "Filler Dissolving",
    items: [
      { name: "Filler dissolving (hyaluronidase)", price: "£200" },
    ],
    link: { label: "View filler dissolving details", href: "/treatments/filler-dissolving-oxford" },
  },
  {
    category: "Profhilo & Skin Boosters",
    items: [
      { name: "Hyaluronic acid skinbooster (Profhilo)", price: "£250" },
      { name: "Polynucleotide skin boosters & bioremodellers", price: "£350" },
    ],
    link: { label: "View skin booster details", href: "/treatments/skin-boosters-oxford" },
  },
  {
    category: "Chemical Peels",
    items: [
      { name: "Obagi Blue Peel Radiance", price: "£100" },
      { name: "Perfect Peel", price: "£350" },
    ],
    link: { label: "View chemical peels details", href: "/treatments/chemical-peels-oxford" },
  },
  {
    category: "Morpheus8 - Skin Tightening & Remodelling",
    items: [
      { name: "Morpheus8 - tummy", price: "£300" },
      { name: "Morpheus8 - eyes & around the mouth", price: "£400" },
      { name: "Morpheus8 - face, neck & décolletage", price: "£650" },
      { name: "Morpheus8 - stretch marks / large area", price: "£800" },
      { name: "Morpheus8 resurfacing (add-on)", price: "£300" },
    ],
    link: { label: "View Morpheus8 details", href: "/treatments/morpheus8-oxford" },
  },
  {
    category: "Lumecca IPL - Intense Pulsed Light",
    items: [
      { name: "Lumecca IPL photofacial (hands)", price: "£80" },
      { name: "Lumecca treatment - small area", price: "£150" },
      { name: "Lumecca treatment - medium area", price: "£223" },
    ],
    link: { label: "View Lumecca IPL details", href: "/treatments/lumecca-ipl-oxford" },
  },
  {
    category: "Forma Facelift",
    items: [
      { name: "Forma facelift - per session", price: "£150" },
    ],
    link: { label: "View Forma Facelift details", href: "/treatments/forma-facelift-oxford" },
  },
  {
    category: "Forma Plus - Body Contouring",
    items: [
      { name: "Forma Plus body - per session", price: "£500" },
    ],
    link: { label: "View Forma Plus details", href: "/treatments/forma-plus-body-contouring-oxford" },
  },
  {
    category: "InMode FX - Body Skin Tightening",
    items: [
      { name: "InMode FX skin tightening & cellulite treatment", price: "£150" },
    ],
    link: { label: "View InMode FX details", href: "/treatments/inmode-fx-skin-tightening-oxford" },
  },
  {
    category: "Vitamin B12",
    items: [
      { name: "Vitamin B12 injection", price: "£35" },
    ],
    link: { label: "View Vitamin B12 details", href: "/treatments/vitamin-b12-injection-oxford" },
  },
  {
    category: "Medical Form Completion",
    items: [
      { name: "Medical form completion appointment (30 min)", price: "£50" },
    ],
    link: { label: "View medical form completion details", href: "/treatments/medical-form-completion-oxford" },
  },
  {
    category: "Medical Weight Loss",
    items: [
      { name: "Medical weight loss consultation", price: "£50" },
      { name: "Wegovy (semaglutide) - monthly, dose-dependent", price: "Price at consultation" },
      { name: "Mounjaro (tirzepatide) - monthly, dose-dependent", price: "Price at consultation" },
    ],
    link: { label: "View medical weight loss details", href: "/treatments/medical-weight-loss-oxford" },
  },
  {
    category: "Menopause & Women's Health",
    items: [
      { name: "Menopause consultation & HRT review", price: "Price on enquiry" },
    ],
    link: { label: "View menopause clinic details", href: "/menopause-clinic-oxford" },
  },
];

export default function Pricing() {
  useBreadcrumbSchema([{ name: "Pricing", path: "/pricing" }]);
  useSEO({
    title: "Treatment Prices Oxford | The Oxford Wellness Doctor | Transparent Pricing",
    description: "Transparent pricing for medical aesthetics in Oxford. Anti-wrinkle injections from £190, dermal filler £300, Profhilo £250, Morpheus8 from £300. View all treatment costs.",
    canonical: "https://www.theoxfordwellnessdoctor.com/pricing",
  });

  return (
    <div className="min-h-screen bg-background">
      {/* Hero */}
      <div className="bg-primary text-primary-foreground py-20 px-6">
        <FadeIn>
          <div className="max-w-4xl mx-auto text-center">
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-4">
              No Hidden Costs
            </p>
            <h1 className="font-serif text-3xl md:text-5xl mb-6">
              Treatment Pricing - Transparent, Fair, No Surprises
            </h1>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto leading-relaxed">
              At The Oxford Wellness Doctor, we believe transparent pricing is part of respectful patient care. All fees are listed below. Consultation fees are redeemable against treatment where applicable.
            </p>
          </div>
        </FadeIn>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-5xl mx-auto px-6 py-4">
        <nav className="text-xs text-muted-foreground flex gap-2 items-center" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <span className="text-primary">Pricing</span>
        </nav>
      </div>

      {/* Pricing Tables */}
      <div className="max-w-5xl mx-auto px-6 pb-24">
        <div className="space-y-12">
          {pricingCategories.map((cat) => (
            <FadeIn key={cat.category}>
              <section>
                <h2 className="font-serif text-xl text-primary mb-4 pb-2 border-b border-border">
                  {cat.category}
                </h2>
                <div className="divide-y divide-border border border-border">
                  {cat.items.map((item) => (
                    <div
                      key={item.name}
                      className="flex justify-between items-center px-5 py-3.5 hover:bg-muted/30 transition-colors"
                      data-testid={`price-${item.name.toLowerCase().replace(/\s+/g, "-").replace(/[^a-z0-9-]/g, "")}`}
                    >
                      <span className="text-sm text-foreground">{item.name}</span>
                      <span className="text-sm font-medium text-primary ml-4 whitespace-nowrap italic">
                        {item.price}
                      </span>
                    </div>
                  ))}
                </div>
                {cat.link && (
                  <div className="mt-3">
                    <Link
                      href={cat.link.href}
                      className="inline-flex items-center gap-1.5 text-xs text-muted-foreground hover:text-primary transition-colors uppercase tracking-wider"
                    >
                      {cat.link.label} <ArrowRight size={11} />
                    </Link>
                  </div>
                )}
              </section>
            </FadeIn>
          ))}
        </div>

        {/* Payment & Notes */}
        <FadeIn>
          <div className="mt-16 border border-border p-8 bg-muted/20">
            <h2 className="font-serif text-xl text-primary mb-4">Payment & Booking Information</h2>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>Payment is taken at the time of treatment. We accept all major credit and debit cards.</li>
              <li>A £50 consultation fee applies for new patients - this is fully redeemable against the cost of your first treatment.</li>
              <li>Prices shown are guide prices and may vary based on the individual treatment plan agreed at consultation.</li>
              <li>We do not offer finance or payment plans at this time.</li>
              <li>Cancellations with less than 24 hours' notice may incur a cancellation fee.</li>
            </ul>
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Button
                data-testid="pricing-book-btn"
                className="bg-primary text-primary-foreground hover:bg-secondary hover:text-primary rounded-none px-8 uppercase tracking-widest text-sm"
                onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
              >
                Book a Consultation
              </Button>
              <Link href="/contact">
                <Button
                  data-testid="pricing-contact-btn"
                  variant="outline"
                  className="border-primary text-primary hover:bg-primary hover:text-primary-foreground rounded-none px-8 uppercase tracking-widest text-sm"
                >
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
