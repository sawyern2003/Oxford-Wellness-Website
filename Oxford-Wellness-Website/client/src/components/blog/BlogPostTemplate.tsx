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
  pullQuote?: string;
}

export interface BlogPostData {
  title: string;
  metaDescription: string;
  canonical: string;
  h1: string;
  category: string;
  readTime: string;
  intro: string;
  datePublished: string;
  dateModified?: string;
  heroImage?: {
    src: string;
    alt: string;
    caption?: string;
    credit?: string;
  };
  keyPoints?: string[];
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
    <div className="divide-y divide-border rounded-3xl bg-muted/40 overflow-hidden">
      {faqs.map((faq, i) => (
        <div key={i}>
          <button
            data-testid={`blog-faq-${i}`}
            className="w-full text-left px-6 py-4 flex items-start justify-between gap-4 group"
            onClick={() => setOpenIdx(openIdx === i ? null : i)}
            aria-expanded={openIdx === i}
          >
            <span className="font-sans font-medium text-base text-foreground leading-snug group-hover:text-secondary transition-colors">
              {faq.q}
            </span>
            {openIdx === i ? (
              <ChevronUp size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
            ) : (
              <ChevronDown size={16} className="text-muted-foreground flex-shrink-0 mt-1" />
            )}
          </button>
          <motion.div
            initial={false}
            animate={{ height: openIdx === i ? "auto" : 0, opacity: openIdx === i ? 1 : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="px-6 pb-4 text-muted-foreground text-sm leading-relaxed">{faq.a}</p>
          </motion.div>
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
        className="w-full object-cover rounded-3xl"
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
      <h2 className="font-serif font-normal text-2xl md:text-3xl text-foreground tracking-tight mb-5 leading-snug">{section.heading}</h2>
      {section.paragraphs?.map((p, i) => (
        <p key={i} className="text-muted-foreground leading-relaxed mb-4 text-base">{p}</p>
      ))}
      {section.pullQuote && (
        <blockquote className="my-6 pl-6 border-l-4 border-secondary">
          <p className="font-serif text-lg md:text-xl text-foreground italic leading-relaxed">{section.pullQuote}</p>
        </blockquote>
      )}
      {section.bullets && (
        <ul className="mt-4 space-y-3">
          {section.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-3 text-base text-muted-foreground leading-relaxed">
              <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2.5 flex-shrink-0" />
              <span>{b}</span>
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
    const ogImage = data.heroImage?.src?.startsWith('http') 
      ? data.heroImage.src 
      : data.heroImage?.src 
        ? `${BASE}${data.heroImage.src}` 
        : `${BASE}/og-default.jpg`;
    
    const schema: Record<string, unknown> = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "BlogPosting",
          "headline": data.h1,
          "description": data.metaDescription,
          "author": {
            "@type": "Person",
            "name": "Dr Inga Taganova",
            "url": `${BASE}/about`,
          },
          "publisher": {
            "@type": "Organization",
            "name": "The Oxford Wellness Doctor",
            "url": BASE,
            "logo": {
              "@type": "ImageObject",
              "url": `${BASE}/logo.png`
            }
          },
          "datePublished": data.datePublished,
          "dateModified": data.dateModified || data.datePublished,
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": data.canonical
          },
          "image": ogImage,
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
    
    // Add og:image meta tag
    let ogImageTag = document.querySelector('meta[property="og:image"]') as HTMLMetaElement | null;
    if (!ogImageTag) {
      ogImageTag = document.createElement('meta');
      ogImageTag.setAttribute('property', 'og:image');
      document.head.appendChild(ogImageTag);
    }
    ogImageTag.setAttribute('content', ogImage);
    
    return () => { 
      document.getElementById("blog-article-schema")?.remove();
    };
  }, [data]);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Image - Full Width */}
      {data.heroImage && (
        <div className="relative w-full h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
          <img
            src={data.heroImage.src}
            alt={data.heroImage.alt}
            className="w-full h-full object-cover"
            loading="eager"
            width="1600"
            height="900"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 to-transparent"></div>
          {data.heroImage.credit && (
            <p className="absolute bottom-4 right-4 text-xs text-white/70">
              Photo: {data.heroImage.credit}
            </p>
          )}
        </div>
      )}

      {/* Header Content */}
      <div className="max-w-[75ch] mx-auto px-6 pt-12 pb-8">
        <FadeIn>
          <nav className="text-xs text-muted-foreground flex gap-2 items-center flex-wrap mb-8" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-primary transition-colors">Home</Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-primary">{data.category}</span>
          </nav>
          
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            {data.category}
          </p>
          <h1 className="font-serif font-normal text-4xl md:text-5xl lg:text-6xl leading-tight mb-6 tracking-tight text-foreground">
            {data.h1}
          </h1>
          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-8 flex-wrap">
            <Link href="/about" className="flex items-center gap-2 hover:text-primary transition-colors">
              <User size={14} />
              <span>Dr Inga Taganova</span>
            </Link>
            <span className="flex items-center gap-2">
              <Calendar size={14} />
              <time dateTime={data.datePublished}>
                {new Date(data.datePublished).toLocaleDateString('en-GB', { 
                  day: 'numeric', 
                  month: 'long', 
                  year: 'numeric' 
                })}
              </time>
            </span>
            <span>{data.readTime} read</span>
          </div>
        </FadeIn>
      </div>

      {/* Content */}
      <article className="max-w-[75ch] mx-auto px-6 pb-20">

        <FadeIn>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8 font-light">
            {data.intro}
          </p>
        </FadeIn>

        {/* Key Points Box */}
        {data.keyPoints && data.keyPoints.length > 0 && (
          <FadeIn>
            <div className="my-10 p-8 bg-muted/30 border border-border/50 rounded-2xl">
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Key Points</h3>
              <ul className="space-y-3">
                {data.keyPoints.map((point, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}

        {data.sections.map((section, idx) => {
          const img = section.image;

          return (
            <FadeIn key={idx}>
              <section className="mb-10">
                {/* Full-width image above section */}
                {img?.position === "full" && (
                  <div className="mb-6 overflow-hidden rounded-2xl">
                    <SectionImage image={img} />
                  </div>
                )}

                {/* Left or right image layout */}
                {(img?.position === "left" || img?.position === "right") ? (
                  <div className={`flex flex-col gap-5 ${img.position === "right" ? "md:flex-row" : "md:flex-row-reverse"} md:items-start`}>
                    <div className="flex-1 min-w-0">
                      <SectionContent section={section} />
                    </div>
                    <div className="w-full md:w-48 lg:w-52 flex-shrink-0 overflow-hidden rounded-2xl">
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
          <div className="mt-14 bg-gradient-to-br from-primary to-primary/90 text-primary-foreground p-10 md:p-12 text-center rounded-3xl">
            <h2 className="font-serif font-normal text-3xl mb-4 tracking-tight">{data.cta.heading}</h2>
            <p className="text-primary-foreground/90 text-base mb-8 max-w-xl mx-auto leading-relaxed">{data.cta.text}</p>
            <Button
              data-testid="blog-cta-btn"
              className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-8 h-12 text-base font-medium shadow-lg"
              onClick={() => {
                const href = data.cta.buttonHref || "/book";
                if (href.includes("glowday.com") || href === "/book") {
                  window.location.href = "/book";
                } else if (data.cta.buttonExternal) {
                  window.open(href, "_blank");
                } else {
                  window.location.href = href;
                }
              }}
            >
              {data.cta.buttonLabel}
            </Button>
          </div>
        </FadeIn>

        {/* Related Treatment Card */}
        {data.relatedTreatments && data.relatedTreatments.length > 0 && (
          <FadeIn>
            <div className="mt-10 p-8 bg-muted/30 border border-border/50 rounded-2xl">
              <h3 className="font-sans font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Related Treatments</h3>
              <ul className="space-y-3">
                {data.relatedTreatments.map((t) => (
                  <li key={t.href}>
                    <Link
                      href={t.href}
                      className="inline-flex items-center gap-2 text-base text-foreground hover:text-secondary transition-colors"
                    >
                      <ArrowRight size={16} /> {t.label}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6 pt-6 border-t border-border/50">
                <Link
                  href="/book"
                  className="inline-flex items-center gap-2 text-sm text-secondary hover:text-primary transition-colors font-medium"
                >
                  Book a consultation <ArrowRight size={14} />
                </Link>
              </div>
            </div>
          </FadeIn>
        )}

        {/* Related Posts */}
        {data.relatedPosts && data.relatedPosts.length > 0 && (
          <FadeIn>
            <div className="mt-14 pt-10 border-t border-border">
              <h3 className="font-serif font-normal text-2xl text-foreground mb-6">Further Reading</h3>
              <ul className="space-y-3">
                {data.relatedPosts.map((p) => (
                  <li key={p.href}>
                    <Link
                      href={p.href}
                      className="inline-flex items-start gap-2 text-base text-muted-foreground hover:text-primary transition-colors leading-relaxed"
                    >
                      <ArrowRight size={16} className="mt-1 flex-shrink-0" />
                      <span>{p.label}</span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        )}
      </article>
    </div>
  );
}
