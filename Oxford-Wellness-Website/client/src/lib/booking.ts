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

export const GLOWDAY_EMBED_SRC =
  "https://www.glowday.com/clinic/the-oxford-wellness-doctor/inga-taganova";

export const PAIN_CALENDLY_URL =
  "https://calendly.com/dr-richard-theoxfordwellnessdoctor";
