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
      "As a formally trained gynaecologist and specialist menopause lead, Dr Inga approaches intimate wellness with clinical depth and complete discretion. Conversations are calm, private and never rushed.",
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
    investment: "From £350",
    duration: "4–12 weeks + review",
    includesSummary: "Consultation, discreet treatment plan, aftercare, review",
    faqs: [
      {
        q: "Is this confidential?",
        a: "Yes. Consultations and treatments are private and handled with complete discretion.",
      },
      {
        q: "Do I need a GP referral?",
        a: "No. You can begin with the Programme Finder or book a consultation directly.",
      },
      {
        q: "Can this be combined with menopause support?",
        a: "Yes. Intimate wellness is often considered alongside wider midlife and menopause care.",
      },
    ],
  },
  {
    id: "weight-body-confidence",
    name: "Weight & Body Confidence",
    slug: "weight-body-confidence",
    href: "/programmes/weight-body-confidence",
    problemLabel: "Body confidence & metabolic change",
    shortDesc:
      "Medical weight management and body confidence support designed around sustainable change.",
    image: imgBody,
    overview:
      "For women navigating weight changes, body confidence concerns or midlife metabolic shifts. This programme combines medical oversight with personalised support – and, where appropriate, body-contouring treatments that complement healthier composition.",
    whoFor: [
      "Women experiencing midlife weight changes",
      "Those seeking medically supervised weight management",
      "Patients wanting body confidence support beyond diet alone",
      "Anyone who wants discreet, doctor-led guidance",
    ],
    doctorOverview:
      "Dr Inga approaches body confidence as a medical and personal journey. Where GLP-1 medication or adjunct treatments are suitable, they are prescribed and monitored carefully – never as a quick fix.",
    journey: [
      "Online consultation and medical suitability assessment",
      "Personalised metabolic and body confidence plan",
      "Supervised medical weight management where appropriate",
      "Optional skin tightening or contouring as part of the journey",
      "Ongoing review and long-term maintenance",
    ],
    treatmentsIncluded: [
      { name: "Medical Weight Loss", href: "/treatments/medical-weight-loss-oxford" },
      { name: "Vitamin B12", href: "/treatments/vitamin-b12-injection-oxford" },
      { name: "Morpheus8", href: "/treatments/morpheus8-oxford" },
      { name: "Forma Plus Body", href: "/treatments/forma-plus-body-contouring-oxford" },
      { name: "InMode FX", href: "/treatments/inmode-fx-skin-tightening-oxford" },
    ],
    expectedImprovements: [
      "Clearer plan for sustainable metabolic support",
      "Improved body confidence with medical oversight",
      "Support for skin quality as body composition changes",
      "Ongoing review rather than a one-off intervention",
    ],
    timeline: "Often 3–6 months for a foundational journey, then maintenance.",
    investment: "From £50 consultation; programme pricing discussed individually",
    duration: "3–6 months + maintenance",
    includesSummary: "Consultation, medical plan, monitoring, optional adjunct treatments",
    faqs: [
      {
        q: "Do you prescribe Wegovy or Mounjaro?",
        a: "Where clinically appropriate, yes – with careful assessment and ongoing medical supervision.",
      },
      {
        q: "Is this only about medication?",
        a: "No. Medication may be one part of a wider plan that can include lifestyle guidance, nutrient support and, where helpful, body-confidence treatments.",
      },
      {
        q: "Will I be pressured into treatments?",
        a: "No. Suitability and pacing are confirmed in consultation. The focus is trust and sustainable confidence.",
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
