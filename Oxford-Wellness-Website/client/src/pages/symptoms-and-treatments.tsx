import { useState } from "react";
import { Link } from "wouter";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import RevealSection from "@/components/animations/RevealSection";
import ParallaxImage from "@/components/animations/ParallaxImage";
import SymptomIcon from "@/components/symptoms/SymptomIcon";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { symptoms, treatmentApproaches } from "@/data/symptomsTreatments";
import { cn } from "@/lib/utils";
import bandImg from "@/assets/lifestyle-friends-park.png";
import careImg from "@/assets/lifestyle-ease-portrait.png";
import clinicImg from "@/assets/lifestyle-oxford-navy-coat.png";

const EYEBROW = "text-[11px] font-medium tracking-[0.18em] uppercase text-secondary";

export default function SymptomsAndTreatments() {
  const [activeId, setActiveId] = useState(symptoms[0].id);
  const reduced = useReducedMotion();
  const active = symptoms.find((s) => s.id === activeId) ?? symptoms[0];

  useBreadcrumbSchema([{ name: "Symptoms & Treatment", path: "/symptoms-and-treatments" }]);
  useSEO({
    title: "Menopause Symptoms & Treatment in Oxford | The Oxford Wellness Doctor",
    description:
      "Every menopause and perimenopause symptom, and the treatments we recommend for each. Gynaecologist-led care with Dr Inga Taganova in Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/symptoms-and-treatments",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      {/* Hero – text only, left aligned */}
      <RevealSection className="bg-white">
        <div className="container mx-auto px-6 pt-10 pb-16 md:pt-16 md:pb-24 max-w-6xl">
          <FadeIn className="max-w-3xl">
            <h1 className={cn(EYEBROW, "mb-6")}>Symptoms &amp; treatment</h1>
            <p className="font-sans font-semibold text-4xl md:text-[3.25rem] md:leading-[1.08] text-foreground tracking-tight mb-7">
              Relief for all your symptoms
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed max-w-2xl mb-9">
              Dr Inga Taganova is a formally trained gynaecologist, specialist menopause lead and GP with over twenty years in women&apos;s health. She will help you find the evidence-based treatment that works for you.
            </p>
            <Link href="/book">
              <Button className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 h-12 text-sm font-medium">
                Book your consultation
              </Button>
            </Link>
          </FadeIn>
        </div>
      </RevealSection>

      {/* What we treat – centred, wrapping pill cloud */}
      <RevealSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-12 md:mb-16">
            <p className={cn(EYEBROW, "mb-5")}>What we treat</p>
            <h2 className="font-sans font-semibold text-3xl md:text-[2.5rem] md:leading-[1.15] text-foreground tracking-tight mb-5">
              Here for the entire transition
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              From perimenopause to post-menopause. Select a symptom to see what is happening in your body and exactly which treatments we recommend for it.
            </p>
          </FadeIn>

          <FadeIn>
            <div
              className="flex flex-wrap justify-center gap-x-3 gap-y-4 mb-12 md:mb-16"
              role="tablist"
              aria-label="Menopause symptoms"
            >
              {symptoms.map((symptom) => {
                const isActive = symptom.id === active.id;
                return (
                  <button
                    key={symptom.id}
                    type="button"
                    role="tab"
                    id={`symptom-tab-${symptom.id}`}
                    aria-selected={isActive}
                    aria-controls="symptom-detail"
                    onClick={() => setActiveId(symptom.id)}
                    className={cn(
                      "inline-flex items-center gap-3 rounded-2xl border px-5 py-3.5 transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
                      isActive
                        ? "border-primary bg-white"
                        : "border-primary/20 hover:border-primary/50 hover:bg-white/60"
                    )}
                  >
                    <SymptomIcon name={symptom.icon} className="h-8 w-8" />
                    <span
                      className={cn(
                        "text-[15px] whitespace-nowrap transition-colors duration-300",
                        isActive ? "text-primary font-medium" : "text-foreground/80"
                      )}
                    >
                      {symptom.label}
                    </span>
                  </button>
                );
              })}
            </div>
          </FadeIn>

          {/* Selected symptom – what is happening, and what we recommend */}
          <div
            id="symptom-detail"
            role="tabpanel"
            aria-labelledby={`symptom-tab-${active.id}`}
            className="max-w-4xl mx-auto rounded-3xl border border-primary/15 bg-white p-7 md:p-11"
          >
            <motion.div
              key={active.id}
              initial={reduced ? false : { opacity: 0, y: 10 }}
              animate={reduced ? false : { opacity: 1, y: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="text-center max-w-2xl mx-auto">
                <SymptomIcon name={active.icon} className="h-12 w-12 mx-auto mb-5" />
                <h3 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-4">
                  {active.label}
                </h3>
                <p className="text-[15px] text-muted-foreground leading-relaxed">
                  {active.whatsHappening}
                </p>
              </div>

              <div className="mt-10 pt-9 border-t border-primary/10">
                <p className={cn(EYEBROW, "text-center mb-8")}>What we recommend</p>
                <ul className="space-y-6">
                  {active.recommended.map((rec) => (
                    <li key={rec.href} className="sm:flex sm:gap-8">
                      <Link
                        href={rec.href}
                        className="group block shrink-0 sm:w-64 text-[15px] font-medium text-primary hover:text-secondary transition-colors"
                      >
                        {rec.name}{" "}
                        <span className="inline-block transition-transform duration-300 group-hover:translate-x-1">
                          →
                        </span>
                      </Link>
                      <p className="mt-1.5 sm:mt-0 text-sm text-muted-foreground leading-relaxed">
                        {rec.why}
                      </p>
                    </li>
                  ))}
                </ul>
                {active.note ? (
                  <p className="mt-9 pt-6 border-t border-primary/10 text-sm text-muted-foreground leading-relaxed italic">
                    {active.note}
                  </p>
                ) : null}
              </div>
            </motion.div>
          </div>
        </div>
      </RevealSection>

      {/* Full-width image band */}
      <div className="group bg-muted/50">
        <ParallaxImage
          src={bandImg}
          alt="Two women laughing together outdoors in Oxford"
          className="h-[38vh] md:h-[52vh] w-full"
        />
      </div>

      {/* Personalised care – left aligned beside image */}
      <RevealSection className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn>
              <p className={cn(EYEBROW, "mb-5")}>Personalised care</p>
              <h2 className="font-sans font-semibold text-3xl md:text-[2.5rem] md:leading-[1.15] text-foreground tracking-tight mb-6">
                Evidence-based treatment built around your symptoms
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-5">
                Most women arrive having been given ten minutes and a prescription, or a treatment menu and a price list. Neither answers the question you came with.
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-8">
                Because Dr Inga trained in gynaecology, general practice and aesthetic medicine, your hormonal health, metabolic health and skin are considered together – in one 45-minute consultation, by one doctor, with a written plan you take away.
              </p>
              <Link href="/how-we-help">
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 text-sm font-medium border-primary/20 text-primary hover:bg-primary/5"
                >
                  How we help
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={0.1} className="group order-first lg:order-last">
              <ParallaxImage
                src={careImg}
                alt="A woman at ease in midlife"
                className="rounded-3xl aspect-[4/5]"
              />
            </FadeIn>
          </div>
        </div>
      </RevealSection>

      {/* Our treatments – centred, borderless columns */}
      <RevealSection className="bg-muted/50 py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="text-center max-w-2xl mx-auto mb-14 md:mb-20">
            <p className={cn(EYEBROW, "mb-5")}>Our treatments</p>
            <h2 className="font-sans font-semibold text-3xl md:text-[2.5rem] md:leading-[1.15] text-foreground tracking-tight">
              Wrap-around support for all your symptoms
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-14">
            {treatmentApproaches.map((approach, i) => (
              <FadeIn key={approach.id} delay={i * 0.05}>
                <div className="text-center px-2">
                  <SymptomIcon name={approach.icon} className="h-16 w-16 mx-auto mb-6" />
                  <h3 className="font-sans font-semibold text-[17px] text-foreground tracking-tight mb-3">
                    {approach.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {approach.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.1}>
            <p className="text-xs text-muted-foreground leading-relaxed text-center max-w-3xl mx-auto mt-16">
              All care is delivered by Dr Inga Taganova, GMC-registered (No. 4727817), and guided by NICE and British Menopause Society recommendations. Medicines are prescribed only where clinically appropriate and are UK-licensed. Where a symptom needs investigation or specialist input beyond this clinic, we will tell you and refer you promptly.
            </p>
          </FadeIn>
        </div>
      </RevealSection>

      {/* In-person care */}
      <RevealSection className="bg-white py-16 md:py-24">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <FadeIn className="group">
              <ParallaxImage
                src={clinicImg}
                alt="Woodstock Road, Oxford, near the clinic"
                className="rounded-3xl aspect-[5/4]"
              />
            </FadeIn>
            <FadeIn delay={0.1}>
              <p className={cn(EYEBROW, "mb-5")}>In-person care</p>
              <h2 className="font-sans font-semibold text-3xl md:text-[2.5rem] md:leading-[1.15] text-foreground tracking-tight mb-6">
                Seen in the centre of Oxford
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed mb-7">
                Consultations and treatments take place at our clinic on Woodstock Road, a short walk from St Giles&apos;. Every appointment is with Dr Inga personally – you will not be passed between practitioners.
              </p>
              <p className="text-sm text-foreground font-medium">Belsyre Court</p>
              <p className="text-sm text-muted-foreground">57 Woodstock Rd, Oxford OX2 6HJ</p>
              <Link
                href="/contact#parking"
                className="inline-block mt-6 text-sm font-medium text-primary hover:text-secondary transition-colors"
              >
                Directions and parking →
              </Link>
            </FadeIn>
          </div>
        </div>
      </RevealSection>

      {/* Get started / Reach out */}
      <RevealSection className="bg-muted/50 py-16 md:py-20">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid md:grid-cols-2 gap-12 md:gap-8">
            <FadeIn className="text-center">
              <p className={cn(EYEBROW, "mb-4")}>Get started</p>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-7">
                Schedule your appointment
              </h2>
              <Link href="/book">
                <Button className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-8 h-12 text-sm font-medium">
                  Book now
                </Button>
              </Link>
            </FadeIn>
            <FadeIn delay={0.08} className="text-center">
              <p className={cn(EYEBROW, "mb-4")}>Reach out</p>
              <h2 className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-7">
                Speak to us first
              </h2>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="rounded-full px-8 h-12 text-sm font-medium border-primary/20 text-primary hover:bg-primary/5"
                >
                  Contact us
                </Button>
              </Link>
              <p className="text-sm text-muted-foreground mt-5">
                Or call{" "}
                <a href="tel:+4407739309380" className="text-primary hover:text-secondary">
                  07739 309380
                </a>
              </p>
            </FadeIn>
          </div>
        </div>
      </RevealSection>
    </div>
  );
}
