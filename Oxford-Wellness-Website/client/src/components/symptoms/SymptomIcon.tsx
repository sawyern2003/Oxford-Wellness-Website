import { cn } from "@/lib/utils";
import type { ReactNode } from "react";

/**
 * Abstract geometric marks rather than pictograms. Each is built from the same
 * vocabulary – a soft blue shape behind a solid navy one – so the set reads as
 * one family. Silhouettes are kept distinct (dome, crescent, droplet, ring,
 * bars, waves) because these render as small as 32px.
 */
export type IconName =
  | "hot-flushes"
  | "night-sweats"
  | "mood"
  | "anxiety"
  | "brain-fog"
  | "fatigue"
  | "weight"
  | "joint-pain"
  | "vaginal-dryness"
  | "painful-sex"
  | "low-libido"
  | "urinary"
  | "breast-tenderness"
  | "skin-hair-nails"
  | "irregular-periods"
  | "digestive"
  | "assessment"
  | "non-hormonal"
  | "nutrition"
  | "weight-management"
  | "sleep"
  | "intimate"
  | "skin"
  | "testing";

const tint = "fill-secondary";
const solid = "fill-primary";
const line = "stroke-primary fill-none";
const lineTint = "stroke-secondary fill-none";

/**
 * Left-bulging crescent, used for anything to do with the night. The inner arc
 * needs a larger radius than the outer one so it curves more shallowly –
 * a smaller radius would be scaled up to meet the chord and retrace the outer
 * arc exactly, leaving no visible shape.
 */
const CRESCENT = "M20 5A15 15 0 0 0 20 35A22 22 0 0 1 20 5Z";
/** Teardrop, used for anything to do with moisture. */
const DROPLET = "M20 4c6.8 8 10 12.6 10 16.8a10 10 0 0 1-20 0C10 16.6 13.2 12 20 4Z";

