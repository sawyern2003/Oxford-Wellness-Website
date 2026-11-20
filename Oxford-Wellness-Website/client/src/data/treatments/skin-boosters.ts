import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const skinBoostersData: TreatmentLandingPageData = {
  slug: "skin-boosters-oxford",
  h1: "Skin Boosters in Oxford",
  title: "Skin Boosters Oxford | Hyaluronic Acid & Polynucleotides | Dr Inga Taganova",
  metaDescription: "Skin boosters in Oxford. Injectable hyaluronic acid and polynucleotides for hydration and skin quality. GMC doctor.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/skin-boosters-oxford",
  
  priceLabel: "From",
  priceValue: "£250",
  
  whoIsFor: {
    heading: "What do skin boosters treat?",
    items: [
      "Dehydrated, dull skin",
      "Fine lines from dryness",
      "Crepey texture",
      "Loss of radiance",
      "Skin quality improvement"
    ]
  },
  
  howItWorks: {
    heading: "How it works",
    intro: "Skin boosters inject hyaluronic acid or polynucleotides into the skin to deeply hydrate and stimulate collagen production.",
    steps: [
      "Consultation to assess your skin and treatment plan.",
      "Small injections placed across the treatment area. Takes 20–30 minutes.",
      "Minimal downtime. Results improve over 2–4 weeks as hydration builds."
    ],
    sessionsInfo: "Most patients benefit from 2–3 sessions spaced 2–4 weeks apart. Results last 4–6 months."
  },
  
  downtime: {
    heading: "Downtime",
    description: "Small bumps at injection points for a few hours. Mild bruising possible. Most patients return to work the same day. Avoid make-up for 12 hours and strenuous exercise for 24 hours."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: Dr Inga Taganova, GMC-registered doctor",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "More than two decades of medical experience",
      "Premium products (hyaluronic acid, polynucleotides)",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    { q: "What's the difference between skin boosters and fillers?", a: "Fillers add volume and structure. Skin boosters hydrate and improve skin quality from within. They work differently and address different concerns." },
    { q: "Do skin boosters hurt?", a: "Mild discomfort during injection. Most patients tolerate it well. Numbing cream can be applied if needed." },
    { q: "How many treatments do I need?", a: "2–3 sessions spaced 2–4 weeks apart is typical. Maintenance treatments every 4–6 months help sustain results." },
    { q: "What are polynucleotides?", a: "Polynucleotides are a newer generation of skin booster that stimulate collagen and elastin production. They're particularly effective for skin regeneration and quality improvement." }
  ],
  
  pricing: [
    { name: "Hyaluronic acid skin booster", price: "£250" },
    { name: "Polynucleotides — single session", price: "£350" },
    { name: "Polynucleotides — course of 3", price: "£900" }
  ],
  
  consultation: {
    name: "Aesthetic & Skin Consultation (45 min)",
    price: "£75"
  },
  
  procedureSchema: {
    name: "Skin Boosters Oxford",
    description: "Injectable skin boosters (hyaluronic acid and polynucleotides) for deep hydration and skin quality improvement. Delivered by GMC-registered Dr Inga Taganova in Oxford.",
    bodyLocation: "Face"
  }
};
