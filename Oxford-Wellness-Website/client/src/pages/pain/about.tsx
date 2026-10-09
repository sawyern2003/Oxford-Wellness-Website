import { Link } from "wouter";
import { useEffect } from "react";
import { motion } from "framer-motion";
import FadeIn from "@/components/animations/FadeIn";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { PAIN_BOOK_HREF } from "@/lib/brand";
import drRichard from "@/assets/pain/dr-richard-sawyer.jpg";

const timeline = [
  { year: "1989", text: "MB BCh, University of the Witwatersrand, Johannesburg" },
  { year: "1997", text: "FRCA – Fellow of the Royal College of Anaesthetists" },
  { year: "2002", text: "Consultant in Plymouth; later Clinical Lead in Pain Medicine" },
  { year: "2005", text: "Fellowship of Interventional Pain Practice (World Institute of Pain)" },
  { year: "2008", text: "FFPMRCA – Faculty of Pain Medicine" },
  { year: "2013", text: "Consultant, Oxford University Hospitals" },
  { year: "2019", text: "LLM, Masters in Medical Law" },
];

export default function AboutDrRichard() {
  useBreadcrumbSchema([
    { name: "The Oxford Pain Doctor", path: "/oxford-pain-doctor" },
    { name: "About Dr Richard Sawyer", path: "/oxford-pain-doctor/about" },
  ]);
  useSEO({
    title: "Dr Richard Sawyer | Consultant in Pain Medicine Oxford",
    description:
      "Dr Richard Sawyer, Consultant in Anaesthesia and Pain Medicine at Oxford University Hospitals. Over 30 years in pain medicine. The Oxford Pain Doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/about",
  });

  useEffect(() => {
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "pain-physician-schema";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Physician",
      name: "Dr Richard Sawyer",
      description:
        "Consultant in Anaesthesia and Pain Medicine. Specialist pain service at The Oxford Pain Doctor, within The Oxford Wellness Doctor.",
      url: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor/about",
      identifier: {
        "@type": "PropertyValue",
        name: "GMC Number",
        value: "03640384",
      },
      medicalSpecialty: ["Pain Medicine", "Anaesthetics"],
      worksFor: {
        "@type": "MedicalBusiness",
        name: "The Oxford Pain Doctor",
        url: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor",
      },
    });
    document.head.appendChild(schema);
    return () => {
      document.getElementById("pain-physician-schema")?.remove();
    };
  }, []);

  return (
    <div className="pt-28 min-h-screen bg-white">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
            Your consultant
          </p>
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight mb-12 max-w-2xl leading-snug">
            Dr Richard Sawyer
          </h1>

          <div className="flex flex-wrap gap-x-10 gap-y-4 mb-16 text-sm text-muted-foreground">
            <p>
              <span className="font-sans font-semibold text-2xl text-foreground tracking-tight mr-2">30+</span>
              years in pain medicine
            </p>
            <p>
              <span className="font-sans font-semibold text-2xl text-foreground tracking-tight mr-2">GMC</span>
              No. 03640384
            </p>
            <p>Consultant in Anaesthesia &amp; Pain Medicine</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-start mb-20">
            <FadeIn
              direction="right"
              className="lg:col-span-7 space-y-6 text-muted-foreground text-[15px] md:text-base leading-relaxed"
            >
              <p className="text-2xl text-foreground font-sans font-semibold tracking-tight leading-snug">
                Understanding why pain persists – before deciding what to do about it.
              </p>
              <p>
                Dr Richard Sawyer is a Consultant in Anaesthesia and Pain Medicine at Oxford University Hospitals, and has been a member of the International Association for the Study of Pain for over 30 years.
              </p>
              <p>
                Consultations take place at Belsyre Court on Woodstock Road, and are with Dr Sawyer personally.
              </p>
              <blockquote className="font-sans text-xl text-foreground leading-relaxed tracking-tight pt-2">
                &ldquo;My role is not simply to offer a procedure. It is to understand why pain is persisting – and which approaches have the best evidence of helping.&rdquo;
              </blockquote>
            </FadeIn>

            <FadeIn direction="left" delay={0.15} className="lg:col-span-5">
              <div className="bg-muted/70 rounded-3xl p-5 md:p-6 max-w-sm mx-auto lg:ml-auto">
                <img
                  src={drRichard}
                  alt="Dr Richard Sawyer, Consultant in Anaesthesia and Pain Medicine"
                  className="w-full aspect-[4/3] object-cover object-top rounded-2xl bg-white"
                  width="476"
                  height="357"
                />
                <div className="pt-5">
                  <p className="font-sans font-semibold text-lg text-foreground tracking-tight">
                    Dr Richard Sawyer
                  </p>
                  <p className="text-sm text-muted-foreground">
                    MB BCh · FRCA · FIPP · FFPMRCA · LLM
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>

          <FadeIn className="mb-20">
            <h2 className="font-sans font-semibold text-3xl text-foreground tracking-tight mb-8">
              Training and appointments
            </h2>
            <ol className="rounded-3xl bg-muted/50 p-6 md:p-10 space-y-0">
              {timeline.map((item, i) => (
                <li
                  key={item.year}
                  className={`grid grid-cols-[4.5rem_1fr] md:grid-cols-[7rem_1fr] gap-4 md:gap-8 py-4 ${
                    i === 0 ? "" : "border-t border-border"
                  }`}
                >
                  <p className="font-sans font-semibold text-foreground text-sm md:text-base">{item.year}</p>
                  <p className="text-[15px] text-muted-foreground leading-relaxed">{item.text}</p>
                </li>
              ))}
            </ol>
          </FadeIn>

          <FadeIn className="mb-4">
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-12 grid lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-7">
                <h2 className="font-sans font-semibold text-3xl tracking-tight mb-4">Appointments</h2>
                <p className="text-primary-foreground/75 leading-relaxed mb-6 max-w-xl text-[15px]">
                  Care begins with a specialist assessment, followed by a written Pain Care Plan.
                </p>
                <address className="not-italic text-sm text-primary-foreground/70 space-y-0.5">
                  <p className="text-primary-foreground font-medium">The Oxford Pain Doctor</p>
                  <p>Belsyre Court, 57 Woodstock Rd</p>
                  <p>Oxford OX2 6HJ</p>
                </address>
              </div>
              <div className="lg:col-span-5 lg:text-right">
                <Link href={PAIN_BOOK_HREF}>
                  <Button className="rounded-full bg-white text-primary hover:bg-white/90 px-8 h-11 text-sm font-medium">
                    Book a consultation
                  </Button>
                </Link>
              </div>
            </div>
          </FadeIn>
        </motion.div>
      </div>
    </div>
  );
}
