import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import ParallaxImage from "@/components/animations/ParallaxImage";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import {
  treatmentMenuExtras,
  treatmentTypes,
  treatmentsIntro,
} from "@/data/treatmentMenu";

export default function Services() {
  useBreadcrumbSchema([{ name: "Treatments", path: "/treatments" }]);
  useSEO({
    title: "Treatments | The Oxford Wellness Doctor",
    description:
      "Women's health, skin and aesthetics, and weight and body care with Dr Inga Taganova at Belsyre Court, Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/treatments",
  });

  return (
    <div className="min-h-screen bg-white pt-28">
      <div className="container-page py-12 pb-16 md:py-16 md:pb-24">
        <FadeIn className="mb-4 max-w-2xl md:mb-8">
          <p className="mb-4 text-[11px] font-medium uppercase tracking-[0.18em] text-muted-foreground">
            The clinic
          </p>
          <h1 className="mb-4 font-sans text-4xl font-semibold leading-snug tracking-tight text-foreground md:text-5xl">
            Treatments
          </h1>
          <p className="max-w-2xl text-[15px] leading-relaxed text-muted-foreground">{treatmentsIntro}</p>
        </FadeIn>

        {treatmentTypes.map((type, index) => {
          const flip = index % 2 === 1;
          const imageClass = flip ? "md:col-start-8 md:col-span-5" : "md:col-span-5";
          const textClass = flip ? "md:col-span-6" : "md:col-start-7 md:col-span-6";
          const sectionId = type.id === "anti-wrinkle" ? "skin" : type.id;
          const columns =
            type.items.length >= 4
              ? "sm:grid-cols-2 xl:grid-cols-4"
              : type.items.length === 3
                ? "sm:grid-cols-3"
                : "sm:grid-cols-2";

          return (
            <section
              key={type.id}
              id={sectionId}
              className="scroll-mt-28 py-12 md:py-16"
            >
              <div className="grid items-center gap-8 md:grid-cols-12 md:gap-x-10">
                <div className={imageClass}>
                  <ParallaxImage
                    src={type.image}
                    alt={type.imageAlt}
                    className="aspect-[4/3] border border-border bg-white"
                    loading={index === 0 ? "eager" : "lazy"}
                  />
                </div>
                <div className={`${textClass} max-w-xl`}>
                  <h2 className="font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
                    {type.title}
                  </h2>
                  <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
                    {type.intro}
                  </p>
                </div>
              </div>
              <ul className={`mt-10 grid gap-x-8 gap-y-6 ${columns}`}>
                {type.items.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className="font-sans text-lg font-semibold tracking-tight text-foreground transition-colors hover:text-secondary"
                    >
                      {item.name}
                    </Link>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-muted-foreground">
                      {item.description}
                    </p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}

        <section id="plans" className="scroll-mt-28 max-w-2xl pt-4 md:pt-8">
          <h2 className="font-sans text-3xl font-semibold leading-snug tracking-tight text-foreground md:text-4xl">
            Personalised Treatment Plans
          </h2>
          <p className="mt-4 max-w-[62ch] text-[15px] leading-relaxed text-muted-foreground">
            Some concerns benefit from a coordinated approach rather than a single treatment. Following
            consultation, Dr Inga can recommend a personalised treatment plan based on your needs, preferences
            and clinical suitability.
          </p>
          <Link href="/personalised-treatment-plans" className="mt-6 inline-block">
            <Button className="h-11 rounded-full bg-secondary px-7 text-sm font-medium text-white hover:bg-secondary/90">
              Discuss a treatment plan
            </Button>
          </Link>
          <ul className="mt-8 space-y-2.5">
            {treatmentMenuExtras
              .filter((item) => item.href !== "/personalised-treatment-plans")
              .map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="text-[15px] text-primary/70 transition-colors hover:text-secondary"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
          </ul>
        </section>
      </div>
    </div>
  );
}
