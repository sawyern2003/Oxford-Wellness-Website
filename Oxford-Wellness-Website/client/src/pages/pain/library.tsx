import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { painLibraryArticles } from "@/data/painLibrary";

export default function PainLibrary() {
  useBreadcrumbSchema([
    { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
    { name: "Pain Library", path: "/oxford-pain-doctor/library" },
  ]);
  useSEO({
    title: "The Oxford Pain Library | Guides to Persistent Pain",
    description:
      "Original articles on chronic pain, nerve pain, injections, sleep and specialist care – written for patients by The Oxford Pain Doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/library",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 max-w-3xl py-12 md:py-16">
        <FadeIn>
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
            Learn
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
            The Oxford Pain Library
          </h1>
          <p className="text-[15px] text-muted-foreground leading-relaxed mb-12">
            Clear, original articles on persistent pain. Written for people living with it – not as a substitute for a consultation, and not as a list of links elsewhere.
          </p>
        </FadeIn>

        <div className="space-y-4">
          {painLibraryArticles.map((article, i) => (
            <FadeIn key={article.slug} delay={i * 0.04}>
              <Link
                href={`/oxford-pain-doctor/library/${article.slug}`}
                className="hover-card group block rounded-3xl bg-muted/50 p-7 md:p-8"
              >
                <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-3 leading-snug group-hover:text-secondary transition-colors">
                  {article.title}
                </h2>
                <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">
                  {article.excerpt}
                </p>
                <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                  Read article
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </span>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
