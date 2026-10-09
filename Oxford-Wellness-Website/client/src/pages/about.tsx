import { Link } from "wouter";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";
import { Button } from "@/components/ui/button";
import AskDrInga from "@/components/about/AskDrInga";
import PortraitReveal from "@/components/about/PortraitReveal";
import ClinicSlider from "@/components/about/ClinicSlider";
import { BOOKING_HREF } from "@/lib/booking";
import portrait from "@/assets/dr-inga-taganova-desk.jpg";
import teacups from "@/assets/journey-teacups.png";
import belsyre from "@/assets/belsyre-court-building.jpg";
import sittingRoom from "@/assets/belsyre-court-room.jpg";
import botanical from "@/assets/journey-botanical.png";

const biography = [
  "Dr Inga Taganova MRCGP is a GP with more than two decades of medical experience and a longstanding interest in women’s health, healthy ageing and aesthetic medicine.",
  "Her medical career has spanned general practice, obstetrics and gynaecology, menopause care and aesthetic medicine. Before moving into general practice, she trained in obstetrics and gynaecology – experience that continues to shape the way she approaches women’s health today.",
  "She has subsequently developed particular expertise in menopause care, intimate health, skin ageing and the physical changes that can accompany midlife.",
  "Alongside The Oxford Wellness Doctor, Dr Inga continues to practise as a GP. This allows her to bring the clinical judgement of mainstream medicine into a setting where there is more time to understand what has changed, what matters to each patient and what they would genuinely like to improve.",
  "She founded The Oxford Wellness Doctor to create a different kind of clinic: medically grounded and highly personal, but focused not simply on illness. Her approach brings together women’s health, regenerative aesthetics and healthy ageing, with treatments considered thoughtfully rather than simply following trends.",
  "Every patient is seen by Dr Inga herself, allowing care to remain personal and consistent from the first conversation onwards.",
];

const clinicSlides = [
  { src: belsyre, alt: "Belsyre Court on Woodstock Road, Oxford", width: 1024, height: 682 },
  { src: sittingRoom, alt: "The sitting room at the clinic", width: 1024, height: 682 },
];

const h2 = "font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight leading-snug text-balance";
const body = "space-y-5 text-base leading-[1.75] text-muted-foreground";
const eyebrow = "mb-4 text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground";

