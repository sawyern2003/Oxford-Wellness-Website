import { useEffect } from "react";
import { Phone, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { treatmentWhatsAppMessage, whatsappHref } from "@/lib/whatsapp";
import RelatedTreatments from "./RelatedTreatments";
import doctorPortraitJpg from "@assets/dr-inga-taganova-portrait.jpg";
import doctorPortrait160Avif from "@/assets/optimized/dr-inga-portrait-160.avif";
import doctorPortrait160Webp from "@/assets/optimized/dr-inga-portrait-160.webp";
import doctorPortrait192Avif from "@/assets/optimized/dr-inga-portrait-192.avif";
import doctorPortrait192Webp from "@/assets/optimized/dr-inga-portrait-192.webp";
import doctorPortrait240Avif from "@/assets/optimized/dr-inga-portrait-240.avif";
import doctorPortrait240Webp from "@/assets/optimized/dr-inga-portrait-240.webp";

const doctorPortraitAvifSrcSet = `${doctorPortrait160Avif} 160w, ${doctorPortrait192Avif} 192w, ${doctorPortrait240Avif} 240w`;
const doctorPortraitWebpSrcSet = `${doctorPortrait160Webp} 160w, ${doctorPortrait192Webp} 192w, ${doctorPortrait240Webp} 240w`;
const doctorPortraitSizes = "(min-width: 640px) 96px, 80px";

export interface TreatmentLandingPageData {
  slug: string;
  h1: string;
  title: string;
  metaDescription: string;
  canonical: string;
  
  priceLabel: string;
  priceValue: string;
  
  whoIsFor: {
    heading: string;
    items: string[];
  };
  
  howItWorks: {
    heading: string;
    intro?: string;
    steps: string[];
    sessionsInfo?: string;
  };
  
  downtime: {
    heading: string;
    description: string;
  };
  
  trust: {
    heading: string;
    items: string[];
  };
  
  faqs: {
    q: string;
    a: string;
  }[];
  
  pricing: {
    name: string;
    price: string;
  }[];
  
  consultation?: {
    name: string;
    price: string;
  };
  
  procedureSchema: {
    name: string;
    description: string;
    bodyLocation?: string;
  };
}

interface StickyBarProps {
  slug: string;
  bookingUrl: string;
  whatsappUrl: string;
}

function StickyBar({ slug, bookingUrl, whatsappUrl }: StickyBarProps) {
  return (
    <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-border shadow-lg z-[45] safe-area-pb">
      <div className="px-4 py-3 flex items-center gap-2">
        <a
          href={bookingUrl}
          id="book-cta-sticky"
          className="js-book-cta flex-1"
          data-treatment={slug}
        >
          <Button className="w-full bg-primary text-white hover:bg-primary/90 rounded-full h-10 text-sm font-medium">
            Book consultation
          </Button>
        </a>
        <a
          href="tel:+447739309380"
          id="call-cta-sticky"
          className="js-call-cta"
          data-treatment={slug}
        >
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full flex-shrink-0">
            <Phone size={18} />
          </Button>
        </a>
        <a
          href={whatsappUrl}
          id="whatsapp-cta-sticky"
          className="js-whatsapp-cta"
          data-treatment={slug}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="outline" size="icon" className="h-10 w-10 rounded-full flex-shrink-0">
            <MessageCircle size={18} />
          </Button>
        </a>
      </div>
    </div>
  );
}

export default function TreatmentLandingPage({ data }: { data: TreatmentLandingPageData }) {
  const bookingUrl = `/book?treatment=${data.slug}`;
  const treatmentName = data.procedureSchema.name.replace(/\s+Oxford$/i, "").trim() || data.h1;
  const whatsappUrl = whatsappHref(treatmentWhatsAppMessage(treatmentName));

  useSEO({
    title: data.title,
    description: data.metaDescription,
    canonical: data.canonical,
  });

  useEffect(() => {
    const BASE = "https://www.theoxfordwellnessdoctor.com";
    const path = data.canonical.replace(BASE, "");
    const isTreatmentSub = path.startsWith("/treatments/");
    const breadcrumbItems = isTreatmentSub
      ? [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/` },
          { "@type": "ListItem", "position": 2, "name": "Treatments", "item": `${BASE}/treatments` },
          { "@type": "ListItem", "position": 3, "name": data.procedureSchema.name, "item": data.canonical },
        ]
      : [
          { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/` },
          { "@type": "ListItem", "position": 2, "name": data.procedureSchema.name, "item": data.canonical },
        ];

    const schema = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "MedicalProcedure",
          "name": data.procedureSchema.name,
          "description": data.procedureSchema.description,
          "procedureType": "TherapeuticProcedure",
          "status": "ActiveNotRecruiting",
          "bodyLocation": data.procedureSchema.bodyLocation || "Face",
          "preparation": "Initial consultation with Dr. Inga Taganova at The Oxford Wellness Doctor, Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ.",
          "followUp": "Two-week follow-up assessment included. Aftercare instructions provided.",
          "performer": {
            "@type": "Physician",
            "name": "Dr Inga Taganova",
            "identifier": { "@type": "PropertyValue", "name": "GMC Number", "value": "4727817" }
          }
        },
        {
          "@type": "FAQPage",
          "mainEntity": data.faqs.map((faq) => ({
            "@type": "Question",
            "name": faq.q,
            "acceptedAnswer": { "@type": "Answer", "text": faq.a }
          }))
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": breadcrumbItems,
        }
      ]
    };

    let script = document.getElementById("treatment-landing-schema") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "treatment-landing-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    return () => { document.getElementById("treatment-landing-schema")?.remove(); };
  }, [data]);

  return (
    <>
      <div className="pt-28 min-h-screen bg-white pb-24 md:pb-8">
        <section className="bg-white">
          <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
            <div>
              <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-6 leading-snug">
                {data.h1}
              </h1>

              <div className="mb-6">
                <p className="text-3xl font-semibold text-primary mb-2">
                  {data.priceValue}
                </p>
                {data.priceLabel ? (
                  <p className="text-sm text-muted-foreground">
                    {data.priceLabel}
                  </p>
                ) : null}
              </div>

              <p className="text-base text-foreground mb-6 leading-relaxed">
                Doctor-led by Dr Inga Taganova, GP
              </p>

              <div className="flex flex-col sm:flex-row sm:items-end gap-5 mb-8">
                <picture>
                  <source type="image/avif" srcSet={doctorPortraitAvifSrcSet} sizes={doctorPortraitSizes} />
                  <source type="image/webp" srcSet={doctorPortraitWebpSrcSet} sizes={doctorPortraitSizes} />
                  <img
                    src={doctorPortraitJpg}
                    alt="Dr Inga Taganova, GP at The Oxford Wellness Doctor"
                    width={96}
                    height={120}
                    loading="lazy"
                    decoding="async"
                    className="w-20 h-24 sm:w-24 sm:h-[7.5rem] object-cover object-center rounded-2xl flex-shrink-0"
                  />
                </picture>
                <div className="flex flex-col sm:flex-row sm:items-center gap-3 flex-1">
                  <a
                    href={bookingUrl}
                    id="book-cta-hero"
                    className="js-book-cta"
                    data-treatment={data.slug}
                  >
                    <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-medium w-full sm:w-auto">
                      Book consultation
                    </Button>
                  </a>
                  <a
                    href="tel:+447739309380"
                    id="call-cta-hero"
                    className="js-call-cta"
                    data-treatment={data.slug}
                  >
                    <Button variant="outline" className="rounded-full px-6 h-11 text-sm font-medium w-full sm:w-auto">
                      <Phone size={16} className="mr-2" />
                      Call 07739 309380
                    </Button>
                  </a>
                  <a
                    href={whatsappUrl}
                    id="whatsapp-cta-hero"
                    className="js-whatsapp-cta"
                    data-treatment={data.slug}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Button variant="outline" className="rounded-full px-6 h-11 text-sm font-medium w-full sm:w-auto">
                      <MessageCircle size={16} className="mr-2" />
                      WhatsApp
                    </Button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-muted/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
                {data.whoIsFor.heading}
              </h2>
              <ul className="space-y-3">
                {data.whoIsFor.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
                {data.howItWorks.heading}
              </h2>
              {data.howItWorks.intro && (
                <p className="text-base text-muted-foreground leading-relaxed mb-6">
                  {data.howItWorks.intro}
                </p>
              )}
              <ol className="space-y-4 mb-6">
                {data.howItWorks.steps.map((step, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
                    <span className="font-sans font-semibold text-secondary text-sm leading-none mt-1">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {step}
                  </li>
                ))}
              </ol>
              {data.howItWorks.sessionsInfo && (
                <p className="text-base text-muted-foreground leading-relaxed">
                  {data.howItWorks.sessionsInfo}
                </p>
              )}
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-muted/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
                {data.downtime.heading}
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed">
                {data.downtime.description}
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
                {data.trust.heading}
              </h2>
              <ul className="space-y-3">
                {data.trust.items.map((item, i) => (
                  <li key={i} className="flex items-start gap-3 text-base text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
                Pricing
              </h2>
              <div className="border-t border-border">
                {data.consultation && (
                  <div className="flex justify-between items-baseline gap-4 py-3 border-b border-border">
                    <p className="text-[15px] text-foreground">{data.consultation.name}</p>
                    <p className="text-[15px] text-foreground tabular-nums whitespace-nowrap font-medium">
                      {data.consultation.price}
                    </p>
                  </div>
                )}
                {data.pricing.map((item, i) => (
                  <div key={i} className="flex justify-between items-baseline gap-4 py-3 border-b border-border">
                    <p className="text-[15px] text-foreground">{item.name}</p>
                    <p className="text-[15px] text-foreground tabular-nums whitespace-nowrap">
                      {item.price}
                    </p>
                  </div>
                ))}
              </div>
              <p className="text-sm text-foreground/70 mt-4">
                Fees are confirmed before treatment. A consultation is booked separately.
              </p>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">
                Frequently asked questions
              </h2>
              <div className="divide-y divide-border">
                {data.faqs.map((faq, i) => (
                  <div key={i} className="py-6">
                    <h3 className="font-sans font-medium text-base text-foreground leading-snug mb-3">
                      {faq.q}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="py-14 md:py-16 bg-muted/50">
          <div className="container mx-auto px-6 max-w-4xl text-center">
            <div>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
                Ready to book your consultation?
              </h2>
              <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-2xl mx-auto">
                Book online, call, or message us on WhatsApp. Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-center">
                <a
                  href={bookingUrl}
                  id="book-cta-footer"
                  className="js-book-cta"
                  data-treatment={data.slug}
                >
                  <Button className="bg-primary text-white hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-medium w-full sm:w-auto">
                    Book consultation
                  </Button>
                </a>
                <a
                  href="tel:+447739309380"
                  id="call-cta-footer"
                  className="js-call-cta"
                  data-treatment={data.slug}
                >
                  <Button variant="outline" className="rounded-full px-6 h-11 text-sm font-medium w-full sm:w-auto">
                    <Phone size={16} className="mr-2" />
                    Call 07739 309380
                  </Button>
                </a>
                <a
                  href={whatsappUrl}
                  id="whatsapp-cta-footer"
                  className="js-whatsapp-cta"
                  data-treatment={data.slug}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button variant="outline" className="rounded-full px-6 h-11 text-sm font-medium w-full sm:w-auto">
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      <RelatedTreatments currentSlug={data.slug} />

      <StickyBar slug={data.slug} bookingUrl={bookingUrl} whatsappUrl={whatsappUrl} />
    </>
  );
}
