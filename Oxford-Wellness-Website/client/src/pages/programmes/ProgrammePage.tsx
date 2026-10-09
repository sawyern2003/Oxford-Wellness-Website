import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import RevealSection from "@/components/animations/RevealSection";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import type { Programme } from "@/data/programmes";
import { Check } from "lucide-react";

export default function ProgrammePage({ programme }: { programme: Programme }) {
  useBreadcrumbSchema([
    { name: "How We Help", path: "/how-we-help" },
    { name: programme.name, path: programme.href },
  ]);
  useSEO({
    title: `${programme.name} Programme Oxford | The Oxford Wellness Doctor`,
    description: programme.overview.slice(0, 155),
    canonical: `https://www.theoxfordwellnessdoctor.com${programme.href}`,
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <RevealSection className="bg-white">
        <div className="container mx-auto px-6 py-12 md:py-16 max-w-4xl">
          <FadeIn>
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              {programme.problemLabel}
            </p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
              {programme.name}
            </h1>
            <ParallaxImage
              src={programme.image}
              alt=""
              className="mb-8 group rounded-3xl max-w-2xl aspect-[16/10]"
              loading="eager"
            />
            <p className="text-base text-muted-foreground leading-relaxed max-w-2xl mb-8">
              {programme.overview}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium"
                onClick={() =>
                  window.location.assign("/book")
                }
              >
                Book consultation
              </Button>
              <Link href="/programme-finder">
                <Button
                  variant="outline"
                  className="rounded-full border-border bg-white px-7 h-11 text-sm w-full sm:w-auto"
                >
                  Find my programme
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      <RevealSection className="py-14 md:py-16 bg-muted/50">
        <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-10">
          <FadeIn>
            <div className="hover-card bg-white rounded-3xl p-7 h-full">
              <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">Who it is for</h2>
              <ul className="space-y-3">
                {programme.whoFor.map((item) => (
                  <li key={item} className="text-[15px] text-muted-foreground flex gap-3">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-secondary/20 text-secondary flex-shrink-0 mt-0.5">
                      <Check size={12} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="hover-card bg-white rounded-3xl p-7 h-full">
              <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">Doctor overview</h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                {programme.doctorOverview}
              </p>
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      <RevealSection className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-8">Treatment journey</h2>
            <ol className="space-y-6">
              {programme.journey.map((step, i) => (
                <li key={step} className="grid grid-cols-[3rem_1fr] gap-4">
                  <span className="font-sans font-semibold text-secondary">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p className="text-[15px] text-muted-foreground leading-relaxed pt-0.5">{step}</p>
                </li>
              ))}
            </ol>
          </FadeIn>
        </div>
      </RevealSection>

      <RevealSection className="py-14 bg-muted/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-3">
              Treatments commonly included
            </h2>
            <p className="text-sm text-muted-foreground mb-6">
              These appear as part of the journey when clinically appropriate – not as isolated products.
            </p>
            <div className="flex flex-wrap gap-2">
              {programme.treatmentsIncluded.map((t) => (
                <Link
                  key={t.href}
                  href={t.href}
                  className="text-sm rounded-full bg-white border border-border px-4 py-2 text-foreground hover:border-secondary hover:text-secondary hover:-translate-y-0.5 transition-all"
                >
                  {t.name}
                </Link>
              ))}
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      <RevealSection className="py-14 md:py-16 bg-white">
        <div className="container mx-auto px-6 max-w-4xl grid md:grid-cols-2 gap-10">
          <FadeIn>
            <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">Expected improvements</h2>
            <ul className="space-y-3">
              {programme.expectedImprovements.map((item) => (
                <li key={item} className="text-[15px] text-muted-foreground flex gap-3">
                  <span className="text-secondary mt-1">•</span>
                  {item}
                </li>
              ))}
            </ul>
          </FadeIn>
          <FadeIn delay={0.05}>
            <div className="rounded-3xl bg-muted/60 p-7">
              <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">Timeline & investment</h2>
              <p className="text-[15px] text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Timeline: </span>
                {programme.timeline}
              </p>
              <p className="text-[15px] text-muted-foreground mb-3">
                <span className="font-medium text-foreground">Duration: </span>
                {programme.duration}
              </p>
              <p className="text-[15px] text-muted-foreground">
                <span className="font-medium text-foreground">Investment: </span>
                {programme.investment}
              </p>
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      <RevealSection className="py-14 bg-muted/50">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-6">FAQs</h2>
            <div className="bg-white rounded-3xl px-6 divide-y divide-border">
              {programme.faqs.map((faq) => (
                <div key={faq.q} className="py-5">
                  <h3 className="font-sans font-semibold text-base text-foreground mb-2">{faq.q}</h3>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{faq.a}</p>
                </div>
              ))}
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      <RevealSection className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-4xl">
          <FadeIn>
            <h2 className="font-sans font-semibold text-2xl md:text-3xl tracking-tight mb-3">Book a consultation</h2>
            <p className="text-primary-foreground/75 text-[15px] mb-6 max-w-xl">
              Begin with a conversation. Your journey is confirmed with Dr Inga – not chosen from a menu.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium"
                onClick={() =>
                  window.location.assign("/book")
                }
              >
                Book consultation
              </Button>
              <Link href="/programme-finder">
                <Button className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-7 h-11 text-sm">
                  Programme Finder
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </RevealSection>
    </div>
  );
}
