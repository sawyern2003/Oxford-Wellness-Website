import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const morpheus8Data: TreatmentLandingPageData = {
  slug: "morpheus8-oxford",
  h1: "Morpheus8 in Oxford",
  title: "Morpheus8 Oxford | RF Microneedling | The Oxford Wellness Doctor",
  metaDescription: "Morpheus8 radiofrequency microneedling in Oxford. Non-surgical skin tightening for face & body. Reduces wrinkles, scars & improves texture.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/morpheus8-oxford",
  
  priceLabel: "Full face treatment",
  priceValue: "£450",
  
  whoIsFor: {
    heading: "Who is Morpheus8 for?",
    items: [
      "Loose skin on face, neck, and jowls",
      "Deep wrinkles and folds",
      "Acne scars and uneven texture",
      "Large pores",
      "Stretch marks and body laxity"
    ]
  },
  
  howItWorks: {
    heading: "How it works",
    intro: "Morpheus8 combines microneedling with radiofrequency energy to remodel collagen deep in the tissue.",
    steps: [
      "Numbing cream applied 45–60 minutes before treatment.",
      "RF microneedling across the treatment area over 30–60 minutes.",
      "Redness for 2–5 days; most patients return to work in 3–5 days."
    ],
    sessionsInfo: "Most patients benefit from a course of three sessions, spaced 4–6 weeks apart. Results develop over 3–6 months as collagen regenerates."
  },
  
  downtime: {
    heading: "Downtime",
    description: "Redness and mild swelling for 2–5 days is typical. Most patients return to work within 3–5 days. Avoiding sun exposure and wearing SPF is essential during recovery. Make-up can usually be worn after 24–48 hours."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: all treatments performed by Dr Inga Taganova, GMC-registered GP",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "More than two decades of medical experience",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    {
      q: "What is Morpheus8?",
      a: "Morpheus8 is a fractional RF microneedling device that combines fine microneedles with radiofrequency energy to stimulate deep collagen remodelling, resulting in tighter, smoother, more youthful skin."
    },
    {
      q: "Does Morpheus8 hurt?",
      a: "A numbing cream is applied 45–60 minutes before treatment. Most patients describe a warm prickling sensation during the procedure, which is well-tolerated. Dr Inga Taganova adjusts intensity based on your comfort."
    },
    {
      q: "How many Morpheus8 treatments do I need?",
      a: "A course of three sessions, spaced 4–6 weeks apart, is recommended for optimal results. Some patients achieve their goals in one or two sessions – Dr Inga Taganova will advise during your consultation."
    },
    {
      q: "How long do Morpheus8 results last?",
      a: "Results continue to improve over 3–6 months as collagen regenerates. The effects typically last 12+ months, with annual maintenance sessions recommended."
    },
    {
      q: "Can Morpheus8 be combined with other treatments?",
      a: "Yes – Morpheus8 pairs very well with skin booster injections, Profhilo, and anti-wrinkle injections. Dr Inga Taganova will create a combined treatment plan for the best possible outcomes."
    }
  ],
  
  pricing: [
    { name: "Morpheus8 — eyes or around mouth", price: "£450" },
    { name: "Morpheus8 — full face", price: "£600" },
    { name: "Morpheus8 — face and neck", price: "£750" },
    { name: "Morpheus8 — face, neck and décolletage", price: "£900" },
    { name: "Morpheus8 — tummy", price: "£800" },
    { name: "Morpheus8 — stretch marks or large area", price: "£900" }
  ],
  
  consultation: {
    name: "Aesthetic & Skin Consultation (45 min)",
    price: "£75"
  },
  
  procedureSchema: {
    name: "Morpheus8 RF Microneedling Oxford",
    description: "Fractional radiofrequency microneedling treatment for non-surgical skin tightening, acne scar reduction, and collagen remodelling. Delivered in Oxford by Dr Inga Taganova.",
    bodyLocation: "Face"
  }
};
