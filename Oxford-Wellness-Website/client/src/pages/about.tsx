import { useRef, useState } from "react";
import { Link } from "wouter";
import { ArrowLeft, ArrowRight, Linkedin } from "lucide-react";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Button } from "@/components/ui/button";
import BioDisclosure from "@/components/about/BioDisclosure";
import SymptomIcon, { type IconName } from "@/components/symptoms/SymptomIcon";
import { BOOKING_HREF } from "@/lib/booking";
import { SHOW_PAIN_DOCTOR } from "@/lib/brand";
import belsyre from "@/assets/belsyre-court-exterior.jpg";
import ingaWatercolour from "@/assets/dr-inga-watercolour.png";
import richardWatercolour from "@/assets/dr-richard-sawyer-watercolour.jpg";
import nicholas from "@/assets/nicholas-sawyer-watercolour.jpg";
import hosted from "@/assets/hosted-aesthetics-2026.jpg";
import teacups from "@/assets/journey-teacups.png";

const ingaInterests: { label: string; icon: IconName }[] = [
  { label: "Menopause care", icon: "hot-flushes" },
  { label: "Intimate health", icon: "intimate" },
  { label: "Skin", icon: "skin" },
  { label: "Healthy ageing", icon: "ageing" },
];

const richardInterests: { label: string; icon: IconName }[] = [
  { label: "Chronic pain", icon: "joint-pain" },
  { label: "Back & spinal pain", icon: "spinal" },
  { label: "Nerve pain", icon: "nerve" },
  { label: "Complex pain", icon: "complex" },
];

function InterestPills({ items }: { items: { label: string; icon: IconName }[] }) {
  return (
    <ul className="flex max-w-[40rem] flex-wrap gap-x-3 gap-y-3">
      {items.map(({ label, icon }) => (
        <li
          key={label}
          className="inline-flex items-center gap-3 rounded-2xl border border-primary/20 bg-white px-4 py-3"
        >
          <SymptomIcon name={icon} className="h-8 w-8" />
          <span className="whitespace-nowrap text-[15px] text-foreground/80">{label}</span>
        </li>
      ))}
    </ul>
  );
}

