import { useEffect } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import FadeIn from "@/components/animations/FadeIn";
import RevealSection from "@/components/animations/RevealSection";
import { useSEO } from "@/hooks/useSEO";
import { PAIN_BOOK_HREF, PAIN_CONTACT_HREF } from "@/lib/brand";
import { painLibraryArticles } from "@/data/painLibrary";

const credentials = [
  "Consultant in Anaesthesia & Pain Medicine",
  "Oxford University Hospitals",
  "Fellow of the Faculty of Pain Medicine",
  "Member of the IASP for over 30 years",
];

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

const conditions = [
  { title: "Back & spinal pain", body: "Persistent low back, neck and spinal pain." },
  { title: "Nerve pain", body: "Neuropathic pain, nerve injury and pain after surgery." },
  { title: "Complex pain", body: "Pain lasting months or years, including CRPS." },
  { title: "Pain after treatment", body: "A fresh opinion when earlier treatment hasn't helped." },
];

const careIncludes = [
  "Medical treatment and medication review",
  "Movement and rehabilitation",
  "Pain education",
  "Psychological and behavioural support",
  "Sleep and lifestyle",
  "Procedures, where appropriate",
];

const steps = [
  { title: "Enquiry", desc: "Tell us what you have tried." },
  { title: "Assessment", desc: "A full consultation with Dr Sawyer." },
  { title: "Your plan", desc: "Written, and specific to you." },
  { title: "Care", desc: "Coordinated where needed." },
  { title: "Review", desc: "Progress checked and adjusted." },
];

