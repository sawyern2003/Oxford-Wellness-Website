import { useLayoutEffect, useRef, useState } from "react";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, useMotionValueEvent, type MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import journeyLine from "@/assets/journey-line.png";
import journeyNotebook from "@/assets/journey-notebook.png";
import journeyTeacups from "@/assets/journey-teacups.png";
import journeyBotanical from "@/assets/journey-botanical.png";
import journeyDoorway from "@/assets/journey-doorway.png";

const steps = [
  {
    title: "Choose where to begin",
    body: "Explore treatments, concerns and Signature Plans – or use our Treatment Finder if you're unsure.",
    image: journeyNotebook,
    width: "w-[6.75rem] @[1100px]:w-[8.75rem] @[1240px]:w-[9.5rem]",
    nudge: "@[920px]:-translate-y-2",
  },
  {
    title: "Consultation, when needed",
    body: "Some treatments can be booked directly, while more complex concerns and personalised plans begin with a consultation with Dr Inga.",
    image: journeyTeacups,
    width: "w-[7rem] @[1100px]:w-[9rem] @[1240px]:w-[9.75rem]",
    nudge: "@[920px]:translate-y-3",
  },
  {
    title: "Care designed around you",
    body: "From a single treatment or course to a complete Signature Plan, recommendations are based on your goals and what is appropriate for you.",
    image: journeyBotanical,
    width: "w-[6.5rem] @[1100px]:w-[8.25rem] @[1240px]:w-[8.75rem]",
    nudge: "@[920px]:-translate-y-1",
  },
  {
    title: "Treatment & ongoing care",
    body: "Treatment at our Oxford clinic, with review and maintenance when useful.",
    image: journeyDoorway,
    width: "w-[5.75rem] @[1100px]:w-[7.5rem] @[1240px]:w-[8rem]",
    nudge: "@[920px]:translate-y-2",
  },
];

/** Vertical centres of the four painted markers, as a fraction of the line asset. */
const markers = [0.027, 0.367, 0.689, 0.974];

const journeyHeight = "clamp(36rem, 56cqi, 50rem)";
const lineInset = "calc(var(--journey-h) * 353 / 777 / 2 + 1.15rem)";

function JourneyStep({
  index,
  title,
  body,
  image,
  width,
  nudge,
  progress,
  reduced,
}: {
  index: number;
  title: string;
  body: string;
  image: string;
  width: string;
  nudge: string;
  progress: MotionValue<number>;
  reduced: boolean;
}) {
  const [lit, setLit] = useState(reduced);
  const threshold = (index + 0.15) / steps.length;
  const onLeft = index % 2 === 0;

  useLayoutEffect(() => {
    if (!reduced) setLit(progress.get() >= threshold);
  }, [progress, reduced, threshold]);

  useMotionValueEvent(progress, "change", (value) => {
    if (!reduced) setLit(value >= threshold);
  });

  return (
    <li
      className="mb-16 last:mb-0 @[920px]:absolute @[920px]:inset-x-0 @[920px]:mb-0 @[920px]:flex @[920px]:-translate-y-1/2"
      style={{ top: `${markers[index] * 100}%` }}
    >
      <div
        className={cn(
          "flex flex-col @[920px]:w-1/2 @[920px]:flex-row @[920px]:items-center @[920px]:gap-4",
          onLeft
            ? "@[920px]:justify-end @[920px]:pr-[var(--line-inset)]"
            : "@[920px]:ml-auto @[920px]:justify-start @[920px]:pl-[var(--line-inset)]"
        )}
      >
        <div
          className={cn(
            "order-1 min-w-0 @[920px]:max-w-[11.25rem] @[1100px]:max-w-[15rem] @[1240px]:max-w-[17.5rem]",
            onLeft ? "@[920px]:text-right" : "@[920px]:order-2"
          )}
        >
          <h3 className="font-sans font-semibold text-xl md:text-2xl text-foreground tracking-tight leading-snug mb-2">
            <span className={cn("transition-colors duration-500", lit ? "text-primary" : "text-muted-foreground")}>
              {String(index + 1).padStart(2, "0")} –{" "}
            </span>
            {title}
          </h3>
          <p className="text-sm md:text-[15px] text-muted-foreground leading-relaxed">{body}</p>
        </div>
        <img
          src={image}
          alt=""
          className={cn(
            "order-2 mt-5 h-auto max-w-full shrink-0 object-contain @[920px]:mt-0",
            onLeft ? "" : "@[920px]:order-1",
            width,
            nudge
          )}
        />
      </div>
    </li>
  );
}

export default function PatientJourney() {
  const listRef = useRef<HTMLOListElement>(null);
  const reduced = useReducedMotion() ?? false;

  const { scrollYProgress } = useScroll({
    target: listRef,
    offset: ["start 0.78", "end 0.42"],
  });
  const drawn = useSpring(scrollYProgress, { stiffness: 140, damping: 32, mass: 0.35, restDelta: 0.001 });
  const lineClip = useTransform(drawn, (value) => `inset(0px 0px ${(1 - value) * 100}% 0px)`);

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container-wide">
        <div className="max-w-xl mb-14 md:mb-28">
          <h2 className="font-sans font-semibold text-3xl md:text-4xl text-foreground tracking-tight">
            From first enquiry
          </h2>
          <p className="mt-3 text-lg md:text-xl text-muted-foreground tracking-tight">
            Your care, your starting point
          </p>
        </div>

        <div className="@container">
          <ol
            ref={listRef}
            className="relative @[920px]:h-[var(--journey-h)]"
            style={{ ["--journey-h" as string]: journeyHeight, ["--line-inset" as string]: lineInset }}
          >
            <img
              src={journeyLine}
              alt=""
              className={cn(
                "pointer-events-none absolute left-1/2 top-0 hidden h-full w-auto -translate-x-1/2 object-contain @[920px]:block",
                reduced ? "" : "opacity-35"
              )}
            />
            {reduced ? null : (
              <motion.img
                src={journeyLine}
                alt=""
                aria-hidden
                className="pointer-events-none absolute left-1/2 top-0 hidden h-full w-auto -translate-x-1/2 object-contain @[920px]:block"
                style={{ clipPath: lineClip }}
              />
            )}
            {steps.map((step, index) => (
              <JourneyStep
                key={step.title}
                index={index}
                {...step}
                progress={drawn}
                reduced={reduced}
              />
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
