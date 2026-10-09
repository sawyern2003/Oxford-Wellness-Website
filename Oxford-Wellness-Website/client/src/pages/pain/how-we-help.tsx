import { Link } from "wouter";
import FadeIn from "@/components/animations/FadeIn";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Button } from "@/components/ui/button";
import { PAIN_BOOK_HREF } from "@/lib/brand";

const approachAreas = [
  {
    title: "Medical",
    items: ["Diagnosis", "Medication", "Nervous system", "Previous treatments"],
  },
  {
    title: "Movement & body",
    items: ["Function", "Mobility", "Exercise", "Rehabilitation"],
  },
  {
    title: "Mind & life",
    items: ["Sleep", "Mood", "Work", "Personal goals"],
  },
];

const careIncludes = [
  {
    title: "Medical treatment",
    body: "Medication review and specialist medical management.",
  },
  {
    title: "Movement & rehabilitation",
    body: "Exercise and physiotherapy built around your goals.",
  },
  {
    title: "Pain education",
    body: "Understanding why pain persists is part of managing it.",
  },
  {
    title: "Psychological support",
    body: "The relationship between pain, mood, behaviour and confidence.",
  },
  {
    title: "Sleep & lifestyle",
    body: "Pacing, recovery and the routines that affect pain.",
  },
  {
    title: "Interventional treatment",
    body: "Injections, radiofrequency and neuromodulation where indicated.",
  },
];

export default function PainHowWeHelp() {
  useBreadcrumbSchema([
    { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
    { name: "How We Help", path: "/oxford-pain-doctor/how-we-help" },
  ]);
  useSEO({
    title: "Our Approach to Pain | The Oxford Pain Doctor",
    description:
      "Evidence-led, whole-person pain medicine with Dr Richard Sawyer in Oxford – specialist assessment, a personalised Pain Care Plan, and the right combination of care.",
    canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/how-we-help",
  });

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12 md:py-16 max-w-6xl">
        <div id="approach" className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center mb-16">
          <FadeIn className="lg:col-span-6">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Our approach
            </p>
            <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-5 leading-snug">
              Understanding{" "}
              <span className="text-secondary">more than where it hurts</span>
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
              Persistent pain is rarely explained by one factor alone. Care begins by understanding the person, not by choosing a treatment.
            </p>
          </FadeIn>

          <FadeIn delay={0.08} className="lg:col-span-6">
            <ul className="rounded-3xl bg-muted/60 p-7 md:p-8 space-y-4 text-[15px] text-foreground/80">
              <li>An unhurried assessment, not a quick decision about a procedure.</li>
              <li>A look at what you have tried, and why it did or didn&apos;t help.</li>
              <li>An honest view on what isn&apos;t worth pursuing.</li>
            </ul>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-6">
          {approachAreas.map((area, i) => (
            <FadeIn key={area.title} delay={i * 0.06}>
              <div className="bg-muted/60 rounded-3xl p-7 md:p-8 h-full">
                <h2 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">
                  {area.title}
                </h2>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  {area.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mb-16 md:mb-20">
          <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-8 text-center">
            <p className="font-sans font-semibold text-2xl md:text-3xl tracking-tight">
              Your personalised Pain Care Plan
            </p>
          </div>
        </FadeIn>

        <FadeIn className="max-w-xl mb-10">
          <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-4 leading-snug">
            The right combination, for the right person
          </h2>
          <p className="text-[15px] text-muted-foreground leading-relaxed">
            There is no single treatment for persistent pain. Your plan may draw on any of these.
          </p>
        </FadeIn>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-16 md:mb-20">
          {careIncludes.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.04}>
              <div className="bg-white rounded-3xl p-6 md:p-7 h-full ring-1 ring-border">
                <h3 className="font-sans font-semibold text-base text-foreground tracking-tight mb-2">
                  {item.title}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{item.body}</p>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn>
          <div className="rounded-3xl bg-muted/60 p-8 md:p-12">
            <h2 className="font-sans font-semibold text-3xl text-foreground tracking-tight mb-4 leading-snug max-w-2xl">
              Procedures have a place. They are not always the starting point.
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-2xl">
              Dr Sawyer recommends a procedure only where the diagnosis, the evidence and your circumstances suggest it will make a real difference.
            </p>
            <Link href={PAIN_BOOK_HREF}>
              <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 h-11 text-sm font-medium">
                Book a consultation
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </div>
  );
}
