import Hero from "@/components/home/Hero";
import ParksRoadCycle from "@/components/home/ParksRoadCycle";
import ClinicMoveNote from "@/components/layout/ClinicMoveNote";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";
import leadPractitioner from "@assets/dr-inga-taganova-portrait.jpg";
import FadeIn from "@/components/animations/FadeIn";
import RevealSection from "@/components/animations/RevealSection";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { useSEO } from "@/hooks/useSEO";
import { programmes } from "@/data/programmes";
import PatientJourney from "@/components/home/PatientJourney";

export default function Home() {
  useSEO({
    title: "Doctor-Led Women's Midlife Care Oxford | The Oxford Wellness Doctor",
    description:
      "Private midlife care with Dr Inga Taganova – now at Belsyre Court in the centre of Oxford. Programmes for skin health, body confidence and intimate wellness.",
    canonical: "https://www.theoxfordwellnessdoctor.com/",
  });

  return (
    <>
      <Hero />
      <ParksRoadCycle />

      {/* Meet Dr Inga */}
      <RevealSection className="py-16 md:py-24 bg-muted/60">
        <div className="container-wide">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-5">
              <div className="group aspect-[3/4] rounded-3xl max-w-sm lg:max-w-none bg-white overflow-hidden">
                <img
                  src={leadPractitioner}
                  alt="Dr Inga Taganova"
                  className="h-full w-full object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                />
              </div>
            </FadeIn>
            <FadeIn delay={0.08} className="lg:col-span-7">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                Your doctor
              </p>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-5">
                Meet Dr Inga
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-4 max-w-xl">
                A private GP and menopause specialist who takes time to understand what has changed – then builds a plan grounded in clinical judgement and natural-looking results.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-xl">
                She sees every patient herself. Consultations and treatments take place at our new clinic at Belsyre Court, in the centre of Oxford.
              </p>
              <Link href="/about">
                <Button
                  variant="outline"
                  className="rounded-full border-border bg-white px-7 h-11 text-sm"
                >
                  About Dr Inga
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="py-16 md:py-24 bg-muted/60">
        <div className="container-wide">
          <FadeIn className="max-w-xl mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              How we can help
            </p>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight">
              Start from the change you notice most
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6">
            {programmes.map((p, i) => (
              <FadeIn key={p.id} delay={i * 0.07}>
                <Link
                  href={p.href}
                  className="hover-card group block h-full bg-white rounded-3xl overflow-hidden"
                >
                  <ParallaxImage src={p.image} alt="" className="aspect-[4/3]" />
                  <div className="p-7 md:p-8">
                    <h3 className="font-sans font-semibold text-xl text-primary mb-3 tracking-tight group-hover:text-secondary transition-colors">
                      {p.id === "weight-body-confidence" ? "Body & Confidence" : p.name}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {p.id === "weight-body-confidence"
                        ? "Care for body confidence, skin quality and physical changes through midlife."
                        : p.shortDesc}
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

      <PatientJourney />

      <ClinicMoveNote />

      {/* Final CTA */}
      <RevealSection className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container-page text-center">
          <div className="max-w-2xl mx-auto">
          <FadeIn>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight mb-4">
              When you are ready
            </h2>
            <p className="text-primary-foreground/75 text-[15px] mb-8 leading-relaxed">
              Book an online consultation with Dr Inga – or use the Programme Finder to see where to start.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book">
                <Button
                  className="rounded-full bg-secondary text-primary hover:bg-secondary/90 px-8 h-11 text-sm font-medium"
                >
                  Book consultation
                </Button>
              </Link>
              <Link href="/programme-finder">
                <Button className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 h-11 text-sm w-full sm:w-auto">
                  Find my programme
                </Button>
              </Link>
            </div>
          </FadeIn>
          </div>
        </div>
      </RevealSection>
    </>
  );
}