import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Phone,
  Mail,
  Calendar,
  Hourglass,
  BedDouble,
  ClipboardList,
  Syringe,
  Timer,
  Stethoscope,
  Briefcase,
  type LucideIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { getTreatmentGlance, type AtAGlanceItem, type AtAGlanceIcon } from "@/data/treatmentGlance";

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

export type { AtAGlanceItem, AtAGlanceIcon };

export interface TreatmentPageData {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  intro: string;
  treatmentName?: string;
  summary?: string;
  highlights?: string[];
  atAGlance?: AtAGlanceItem[];
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

const GLANCE_ICONS: Record<AtAGlanceIcon, LucideIcon> = {
  calendar: Calendar,
  hourglass: Hourglass,
  bed: BedDouble,
  clipboard: ClipboardList,
  syringe: Syringe,
  timer: Timer,
  stethoscope: Stethoscope,
  briefcase: Briefcase,
};

const PROMO_SECTION = /why choose|why doctor|why a gmc|why the oxford/i;
const BOOKING_FAQ = /how do i book/i;

function FAQAccordion({ faqs }: { faqs: FAQItem[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <div className="divide-y divide-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            data-testid={`faq-${i}`}
            className="w-full text-left py-4 flex items-start justify-between gap-4 group"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="font-sans font-medium text-base text-foreground leading-snug group-hover:text-secondary transition-colors pr-4">
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
                transition={{ duration: 0.25 }}
                className="overflow-hidden"
              >
                <p className="pb-4 text-muted-foreground text-sm leading-relaxed max-w-2xl">{faq.a}</p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}

function AtAGlanceCard({ item }: { item: AtAGlanceItem }) {
  const Icon = GLANCE_ICONS[item.icon];
  return (
    <div className="rounded-2xl bg-muted/60 p-4 min-h-[96px]">
      <p className="text-xs text-muted-foreground mb-1">{item.label}</p>
      <p className="text-sm font-medium text-foreground leading-snug">{item.value}</p>
      <Icon size={16} className="text-secondary mt-3" strokeWidth={1.5} />
    </div>
  );
}

function extractHighlights(sections: ContentSection[]): string[] {
  const section = sections.find(
    (s) => s.bullets?.length && /what|treat|benefit|concern|area|who is/i.test(s.heading)
  );
  return section?.bullets?.slice(0, 5) ?? [];
}

function extractProcedureSteps(sections: ContentSection[]): string[] {
  const section = sections.find((s) => /procedure|what to expect|treatment process|the treatment/i.test(s.heading));
  if (!section) return [];

  const steps: string[] = [];
  if (section.paragraphs?.[0]) steps.push(section.paragraphs[0]);
  if (section.paragraphs?.[1]) steps.push(section.paragraphs[1]);
  if (steps.length < 2 && section.bullets?.length) {
    steps.push(...section.bullets.slice(0, 3 - steps.length));
  }
  return steps.slice(0, 3);
}

function filterFaqs(faqs: FAQItem[]): FAQItem[] {
  return faqs.filter((f) => !BOOKING_FAQ.test(f.q)).slice(0, 5);
}

function filterSections(sections: ContentSection[]): ContentSection[] {
  return sections.filter((s) => !PROMO_SECTION.test(s.heading));
}

export default function TreatmentPageTemplate({ data }: { data: TreatmentPageData }) {
  const glance = getTreatmentGlance(data.canonical);
  const treatmentName = data.treatmentName ?? glance?.treatmentName ?? data.h1.split(" in Oxford")[0];
  const summary = data.summary ?? glance?.summary ?? data.intro;
  const atAGlance = data.atAGlance ?? glance?.atAGlance ?? [];
  const highlights = (data.highlights ?? glance?.highlights ?? extractHighlights(data.sections)).slice(0, 5);
  const procedureSteps = extractProcedureSteps(data.sections);
  const displayFaqs = filterFaqs(data.faqs);
  const detailSections = filterSections(data.sections);
  const [detailsOpen, setDetailsOpen] = useState(false);

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
    <div className="pt-28 min-h-screen bg-white">
      <section className="bg-white">
        <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
          <FadeIn direction="up">
            <nav className="text-sm text-muted-foreground mb-5 flex items-center gap-2">
              <Link href="/treatments" className="hover:text-secondary transition-colors">Treatments</Link>
              <span>/</span>
              <span>{treatmentName}</span>
            </nav>

            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Part of a personalised programme
            </p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-4 leading-snug">
              {treatmentName}
            </h1>

            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-2xl mb-4">
              This treatment is commonly incorporated into our personalised treatment programmes.
            </p>

            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {summary}
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                data-testid="hero-book-btn"
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium"
                onClick={() => window.location.assign("/book")}
              >
                Book consultation
              </Button>
              <Button
                data-testid="hero-programme-finder-btn"
                variant="outline"
                className="rounded-full px-7 h-11 text-sm border-border bg-white"
                onClick={() => window.location.href = "/programme-finder"}
              >
                Programme Finder
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>

      {atAGlance.length > 0 && (
        <section className="bg-muted/50 py-10">
          <div className="container mx-auto px-6 max-w-4xl">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {atAGlance.map((item, i) => (
                <AtAGlanceCard key={i} item={item} />
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="grid md:grid-cols-2 gap-10">
            {highlights.length > 0 && (
              <FadeIn direction="up">
                <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">What it treats</h2>
                <ul className="space-y-2.5">
                  {highlights.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary flex-shrink-0 mt-2" />
                      {item}
                    </li>
                  ))}
                </ul>
              </FadeIn>
            )}

            {procedureSteps.length > 0 && (
              <FadeIn direction="up" delay={0.05}>
                <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">What to expect</h2>
                <ol className="space-y-3">
                  {procedureSteps.map((step, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground leading-relaxed">
                      <span className="font-sans font-semibold text-secondary text-sm leading-none mt-0.5">{String(i + 1).padStart(2, "0")}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </FadeIn>
            )}
          </div>
        </div>
      </section>

      {data.pricing.length > 0 && (
        <section className="py-12 bg-muted/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <FadeIn direction="up">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">Pricing</h2>
              <div className="bg-white rounded-3xl p-6 space-y-1">
                {data.pricing.map((item, i) => (
                  <div key={i} className="flex justify-between items-center gap-4 py-3 border-b border-border last:border-0">
                    <p className="text-sm text-muted-foreground">{item.name}</p>
                    <p className="font-sans font-semibold text-base text-foreground whitespace-nowrap">{item.price}</p>
                  </div>
                ))}
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                Includes consultation. Free two-week follow-up with every treatment.
              </p>
              <Link href="/pricing" className="inline-flex items-center gap-1 text-sm text-secondary hover:text-primary mt-3 transition-colors">
                View all pricing <ArrowRight size={12} />
              </Link>
            </FadeIn>
          </div>
        </section>
      )}

      {displayFaqs.length > 0 && (
        <section className="py-14 md:py-16 bg-white">
          <div className="container mx-auto px-6 max-w-4xl">
            <FadeIn direction="up">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">Common questions</h2>
              <FAQAccordion faqs={displayFaqs} />
            </FadeIn>
          </div>
        </section>
      )}

      {detailSections.length > 0 && (
        <section className="py-10 bg-muted/50">
          <div className="container mx-auto px-6 max-w-4xl">
            <button
              type="button"
              onClick={() => setDetailsOpen(!detailsOpen)}
              className="w-full flex items-center justify-between text-left group py-2"
            >
              <span className="font-sans font-semibold text-lg text-foreground">More about this treatment</span>
              {detailsOpen ? (
                <ChevronUp size={18} className="text-muted-foreground" />
              ) : (
                <ChevronDown size={18} className="text-muted-foreground" />
              )}
            </button>
            <AnimatePresence>
              {detailsOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  className="overflow-hidden"
                >
                  <div className="space-y-8 pt-6">
                    {detailSections.map((section, i) => (
                      <div key={i}>
                        <h3 className="font-sans font-semibold text-lg text-foreground mb-2">{section.heading}</h3>
                        {section.paragraphs?.map((p, j) => (
                          <p key={j} className="text-muted-foreground leading-relaxed mb-2 text-sm">{p}</p>
                        ))}
                        {section.bullets && (
                          <ul className="space-y-1.5 mt-2">
                            {section.bullets.map((b, j) => (
                              <li key={j} className="flex items-start gap-2 text-muted-foreground text-sm">
                                <span className="w-1 h-1 rounded-full bg-secondary flex-shrink-0 mt-2" />
                                {b}
                              </li>
                            ))}
                          </ul>
                        )}
                        {section.table && (
                          <div className="mt-3 overflow-x-auto">
                            <table className="w-full border-collapse text-sm">
                              {section.tableHeaders && (
                                <thead>
                                  <tr className="bg-primary text-primary-foreground">
                                    {section.tableHeaders.map((h, j) => (
                                      <th key={j} className="px-3 py-2 text-left font-medium uppercase tracking-wider text-xs">{h}</th>
                                    ))}
                                  </tr>
                                </thead>
                              )}
                              <tbody>
                                {section.table.map((row, j) => (
                                  <tr key={j} className={j % 2 === 0 ? "bg-background" : "bg-primary/3"}>
                                    <td className="px-3 py-2 text-muted-foreground border-b border-border font-medium">{row.col1}</td>
                                    <td className="px-3 py-2 text-muted-foreground border-b border-border">{row.col2}</td>
                                    {row.col3 && <td className="px-3 py-2 text-muted-foreground border-b border-border">{row.col3}</td>}
                                  </tr>
                                ))}
                              </tbody>
                            </table>
                          </div>
                        )}
                        {section.note && (
                          <p className="mt-3 text-sm text-primary/70 border-l-2 border-secondary pl-3">{section.note}</p>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      )}

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-6 max-w-4xl">
          {data.relatedLinks && data.relatedLinks.length > 0 && (
            <FadeIn direction="up" className="mb-10">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary-foreground/60 mb-3">Related</p>
              <div className="flex flex-wrap gap-x-5 gap-y-2">
                {data.relatedLinks.map((link, i) => (
                  <Link
                    key={i}
                    href={link.href}
                    className="inline-flex items-center gap-1.5 text-sm text-primary-foreground/85 hover:text-secondary transition-colors"
                  >
                    {link.label} <ArrowRight size={12} />
                  </Link>
                ))}
              </div>
            </FadeIn>
          )}

          <FadeIn direction="up">
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-tight mb-3">Not sure which treatment is right for you?</h2>
            <p className="text-primary-foreground/75 text-[15px] mb-6 max-w-lg leading-relaxed">
              Complete our Programme Finder to begin with what has changed – then confirm suitability in consultation with Dr Inga.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Button
                data-testid="footer-finder-btn"
                className="rounded-full bg-secondary text-primary hover:bg-secondary/90 px-7 h-11 text-sm font-medium"
                onClick={() => window.location.href = "/programme-finder"}
              >
                Find my programme
              </Button>
              <Button
                data-testid="footer-book-btn"
                className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-7 h-11 text-sm"
                onClick={() => window.location.assign("/book")}
              >
                Book consultation
              </Button>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-primary-foreground/70">
              <a href="tel:+4407739309380" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Phone size={14} /> 07739 309380
              </a>
              <a href="mailto:info@theoxfordwellnessdoctor.com" className="flex items-center gap-2 hover:text-secondary transition-colors">
                <Mail size={14} /> info@theoxfordwellnessdoctor.com
              </a>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
