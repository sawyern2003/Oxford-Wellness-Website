import {
  CLINIKO_EMBED_GENERAL,
  CLINIKO_GENERAL,
  CLINIKO_PAIN_BOOKING,
  CLINIKO_PAIN_EMBED,
  getBookingUrl,
  getConsultationBookingUrl,
  BOOKING_URLS,
} from "@/data/bookingUrls";

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

/** General Cliniko diary (external link). */
export const CLINIKO_BOOKING_URL = CLINIKO_GENERAL;

export const PAIN_CLINIKO_URL = CLINIKO_PAIN_BOOKING;
export const PAIN_CLINIKO_EMBED_URL = CLINIKO_PAIN_EMBED;

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
  "neauvia-n-rose-intimate-rejuvenation-oxford": "Intimate health consultation",
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
  /** Cliniko URL for new-tab / link fallback (not embedded). */
  bookingUrl: string;
  /** Cliniko URL for iframe (embedded=true). */
  embedUrl: string;
  heading: string;
  kind: "consultation" | "treatment" | "generic";
};

/**
 * Resolve /book query params to a Cliniko URL and page heading.
 * Prefer ?consultation= when both are present; unknown treatment slugs fall back to the general diary.
 */
export function resolveBookPage(search: string): ResolvedBooking {
  const params = new URLSearchParams(search);
  const consultationKey = resolveConsultationKey(params.get("consultation"));
  if (consultationKey) {
    return {
      bookingUrl: getConsultationBookingUrl(consultationKey, false),
      embedUrl: getConsultationBookingUrl(consultationKey, true),
      heading: CONSULTATION_LABELS[consultationKey],
      kind: "consultation",
    };
  }

  const treatmentSlug = params.get("treatment");
  if (treatmentSlug && treatmentSlug in BOOKING_URLS) {
    return {
      bookingUrl: getBookingUrl(treatmentSlug, false),
      embedUrl: getBookingUrl(treatmentSlug, true),
      heading: TREATMENT_BOOKING_LABELS[treatmentSlug] ?? "Book an appointment",
      kind: "treatment",
    };
  }

  return {
    bookingUrl: CLINIKO_GENERAL,
    embedUrl: CLINIKO_EMBED_GENERAL,
    heading: "Book an appointment",
    kind: "generic",
  };
}
