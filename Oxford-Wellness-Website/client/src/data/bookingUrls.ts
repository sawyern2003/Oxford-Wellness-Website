/**
 * Cliniko online booking URLs for The Oxford Wellness Doctor.
 * Appointment type and practitioner IDs taken from the live bookings page
 * (https://the-oxford-wellness-doctor.uk3.cliniko.com/bookings) on 2026-11-24.
 *
 * Filter params (Cliniko docs): appointment_type_id, practitioner_id, business_id
 * (comma-separated for multiple). Add embedded=true for iframe embeds.
 */

export const CLINIKO_BOOKINGS_BASE =
  "https://the-oxford-wellness-doctor.uk3.cliniko.com/bookings";

/** Practitioners on the shared Cliniko diary. */
export const CLINIKO_PRACTITIONERS = {
  ingaTaganova: "2090673066873989311",
  richardSawyer: "2090699750306228423",
} as const;

/** Named appointment types used for deep links. */
export const CLINIKO_APPOINTMENT_TYPES = {
  dermalFiller05: "2090666799837227848",
  dermalFiller1: "2090666813225446217",
  dermalFiller2: "2090666826580110154",
  fillerDissolving: "2090666852509297484",
  formaFace: "2090667262938721116",
  skinBooster: "2090666865704577869",
  iplPatchTest: "2090667249684720475",
  lipFiller07: "2090666839448234827",
  lumeccaFaceNeck: "2090667235575081818",
  lumeccaFullFace: "2090667125650762585",
  lumeccaHands: "2090667084286536534",
  lumeccaMedium: "2090667111935388504",
  lumeccaSmall: "2090667098958211927",
  morpheus8EyesMouth: "2090666997682547536",
  morpheus8FaceNeck: "2090667025801161554",
  morpheus8FaceNeckDecolletage: "2090667038920944467",
  morpheus8FullFace: "2090667011616025425",
  morpheus8StretchMarks: "2090667069396757333",
  morpheus8Tummy: "2090667053970107220",
  obagiBluePeel: "2090667276595374941",
  perfectPeel: "2090667291308993374",
  polynucleotides: "2090666879017298766",
  profhilo: "2090666893160491855",
  formaPlus: "2090667305359911775",
  inmodeFx: "2090667319024954208",
  chronicPain: "2090700699712105335",
  aestheticSkinConsult: "2090666392016661309",
  medicalFollowUp: "2090666542944496446",
  longevityConsult: "2090666786449009479",
  formaV: "2090666660032686917",
  intimateHealthConsult: "2090666628424411971",
  menopauseInitial: "2090666575609736000",
  menopauseFollowUp: "2090666612158901058",
  perimenopauseConsult: "2090666594131782465",
  postBirthConsult: "2090666643062532932",
} as const;

export type ClinikoBookingOptions = {
  appointmentTypeIds?: string | string[];
  practitionerId?: string;
  embedded?: boolean;
};

function asList(ids?: string | string[]): string | undefined {
  if (!ids) return undefined;
  return Array.isArray(ids) ? ids.filter(Boolean).join(",") : ids;
}

/** Build a Cliniko bookings URL with optional type / practitioner filters. */
export function clinikoBookingsUrl(options: ClinikoBookingOptions = {}): string {
  const url = new URL(CLINIKO_BOOKINGS_BASE);
  const types = asList(options.appointmentTypeIds);
  if (types) url.searchParams.set("appointment_type_id", types);
  if (options.practitionerId) {
    url.searchParams.set("practitioner_id", options.practitionerId);
  }
  if (options.embedded) url.searchParams.set("embedded", "true");
  return url.toString();
}

export const CLINIKO_GENERAL = clinikoBookingsUrl();
export const CLINIKO_EMBED_GENERAL = clinikoBookingsUrl({ embedded: true });

export const CLINIKO_PAIN_BOOKING = clinikoBookingsUrl({
  appointmentTypeIds: CLINIKO_APPOINTMENT_TYPES.chronicPain,
  practitionerId: CLINIKO_PRACTITIONERS.richardSawyer,
});

export const CLINIKO_PAIN_EMBED = clinikoBookingsUrl({
  appointmentTypeIds: CLINIKO_APPOINTMENT_TYPES.chronicPain,
  practitionerId: CLINIKO_PRACTITIONERS.richardSawyer,
  embedded: true,
});

const T = CLINIKO_APPOINTMENT_TYPES;