const SHAPES: Record<IconName, ReactNode> = {
  // Heat rising off a solid core.
  "hot-flushes": (
    <>
      <path d="M4 26a16 16 0 0 1 32 0Z" className={tint} />
      <circle cx="20" cy="26" r="7" className={solid} />
    </>
  ),
  // Crescent with a bead of sweat.
  "night-sweats": (
    <>
      <path d={CRESCENT} className={tint} />
      <circle cx="29" cy="27" r="5" className={solid} />
    </>
  ),
  // A disc crossed by a wave – the swing of it.
  mood: (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path
        d="M7 23c3.3-5.5 6.2-5.5 9 0s5.7 5.5 9 0"
        className={line}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </>
  ),
  // Ripples spreading out from a fixed point.
  anxiety: (
    <>
      <path
        d="M4 31a19 19 0 0 1 0-22M11.5 27.5a12 12 0 0 1 0-15"
        className={lineTint}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="27" cy="20" r="8.5" className={solid} />
    </>
  ),
  // Two discs that never quite line up.
  "brain-fog": (
    <>
      <circle cx="15" cy="20" r="12.5" className={tint} />
      <circle cx="25" cy="20" r="12.5" className={line} strokeWidth="3.2" />
    </>
  ),
  // Bars running down to nothing.
  fatigue: (
    <>
      <rect x="5" y="10" width="30" height="5" rx="2.5" className={tint} />
      <rect x="5" y="18.5" width="20" height="5" rx="2.5" className={tint} />
      <rect x="5" y="27" width="10" height="5" rx="2.5" className={solid} />
    </>
  ),
  // Mass resting on a baseline.
  weight: (
    <>
      <circle cx="20" cy="16" r="12.5" className={tint} />
      <rect x="2" y="30.5" width="36" height="5" rx="2.5" className={solid} />
    </>
  ),
  // Two forms meeting, with the point of friction marked.
  "joint-pain": (
    <>
      <circle cx="14" cy="20" r="12" className={tint} />
      <path d="M23 14l10 12M33 14L23 26" className={line} strokeWidth="3.6" strokeLinecap="round" />
    </>
  ),
  // A petal form with the moisture drawn out of its centre.
  "vaginal-dryness": (
    <>
      <path d={DROPLET} className={tint} />
      <circle cx="20" cy="22" r="5.5" className={solid} />
    </>
  ),
  // One form pressed hard against another.
  "painful-sex": (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path d="M20 5a15 15 0 0 1 0 30Z" className={solid} />
    </>
  ),
  // Turned downward.
  "low-libido": (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path
        d="M11 16l9 9 9-9"
        className={line}
        strokeWidth="3.6"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  // Flow, and urgency.
  urinary: (
    <>
      <path
        d="M4 13c4.3-4.5 7.7-4.5 11 0s6.7 4.5 11 0M4 22c4.3-4.5 7.7-4.5 11 0s6.7 4.5 11 0"
        className={lineTint}
        strokeWidth="3.4"
        strokeLinecap="round"
      />
      <circle cx="29" cy="31" r="6" className={solid} />
    </>
  ),
  // A soft form ringed by sensitivity.
  "breast-tenderness": (
    <>
      <circle cx="20" cy="20" r="9" className={tint} />
      <circle cx="20" cy="20" r="15.5" className={line} strokeWidth="3.2" />
    </>
  ),
  // Layers of tissue, the outermost thinning.
  "skin-hair-nails": (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path
        d="M6 16c4-4.5 7-4.5 10 0s6 4.5 10 0M7 25c4-4.5 7-4.5 10 0s6 4.5 10 0"
        className={line}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </>
  ),
  // A cycle that no longer closes.
  "irregular-periods": (
    <>
      <path d="M20 6a14 14 0 1 1-13.4 9.7" className={lineTint} strokeWidth="3.6" strokeLinecap="round" />
      <circle cx="20" cy="6" r="5.5" className={solid} />
    </>
  ),
  // Arcs turning inward.
  digestive: (
    <>
      <path d="M35 20a15 15 0 1 0-15 15" className={lineTint} strokeWidth="3.6" strokeLinecap="round" />
      <path d="M27 20a7 7 0 1 0-7 7" className={line} strokeWidth="3.6" strokeLinecap="round" />
    </>
  ),

  // ---- Treatment marks ----
  // The whole picture, examined closely.
  assessment: (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <circle cx="20" cy="20" r="6.5" className={solid} />
    </>
  ),
  // A second route around the same problem.
  "non-hormonal": (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path d="M7 27C12 16 20 11 33 11" className={line} strokeWidth="3.8" strokeLinecap="round" />
    </>
  ),
  // Proportion, balanced.
  nutrition: (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path d="M5 20a15 15 0 0 0 30 0Z" className={solid} />
    </>
  ),
  // Mass reducing.
  "weight-management": (
    <>
      <circle cx="15" cy="19" r="14" className={tint} />
      <circle cx="31" cy="27" r="7" className={solid} />
    </>
  ),
  // Rest, held.
  sleep: (
    <>
      <path d={CRESCENT} className={tint} />
      <path
        d="M24 14h10L24 27h10"
        className={line}
        strokeWidth="3.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  // Tissue restored from within.
  intimate: (
    <>
      <path d={DROPLET} className={tint} />
      <path
        d="M20 28V15M14 21l6-6 6 6"
        className={line}
        strokeWidth="3.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </>
  ),
  // Layers rebuilding.
  skin: (
    <>
      <circle cx="20" cy="20" r="15" className={tint} />
      <path
        d="M6 16c4-4.5 7-4.5 10 0s6 4.5 10 0M7 25c4-4.5 7-4.5 10 0s6 4.5 10 0"
        className={line}
        strokeWidth="3.2"
        strokeLinecap="round"
      />
    </>
  ),
  // A specific question, answered.
  testing: (
    <>
      <circle cx="17" cy="17" r="13" className={tint} />
      <rect x="25" y="22" width="14" height="5.5" rx="2.75" className={solid} transform="rotate(45 25 22)" />
    </>
  ),
};

export default function SymptomIcon({
  name,
  className,
}: {
  name: IconName;
  className?: string;
}) {
  return (
    <svg
      viewBox="0 0 40 40"
      aria-hidden="true"
      focusable="false"
      className={cn("shrink-0", className)}
    >
      {SHAPES[name]}
    </svg>
  );
}
