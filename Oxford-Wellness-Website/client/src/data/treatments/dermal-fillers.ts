import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const dermalFillersData: TreatmentLandingPageData = {
  slug: "dermal-fillers-oxford",
  h1: "Dermal Fillers in Oxford",
  title: "Dermal Fillers Oxford | Natural Volume Restoration | Expert Doctor",
  metaDescription: "Expert dermal fillers in Oxford. Restore volume to cheeks, nasolabial folds, marionette lines. GMC doctor-led clinic. Natural results.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/dermal-fillers-oxford",
  
  priceLabel: "From",
  priceValue: "£250",
  
  whoIsFor: {
    heading: "What can dermal fillers treat?",
    items: [
      "Cheek volume and contour",
      "Nasolabial and marionette lines",
      "Tear trough hollowing",
      "Jawline and chin definition",
      "Temple hollowing"
    ]
  },
  
  howItWorks: {
    heading: "How it works",
    intro: "Dermal fillers use hyaluronic acid to restore lost volume, smooth deep lines, and contour the face.",
    steps: [
      "Facial assessment and tailored plan using premium, fully reversible HA fillers (Juvederm, Restylane, Teosyal).",
      "Topical anaesthetic cream applied. Treatment takes 30–45 minutes.",
      "Results immediate. Final result visible in 2–4 weeks once swelling settles."
    ],
    sessionsInfo: "Longevity depends on the area treated and the product used. Cheek and jawline filler typically lasts 12–18 months."
  },
  
  downtime: {
    heading: "Downtime",
    description: "Most patients experience minimal downtime. Mild swelling and bruising may occur for 3–5 days. Avoid strenuous exercise, alcohol, and excessive heat for 24 hours after treatment. Make-up can usually be worn the next day."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: all treatments performed by Dr Inga Taganova, a GMC-registered GP",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "More than two decades of medical experience",
      "Conservative, patient-led approach focused on natural results",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    {
      q: "How long do dermal fillers last?",
      a: "Longevity depends on the area treated and the product used. Cheek and jawline filler typically lasts 12–18 months; lip and tear trough filler lasts 6–12 months. Your metabolism and lifestyle also affect duration."
    },
    {
      q: "Do dermal fillers hurt?",
      a: "Most patients find treatment comfortable. A topical anaesthetic cream is applied beforehand, and the filler products contain lidocaine (a local anaesthetic). Most patients report only mild pressure or a slight pinching sensation."
    },
    {
      q: "What's the difference between dermal fillers and anti-wrinkle injections?",
      a: "Anti-wrinkle injections relax muscles to smooth dynamic lines. Dermal fillers add volume and structure using hyaluronic acid. The two treatments work differently and are often complementary – Dr Inga Taganova will advise on the best approach for your concerns."
    },
    {
      q: "Can dermal fillers be dissolved?",
      a: "Yes. Hyaluronic acid fillers can be dissolved quickly and safely using a dissolving treatment. This is one of the key reasons hyaluronic acid fillers are the gold standard – they are fully reversible."
    },
    {
      q: "Will I look unnatural?",
      a: "Dr Inga Taganova's philosophy is that the best results are the ones that whisper, not shout. She uses a conservative, patient-led approach focused on restoring balance and natural proportion rather than adding excessive volume."
    }
  ],
  
  pricing: [
    { name: "Dermal filler — 0.5ml", price: "£250" },
    { name: "Dermal filler — 1ml", price: "£320" },
    { name: "Lip filler — 0.7ml", price: "£320" },
    { name: "Dermal filler — 2ml", price: "£590" }
  ],
  
  consultation: {
    name: "Aesthetic & Skin Consultation (45 min)",
    price: "£75"
  },
  
  procedureSchema: {
    name: "Dermal Fillers Oxford",
    description: "Hyaluronic acid dermal filler injections to restore facial volume, smooth lines, and contour features. Delivered by GMC-registered Dr Inga Taganova in Oxford.",
    bodyLocation: "Face"
  }
};
