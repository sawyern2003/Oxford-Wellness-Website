import morpheus8Illustration from "@/assets/treatments/skin-morpheus8.jpg";

/**
 * Watercolour slots for the Treatments overview.
 * Paint the file, save it at client/src/assets/treatments/{file},
 * then set `src` to the imported URL. Leave `src` null until the file exists.
 */
export type IllustrationAsset = {
  treatment: string;
  file: string;
  src: string | null;
};

export const treatmentIllustrations = {
  "menopause-consultation": {
    treatment: "Menopause and perimenopause consultations",
    file: "womens-menopause-consultation.png",
    src: null,
  },
  "intimate-consultation": {
    treatment: "Intimate health consultation",
    file: "womens-intimate-consultation.png",
    src: null,
  },
  "forma-v": {
    treatment: "Forma V",
    file: "womens-forma-v.png",
    src: null,
  },
  "neauvia-n-rose": {
    treatment: "Neauvia N Rose",
    file: "womens-neauvia-n-rose.png",
    src: null,
  },
  "anti-wrinkle": {
    treatment: "Anti-wrinkle injections",
    file: "skin-anti-wrinkle.png",
    src: null,
  },
  "dermal-fillers": {
    treatment: "Dermal fillers",
    file: "skin-dermal-fillers.png",
    src: null,
  },
  "lip-fillers": {
    treatment: "Lip fillers",
    file: "skin-lip-fillers.png",
    src: null,
  },
  polynucleotides: {
    treatment: "Polynucleotides",
    file: "skin-polynucleotides.png",
    src: null,
  },
  profhilo: {
    treatment: "Hyaluronic acid skin boosters",
    file: "skin-profhilo.png",
    src: null,
  },
  morpheus8: {
    treatment: "Morpheus8",
    file: "skin-morpheus8.jpg",
    src: morpheus8Illustration,
  },
  lumecca: {
    treatment: "Lumecca IPL",
    file: "skin-lumecca.png",
    src: null,
  },
  forma: {
    treatment: "Forma",
    file: "skin-forma.png",
    src: null,
  },
  "chemical-peels": {
    treatment: "Chemical peels",
    file: "skin-chemical-peels.png",
    src: null,
  },
  "weight-consultation": {
    treatment: "Medical weight management consultation",
    file: "weight-consultation.png",
    src: null,
  },
  "forma-plus": {
    treatment: "Forma Plus",
    file: "weight-forma-plus.png",
    src: null,
  },
  "inmode-fx": {
    treatment: "InMode FX",
    file: "weight-inmode-fx.png",
    src: null,
  },
} satisfies Record<string, IllustrationAsset>;

export type IllustrationId = keyof typeof treatmentIllustrations;