export interface BookingUrlConfig {
  /** Cliniko appointment type id(s) when a treatment maps cleanly. */
  appointmentTypeIds: string[];
  /** Optional practitioner filter (defaults to none = any). */
  practitionerId?: string;
}

/**
 * Site treatment slug → Cliniko appointment type(s).
 * Where Cliniko has several variants (e.g. Morpheus8 areas), we pass all so the
 * patient can pick the right one. Treatments without a matching Cliniko type
 * fall back to Aesthetic & Skin Consultation.
 */
export const BOOKING_URLS: Record<string, BookingUrlConfig> = {
  "morpheus8-oxford": {
    appointmentTypeIds: [
      T.morpheus8FullFace,
      T.morpheus8FaceNeck,
      T.morpheus8FaceNeckDecolletage,
      T.morpheus8EyesMouth,
      T.morpheus8Tummy,
      T.morpheus8StretchMarks,
    ],
  },
  "profhilo-oxford": { appointmentTypeIds: [T.profhilo] },
  "dermal-fillers-oxford": {
    appointmentTypeIds: [T.dermalFiller05, T.dermalFiller1, T.dermalFiller2],
  },
  "lip-fillers-oxford": { appointmentTypeIds: [T.lipFiller07] },
  "sexual-wellness-oxford": { appointmentTypeIds: [T.intimateHealthConsult] },
  "menopause-clinic-oxford": {
    appointmentTypeIds: [T.menopauseInitial, T.menopauseFollowUp, T.perimenopauseConsult],
  },
  "womens-health-oxford": {
    appointmentTypeIds: [T.menopauseInitial, T.perimenopauseConsult, T.intimateHealthConsult],
  },
  "votiva-forma-v-oxford": { appointmentTypeIds: [T.formaV, T.intimateHealthConsult] },
  "neauvia-n-rose-intimate-rejuvenation-oxford": {
    appointmentTypeIds: [T.intimateHealthConsult],
  },
  "anti-wrinkle-injections-oxford": { appointmentTypeIds: [T.aestheticSkinConsult] },
  "skin-boosters-oxford": { appointmentTypeIds: [T.skinBooster, T.polynucleotides] },
  "chemical-peels-oxford": { appointmentTypeIds: [T.obagiBluePeel, T.perfectPeel] },
  "lumecca-ipl-oxford": {
    appointmentTypeIds: [
      T.iplPatchTest,
      T.lumeccaFullFace,
      T.lumeccaFaceNeck,
      T.lumeccaMedium,
      T.lumeccaSmall,
      T.lumeccaHands,
    ],
  },
  "forma-facelift-oxford": { appointmentTypeIds: [T.formaFace] },
  "forma-plus-body-contouring-oxford": { appointmentTypeIds: [T.formaPlus] },
  "inmode-fx-skin-tightening-oxford": { appointmentTypeIds: [T.inmodeFx] },
  "filler-dissolving-oxford": { appointmentTypeIds: [T.fillerDissolving] },
  "jaw-slimming-teeth-grinding-oxford": { appointmentTypeIds: [T.aestheticSkinConsult] },
  "excessive-sweating-treatment-oxford": { appointmentTypeIds: [T.aestheticSkinConsult] },
  "vitamin-b12-injection-oxford": { appointmentTypeIds: [T.medicalFollowUp] },
  "medical-form-completion-oxford": { appointmentTypeIds: [T.medicalFollowUp] },
};

/** Consultation query keys → Cliniko appointment type(s). */
export const CONSULTATION_BOOKING_TYPES: Record<string, string[]> = {
  "aesthetic-skin": [T.aestheticSkinConsult],
  menopause: [T.menopauseInitial, T.menopauseFollowUp, T.perimenopauseConsult],
  "follow-up": [T.medicalFollowUp],
  plan: [T.aestheticSkinConsult, T.menopauseInitial, T.longevityConsult],
};

export function getBookingUrl(slug: string, embedded = false): string {
  const config = BOOKING_URLS[slug];
  if (!config) return clinikoBookingsUrl({ embedded });
  return clinikoBookingsUrl({
    appointmentTypeIds: config.appointmentTypeIds,
    practitionerId: config.practitionerId,
    embedded,
  });
}

export function getConsultationBookingUrl(key: string, embedded = false): string {
  const ids = CONSULTATION_BOOKING_TYPES[key];
  if (!ids) return clinikoBookingsUrl({ embedded });
  return clinikoBookingsUrl({ appointmentTypeIds: ids, embedded });
}
