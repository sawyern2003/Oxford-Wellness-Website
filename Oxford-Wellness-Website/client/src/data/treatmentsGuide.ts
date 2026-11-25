import womensHealth from "@/assets/treatments/type-womens-health.jpg";
import rejuvenation from "@/assets/treatments/type-rejuvenation.jpg";
import fillers from "@/assets/treatments/type-fillers.jpg";
import weightBody from "@/assets/treatments/type-weight-body.jpg";
import antiWrinkle from "@/assets/treatments/type-anti-wrinkle.jpg";

export type GuideItem = {
  name: string;
  whoFor: string;
  helpsWith: string;
  href: string;
};

export type GuideSection = {
  id: string;
  title: string;
  intro: string;
  image: string;
  imageAlt: string;
  items: GuideItem[];
};

/** Editorial treatments index. No fees here. Fees live on /pricing. */
export const treatmentsGuideIntro =
  "Care at The Oxford Wellness Doctor is led by Dr Inga Taganova, GP. This guide groups what we offer by the concerns people bring, so you can see who each appointment is for and what it may help with. Fees are listed separately on the prices page.";

export const treatmentsGuideSections: GuideSection[] = [
  {
    id: "womens-health",
    title: "Women's health and menopause",
    intro:
      "Consultations for midlife change, perimenopause and menopause. Options are discussed in clinic and decided together after assessment.",
    image: womensHealth,
    imageAlt: "Watercolour of an olive branch, cream blossom and a blue flower",
    items: [
      {
        name: "Menopause consultation",
        whoFor: "Women with hot flushes, sleep change, mood shifts or other menopause symptoms.",
        helpsWith: "A full clinical assessment and a clear plan for next steps.",
        href: "/menopause-clinic-oxford",
      },
      {
        name: "Perimenopause consultation",
        whoFor: "Women in their forties noticing irregular cycles, fatigue or early midlife change.",
        helpsWith: "Understanding what is happening and which options may suit you.",
        href: "/perimenopause-oxford",
      },
      {
        name: "Women's health consultation",
        whoFor: "Women who want a broader look at hormones, energy and wellbeing.",
        helpsWith: "A doctor-led review of interconnected concerns, not a single symptom in isolation.",
        href: "/womens-health-oxford",
      },
      {
        name: "Vitamin B12 injection",
        whoFor: "People who need intramuscular B12 after a short clinical review.",
        helpsWith: "Clinic administration of B12 when it is appropriate.",
        href: "/treatments/vitamin-b12-injection-oxford",
      },
      {
        name: "Medical form completion",
        whoFor: "Patients who need a GP signature on medical forms or certificates.",
        helpsWith: "Careful completion of paperwork after review.",
        href: "/treatments/medical-form-completion-oxford",
      },
    ],
  },
  {
    id: "intimate-health",
    title: "Intimate health",
    intro:
      "Confidential care for dryness, discomfort and changes in intimate wellbeing. Suitability for any procedure is decided after assessment.",
    image: fillers,
    imageAlt: "Watercolour of a dusty-rose peony and olive leaves",
    items: [
      {
        name: "Intimate health consultation",
        whoFor: "Women with dryness, discomfort or changes in intimate comfort.",
        helpsWith: "A private conversation and a plan that may include clinic treatments where suitable.",
        href: "/sexual-wellness-oxford",
      },
      {
        name: "Forma V",
        whoFor: "Women seeking non-surgical support for intimate comfort after assessment.",
        helpsWith: "Radiofrequency treatment for intimate comfort when clinically appropriate.",
        href: "/treatments/votiva-forma-v-oxford",
      },
      {
        name: "Neauvia N Rose",
        whoFor: "Women for whom an intimate hyaluronic acid treatment may be suitable.",
        helpsWith: "Targeted support for intimate tissue quality, confirmed at consultation.",
        href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
      },
    ],
  },
  {
    id: "longevity",
    title: "Longevity",
    intro:
      "A longer view of midlife health: energy, recovery, skin quality and how systems interact over time.",
    image: weightBody,
    imageAlt: "Watercolour of an olive branch",
    items: [
      {
        name: "Longevity consultation",
        whoFor: "Women who want a considered, doctor-led review of midlife health and prevention.",
        helpsWith: "A structured assessment of lifestyle, recovery and priorities for the years ahead.",
        href: "/longevity-medicine-oxford",
      },
      {
        name: "Personalised treatment plans",
        whoFor: "People whose concerns sit across skin, hormones and intimate health.",
        helpsWith: "A coordinated plan after consultation, rather than a single treatment in isolation.",
        href: "/personalised-treatment-plans",
      },
      {
        name: "Postpartum recovery",
        whoFor: "Women recovering after birth who want doctor-led guidance on body and wellbeing.",
        helpsWith: "Support for recovery, comfort and next steps in clinic.",
        href: "/postpartum-recovery-oxford",
      },
    ],
  },
  {
    id: "aesthetics-skin",
    title: "Aesthetics and skin",
    intro:
      "Doctor-led facial and body treatments for lines, volume, texture, firmness and pigment. Every plan starts with consultation.",
    image: rejuvenation,
    imageAlt: "Watercolour of olive leaves and a blush flower",
    items: [
      {
        name: "Lines and wrinkles consultation",
        whoFor: "People bothered by forehead lines, frown lines or crow's feet.",
        helpsWith: "A doctor-led assessment of expression lines, with treatment discussed only after consultation.",
        href: "/treatments/anti-wrinkle-injections-oxford",
      },
      {
        name: "Dermal fillers",
        whoFor: "People noticing volume loss in selected areas of the face.",
        helpsWith: "Hyaluronic acid used to restore volume where it is clinically suitable.",
        href: "/treatments/dermal-fillers-oxford",
      },
      {
        name: "Lip fillers",
        whoFor: "People seeking subtle definition or volume in the lips.",
        helpsWith: "Hyaluronic acid for natural-looking lip shape after assessment.",
        href: "/treatments/lip-fillers-oxford",
      },
      {
        name: "Filler dissolving",
        whoFor: "People who need hyaluronic acid filler adjusted or removed.",
        helpsWith: "Careful dissolving when a previous treatment needs revision.",
        href: "/treatments/filler-dissolving-oxford",
      },
      {
        name: "Jaw and grinding treatment",
        whoFor: "People with jaw tension, teeth grinding or a heavy jawline after assessment.",
        helpsWith: "Targeted treatment of the jaw muscles where suitable.",
        href: "/treatments/jaw-slimming-teeth-grinding-oxford",
      },
      {
        name: "Profhilo",
        whoFor: "People wanting better skin quality and hydration rather than added volume.",
        helpsWith: "Injectable hyaluronic acid to support firmness and glow.",
        href: "/treatments/profhilo-oxford",
      },
      {
        name: "Skin boosters and polynucleotides",
        whoFor: "People seeking hydration and regenerative support for skin quality.",
        helpsWith: "Injectable treatments that support skin texture and resilience.",
        href: "/treatments/skin-boosters-oxford",
      },
      {
        name: "Morpheus8",
        whoFor: "People with texture change, mild laxity or certain scars.",
        helpsWith: "Radiofrequency microneedling for firmness and surface quality.",
        href: "/treatments/morpheus8-oxford",
      },
      {
        name: "Forma",
        whoFor: "People wanting non-surgical firming of facial skin.",
        helpsWith: "Radiofrequency treatment to smooth and firm the face.",
        href: "/treatments/forma-facelift-oxford",
      },
      {
        name: "Lumecca IPL",
        whoFor: "People with pigmentation, redness or sun-related skin change.",
        helpsWith: "Intense pulsed light for clearer, more even-toned skin.",
        href: "/treatments/lumecca-ipl-oxford",
      },
      {
        name: "Chemical peels",
        whoFor: "People with dullness, fine texture change or uneven tone.",
        helpsWith: "Medical-grade peels to refresh the skin surface.",
        href: "/treatments/chemical-peels-oxford",
      },
      {
        name: "Excessive sweating treatment",
        whoFor: "People with underarm sweating that interferes with daily life.",
        helpsWith: "Clinic treatment of the underarms where it is clinically suitable.",
        href: "/treatments/excessive-sweating-treatment-oxford",
      },
      {
        name: "Forma Plus",
        whoFor: "People seeking firmer skin on areas such as the abdomen or arms.",
        helpsWith: "Radiofrequency body treatment for skin firming.",
        href: "/treatments/forma-plus-body-contouring-oxford",
      },
      {
        name: "InMode FX",
        whoFor: "People concerned about skin tightness or the look of cellulite.",
        helpsWith: "Body treatment for firmness and surface texture after assessment.",
        href: "/treatments/inmode-fx-skin-tightening-oxford",
      },
      {
        name: "Menopause and skin",
        whoFor: "Women noticing dryness, dullness or change in skin during midlife.",
        helpsWith: "A doctor-led view of how midlife change shows in the skin.",
        href: "/menopause-skin",
      },
      {
        name: "Skin clinic",
        whoFor: "People wanting a broader skin consultation in Oxford.",
        helpsWith: "Assessment and a plan across injectables, energy devices and peels.",
        href: "/skin-clinic-oxford",
      },
    ],
  },
  {
    id: "chronic-pain",
    title: "Chronic pain with Dr Richard Sawyer",
    intro:
      "Consultant-led chronic pain care with Dr Richard Sawyer at The Oxford Pain Doctor, part of the same clinic.",
    image: antiWrinkle,
    imageAlt: "Watercolour of a blue flax flower and a fern",
    items: [
      {
        name: "The Oxford Pain Doctor",
        whoFor: "People living with persistent pain who want an evidence-led, consultant review.",
        helpsWith: "A biopsychosocial approach to understanding and managing chronic pain.",
        href: "/oxford-pain-doctor",
      },
      {
        name: "How pain care works",
        whoFor: "Anyone considering a chronic pain consultation for the first time.",
        helpsWith: "An overview of assessment, planning and the kinds of support offered.",
        href: "/oxford-pain-doctor/how-we-help",
      },
      {
        name: "Pain library",
        whoFor: "Readers who want clear writing on pain science and self-management.",
        helpsWith: "Articles on sleep, stress, exercise and how pain is shaped in the body.",
        href: "/oxford-pain-doctor/library",
      },
    ],
  },
];
