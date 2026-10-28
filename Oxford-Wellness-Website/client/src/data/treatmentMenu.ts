import womensHealth from "@/assets/treatments/type-womens-health.jpg";
import antiWrinkle from "@/assets/treatments/type-anti-wrinkle.jpg";
import fillers from "@/assets/treatments/type-fillers.jpg";
import skinBoosters from "@/assets/treatments/type-skin-boosters.jpg";
import rejuvenation from "@/assets/treatments/type-rejuvenation.jpg";
import weightBody from "@/assets/treatments/type-weight-body.jpg";

export type TreatmentLink = {
  name: string;
  href: string;
  description: string;
};

export type TreatmentType = {
  id: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  items: TreatmentLink[];
};

export const treatmentTypes: TreatmentType[] = [
  {
    id: "womens-health",
    title: "Women's Health & Menopause",
    intro:
      "Menopause and perimenopause care, intimate health, and related treatments. What is suitable is decided in consultation.",
    image: womensHealth,
    imageAlt: "Watercolour of an olive branch, cream blossom and a blue flower",
    items: [
      {
        name: "Menopause and perimenopause consultations",
        description:
          "Individual assessment of menopausal symptoms and guidance on appropriate treatment options.",
        href: "/menopause-clinic-oxford",
      },
      {
        name: "Intimate health consultation",
        description:
          "A confidential consultation for vaginal dryness, discomfort and changes in intimate wellbeing.",
        href: "/sexual-wellness-oxford",
      },
      {
        name: "Forma V",
        description:
          "A treatment for intimate comfort. Whether it is appropriate is decided after assessment.",
        href: "/treatments/votiva-forma-v-oxford",
      },
      {
        name: "Neauvia N Rose",
        description:
          "An intimate hyaluronic acid treatment. Availability and suitability are confirmed at consultation.",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
      },
    ],
  },
  {
    id: "anti-wrinkle",
    title: "Anti-wrinkle treatments",
    intro:
      "Treatment to soften lines such as forehead lines, frown lines and crow's feet, and related treatment of the jaw and underarms after assessment.",
    image: antiWrinkle,
    imageAlt: "Watercolour of a blue flax flower and a fern",
    items: [
      {
        name: "Anti-wrinkle injections",
        description: "Treatment to soften lines such as forehead lines, frown lines and crow's feet.",
        href: "/treatments/anti-wrinkle-injections-oxford",
      },
      {
        name: "Masseter / jaw treatment",
        description: "Treatment of the jaw muscles, including for teeth grinding, after assessment.",
        href: "/treatments/jaw-slimming-teeth-grinding-oxford",
      },
      {
        name: "Excessive sweating treatment",
        description: "Underarm treatment for excessive sweating, where it is clinically suitable.",
        href: "/treatments/excessive-sweating-treatment-oxford",
      },
    ],
  },
  {
    id: "fillers",
    title: "Dermal fillers",
    intro: "Hyaluronic acid used to restore volume in selected areas of the face, including the lips.",
    image: fillers,
    imageAlt: "Watercolour of a dusty-rose peony and olive leaves",
    items: [
      {
        name: "Dermal fillers",
        description: "Hyaluronic acid used to restore volume in selected areas of the face.",
        href: "/treatments/dermal-fillers-oxford",
      },
      {
        name: "Lip fillers",
        description: "Hyaluronic acid used to add definition or volume to the lips.",
        href: "/treatments/lip-fillers-oxford",
      },
      {
        name: "Filler dissolving",
        description: "Removal of hyaluronic acid filler when a previous treatment needs to be adjusted.",
        href: "/treatments/filler-dissolving-oxford",
      },
    ],
  },
  {
    id: "skin-boosters",
    title: "Skin boosters",
    intro: "Injectable treatments used to support skin hydration, firmness and quality.",
    image: skinBoosters,
    imageAlt: "Watercolour of a pale blue hydrangea with water droplets on a leaf",
    items: [
      {
        name: "Hyaluronic acid skin boosters",
        description: "Injectable hyaluronic acid used to improve skin hydration and firmness.",
        href: "/treatments/profhilo-oxford",
      },
      {
        name: "Polynucleotides",
        description: "Injectable treatment used to support skin quality and hydration.",
        href: "/treatments/skin-boosters-oxford",
      },
    ],
  },
  {
    id: "rejuvenation",
    title: "Skin rejuvenation",
    intro:
      "Radiofrequency, intense pulsed light and medical-grade peels for texture, firmness, pigmentation and redness.",
    image: rejuvenation,
    imageAlt: "Watercolour of olive leaves and a blush flower",
    items: [
      {
        name: "Morpheus8",
        description:
          "Radiofrequency microneedling used to improve skin texture, firmness and the appearance of certain scars.",
        href: "/treatments/morpheus8-oxford",
      },
      {
        name: "Forma",
        description: "Radiofrequency treatment used to firm and smooth the skin of the face.",
        href: "/treatments/forma-facelift-oxford",
      },
      {
        name: "Lumecca IPL",
        description: "Intense pulsed light used for pigmentation, redness and sun-related skin changes.",
        href: "/treatments/lumecca-ipl-oxford",
      },
      {
        name: "Chemical peels",
        description: "Medical-grade peels used to improve texture, pigmentation and the look of fine lines.",
        href: "/treatments/chemical-peels-oxford",
      },
    ],
  },
  {
    id: "weight",
    title: "Weight & Body",
    intro: "Medical weight management and body treatments, planned around your health rather than a set package.",
    image: weightBody,
    imageAlt: "Watercolour of an olive branch",
    items: [
      {
        name: "Medical weight management consultation",
        description:
          "Assessment of weight-related concerns and discussion of medically appropriate options.",
        href: "/treatments/medical-weight-loss-oxford",
      },
      {
        name: "Forma Plus",
        description: "Radiofrequency body treatment used to firm skin on areas such as the abdomen and arms.",
        href: "/treatments/forma-plus-body-contouring-oxford",
      },
      {
        name: "InMode FX",
        description: "A body treatment used for skin tightening and the appearance of cellulite.",
        href: "/treatments/inmode-fx-skin-tightening-oxford",
      },
      {
        name: "Vitamin B12 injection",
        description: "An intramuscular vitamin B12 injection, given in clinic after a short consultation.",
        href: "/treatments/vitamin-b12-injection-oxford",
      },
    ],
  },
];

