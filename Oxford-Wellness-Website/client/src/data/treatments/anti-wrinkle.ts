import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const antiWrinkleData: TreatmentLandingPageData = {
  slug: "anti-wrinkle-injections-oxford",
  h1: "Anti-Wrinkle Injections in Oxford",
  title: "Anti-Wrinkle Injections Oxford | Forehead, Frown & Crow's Feet | Expert Doctor",
  metaDescription: "Expert anti-wrinkle injections in Oxford. Smooth forehead lines, frown lines & crow's feet. GMC doctor-led clinic. Natural results. Book consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/anti-wrinkle-injections-oxford",
  
  priceLabel: "One area",
  priceValue: "£210",
  
  whoIsFor: {
    heading: "What anti-wrinkle injections treat",
    items: [
      "Forehead lines",
      "Frown lines between the eyebrows",
      "Crow's feet around the eyes",
      "Bunny lines on the nose",
      "Dimpled chin",
      "Downturned mouth corners"
    ]
  },
  
  howItWorks: {
    heading: "How it works",
    intro: "Anti-wrinkle injections use a purified protein to relax the muscles that cause expression lines.",
    steps: [
      "Consultation to assess your concerns and treatment areas.",
      "Small injections placed precisely into the target muscles. Takes 10–15 minutes.",
      "Results visible in 3–5 days, reaching full effect at 2 weeks."
    ],
    sessionsInfo: "Results typically last 3–4 months. Many patients schedule maintenance treatments 3–4 times per year."
  },
  
  downtime: {
    heading: "Downtime",
    description: "No downtime. You can return to normal activities immediately. Avoid lying flat for 4 hours and strenuous exercise for 24 hours. Mild bruising at injection sites may occur but is uncommon."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: all treatments performed by Dr Inga Taganova, a GMC-registered GP",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "More than two decades of medical experience",
      "Natural-looking results – no frozen or overdone appearance",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    { q: "Will I look frozen?", a: "No. Dr Inga Taganova uses a conservative approach to preserve natural facial movement while smoothing lines. The goal is to look refreshed, not frozen." },
    { q: "Does it hurt?", a: "Most patients report only mild discomfort. The needles are very fine, and the procedure is quick." },
    { q: "How long do results last?", a: "Results typically last 3–4 months. With regular treatments, some patients find results last slightly longer." },
    { q: "When will I see results?", a: "You'll notice improvement within 3–5 days, with full results visible at 2 weeks." },
    { q: "How much do anti-wrinkle injections cost?", a: "One area is £210, two areas £270, and three areas £330. Common combinations are forehead + frown lines, or forehead + frown + crow's feet." }
  ],
  
  pricing: [
    { name: "One area", price: "£210" },
    { name: "Two areas", price: "£270" },
    { name: "Three areas", price: "£330" },
    { name: "Masseter / jaw treatment", price: "£275" }
  ],
  
  consultation: {
    name: "Aesthetic & Skin Consultation",
    price: "£75"
  },
  
  procedureSchema: {
    name: "Anti-Wrinkle Injections Oxford",
    description: "Anti-wrinkle injections to smooth forehead lines, frown lines, and crow's feet. Delivered by GMC-registered Dr Inga Taganova in Oxford.",
    bodyLocation: "Face"
  }
};