export default function OxfordPainDoctorHome() {
  useSEO({
    title: "Consultant-Led Pain Medicine Oxford | The Oxford Pain Doctor",
    description:
      "Specialist assessment and a personalised Pain Care Plan with Dr Richard Sawyer in Oxford – evidence-led, whole-person care for persistent and chronic pain.",
    canonical: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor",
  });

  useEffect(() => {
    const schema = document.createElement("script");
    schema.type = "application/ld+json";
    schema.id = "pain-home-schema";
    schema.text = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "MedicalBusiness",
      name: "The Oxford Pain Doctor",
      description:
        "Specialist pain service within The Oxford Wellness Doctor, led by Dr Richard Sawyer, Consultant in Anaesthesia and Pain Medicine.",
      url: "https://www.theoxfordwellnessdoctor.com/oxford-pain-doctor",
      parentOrganization: {
        "@type": "MedicalBusiness",
        name: "The Oxford Wellness Doctor",
        url: "https://www.theoxfordwellnessdoctor.com",
      },
    });
    document.head.appendChild(schema);
    return () => {
      document.getElementById("pain-home-schema")?.remove();
    };
  }, []);

  return (
    <>
      {/* Hero */}
      <RevealSection className="pt-28 md:pt-36 pb-14 md:pb-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
              The Oxford Pain Doctor
            </p>
            <h1 className="font-sans font-semibold text-[2.15rem] sm:text-4xl md:text-[3rem] leading-[1.15] text-foreground tracking-tight mb-5 max-w-3xl">
              Living with pain is complicated.{" "}
              <span className="text-secondary">Your care shouldn&apos;t be.</span>
            </h1>
            <p className="text-base text-muted-foreground leading-relaxed mb-8 max-w-lg">
              Consultant-led, evidence-based care for persistent pain with Dr Richard Sawyer in Oxford.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href={PAIN_BOOK_HREF}>
                <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-7 h-11 text-sm font-medium w-full sm:w-auto">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/oxford-pain-doctor/how-we-help">
                <Button
                  variant="outline"
                  className="rounded-full border-border bg-white px-7 h-11 text-sm font-medium w-full sm:w-auto"
                >
                  Our approach
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </RevealSection>

      {/* At a glance */}
      <RevealSection className="pb-4 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid sm:grid-cols-3 gap-px bg-border rounded-3xl overflow-hidden">
            {[
              { stat: "30+", label: "years in pain medicine" },
              { stat: "FFPMRCA", label: "Faculty of Pain Medicine" },
              { stat: "OUH", label: "Oxford University Hospitals" },
            ].map((item) => (
              <div key={item.stat} className="bg-white px-6 py-6 sm:py-8">
                <p className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-1">
                  {item.stat}
                </p>
                <p className="text-sm text-muted-foreground">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Your consultant */}
      <RevealSection className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-7">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                Your consultant
              </p>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight leading-snug mb-6">
                Over 30 years in pain medicine
              </h2>
              <blockquote className="font-sans text-lg md:text-xl text-foreground leading-relaxed tracking-tight mb-8 max-w-lg">
                &ldquo;My role is not simply to offer a procedure. It is to understand why pain is persisting – and which approaches have the best evidence of helping.&rdquo;
              </blockquote>
              <Link href="/oxford-pain-doctor/about">
                <Button variant="outline" className="rounded-full border-border bg-white px-7 h-11 text-sm">
                  About Dr Richard
                </Button>
              </Link>
            </FadeIn>

            <FadeIn delay={0.08} className="lg:col-span-5">
              <ul className="bg-white rounded-3xl p-7 md:p-8 space-y-3.5">
                {credentials.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-foreground/80">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/15 text-secondary flex-shrink-0 mt-0.5">
                      <Check size={14} strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </FadeIn>
          </div>
        </div>
      </RevealSection>

      {/* Approach */}
      <RevealSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="max-w-xl mb-12">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Our approach
            </p>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight leading-snug mb-5">
              Understanding{" "}
              <span className="text-secondary">more than where it hurts</span>
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Persistent pain is rarely explained by one factor alone. Dr Sawyer looks at three together.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-5 md:gap-6 mb-6">
            {approachAreas.map((area, i) => (
              <FadeIn key={area.title} delay={i * 0.07}>
                <div className="hover-card bg-muted/60 rounded-3xl p-7 md:p-8 h-full">
                  <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-4">
                    {area.title}
                  </h3>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {area.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn>
            <div className="rounded-3xl bg-primary text-primary-foreground px-6 py-8 text-center">
              <p className="font-sans font-semibold text-2xl md:text-3xl tracking-tight">
                Your personalised Pain Care Plan
              </p>
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      {/* Conditions */}
      <RevealSection className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-12">
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight">
              Pain we commonly see
            </h2>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {conditions.map((c, i) => (
              <FadeIn key={c.title} delay={i * 0.06}>
                <div className="hover-card bg-white rounded-3xl p-6 md:p-7 h-full">
                  <h3 className="font-sans font-semibold text-base text-foreground tracking-tight mb-2">
                    {c.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{c.body}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* The plan */}
      <RevealSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-14">
            <FadeIn>
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
                What we do
              </p>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight leading-snug mb-5">
                One assessment.{" "}
                <span className="text-secondary">One personalised plan.</span>
              </h2>
              <p className="text-[15px] text-muted-foreground leading-relaxed max-w-md">
                Most people arrive having already tried several things. You leave with a written plan setting out what is worth doing next.
              </p>
            </FadeIn>

            <FadeIn delay={0.1}>
              <div className="bg-muted/60 rounded-3xl p-7 md:p-8">
                <p className="text-xs text-secondary font-medium mb-5">Care can include</p>
                <ul className="space-y-3.5">
                  {careIncludes.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-foreground/80">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary/15 text-secondary flex-shrink-0 mt-0.5">
                        <Check size={14} strokeWidth={2.5} />
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <FadeIn key={step.title} delay={i * 0.05}>
                <div>
                  <p className="text-secondary font-semibold text-sm mb-2">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="font-sans font-semibold text-base text-foreground mb-1.5">
                    {step.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.desc}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </RevealSection>

      {/* Evidence */}
      <RevealSection className="py-16 md:py-24 bg-muted/60">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn>
            <div className="rounded-3xl bg-primary text-primary-foreground p-8 md:p-14 mb-6 text-center">
              <p className="font-sans font-semibold text-2xl md:text-3xl tracking-tight leading-snug max-w-3xl mx-auto">
                The aim is not to offer the greatest number of treatments. It is to identify the right ones.
              </p>
            </div>
          </FadeIn>

          <FadeIn delay={0.06}>
            <div className="bg-white rounded-3xl p-7 md:p-10 grid lg:grid-cols-12 gap-6 lg:gap-12 items-center">
              <h3 className="lg:col-span-6 font-sans font-semibold text-2xl text-foreground tracking-tight leading-snug">
                Procedures have a place. They are not always the starting point.
              </h3>
              <p className="lg:col-span-6 text-[15px] text-muted-foreground leading-relaxed">
                Injections, radiofrequency and neuromodulation help the right patients. Dr Sawyer recommends them only where the evidence and your circumstances suggest they will make a real difference.
              </p>
            </div>
          </FadeIn>
        </div>
      </RevealSection>

      {/* Pricing */}
      <RevealSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="mb-12">
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight">
              Fees
            </h2>
          </FadeIn>

          <div className="grid lg:grid-cols-2 gap-5 md:gap-6 mb-6">
            <FadeIn>
              <div className="hover-card bg-muted/60 rounded-3xl p-7 md:p-8 h-full flex flex-col">
                <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-2">
                  Specialist consultation
                </h3>
                <p className="font-sans font-semibold text-3xl text-foreground mb-4">£395</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                  Assessment, diagnosis or a second opinion, with initial recommendations.
                </p>
                <Link href={PAIN_BOOK_HREF}>
                  <Button
                    variant="outline"
                    className="rounded-full border-border bg-white px-7 h-11 text-sm font-medium w-full sm:w-auto"
                  >
                    Book
                  </Button>
                </Link>
              </div>
            </FadeIn>

            <FadeIn delay={0.06}>
              <div className="hover-card bg-muted/60 rounded-3xl p-7 md:p-8 h-full flex flex-col ring-1 ring-secondary/40">
                <p className="text-xs text-secondary font-medium mb-3">For persistent pain</p>
                <h3 className="font-sans font-semibold text-xl text-foreground tracking-tight mb-2">
                  Comprehensive assessment &amp; care plan
                </h3>
                <p className="font-sans font-semibold text-3xl text-foreground mb-4">£595</p>
                <p className="text-sm text-muted-foreground leading-relaxed mb-8 flex-grow">
                  A 90-minute consultant assessment and a written Pain Care Plan.
                </p>
                <Link href={PAIN_BOOK_HREF}>
                  <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-7 h-11 text-sm font-medium w-full sm:w-auto">
                    Book
                  </Button>
                </Link>
              </div>
            </FadeIn>
          </div>

          <div className="grid sm:grid-cols-2 gap-5 md:gap-6">
            <FadeIn>
              <div className="bg-muted/60 rounded-3xl p-6 md:p-7 h-full flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-sans font-semibold text-base text-foreground tracking-tight mb-1">
                    Follow-up
                  </h3>
                  <p className="text-sm text-muted-foreground">Review and adjust your plan.</p>
                </div>
                <p className="font-sans font-semibold text-2xl text-foreground whitespace-nowrap">£225</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.05}>
              <div className="bg-muted/60 rounded-3xl p-6 md:p-7 h-full flex items-center justify-between gap-4">
                <div>
                  <h3 className="font-sans font-semibold text-base text-foreground tracking-tight mb-1">
                    The Oxford Pain Programme
                  </h3>
                  <p className="text-sm text-muted-foreground">A structured, coordinated pathway.</p>
                </div>
                <p className="font-sans font-semibold text-2xl text-foreground whitespace-nowrap">
                  From £2,995
                </p>
              </div>
            </FadeIn>
          </div>

          <p className="text-xs text-muted-foreground mt-6">
            Investigations, medication, hospital fees and procedures are charged separately.
          </p>
        </div>
      </RevealSection>

      {/* The Oxford Pain Programme */}
      <RevealSection className="py-16 md:py-20 bg-primary text-primary-foreground">
        <div className="container mx-auto px-6 max-w-6xl">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
            <FadeIn className="lg:col-span-6">
              <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-primary-foreground/60 mb-4">
                The Oxford Pain Programme
              </p>
              <h2 className="font-sans font-semibold text-3xl md:text-4xl tracking-tight leading-snug">
                More than a series of appointments
              </h2>
            </FadeIn>
            <FadeIn delay={0.08} className="lg:col-span-6">
              <p className="text-primary-foreground/80 text-[15px] leading-relaxed mb-8">
                A structured, consultant-led pathway for pain that has started to affect work, sleep, movement and everyday life – built around what you want to get back to.
              </p>
              <Link href={`${PAIN_CONTACT_HREF}?subject=${encodeURIComponent("The Oxford Pain Programme")}`}>
                <Button className="rounded-full bg-white text-primary hover:bg-white/90 px-8 h-11 text-sm font-medium">
                  Ask about the Programme
                </Button>
              </Link>
            </FadeIn>
          </div>
        </div>
      </RevealSection>

      {/* Pain Library */}
      <RevealSection className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <FadeIn className="max-w-2xl mb-10">
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-4">
              Learn
            </p>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-4">
              The Oxford Pain Library
            </h2>
            <p className="text-[15px] text-muted-foreground leading-relaxed">
              Original articles on persistent pain – written here for patients, not as a list of links elsewhere.
            </p>
          </FadeIn>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {painLibraryArticles.map((article, i) => (
              <FadeIn key={article.slug} delay={i * 0.04}>
                <Link
                  href={`/oxford-pain-doctor/library/${article.slug}`}
                  className="hover-card group flex h-full items-center bg-muted/60 hover:bg-muted rounded-2xl px-6 py-5"
                >
                  <h3 className="font-sans font-medium text-[15px] text-foreground leading-snug tracking-tight group-hover:text-secondary transition-colors">
                    {article.title}
                  </h3>
                </Link>
              </FadeIn>
            ))}
          </div>
          <FadeIn className="mt-8">
            <Link
              href="/oxford-pain-doctor/library"
              className="text-sm font-medium text-primary hover:text-secondary"
            >
              Browse all articles →
            </Link>
          </FadeIn>
        </div>
      </RevealSection>

      {/* Final CTA */}
      <RevealSection className="py-16 md:py-20 bg-muted/60">
        <div className="container mx-auto px-6 max-w-2xl text-center">
          <FadeIn>
            <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight mb-4 leading-snug">
              When pain has persisted, the next step is understanding why
            </h2>
            <p className="text-[15px] text-muted-foreground mb-8 leading-relaxed">
              Book a consultation with Dr Sawyer, or send a message with your question.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href={PAIN_BOOK_HREF}>
                <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/90 px-8 h-11 text-sm font-medium w-full sm:w-auto">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/oxford-pain-doctor/how-we-help">
                <Button
                  variant="outline"
                  className="rounded-full border-border bg-white px-8 h-11 text-sm w-full sm:w-auto"
                >
                  Our approach
                </Button>
              </Link>
            </div>
          </FadeIn>
        </div>
      </RevealSection>
    </>
  );
}
