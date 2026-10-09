import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import RevealSection from "@/components/animations/RevealSection";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { programmes } from "@/data/programmes";
import HowCanWeHelp from "@/components/layout/HowCanWeHelp";

export default function HowWeHelp() {
  useBreadcrumbSchema([{ name: "How We Help", path: "/how-we-help" }]);
  useSEO({
    title: "How We Help | Personalised Treatment Journeys | The Oxford Wellness Doctor",
    description:
      "Doctor-led programmes for skin health, body confidence and intimate wellness. Personalised journeys with Dr Inga Taganova in Oxford – not a treatment menu.",
    canonical: "https://www.theoxfordwellnessdoctor.com/how-we-help",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <RevealSection className="bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-6xl">
        <FadeIn className="mb-16">
          <HowCanWeHelp heading="h1" />
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-5 mb-16">
          {programmes.map((p, i) => (
            <FadeIn key={p.id} delay={i * 0.06}>
              <Link
                href={p.href}
                className="hover-card group block h-full bg-muted/50 hover:bg-muted rounded-3xl overflow-hidden"
              >
                <ParallaxImage src={p.image} alt="" className="aspect-[4/3]" />
                <div className="p-7 md:p-8">
                  <p className="text-xs text-secondary font-medium mb-3">{p.problemLabel}</p>
                  <h2 className="font-sans font-semibold text-xl text-foreground mb-3 tracking-tight group-hover:text-secondary transition-colors">
                    {p.name}
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {p.shortDesc}
                  </p>
                  <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                    Learn more
                    <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                  </span>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
      </RevealSection>
    </div>
  );
}
