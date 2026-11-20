import imgSkin from "@/assets/lifestyle-window-earring.jpg";
import imgBody from "@/assets/lifestyle-street-coffee-flip.jpg";
import imgIntimate from "@/assets/lifestyle-loafers.jpg";

export interface ProgrammeTreatment {
  name: string;
  href: string;
}

export interface ProgrammeFaq {
  q: string;
  a: string;
}

export interface Programme {
  id: string;
  name: string;
  slug: string;
  href: string;
  problemLabel: string;
  shortDesc: string;
  image: string;
  overview: string;
  whoFor: string[];
  doctorOverview: string;
  journey: string[];
  treatmentsIncluded: ProgrammeTreatment[];
  expectedImprovements: string[];
  timeline: string;
  investment: string;
  duration: string;
  includesSummary: string;
  faqs: ProgrammeFaq[];
}

export const programmes: Programme[] = [
  {
    id: "skin-health-regeneration",
    name: "Skin Health & Regeneration",
    slug: "skin-health-regeneration",
    href: "/programmes/skin-health-regeneration",
    problemLabel: "Skin changes & healthy ageing",
    shortDesc:
      "A personalised journey for skin quality, collagen support, pigmentation and hydration.",
    image: imgSkin,
    overview:
      "For women noticing changes in skin texture, firmness, pigmentation or hydration – often in midlife. This programme focuses on restoring skin health through a carefully sequenced journey, not a single treatment.",
    whoFor: [
      "Women noticing midlife skin changes",
      "Those concerned about collagen loss, dullness or pigmentation",
      "Patients who want natural improvement in skin quality over time",
      "Anyone seeking doctor-led guidance rather than a treatment menu",
    ],
    doctorOverview:
      "Dr Inga assesses your skin in the context of your health, hormones and goals. Recommendations are evidence-based and paced to support lasting skin quality – never rushed or overtreated.",
    journey: [
      "Online consultation to understand your concerns and history",
      "Personalised skin health plan with clear sequencing",
      "In-clinic treatments at Belsyre Court in Oxford",
      "Recommended home care to support results",
      "Review and maintenance for long-term skin health",
    ],
    treatmentsIncluded: [
      { name: "Profhilo", href: "/treatments/profhilo-oxford" },
      { name: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
      { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
      { name: "Lumecca IPL", href: "/treatments/lumecca-ipl-oxford" },
      { name: "Chemical Peels", href: "/treatments/chemical-peels-oxford" },
      { name: "Anti-Wrinkle Injections", href: "/treatments/anti-wrinkle-injections-oxford" },
      { name: "Recommended Skincare", href: "/recommended-skincare" },
    ],
    expectedImprovements: [
      "Improved skin quality and hydration",
      "Support for collagen and firmness",
      "More even tone where pigmentation is addressed",
      "A refreshed appearance that still looks like you",
    ],
    timeline: "Typically 8–16 weeks for an initial journey, then maintenance as advised.",
    investment: "From £450",
    duration: "8–16 weeks + maintenance",
    includesSummary: "Consultation, sequenced treatments, home-care guidance, review",
    faqs: [
      {
        q: "Is this the same as booking a single skin treatment?",
        a: "No. Treatments may be included, but the programme is a personalised journey with consultation, sequencing, aftercare and review.",
      },
      {
        q: "Will I look overdone?",
        a: "The aim is natural confidence – skin that looks healthier and more like you. Dr Inga prioritises subtle, evidence-based outcomes.",
      },
      {
        q: "Where do treatments take place?",
        a: "Treatment appointments are at Belsyre Court in Oxford, delivered personally by Dr Inga Taganova.",
      },
    ],
  },
  {
    id: "intimate-wellness",
    name: "Intimate Wellness",
    slug: "intimate-wellness",
    href: "/programmes/intimate-wellness",
    problemLabel: "Intimate confidence & wellbeing",
    shortDesc:
      "Discreet, doctor-led care for intimate comfort, confidence and midlife changes.",
    image: imgIntimate,
    overview:
      "For women experiencing intimate dryness, discomfort or loss of confidence – often related to menopause, childbirth or ageing. Care is private, clinical and unhurried.",
    whoFor: [
      "Women with intimate dryness or discomfort",
      "Those navigating menopause or postpartum changes",
      "Patients seeking discreet doctor-led intimate care",
      "Anyone who wants sensitive, evidence-based guidance",
    ],
    doctorOverview:
      "As a GP with a background in obstetrics and gynaecology and GP with experience in menopause care, Dr Inga approaches intimate wellness with clinical depth and complete discretion. Conversations are calm, private and never rushed.",
    journey: [
      "Confidential online consultation",
      "Personalised intimate wellness plan",
      "In-clinic treatment at Belsyre Court in Oxford where appropriate",
      "Aftercare guidance and review",
      "Long-term maintenance if needed",
    ],
    treatmentsIncluded: [
      { name: "Votiva Forma V", href: "/treatments/votiva-forma-v-oxford" },
      { name: "Neauvia N Rose", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
      { name: "Menopause Clinic", href: "/menopause-clinic-oxford" },
    ],
    expectedImprovements: [
      "Improved comfort and hydration where treated",
      "Greater intimate confidence",
      "Clear understanding of options and expectations",
      "Ongoing support within a trusted medical relationship",
    ],
    timeline: "Often 4–12 weeks depending on the treatments included.",
    investment: "From £450",
    duration: "4–12 weeks + review",
    includesSummary: "Consultation, discreet treatment plan, aftercare, review",
    faqs: [
      {
        q: "Is this confidential?",
        a: "Yes. Consultations and treatments are private and handled with complete discretion.",
      },
      {
        q: "Do I need a GP referral?",
        a: "No. You can book a consultation directly and discuss whether a plan is appropriate.",
      },
      {
        q: "Can this be combined with menopause support?",
        a: "Yes. Intimate wellness is often considered alongside wider midlife and menopause care.",
      },
    ],
  },
  {
    id: "weight-body-confidence",
    name: "Body Contouring & Confidence",
    slug: "weight-body-confidence",
    href: "/programmes/weight-body-confidence",
    problemLabel: "Body confidence & skin tightening",
    shortDesc:
      "Non-surgical body contouring and skin tightening treatments designed to improve body confidence.",
    image: imgBody,
    overview:
      "For women seeking body confidence support through non-surgical treatments. This programme combines doctor-led assessment with body-contouring and skin-tightening treatments that address loose skin, cellulite, and body shape concerns.",
    whoFor: [
      "Women experiencing loose skin or loss of body tone",
      "Those seeking non-surgical body contouring",
      "Patients wanting body confidence support through aesthetic treatments",
      "Anyone who wants discreet, doctor-led body treatments",
    ],
    doctorOverview:
      "Dr Inga approaches body confidence with evidence-based treatments. She assesses your concerns and recommends appropriate non-surgical body contouring options that are safe and effective.",
    journey: [
      "Consultation and body assessment",
      "Personalised body contouring treatment plan",
      "Course of RF body treatments (Forma Plus, InMode FX, or Morpheus8)",
      "Review and maintenance plan",
    ],
    treatmentsIncluded: [
      { name: "Morpheus8 Body", href: "/treatments/morpheus8-oxford" },
      { name: "Forma Plus Body", href: "/treatments/forma-plus-body-contouring-oxford" },
      { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
      { name: "Vitamin B12", href: "/treatments/vitamin-b12-injection-oxford" },
    ],
    expectedImprovements: [
      "Tighter, firmer skin on treated areas",
      "Improved body contour and definition",
      "Reduced appearance of cellulite",
      "Improved body confidence",
    ],
    timeline: "Typically 6–8 weeks for a course of treatments, then maintenance.",
    investment: "From £75 consultation; treatment courses from £995",
    duration: "6–8 weeks + maintenance",
    includesSummary: "Consultation, body assessment, course of RF treatments, review",
    faqs: [
      {
        q: "How do body contouring treatments work?",
        a: "Non-surgical body contouring uses radiofrequency energy to heat deep tissue, stimulating collagen production and tightening skin. Treatments are comfortable with no downtime.",
      },
      {
        q: "How many treatments will I need?",
        a: "Most patients benefit from a course of 6 treatments spaced weekly. Dr Taganova will advise during consultation.",
      },
      {
        q: "Is there any downtime?",
        a: "No. You may have mild redness for an hour after treatment, but you can return to normal activities immediately.",
      },
    ],
  },
];

export function getProgrammeById(id: string): Programme | undefined {
  return programmes.find((p) => p.id === id);
}

export function getProgrammeBySlug(slug: string): Programme | undefined {
  return programmes.find((p) => p.slug === slug);
}
