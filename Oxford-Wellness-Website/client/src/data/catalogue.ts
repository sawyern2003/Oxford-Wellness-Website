/**
 * Single fee schedule for the clinic website.
 *
 * Approved amounts are shown only when priceApproved is true.
 * "Price on consultation" is reserved for services with no approved figure.
 * Prescription-only medicines are not named here.
 */

export type CatalogueCategory =
  | "consultations"
  | "anti-wrinkle"
  | "fillers"
  | "skin"
  | "body"
  | "womens"
  | "other";

export type ConsultationKey = "aesthetic-skin" | "menopause" | "weight" | "follow-up" | "plan";

export interface CatalogueItem {
  id: string;
  name: string;
  category: CatalogueCategory;
  description: string;
  provisionalAmount: string | null;
  qualifier: string | null;
  duration: string | null;
  areaOrVolume: string | null;
  bookingUrl: string;
  detailUrl: string | null;
  active: boolean;
  consultationRequired: boolean;
  priceApproved: boolean;
  featured: boolean;
  /** Other pages that should list this fee. The Prices page link stays detailUrl. */
  pricePaths?: string[];
}

export const CATEGORY_LABELS: Record<CatalogueCategory, string> = {
  consultations: "Consultations",
  "anti-wrinkle": "Anti-wrinkle treatments",
  fillers: "Dermal fillers and skin boosters",
  skin: "Advanced skin treatments",
  body: "Body treatments",
  womens: "Women's and intimate health",
  other: "Other appointments",
};

export const CATEGORY_ORDER: CatalogueCategory[] = [
  "consultations",
  "anti-wrinkle",
  "fillers",
  "skin",
  "body",
  "womens",
  "other",
];

const book = (consultation: ConsultationKey) => `/book?consultation=${consultation}`;

function fee(entry: {
  id: string;
  name: string;
  category: CatalogueCategory;
  amount: string | null;
  booking: ConsultationKey;
  detailUrl: string | null;
  description?: string;
  consultationRequired?: boolean;
  featured?: boolean;
  pricePaths?: string[];
}): CatalogueItem {
  return {
    id: entry.id,
    name: entry.name,
    category: entry.category,
    description: entry.description ?? "",
    provisionalAmount: entry.amount,
    qualifier: null,
    duration: null,
    areaOrVolume: null,
    bookingUrl: book(entry.booking),
    detailUrl: entry.detailUrl,
    active: true,
    consultationRequired: entry.consultationRequired ?? entry.category !== "consultations",
    priceApproved: entry.amount !== null,
    featured: entry.featured ?? false,
    pricePaths: entry.pricePaths,
  };
}

