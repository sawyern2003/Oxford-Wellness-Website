import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";

export interface PricingItem {
  name: string;
  price: string;
}

export interface ContentSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { col1: string; col2: string; col3?: string }[];
  tableHeaders?: string[];
  note?: string;
}

export interface FAQItem {
  q: string;
  a: string;
}

export interface TreatmentPageData {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  intro: string;
  sections: ContentSection[];
  pricing: PricingItem[];
  faqs: FAQItem[];
  procedureSchema: {
    name: string;
    description: string;
    bodyLocation?: string;
  };
  relatedLinks?: { label: string; href: string }[];
}

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border border border-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            data-testid={`faq-${i}`}
            className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 group"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="font-serif text-base text-primary leading-snug group-hover:text-secondary transition-colors">
              {faq.q}
            </span>
            {openIdx === i ? (
              <ChevronUp size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          <AnimatePresence>
            {openIdx === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <p className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

export default function TreatmentPageTemplate({ data }: { data: TreatmentPageData }) {
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
          "preparation": "Initial consultation with Dr. Inga Taganova at The Oxford Wellness Doctor, 3 Woodstock Rd, Oxford OX2 6HA.",
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

    let script = document.getElementById("treatment-schema") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = "treatment-schema";
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    return () => { document.getElementById("treatment-schema")?.remove(); };
  }, [data]);

  return (
    <div className="pt-32 min-h-screen bg-background">
      {/* Hero */}
      <section className="bg-primary text-primary-foreground py-20 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-white/5 skew-x-12 transform translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10 max-w-4xl">
          <FadeIn direction="up">
            <nav className="text-xs uppercase tracking-widest text-secondary/70 mb-6 flex items-center gap-2">
              <Link href="/treatments" className="hover:text-secondary transition-colors">Treatments</Link>
              <span>/</span>
              <span className="text-secondary/50">{data.procedureSchema.name}</span>
            </nav>
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl mb-6 leading-tight">{data.h1}</h1>
            <p className="text-lg font-light opacity-90 leading-relaxed max-w-2xl">{data.intro}</p>
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <Button
                data-testid="hero-book-btn"
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-8 uppercase tracking-widest text-sm"
                onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
              >
                Book a Consultation
              </Button>
              <Button
                data-testid="hero-enquire-btn"
                variant="outline"
                className="border-white/40 text-white hover:bg-white/10 rounded-none px-8 uppercase tracking-widest text-sm"
                onClick={() => window.location.href = "/contact"}
              >
                Enquire Discreetly
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="space-y-14">
            {data.sections.map((section, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div>
                  <h2 className="font-serif text-2xl md:text-3xl text-primary mb-4">{section.heading}</h2>
                  {section.paragraphs?.map((p, j) => (
                    <p key={j} className="text-muted-foreground leading-relaxed mb-3">{p}</p>
                  ))}
                  {section.bullets && (
                    <ul className="space-y-2 mt-3">
                      {section.bullets.map((b, j) => (
                        <li key={j} className="flex items-start gap-3 text-muted-foreground">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                          <span className="leading-relaxed">{b}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                  {section.table && (
                    <div className="mt-4 overflow-x-auto">
                      <table className="w-full border-collapse text-sm">
                        {section.tableHeaders && (
                          <thead>
                            <tr className="bg-primary text-primary-foreground">
                              {section.tableHeaders.map((h, j) => (
                                <th key={j} className="px-4 py-3 text-left font-medium uppercase tracking-wider text-xs">{h}</th>
                              ))}
                            </tr>
                          </thead>
                        )}
                        <tbody>
                          {section.table.map((row, j) => (
                            <tr key={j} className={j % 2 === 0 ? "bg-background" : "bg-primary/3"}>
                              <td className="px-4 py-3 text-muted-foreground border-b border-border font-medium">{row.col1}</td>
                              <td className="px-4 py-3 text-muted-foreground border-b border-border">{row.col2}</td>
                              {row.col3 && <td className="px-4 py-3 text-muted-foreground border-b border-border">{row.col3}</td>}
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}
                  {section.note && (
                    <div className="mt-4 bg-primary/5 border-l-2 border-secondary px-4 py-3">
                      <p className="text-sm text-primary/80">{section.note}</p>
                    </div>
                  )}
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Pricing */}
          <FadeIn direction="up" className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">Pricing</h2>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {data.pricing.map((item, i) => (
                <div key={i} className="border border-border p-6 text-center">
                  <p className="text-sm text-muted-foreground uppercase tracking-widest mb-2">{item.name}</p>
                  <p className="font-serif text-2xl italic text-primary">{item.price}</p>
                </div>
              ))}
            </div>
            <p className="text-xs text-muted-foreground mt-4">All prices include full consultation. A free two-week follow-up is included with every treatment.</p>
          </FadeIn>

          {/* FAQ */}
          <FadeIn direction="up" className="mt-16">
            <h2 className="font-serif text-2xl md:text-3xl text-primary mb-6">Frequently Asked Questions</h2>
            <FAQAccordion faqs={data.faqs} />
          </FadeIn>

          {/* Related Links */}
          {data.relatedLinks && data.relatedLinks.length > 0 && (
            <FadeIn direction="up" className="mt-14">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-4">Related Treatments</p>
              <div className="flex flex-wrap gap-3">
                {data.relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-primary border border-primary/30 hover:border-primary hover:text-secondary px-4 py-2 transition-all"
                  >
                    {link.label} <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 max-w-5xl">
          <FadeIn direction="up">
            <h2 className="font-serif text-3xl text-center mb-10">Why Choose The Oxford Wellness Doctor?</h2>
          </FadeIn>
          <div className="grid md:grid-cols-3 gap-8 mb-10">
            {[
              { title: "GMC-Registered Doctor", body: "Every treatment is carried out personally by Dr. Inga Taganova - a GMC-registered GP (No. 4727817) with 20+ years of medical experience. Your safety is always the priority." },
              { title: "Medical Precision", body: "As a former gynaecologist and current NHS GP, Dr. Taganova brings exceptional anatomical knowledge and clinical rigour to every aesthetic treatment." },
              { title: "Discreet Oxford Clinic", body: "Our private clinic in Oxford offers a calm, confidential setting in a professional medical environment. Open Friday evenings and Saturday mornings for your convenience." },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div>
                  <div className="w-8 h-0.5 bg-secondary mb-4" />
                  <h3 className="font-serif text-lg mb-2">{item.title}</h3>
                  <p className="text-primary-foreground/80 text-sm leading-relaxed font-light">{item.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
          <div className="text-center space-y-4">
            <Button
              data-testid="footer-book-btn"
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-10 uppercase tracking-widest text-sm"
              onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
            >
              Book Your Consultation in Oxford
            </Button>
            <div className="flex items-center justify-center gap-6 pt-4 text-sm text-primary-foreground/70">
              <a href="tel:+4407739309380" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={14} /> 07739 309380
              </a>
              <a href="mailto:info@theoxfordwellnessdoctor.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail size={14} /> info@theoxfordwellnessdoctor.com
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
