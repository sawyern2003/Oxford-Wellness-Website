import { useEffect } from "react";
import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { PAIN_BOOK_HREF } from "@/lib/brand";
import { getPainLibraryArticle, painLibraryArticles } from "@/data/painLibrary";
import PainBrainMap from "@/components/pain/PainBrainMap";
import NotFound from "@/pages/not-found";

const BASE = "https://www.theoxfordwellnessdoctor.com";

function readingTime(article: {
  intro: string;
  sections: { paragraphs: string[] }[];
}) {
  const text = [article.intro, ...article.sections.flatMap((s) => s.paragraphs)].join(" ");
  const minutes = Math.max(3, Math.round(text.split(/\s+/).length / 200));
  return `${minutes} min read`;
}

export default function PainLibraryArticle({ slug }: { slug: string }) {
  const article = slug ? getPainLibraryArticle(slug) : undefined;
  const related = article
    ? painLibraryArticles.filter((item) => item.slug !== article.slug).slice(0, 3)
    : [];
  const canonical = article
    ? `${BASE}/oxford-pain-doctor/library/${article.slug}`
    : `${BASE}/oxford-pain-doctor/library`;

  useBreadcrumbSchema([
    { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
    { name: "Pain Library", path: "/oxford-pain-doctor/library" },
    ...(article
      ? [{ name: article.title, path: `/oxford-pain-doctor/library/${article.slug}` }]
      : []),
  ]);
  useSEO({
    title: article ? `${article.title} | The Oxford Pain Library` : "Article not found",
    description: article?.metaDescription ?? "This Pain Library article could not be found.",
    canonical,
  });

  useEffect(() => {
    if (!article) return;
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "pain-library-article-schema";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: article.title,
      description: article.metaDescription,
      author: {
        "@type": "Physician",
        name: "Dr Richard Sawyer",
        url: `${BASE}/oxford-pain-doctor/about`,
      },
      publisher: {
        "@type": "MedicalBusiness",
        name: "The Oxford Pain Doctor",
        url: `${BASE}/oxford-pain-doctor`,
      },
      mainEntityOfPage: canonical,
    });
    document.head.appendChild(schema);
    return () => {
      document.getElementById("pain-library-article-schema")?.remove();
    };
  }, [article, canonical]);

  if (!article) {
    return <NotFound />;
  }

  return (
    <div className="pt-28 min-h-screen bg-white">
      <article className="py-12 md:py-16">
        <div className="container mx-auto px-6 max-w-3xl">
        <FadeIn>
          <Link
            href="/oxford-pain-doctor/library"
            className="text-[13px] font-medium text-muted-foreground hover:text-secondary mb-6 inline-block"
          >
            ← All articles
          </Link>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Pain Library · {readingTime(article)}
          </p>
          <h1 className="font-sans font-semibold text-3xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
            {article.title}
          </h1>
          <p className="text-base text-muted-foreground leading-relaxed mb-10 border-l-2 border-secondary pl-5">
            {article.intro}
          </p>
        </FadeIn>
        </div>

        {article.showBrainMap ? (
          <div className="container mx-auto px-6 max-w-6xl my-4 mb-14">
            <PainBrainMap />
          </div>
        ) : null}

        <div className="container mx-auto px-6 max-w-3xl">
        {article.sections.map((section) => (
          <FadeIn key={section.heading}>
            <section className="mb-10">
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
                {section.heading}
              </h2>
              {section.paragraphs.map((p) => (
                <p key={p.slice(0, 48)} className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  {p}
                </p>
              ))}
            </section>
          </FadeIn>
        ))}

        <FadeIn>
          <p className="text-sm text-muted-foreground mb-10">
            This article is educational. It is not a diagnosis or a personal treatment plan.
          </p>
          <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-10">
            <h2 className="font-sans font-semibold text-2xl tracking-tight mb-3">
              Talk this through in clinic
            </h2>
            <p className="text-primary-foreground/75 text-[15px] leading-relaxed mb-6">
              If persistent pain is affecting what you can do, a consultation with Dr Sawyer can turn this into a plan for you.
            </p>
            <Link href={PAIN_BOOK_HREF}>
              <Button className="rounded-full bg-white text-primary hover:bg-white/90 px-7 h-11 text-sm font-medium">
                Book a consultation
              </Button>
            </Link>
          </div>
        </FadeIn>

        {related.length > 0 ? (
          <FadeIn>
            <div className="mt-14 pt-8 border-t border-border">
              <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-5">
                More from the library
              </h2>
              <ul className="space-y-3">
                {related.map((item) => (
                  <li key={item.slug}>
                    <Link
                      href={`/oxford-pain-doctor/library/${item.slug}`}
                      className="text-[15px] text-primary hover:text-secondary"
                    >
                      {item.title} →
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ) : null}
        </div>
      </article>
    </div>
  );
}