export const catalogue: CatalogueItem[] = [
  fee({
    id: "consult-aesthetic",
    name: "Aesthetic & Skin Consultation",
    category: "consultations",
    description: "Assessment before aesthetic or skin treatment.",
    amount: "£75",
    booking: "aesthetic-skin",
    detailUrl: "/pricing",
    consultationRequired: false,
    featured: true,
  }),
  fee({
    id: "consult-menopause",
    name: "Menopause & Women's Health Consultation — Initial",
    category: "consultations",
    description: "Consultation for menopause, perimenopause and related women's health concerns.",
    amount: "£195",
    booking: "menopause",
    detailUrl: "/menopause-clinic-oxford",
    consultationRequired: false,
    featured: true,
    pricePaths: ["/perimenopause-oxford"],
  }),
  fee({
    id: "consult-menopause-follow-up",
    name: "Menopause & Women's Health — Follow-up",
    category: "consultations",
    description: "Review of an existing menopause or women's health plan.",
    amount: "£95",
    booking: "menopause",
    detailUrl: "/menopause-clinic-oxford",
    consultationRequired: false,
    pricePaths: ["/perimenopause-oxford"],
  }),
  fee({
    id: "consult-intimate",
    name: "Intimate Health Consultation",
    category: "consultations",
    description: "Assessment of intimate health concerns before any treatment is considered.",
    amount: "£150",
    booking: "menopause",
    detailUrl: "/sexual-wellness-oxford",
    consultationRequired: false,
  }),
  fee({
    id: "consult-weight",
    name: "Medical Weight Management Consultation — Initial",
    category: "consultations",
    description: "Medical assessment before any weight-management plan.",
    amount: "£95",
    booking: "weight",
    detailUrl: "/treatments/medical-weight-loss-oxford",
    consultationRequired: false,
    featured: true,
    pricePaths: ["/longevity-medicine-oxford"],
  }),
  fee({
    id: "consult-weight-follow-up",
    name: "Medical Weight Management — Follow-up",
    category: "consultations",
    description: "Review of an existing weight-management plan.",
    amount: "£55",
    booking: "weight",
    detailUrl: "/treatments/medical-weight-loss-oxford",
    consultationRequired: false,
    pricePaths: ["/longevity-medicine-oxford"],
  }),
  fee({
    id: "consult-follow-up",
    name: "Medical Follow-up (general)",
    category: "consultations",
    description: "Review of an existing plan or treatment.",
    amount: "£75",
    booking: "follow-up",
    detailUrl: "/pricing",
    consultationRequired: false,
  }),
  fee({
    id: "toxin-1",
    name: "One area",
    category: "anti-wrinkle",
    description: "For example, forehead lines.",
    amount: "£210",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
    featured: true,
  }),
  fee({
    id: "toxin-2",
    name: "Two areas",
    category: "anti-wrinkle",
    description: "For example, forehead and frown lines.",
    amount: "£270",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
  }),
  fee({
    id: "toxin-3",
    name: "Three areas",
    category: "anti-wrinkle",
    description: "For example, forehead, frown and crow's feet.",
    amount: "£330",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
  }),
  fee({
    id: "toxin-chin",
    name: "Dimpled chin — standalone",
    category: "anti-wrinkle",
    amount: "£150",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
  }),
  fee({
    id: "toxin-bunny",
    name: "Bunny lines — as an addition",
    category: "anti-wrinkle",
    amount: "£50",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
  }),
  fee({
    id: "toxin-chin-addon",
    name: "Dimpled chin — as an addition",
    category: "anti-wrinkle",
    amount: "£50",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
  }),
  fee({
    id: "toxin-mouth-addon",
    name: "Downturned mouth — as an addition",
    category: "anti-wrinkle",
    amount: "£50",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/anti-wrinkle-injections-oxford",
  }),
  fee({
    id: "masseter",
    name: "Masseter / jaw treatment",
    category: "anti-wrinkle",
    amount: "£275",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/jaw-slimming-teeth-grinding-oxford",
  }),
  fee({
    id: "hyperhidrosis",
    name: "Excessive sweating treatment",
    category: "anti-wrinkle",
    amount: "£450",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/excessive-sweating-treatment-oxford",
  }),
  fee({
    id: "filler-05",
    name: "Dermal filler — 0.5ml",
    category: "fillers",
    amount: "£220",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/dermal-fillers-oxford",
  }),
  fee({
    id: "filler-1ml",
    name: "Dermal filler — 1ml",
    category: "fillers",
    amount: "£320",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/dermal-fillers-oxford",
    featured: true,
  }),
  fee({
    id: "filler-2ml",
    name: "Dermal filler — 2ml",
    category: "fillers",
    amount: "£590",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/dermal-fillers-oxford",
  }),
  // £320 keeps the existing 0.7ml volume. Confirm this figure against the product used in clinic.
  fee({
    id: "lip-07",
    name: "Lip filler — 0.7ml",
    category: "fillers",
    amount: "£320",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/lip-fillers-oxford",
  }),
  fee({
    id: "filler-dissolving",
    name: "Filler dissolving",
    category: "fillers",
    amount: "£200",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/filler-dissolving-oxford",
  }),
  fee({
    id: "ha-booster",
    name: "Hyaluronic acid skin booster",
    category: "fillers",
    amount: "£250",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/skin-boosters-oxford",
  }),
  fee({
    id: "polynucleotides",
    name: "Polynucleotides — single session",
    category: "fillers",
    amount: "£350",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/skin-boosters-oxford",
  }),
  fee({
    id: "polynucleotides-course",
    name: "Polynucleotides — course of 3",
    category: "fillers",
    amount: "£900",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/skin-boosters-oxford",
  }),
  fee({
    id: "profhilo",
    name: "Profhilo — single session",
    category: "fillers",
    amount: "£295",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/profhilo-oxford",
  }),
  fee({
    id: "profhilo-course",
    name: "Profhilo — course of 2",
    category: "fillers",
    amount: "£550",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/profhilo-oxford",
  }),
  fee({
    id: "morpheus-eyes",
    name: "Morpheus8 — eyes or around mouth",
    category: "skin",
    amount: "£400",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
  }),
  fee({
    id: "morpheus-full-face",
    name: "Morpheus8 — full face",
    category: "skin",
    amount: "£550",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
    featured: true,
  }),
  fee({
    id: "morpheus-face-neck",
    name: "Morpheus8 — face and neck",
    category: "skin",
    amount: "£700",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
  }),
  fee({
    id: "morpheus-face",
    name: "Morpheus8 — face, neck and décolletage",
    category: "skin",
    amount: "£800",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
  }),
  fee({
    id: "morpheus-tummy",
    name: "Morpheus8 — tummy",
    category: "skin",
    amount: "£800",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
  }),
  fee({
    id: "morpheus-large",
    name: "Morpheus8 — stretch marks or large area",
    category: "skin",
    amount: "£800",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
  }),
  fee({
    id: "morpheus-addon",
    name: "Morpheus8 resurfacing — as an addition",
    category: "skin",
    amount: null,
    booking: "aesthetic-skin",
    detailUrl: "/treatments/morpheus8-oxford",
  }),
  fee({
    id: "lumecca-hands",
    name: "Lumecca IPL — hands",
    category: "skin",
    amount: "£150",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/lumecca-ipl-oxford",
  }),
  fee({
    id: "lumecca-small",
    name: "Lumecca IPL — small area",
    category: "skin",
    amount: "£150",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/lumecca-ipl-oxford",
  }),
  fee({
    id: "lumecca-medium",
    name: "Lumecca IPL — medium area",
    category: "skin",
    amount: "£225",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/lumecca-ipl-oxford",
  }),
  fee({
    id: "lumecca-face",
    name: "Lumecca IPL — full face",
    category: "skin",
    amount: "£225",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/lumecca-ipl-oxford",
  }),
  fee({
    id: "lumecca-face-neck",
    name: "Lumecca IPL — face and neck",
    category: "skin",
    amount: "£300",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/lumecca-ipl-oxford",
  }),
  fee({
    id: "forma-face",
    name: "Forma — face, single session",
    category: "skin",
    amount: "£175",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/forma-facelift-oxford",
  }),
  fee({
    id: "forma-face-course",
    name: "Forma — face, course of 6",
    category: "skin",
    amount: "£850",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/forma-facelift-oxford",
  }),
  fee({
    id: "peel-obagi",
    name: "Obagi Blue Peel Radiance",
    category: "skin",
    amount: "£150",
    booking: "aesthetic-skin",
    detailUrl: "/treatments/chemical-peels-oxford",
  }),
  fee({
    id: "peel-perfect",
    name: "Perfect Peel",
    category: "skin",
    amount: null,
    booking: "aesthetic-skin",
    detailUrl: "/treatments/chemical-peels-oxford",
  }),
  fee({
    id: "forma-plus",
    name: "Forma Plus — single session",
    category: "body",
    amount: "£225",
    booking: "weight",
    detailUrl: "/treatments/forma-plus-body-contouring-oxford",
  }),
  fee({
    id: "forma-plus-course",
    name: "Forma Plus — course of 6",
    category: "body",
    amount: "£1,100",
    booking: "weight",
    detailUrl: "/treatments/forma-plus-body-contouring-oxford",
  }),
  fee({
    id: "inmode-fx",
    name: "InMode FX — single session",
    category: "body",
    amount: "£175",
    booking: "weight",
    detailUrl: "/treatments/inmode-fx-skin-tightening-oxford",
  }),
  fee({
    id: "inmode-fx-course",
    name: "InMode FX — course of 6",
    category: "body",
    amount: "£850",
    booking: "weight",
    detailUrl: "/treatments/inmode-fx-skin-tightening-oxford",
  }),
  fee({
    id: "forma-v",
    name: "Forma V — single session",
    category: "womens",
    description: "Intimate treatment. Suitability is decided in consultation.",
    amount: "£350",
    booking: "menopause",
    detailUrl: "/treatments/votiva-forma-v-oxford",
  }),
  fee({
    id: "forma-v-course",
    name: "Forma V — course of 3",
    category: "womens",
    description: "Intimate treatment. Suitability is decided in consultation.",
    amount: "£950",
    booking: "menopause",
    detailUrl: "/treatments/votiva-forma-v-oxford",
  }),
  fee({
    id: "intimate-ha",
    name: "Intimate hyaluronic acid treatment",
    category: "womens",
    description: "Suitability is decided in consultation.",
    amount: null,
    booking: "menopause",
    detailUrl: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
  }),
  fee({
    id: "b12",
    name: "Vitamin B12 injection",
    category: "other",
    amount: "£35",
    booking: "follow-up",
    detailUrl: "/treatments/vitamin-b12-injection-oxford",
    pricePaths: ["/longevity-medicine-oxford"],
  }),
  fee({
    id: "medical-form",
    name: "Medical form completion",
    category: "other",
    amount: null,
    booking: "follow-up",
    detailUrl: "/treatments/medical-form-completion-oxford",
    consultationRequired: false,
  }),
];

export function publicPrice(item: CatalogueItem): string {
  if (!item.priceApproved || !item.provisionalAmount) return "Price on consultation";
  return item.qualifier ? `${item.provisionalAmount} ${item.qualifier}` : item.provisionalAmount;
}

export function activeCatalogue(): CatalogueItem[] {
  return catalogue.filter((item) => item.active);
}

export function itemsInCategory(category: CatalogueCategory): CatalogueItem[] {
  return activeCatalogue().filter((item) => item.category === category);
}

export function itemsForPath(path: string): CatalogueItem[] {
  return activeCatalogue().filter(
    (item) => item.detailUrl === path || item.pricePaths?.includes(path),
  );
}

export function featuredTreatments(): CatalogueItem[] {
  const seen = new Set<string>();
  return activeCatalogue().filter((item) => {
    if (!item.featured || !item.detailUrl || seen.has(item.detailUrl)) return false;
    seen.add(item.detailUrl);
    return true;
  });
}
