import { getBookingUrl, GLOWDAY_GENERAL, BOOKING_URLS } from "@/data/bookingUrls";

export const BOOKING_HREF = "/book";

export const CONSULTATION_LABELS: Record<string, string> = {
  "aesthetic-skin": "Aesthetic & Skin Consultation (45 min)",
  menopause: "Menopause & Women's Health Consultation",
  "follow-up": "Medical Follow-up (general)",
  plan: "Discuss a treatment plan",
};

/** Legacy ?consultation=weight links fall back to aesthetic-skin (weight booking hidden pending CQC). */
export function resolveConsultationKey(raw: string | null): string | null {
  if (!raw) return null;
  if (raw === "weight") return "aesthetic-skin";
  return raw in CONSULTATION_LABELS ? raw : null;
}

export const GLOWDAY_EMBED_SRC = GLOWDAY_GENERAL;

export const PAIN_CALENDLY_URL =
  "https://calendly.com/dr-richard-theoxfordwellnessdoctor";

/** Human labels for ?treatment=<slug> booking pages. */
export const TREATMENT_BOOKING_LABELS: Record<string, string> = {
  "morpheus8-oxford": "Morpheus8",
  "profhilo-oxford": "Profhilo",
  "dermal-fillers-oxford": "Dermal fillers",
  "lip-fillers-oxford": "Lip fillers",
  "sexual-wellness-oxford": "Intimate health",
  "menopause-clinic-oxford": "Menopause consultation",
  "womens-health-oxford": "Women's health consultation",
  "votiva-forma-v-oxford": "Forma V",
  "neauvia-n-rose-intimate-rejuvenation-oxford": "Neauvia N Rose",
  "anti-wrinkle-injections-oxford": "Lines and wrinkles consultation",
  "skin-boosters-oxford": "Skin boosters",
  "chemical-peels-oxford": "Chemical peels",
  "lumecca-ipl-oxford": "Lumecca IPL",
  "forma-facelift-oxford": "Forma Facelift",
  "forma-plus-body-contouring-oxford": "Forma Plus",
  "inmode-fx-skin-tightening-oxford": "InMode FX",
  "filler-dissolving-oxford": "Filler dissolving",
  "jaw-slimming-teeth-grinding-oxford": "Jaw treatment",
  "excessive-sweating-treatment-oxford": "Excessive sweating treatment",
  "vitamin-b12-injection-oxford": "Vitamin B12 injection",
  "medical-form-completion-oxford": "Medical form completion",
};

export type ResolvedBooking = {
  glowdayUrl: string;
  heading: string;
  kind: "consultation" | "treatment" | "generic";
};

/**
 * Resolve /book query params to a Glowday URL and page heading.
 * Prefer ?consultation= when both are present; unknown treatment slugs fall back to the general diary.
 */
export function resolveBookPage(search: string): ResolvedBooking {
  const params = new URLSearchParams(search);
  const consultationKey = resolveConsultationKey(params.get("consultation"));
  if (consultationKey) {
    return {
      glowdayUrl: GLOWDAY_GENERAL,
      heading: CONSULTATION_LABELS[consultationKey],
      kind: "consultation",
    };
  }

  const treatmentSlug = params.get("treatment");
  if (treatmentSlug && treatmentSlug in BOOKING_URLS) {
    return {
      glowdayUrl: getBookingUrl(treatmentSlug),
      heading: TREATMENT_BOOKING_LABELS[treatmentSlug] ?? "Book an appointment",
      kind: "treatment",
    };
  }

  return {
    glowdayUrl: GLOWDAY_GENERAL,
    heading: "Book an appointment",
    kind: "generic",
  };
}