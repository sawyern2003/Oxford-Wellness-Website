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
import { useJsonLdSchema, createMedicalClinicSchema } from "@/hooks/useJsonLdSchema";
import { programmes } from "@/data/programmes";
import { featuredTreatments } from "@/data/treatmentsNav";
import PatientJourney from "@/components/home/PatientJourney";
import SupplierLogos from "@/components/home/SupplierLogos";

const programmeImage = (id: string) => programmes.find((item) => item.id === id)?.image ?? "";

const serviceAreas = [
  {
    title: "Women's Health & Menopause",
    href: "/treatments#womens-health",
    image: programmeImage("intimate-wellness"),
    body: "Menopause, perimenopause and intimate health, with treatment considered after assessment.",
  },
  {
    title: "Skin & Aesthetics",
    href: "/treatments#skin",
    image: programmeImage("skin-health-regeneration"),
    body: "Injectables, skin boosters and skin treatments carried out by Dr Inga.",
  },
  {
    title: "Weight & Body",
    href: "/treatments#body",
    image: programmeImage("weight-body-confidence"),
    body: "Doctor-led weight loss consultation and non-surgical body contouring for improved confidence and wellbeing.",
  },
];

export default function Home() {
  useSEO({
    title: "Women's Health, Menopause & Longevity Clinic Oxford | The Oxford Wellness Doctor",
    description:
      "Doctor-led women's health, menopause and longevity clinic in Oxford. Expert menopause care, intimate health and aesthetic treatments by Dr. Inga Taganova at The Oxford Wellness Doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/",
  });

  useJsonLdSchema(createMedicalClinicSchema(), "medical-clinic-schema");

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
                A private lead clinician with a background in obstetrics and gynaecology who takes time to understand what has changed – then builds a plan grounded in clinical judgement and natural-looking results.
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
            {serviceAreas.map((area, i) => {
              const treatmentLinks = i === 0 ? featuredTreatments.womensHealth : i === 1 ? featuredTreatments.skin : featuredTreatments.body;
              return (
                <FadeIn key={area.href} delay={i * 0.07}>
                  <div className="bg-white rounded-3xl overflow-hidden h-full flex flex-col">
                    <Link
                      href={area.href}
                      className="hover-card group block"
                    >
                      <ParallaxImage src={area.image} alt="" className="aspect-[4/3]" />
                      <div className="p-7 md:p-8 pb-4">
                        <h3 className="font-sans font-semibold text-xl text-primary mb-3 tracking-tight group-hover:text-secondary transition-colors">
                          {area.title}
                        </h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                          {area.body}
                        </p>
                        <span className="text-sm font-medium text-primary inline-flex items-center gap-1">
                          Learn more
                          <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                        </span>
                      </div>
                    </Link>
                    <div className="px-7 md:px-8 pb-7 md:pb-8 border-t border-border/50 pt-4 mt-auto">
                      <ul className="space-y-2">
                        {treatmentLinks.map((treatment) => (
                          <li key={treatment.href}>
                            <Link
                              href={treatment.href}
                              className="text-sm text-muted-foreground hover:text-primary transition-colors"
                            >
                              {treatment.name}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeIn>
              );
            })}
          </div>
        </div>
      </RevealSection>

      <PatientJourney />

      <SupplierLogos />

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
              Book a consultation with Dr Inga, or look through treatments and fees first.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/book">
                <Button
                  className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 h-11 text-sm font-medium"
                >
                  Book consultation
                </Button>
              </Link>
              <Link href="/pricing">
                <Button className="rounded-full bg-transparent border border-white/30 text-white hover:bg-white/10 px-8 h-11 text-sm w-full sm:w-auto">
                  Prices &amp; booking
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