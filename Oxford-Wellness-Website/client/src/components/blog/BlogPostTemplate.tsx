import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp, ArrowRight, Calendar, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";

export interface BlogSection {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  table?: { col1: string; col2: string; col3?: string }[];
  tableHeaders?: string[];
  note?: string;
  image?: {
    src: string;
    alt: string;
    position: "full" | "left" | "right";
    caption?: string;
  };
}

export interface BlogPostData {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  category: string;
  readTime: string;
  intro: string;
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
  };
  sections: BlogSection[];
  cta: {
    heading: string;
    text: string;
    buttonLabel: string;
    buttonHref?: string;
    buttonExternal?: boolean;
  };
  relatedPosts?: { label: string; href: string }[];
  relatedTreatments?: { label: string; href: string }[];
}

function FAQSection({ faqs }: { faqs: { q: string; a: string }[] }) {
  const [openIdx, setOpenIdx] = useState<number | null>(null);
  return (
    <div className="divide-y divide-border border border-border">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            data-testid={`blog-faq-${i}`}
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

function SectionImage({ image }: { image: NonNullable<BlogSection["image"]> }) {
  return (
    <figure className="w-full">
      <img
        src={image.src}
        alt={image.alt}
        className="w-full object-cover rounded-sm"
        loading="lazy"
      />
      {image.caption && (
        <figcaption className="text-xs text-center text-muted-foreground mt-2 italic">
          {image.caption}
        </figcaption>
      )}
    </figure>
  );
}

function SectionContent({ section }: { section: BlogSection }) {
  return (
    <>
      <h2 className="font-serif text-xl text-primary mb-4">{section.heading}</h2>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed mb-3 text-sm">{p}</p>
      ))}
      {section.bullets && (
        <ul className="mt-3 space-y-2">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
              {b}
            </li>
          ))}
        </ul>
      )}
      {section.table && (
        <div className="overflow-x-auto mt-4">
          <table className="w-full text-sm border-collapse border border-border">
            {section.tableHeaders && (
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  {section.tableHeaders.map((h) => (
                    <th key={h} className="text-left px-4 py-2 font-medium text-xs uppercase tracking-wider border border-border/30">{h}</th>
                  ))}
                </tr>
              </thead>
            )}
            <tbody>
              {section.table.map((row, i) => (
                <tr key={i} className={i % 2 === 0 ? "bg-background" : "bg-muted/30"}>
                  <td className="px-4 py-2 border border-border text-muted-foreground">{row.col1}</td>
                  <td className="px-4 py-2 border border-border text-muted-foreground">{row.col2}</td>
                  {row.col3 !== undefined && <td className="px-4 py-2 border border-border text-muted-foreground">{row.col3}</td>}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {section.note && (
        <p className="mt-3 text-xs text-muted-foreground/70 border-l-2 border-border pl-4 italic">{section.note}</p>
      )}
    </>
  );
}

export default function BlogPostTemplate({ data }: { data: BlogPostData }) {
  useSEO({
    title: data.title,
    description: data.metaDescription,
    canonical: data.canonical,
  });

  useEffect(() => {
    const BASE = "https://www.theoxfordwellnessdoctor.com";
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Article",
          "headline": data.h1,
          "description": data.metaDescription,
          "author": {
            "@type": "Physician",
            "name": "Dr. Inga Taganova",
            "url": `${BASE}/about`,
          },
          "publisher": {
            "@type": "MedicalBusiness",
            "name": "The Oxford Wellness Doctor",
            "url": BASE,
          },
          "mainEntityOfPage": data.canonical,
          ...(data.heroImage ? { "image": data.heroImage.src } : {}),
        },
        {
          "@type": "BreadcrumbList",
          "itemListElement": [
            { "@type": "ListItem", "position": 1, "name": "Home", "item": `${BASE}/` },
            { "@type": "ListItem", "position": 2, "name": "Blog", "item": `${BASE}/blog` },
            { "@type": "ListItem", "position": 3, "name": data.h1, "item": data.canonical },
          ],
        },
      ],
    };

    let script = document.getElementById("blog-article-schema") as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.type = "application/ld+json";
      script.id = "blog-article-schema";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);
    return () => { document.getElementById("blog-article-schema")?.remove(); };
  }, [data]);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Header */}
      <div className="bg-primary text-primary-foreground py-20 px-6">
        <FadeIn>
          <div className="max-w-3xl mx-auto">
            <p className="text-xs uppercase tracking-widest text-primary-foreground/60 mb-3">
              {data.category}
            </p>
            <h1 className="font-serif text-3xl md:text-4xl leading-tight mb-6">{data.h1}</h1>
            <div className="flex items-center gap-6 text-xs text-primary-foreground/60">
              <span className="flex items-center gap-1.5">
                <User size={12} />
                <Link href="/about" className="hover:text-primary-foreground/80 transition-colors">
                  Dr. Inga Taganova
                </Link>
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar size={12} /> The Oxford Wellness Doctor
              </span>
              <span>{data.readTime} read</span>
            </div>
          </div>
        </FadeIn>
      </div>

      {/* Breadcrumb */}
      <div className="max-w-3xl mx-auto px-6 py-4">
        <nav className="text-xs text-muted-foreground flex gap-2 items-center flex-wrap" aria-label="Breadcrumb">
          <Link href="/" className="hover:text-primary transition-colors">Home</Link>
          <span>/</span>
          <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
          <span>/</span>
          <span className="text-primary truncate">{data.h1}</span>
        </nav>
      </div>

      {/* Content */}
      <article className="max-w-3xl mx-auto px-6 pb-20">

        {/* Hero Image */}
        {data.heroImage && (
          <FadeIn>
            <figure className="mb-10 overflow-hidden rounded-sm shadow-md">
              <img
                src={data.heroImage.src}
                alt={data.heroImage.alt}
                className="w-full object-cover max-h-80"
                loading="lazy"
              />
              {data.heroImage.caption && (
                <figcaption className="text-xs text-center text-muted-foreground mt-2 italic px-2 pb-1">
                  {data.heroImage.caption}
                </figcaption>
              )}
            </figure>
          </FadeIn>
        )}

        <FadeIn>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 border-l-2 border-secondary pl-5">
            {data.intro}
          </p>
        </FadeIn>

        {data.sections.map((section, idx) => {
          const img = section.image;

          return (
            <FadeIn key={idx}>
              <section className="mb-10">
                {/* Full-width image above section */}
                {img?.position === "full" && (
                  <div className="mb-6 overflow-hidden rounded-sm shadow-sm">
                    <SectionImage image={img} />
                  </div>
                )}

                {/* Left or right image layout */}
                {(img?.position === "left" || img?.position === "right") ? (
                  <div className={`flex flex-col gap-5 ${img.position === "right" ? "md:flex-row" : "md:flex-row-reverse"} md:items-start`}>
                    <div className="flex-1 min-w-0">
                      <SectionContent section={section} />
                    </div>
                    <div className="w-full md:w-48 lg:w-52 flex-shrink-0 overflow-hidden rounded-sm shadow-sm">
                      <SectionImage image={img} />
                    </div>
                  </div>
                ) : (
                  /* No image or full - just render content */
                  <SectionContent section={section} />
                )}
              </section>
            </FadeIn>
          );
        })}

        {/* CTA Box */}
        <FadeIn>
          <div className="mt-12 bg-primary text-primary-foreground p-8 text-center">
            <h2 className="font-serif text-2xl mb-3">{data.cta.heading}</h2>
            <p className="text-primary-foreground/80 text-sm mb-6 max-w-md mx-auto">{data.cta.text}</p>
            <Button
              data-testid="blog-cta-btn"
              className="bg-secondary text-primary hover:bg-secondary/90 rounded-none px-8 uppercase tracking-widest text-sm"
              onClick={() => {
                if (data.cta.buttonExternal) {
                  window.open(data.cta.buttonHref || "https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank");
                } else {
                  window.location.href = data.cta.buttonHref || "/contact";
                }
              }}
            >
              {data.cta.buttonLabel}
            </Button>
          </div>
        </FadeIn>

        {/* Related */}
        {(data.relatedPosts || data.relatedTreatments) && (
          <FadeIn>
            <div className="mt-14 border-t border-border pt-8 grid grid-cols-1 md:grid-cols-2 gap-8">
              {data.relatedPosts && data.relatedPosts.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Related Articles</p>
                  <ul className="space-y-2">
                    {data.relatedPosts.map((p) => (
                      <li key={p.href}>
                        <Link
                          href={p.href}
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ArrowRight size={12} /> {p.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
              {data.relatedTreatments && data.relatedTreatments.length > 0 && (
                <div>
                  <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Related Treatments</p>
                  <ul className="space-y-2">
                    {data.relatedTreatments.map((t) => (
                      <li key={t.href}>
                        <Link
                          href={t.href}
                          className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors"
                        >
                          <ArrowRight size={12} /> {t.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </FadeIn>
        )}
      </article>
    </div>
  );
}