export const treatmentMenuExtras: TreatmentLink[] = [
  {
    name: "Personalised treatment plans",
    description:
      "A coordinated plan, recommended after consultation, based on your needs and clinical suitability.",
    href: "/personalised-treatment-plans",
  },
  {
    name: "Price list",
    description: "Treatment fees.",
    href: "/pricing",
  },
  {
    name: "Medical form completion",
    description: "GP completion and signature of medical forms and certificates.",
    href: "/treatments/medical-form-completion-oxford",
  },
];

export const treatmentsIntro =
  "Dr Inga Taganova sees patients for women's health, skin and medical aesthetics, and weight and body concerns at Belsyre Court in Oxford.";

export type MenuItem = {
  name: string;
  href: string;
};

export type MenuGroup = {
  title: string;
  items: MenuItem[];
};

export const treatmentMenuColumns: MenuGroup[][] = [
  [
    {
      title: "Women's health",
      items: [
        { name: "Menopause consultations", href: "/menopause-clinic-oxford" },
        { name: "Intimate health", href: "/sexual-wellness-oxford" },
        { name: "Forma V", href: "/treatments/votiva-forma-v-oxford" },
        { name: "Neauvia N Rose", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
      ],
    },
    {
      title: "Weight & body",
      items: [
        { name: "Medical weight management", href: "/treatments/medical-weight-loss-oxford" },
        { name: "Forma Plus", href: "/treatments/forma-plus-body-contouring-oxford" },
        { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
      ],
    },
  ],
  [
    {
      title: "Injectables",
      items: [
        { name: "Anti-wrinkle treatments", href: "/treatments/anti-wrinkle-injections-oxford" },
        { name: "Dermal fillers", href: "/treatments/dermal-fillers-oxford" },
        { name: "Lip fillers", href: "/treatments/lip-fillers-oxford" },
        { name: "Filler dissolving", href: "/treatments/filler-dissolving-oxford" },
      ],
    },
    {
      title: "Skin boosters",
      items: [
        { name: "Skin boosters", href: "/treatments/profhilo-oxford" },
        { name: "Polynucleotides", href: "/treatments/skin-boosters-oxford" },
      ],
    },
    {
      title: "Other services",
      items: [
        { name: "Excessive sweating", href: "/treatments/excessive-sweating-treatment-oxford" },
        { name: "Jaw treatment", href: "/treatments/jaw-slimming-teeth-grinding-oxford" },
      ],
    },
  ],
  [
    {
      title: "Skin rejuvenation",
      items: [
        { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
        { name: "Lumecca IPL", href: "/treatments/lumecca-ipl-oxford" },
        { name: "Forma", href: "/treatments/forma-facelift-oxford" },
        { name: "Chemical peels", href: "/treatments/chemical-peels-oxford" },
      ],
    },
  ],
];