function HostedCarousel() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [front, setFront] = useState(0);
  const [busy, setBusy] = useState(false);

  function flick() {
    if (busy) return;
    setBusy(true);
    videoRef.current?.pause();
    setFront((value) => (value === 0 ? 1 : 0));
    window.setTimeout(() => setBusy(false), 560);
  }

  function pose(index: number) {
    if (index === front) {
      return "z-20 translate-x-0 translate-y-0 rotate-0 scale-100";
    }
    return "z-10 translate-x-5 translate-y-3 rotate-[5deg] scale-[0.96]";
  }

  const control =
    "grid size-10 place-items-center rounded-full border border-border bg-white text-primary transition-colors hover:border-secondary";

  return (
    <div className="mx-auto w-full max-w-[22rem] lg:mx-0" role="region" aria-roledescription="carousel" aria-label="Hosted Aesthetics, Malta 2026">
      <div className="pr-8 pb-6">
        <div className="relative aspect-[9/16] w-full">
        {[0, 1].map((index) => {
          const isFront = index === front;
          return (
            <div
              key={index}
              className={`absolute inset-0 overflow-hidden rounded-[1.25rem] bg-neutral-950 shadow-[8px_16px_28px_-16px_rgba(33,48,68,0.45)] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${pose(index)} ${isFront ? "" : "pointer-events-none"}`}
              role="group"
              aria-roledescription="slide"
              aria-label={`${index + 1} of 2`}
              aria-hidden={!isFront}
            >
              {index === 0 ? (
                <video
                  ref={videoRef}
                  controls
                  playsInline
                  preload="metadata"
                  poster="/hosted-malta-2026-poster.jpg"
                  aria-label="Dr Inga and Nicholas at Hosted Aesthetics, Malta"
                  className="aspect-[9/16] h-full w-full object-contain focus-visible:outline-none"
                >
                  <source src="/hosted-malta-2026.mp4" type="video/mp4" />
                </video>
              ) : (
                <img
                  src={hosted}
                  alt="Dr Inga Taganova and Nicholas Sawyer at the Hosted Aesthetics evening in Malta"
                  width={682}
                  height={1024}
                  draggable={false}
                  className="aspect-[9/16] h-full w-full select-none object-cover object-[center_18%]"
                />
              )}
            </div>
          );
        })}
        </div>
      </div>
      <div className="mt-5 flex items-center justify-between gap-4 pr-8">
        <p className="text-sm text-muted-foreground">Hosted Aesthetics, Malta 2026</p>
        <div className="flex items-center gap-2">
          <button type="button" className={control} onClick={flick} aria-label="Previous">
            <ArrowLeft aria-hidden className="size-4" />
          </button>
          <button type="button" className={control} onClick={flick} aria-label="Next">
            <ArrowRight aria-hidden className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

const prose = "text-[15px] md:text-base leading-[1.75] text-muted-foreground";
const lead = "text-lg leading-relaxed text-foreground";
const display = "font-sans font-semibold tracking-tight text-foreground text-balance";
const kicker = "text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground";

export default function About() {
  useBreadcrumbSchema([{ name: "About the practice", path: "/about" }]);
  useSEO({
    title: "About the Practice | The Oxford Wellness Doctor",
    description:
      "An independent, family-run medical practice in Oxford, bringing together women's health, aesthetic medicine, healthy ageing and specialist pain care.",
    canonical: "https://www.theoxfordwellnessdoctor.com/about",
  });

  return (
    <div className="bg-white">
      <section className="pt-28 pb-16 md:pt-32 md:pb-20" aria-labelledby="about-heading">
        <div className="container-wide grid items-center gap-8 lg:grid-cols-12 lg:gap-x-12">
          <div className="lg:col-span-7">
            <p className={kicker}>About the practice</p>
            <h1
              id="about-heading"
              className={`mt-4 max-w-[13ch] text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08] ${display}`}
            >
              Independent medicine. A family approach.
            </h1>
            <p className={`mt-6 max-w-[32rem] ${lead}`}>
              A family-run practice in Oxford, bringing together women&apos;s health, aesthetic medicine, healthy ageing and specialist pain care.
            </p>
          </div>
          <img
            src={teacups}
            alt=""
            aria-hidden
            width={830}
            height={656}
            fetchPriority="high"
            className="h-auto w-56 justify-self-end sm:w-72 lg:col-span-5 lg:w-full lg:max-w-[26rem]"
          />
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24" aria-labelledby="about-inga-heading">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-12 lg:gap-x-12">
          <img
            src={ingaWatercolour}
            alt="Watercolour portrait of Dr Inga Taganova at her desk"
            width={545}
            height={819}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[19rem] lg:col-span-4 lg:mt-12 lg:max-w-[21rem]"
          />

          <div className="lg:col-span-7 lg:col-start-6">
            <p className={kicker}>Meet the founder</p>
            <h2 id="about-inga-heading" className={`mt-4 text-3xl md:text-[2.5rem] leading-tight ${display}`}>
              Dr Inga Taganova
            </h2>
            <p className="mt-2 text-sm font-medium text-primary">Founder &amp; General Practitioner</p>
            <p className="mt-1 text-sm text-muted-foreground">
              MRCGP · Trained in Obstetrics &amp; Gynaecology · GMC No. 4727817
            </p>

            <div className="mt-8 max-w-[40rem] space-y-5">
              <p className={lead}>
                Dr Inga Taganova is a practising GP with more than two decades of medical experience, a background in obstetrics and gynaecology and                 a longstanding interest in women&apos;s health.
              </p>
              <p className={prose}>
                She founded The Oxford Wellness Doctor to bring together medical expertise, aesthetic medicine and a holistic approach to wellbeing,                 helping patients feel their best, inside and out.
              </p>
            </div>

            <figure className="mt-8 max-w-[36rem] text-center">
              <blockquote
                className="la-belle-aurore-regular text-[1.7rem] leading-snug text-balance md:text-[1.95rem]"
                style={{ fontFamily: '"La Belle Aurore", cursive', fontWeight: 400, fontStyle: "normal" }}
              >
                &ldquo;My approach has always been to look beyond individual symptoms and understand how everything fits together.&rdquo;
              </blockquote>
              <figcaption className="mt-7 text-sm font-medium text-primary">Dr Inga Taganova</figcaption>
            </figure>

            <p className={`mt-12 max-w-[40rem] ${prose}`}>
              She continues to practise as a GP alongside the clinic and sees every patient personally. Her approach recognises that how we look, how we feel and our overall health are closely connected.
            </p>

            <BioDisclosure title="Clinical interests" openOnDesktop className="mt-8">
              <InterestPills items={ingaInterests} />
            </BioDisclosure>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="about-richard-heading">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-12 lg:gap-x-12">
          <img
            src={richardWatercolour}
            alt="Watercolour portrait of Dr Richard Sawyer at his desk"
            width={1024}
            height={853}
            loading="lazy"
            className="h-auto w-full max-w-[34rem] lg:order-2 lg:col-span-6 lg:col-start-7 lg:max-w-none"
          />
          <div className="lg:order-1 lg:col-span-6">
            <p className={kicker}>Specialist pain care</p>
            <h2 id="about-richard-heading" className={`mt-4 text-3xl md:text-[2.5rem] leading-tight ${display}`}>
              Dr Richard Sawyer
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <p className="text-sm font-medium text-primary">Consultant in Anaesthesia &amp; Pain Medicine</p>
              <a
                href="https://www.linkedin.com/in/richard-sawyer-1a42a119"
                target="_blank"
                rel="noreferrer"
                aria-label="Dr Richard Sawyer on LinkedIn"
                className="inline-flex size-9 shrink-0 items-center justify-center rounded-full text-primary transition-colors hover:bg-muted hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Linkedin aria-hidden size={18} strokeWidth={1.75} />
              </a>
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              MB BCh · FRCA · FIPP · FFPMRCA · LLM · GMC No. 03640384
            </p>

            <div className="mt-6 max-w-[36rem] space-y-5">
              <p className={lead}>
                Consultant at Oxford University Hospitals with over 30 years in pain medicine. He has worked as a consultant since 2002, including as Clinical Lead in Plymouth, and joined Oxford in 2013.
              </p>
              <p className={prose}>
                He qualified MB BCh at the University of the Witwatersrand and is a Fellow of both the Royal College of Anaesthetists and the Faculty of Pain Medicine. He also holds the Fellowship of Interventional Pain Practice and an LLM in Medical Law, and has been a member of the International Association for the Study of Pain for over 30 years.
              </p>
              <p className={prose}>
                He provides specialist assessment and management of persistent pain through The Oxford Pain Doctor, with consultations at Belsyre Court.
              </p>
            </div>

            <div className="mt-8 flex flex-col items-start gap-5">
              <BioDisclosure title="Clinical interests" openOnDesktop>
                <InterestPills items={richardInterests} />
              </BioDisclosure>
              {SHOW_PAIN_DOCTOR ? (
                <Link
                  href="/oxford-pain-doctor"
                  className="text-sm font-medium text-primary underline-offset-4 hover:text-secondary hover:underline"
                >
                  Explore The Oxford Pain Doctor →
                </Link>
              ) : null}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24" aria-labelledby="about-nicholas-heading">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-12 lg:gap-x-12">
          <img
            src={nicholas}
            alt="Watercolour portrait of Nicholas Sawyer"
            width={1024}
            height={853}
            loading="lazy"
            className="h-auto w-full max-w-[34rem] mix-blend-multiply lg:col-span-6 lg:max-w-none"
          />
          <div className="lg:col-span-5 lg:col-start-8">
            <p className={kicker}>Strategy &amp; development</p>
            <h2 id="about-nicholas-heading" className={`mt-4 text-3xl md:text-[2.5rem] leading-tight ${display}`}>
              Nicholas Sawyer
            </h2>
            <div className="mt-2 flex items-center gap-3">
              <p className="text-sm font-medium text-primary">Director – Strategy &amp; Development</p>
              <a
                href="https://www.linkedin.com/in/nicholassawyer"
                target="_blank"
                rel="noreferrer"
                aria-label="Nicholas Sawyer on LinkedIn"
                className="inline-flex size-9 items-center justify-center rounded-full text-primary transition-colors hover:bg-white hover:text-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              >
                <Linkedin aria-hidden size={18} strokeWidth={1.75} />
              </a>
            </div>

            <p className={`mt-6 max-w-[34rem] ${lead}`}>
              He leads the clinic&apos;s development, patient experience and technology. His role is non-clinical.
            </p>

            <BioDisclosure title="Background" className="mt-8">
              <p className={`max-w-[34rem] ${prose}`}>
                Nicholas is currently studying for a Master&apos;s in Management at London Business School and holds a BSc from the London School of Economics. His professional experience includes investment banking at UBS and Lincoln International, as well as experience at the Bank of England.
              </p>
            </BioDisclosure>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24" aria-labelledby="about-family-heading">
        <div className="container-wide grid items-start gap-10 lg:grid-cols-12 lg:gap-x-16">
          <div className="lg:col-span-6">
            <h2 id="about-family-heading" className={`max-w-[14ch] text-3xl md:text-[2.5rem] leading-tight ${display}`}>
              A family business, built together.
            </h2>
            <div className={`mt-6 max-w-[36rem] space-y-5 ${prose}`}>
              <p>
                At The Oxford Wellness Doctor, we share a curiosity about new ideas and a commitment to continually developing our approach to health and wellbeing.
              </p>
              <p>
                We regularly explore developments in women&apos;s health, aesthetics and wellness, attending events such as{" "}
                <a
                  href="https://hostedaesthetics.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary underline-offset-4 hover:text-secondary hover:underline"
                >
                  Hosted Aesthetics
                </a>{" "}
                to exchange ideas with other clinicians and discover new techniques and innovations.
              </p>
              <p>
                In 2026, Dr Inga and Nicholas were selected from a high volume of applications to attend Hosted Aesthetics in Malta.
              </p>
            </div>
          </div>
          <div className="lg:col-span-5 lg:col-start-8">
            <HostedCarousel />
          </div>
        </div>
      </section>

      <section className="bg-muted/50 py-16 md:py-24" aria-labelledby="about-oxford-heading">
        <div className="container-wide grid items-center gap-10 lg:grid-cols-12 lg:gap-x-12">
          <img
            src={belsyre}
            alt="Watercolour of Belsyre Court on Woodstock Road, Oxford"
            width={1024}
            height={682}
            loading="lazy"
            className="h-auto w-full mix-blend-multiply lg:col-span-7"
          />
          <div className="lg:col-span-5">
            <p className={kicker}>Our Oxford practice</p>
            <h2 id="about-oxford-heading" className={`mt-4 text-3xl md:text-[2.5rem] leading-tight ${display}`}>
              Belsyre Court, Woodstock Road.
            </h2>
            <address className={`mt-6 not-italic ${prose}`}>
              57 Woodstock Road, Oxford OX2 6HJ
            </address>
            <Link
              href="/contact#parking"
              className="mt-2 inline-block text-sm font-medium text-primary underline-offset-4 hover:text-secondary hover:underline"
            >
              Directions and parking →
            </Link>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={BOOKING_HREF}>
                <Button className="h-11 w-full rounded-full bg-secondary px-8 text-sm font-medium text-secondary-foreground hover:bg-secondary/90 sm:w-auto">
                  Book a consultation
                </Button>
              </Link>
              <Link href="/treatments">
                <Button
                  variant="outline"
                  className="h-11 w-full rounded-full border-border bg-white px-8 text-sm font-medium sm:w-auto"
                >
                  Explore our services
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