export default function About() {
  useBreadcrumbSchema([{ name: "About Dr Inga", path: "/about" }]);
  useSEO({
    title: "Dr Inga Taganova | Doctor-Led Women’s Health Oxford",
    description:
      "Dr Inga Taganova MRCGP is a GP with more than two decades of experience in women’s health, menopause care and aesthetic medicine. The Oxford Wellness Doctor, Belsyre Court, Oxford.",
    canonical: "https://www.theoxfordwellnessdoctor.com/about",
  });

  return (
    <div className="bg-white">
      <PortraitReveal src={portrait} alt="Dr Inga Taganova at her desk" width={1086} height={1448} />

      <section className="py-20 md:py-28 text-center">
        <div className="container-wide">
          <h1 className="font-sans font-semibold text-4xl md:text-5xl text-foreground tracking-tight">
            About Dr Inga
          </h1>
          <img
            src={botanical}
            alt=""
            aria-hidden
            width={937}
            height={619}
            className="mx-auto mt-7 mb-9 h-auto w-28 md:w-36"
          />
          <p className="mx-auto max-w-[34em] font-sans text-xl md:text-2xl font-medium leading-snug tracking-tight text-foreground text-balance">
            {biography[0]}
          </p>

          <div className="mx-auto mt-14 md:mt-20 grid max-w-[68rem] gap-5 md:grid-cols-2 md:gap-x-20">
            <div className={body}>
              <p>{biography[1]}</p>
              <p>{biography[2]}</p>
              <p>{biography[3]}</p>
            </div>
            <div className={body}>
              <p>{biography[4]}</p>
              <p>{biography[5]}</p>
              <p>She is a GMC-registered GP, number 4727817.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="about-clinic-heading">
        <div className="container-wide text-center">
          <h2 id="about-clinic-heading" className={h2}>Our clinic</h2>
          <div className={`mx-auto mt-6 max-w-[44rem] ${body}`}>
            <p>
              The Oxford Wellness Doctor is based at Belsyre Court on Woodstock Road, in the centre of Oxford.
            </p>
            <p>
              It is a private, discreet setting where Dr Inga sees patients personally for consultations, treatments and ongoing care.
            </p>
          </div>
          <address className="mt-6 not-italic text-sm leading-relaxed text-foreground font-medium">
            The Oxford Wellness Doctor, Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ
          </address>
          <Link
            href="/contact#parking"
            className="mt-3 inline-block text-sm font-medium text-primary hover:text-secondary"
          >
            Directions and parking →
          </Link>
        </div>
        <ClinicSlider slides={clinicSlides} />
      </section>

      <section className="relative isolate overflow-hidden py-24 md:py-36">
        <img
          src={botanical}
          alt=""
          aria-hidden
          width={937}
          height={619}
          className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-auto w-[18rem] md:w-[28rem] -translate-x-1/2 -translate-y-1/2 opacity-[0.12]"
        />
        <blockquote className="container-page text-center">
          <p className="mx-auto max-w-[26em] font-sans text-2xl md:text-3xl font-medium leading-snug tracking-tight text-primary text-balance">
            “I wanted to create the kind of clinic where there is time to understand what has actually changed.”
          </p>
          <footer className="mt-5 text-sm font-medium text-muted-foreground">Dr Inga Taganova</footer>
        </blockquote>
      </section>

      <section className="pb-20 md:pb-28" aria-labelledby="about-approach-heading">
        <div className="container-page text-center">
          <h2 id="about-approach-heading" className={`mx-auto max-w-[16em] ${h2}`}>
            Looking at the whole woman, not a single treatment
          </h2>
          <div className={`mx-auto mt-8 max-w-[42rem] ${body}`}>
            <p className="font-sans text-xl font-medium leading-snug tracking-tight text-foreground">
              Women’s health is rarely just one thing.
            </p>
            <p>
              Skin, intimate wellbeing, hormones and the experience of menopause can matter at different points in life – and they do not always fit neatly into a single treatment or category.
            </p>
            <p>
              Dr Inga’s approach begins with understanding what has changed and what matters most to the individual woman in front of her.
            </p>
            <p>
              Sometimes the right approach may be a single treatment. At other times, several elements of care may be considered over time.
            </p>
            <p>
              The aim is not to do more. It is to make thoughtful decisions about what is appropriate, what is likely to make a meaningful difference and what can be left alone.
            </p>
          </div>
        </div>
      </section>

      <AskDrInga />

      <section className="py-20 md:py-28 bg-muted/40" aria-labelledby="about-team-heading">
        <div className="container-wide grid items-start gap-14 lg:grid-cols-12 lg:gap-x-16">
          <div className="max-w-[36rem] lg:col-span-6 lg:col-start-7">
            <p className={eyebrow}>Behind The Oxford Wellness Doctor</p>
            <h2 id="about-team-heading" className={h2}>A family-run clinic</h2>
            <p className="mt-6 text-lg leading-relaxed text-foreground">
              The Oxford Wellness Doctor is a family-run clinic, founded and led by Dr Inga Taganova, with her son Nicholas Sawyer, Director, working alongside her on the development of the clinic.
            </p>

            <div className="mt-10 grid gap-8 sm:grid-cols-2 sm:gap-10">
              <div className="border-t border-foreground/15 pt-5">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                  Dr Inga Taganova MRCGP
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">Founder &amp; Doctor</p>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
                  Dr Inga leads all clinical care and sees every patient herself.
                </p>
              </div>
              <div className="border-t border-foreground/15 pt-5">
                <h3 className="font-sans text-lg font-semibold tracking-tight text-foreground">
                  Nicholas Sawyer
                </h3>
                <p className="mt-1 text-sm font-medium text-primary">Director – Strategy &amp; Development</p>
                <p className="mt-4 text-[15px] leading-[1.7] text-muted-foreground">
                  Nicholas’s role is non-clinical, focusing on the development of the clinic, patient experience, technology and how The Oxford Wellness Doctor continues to evolve.
                </p>
              </div>
            </div>

            <div className={`mt-12 ${body}`}>
              <p>
                Medicine, technology and our understanding of healthy ageing continue to develop. We believe a modern clinic should remain curious – while being equally careful about distinguishing meaningful progress from passing trends.
              </p>
              <p>
                Dr Inga and Nicholas regularly explore developments across women’s health, regenerative medicine, aesthetics, healthy ageing and healthcare technology, considering where new approaches could genuinely improve the experience and care we provide.
              </p>
              <p>
                In 2026, they were selected from a high volume of applications to attend{" "}
                <a
                  href="https://hostedaesthetics.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="text-primary hover:text-secondary"
                >
                  Hosted Aesthetics
                </a>{" "}
                in Malta, meeting clinicians, founders and specialists working across aesthetics, wellness and healthy ageing – exchanging ideas and exploring how the clinic could continue to develop.
              </p>
            </div>
          </div>

          <figure className="mx-auto w-full max-w-[24rem] lg:col-span-5 lg:col-start-1 lg:row-start-1 lg:mx-0 lg:max-w-[26rem]">
            <video
              controls
              playsInline
              preload="metadata"
              poster="/hosted-malta-2026-poster.jpg"
              className="aspect-[9/16] w-full rounded-md bg-muted/40 object-contain"
            >
              <source src="/hosted-malta-2026.mp4" type="video/mp4" />
            </video>
            <figcaption className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Dr Inga and Nicholas at Hosted Aesthetics, Malta – 2026
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="py-20 md:py-28" aria-labelledby="about-book-heading">
        <div className="container-wide grid items-center gap-12 md:grid-cols-2 lg:gap-24">
          <div className="mx-auto max-w-[30rem] text-center">
            <h2 id="about-book-heading" className={h2}>Book a consultation</h2>
            <p className="mt-5 text-base leading-[1.75] text-muted-foreground">
              Book online, or get in touch if you would like to ask a question first.
            </p>
            <Link href={BOOKING_HREF}>
              <Button className="mt-8 rounded-full bg-secondary text-primary hover:bg-secondary/90 px-8 h-11 text-sm font-medium">
                Book consultation
              </Button>
            </Link>
            <p className="mt-8 text-sm leading-relaxed text-muted-foreground">
              <a href="mailto:info@theoxfordwellnessdoctor.com" className="text-primary hover:text-secondary">
                info@theoxfordwellnessdoctor.com
              </a>
              <br />
              <a href="tel:+4407739309380" className="text-primary hover:text-secondary">
                07739 309380
              </a>
            </p>
          </div>
          <img
            src={teacups}
            alt=""
            aria-hidden
            width={830}
            height={656}
            loading="lazy"
            className="mx-auto h-auto w-full max-w-[26rem]"
          />
        </div>
      </section>
    </div>
  );
}
