import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const profhiloData: TreatmentLandingPageData = {
  slug: "profhilo-oxford",
  h1: "Profhilo in Oxford",
  title: "Profhilo Oxford | Skin Booster Treatment | The Oxford Wellness Doctor",
  metaDescription: "Profhilo skin booster treatment in Oxford. Injectable hyaluronic acid for skin hydration, firmness & radiance. GMC doctor. Book your consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/profhilo-oxford",
  
  priceLabel: "Single session",
  priceValue: "£295",
  
  whoIsFor: {
    heading: "Who is Profhilo for?",
    items: [
      "Skin laxity and loss of firmness",
      "Fine lines from dehydration",
      "Dull, dehydrated skin",
      "Crepey texture on face and neck",
      "Ageing hands"
    ]
  },
  
  howItWorks: {
    heading: "How it works",
    intro: "Profhilo is pure hyaluronic acid that bio-remodels skin from within, stimulating collagen and elastin production.",
    steps: [
      "Five injection points per side of the face using the BAP technique.",
      "Takes 15–20 minutes per session, no downtime.",
      "Two sessions required, four weeks apart."
    ],
    sessionsInfo: "Improvements visible from 2–4 weeks. Peak results appear 4–6 weeks after the second session. Results typically last around 6 months."
  },
  
  downtime: {
    heading: "Downtime",
    description: "No downtime. Small bumps at injection points settle within a few hours. You can return to normal activities immediately. Make-up can be worn the same day."
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
      q: "What is Profhilo?",
      a: "Profhilo is an injectable skin booster containing pure hyaluronic acid that bio-remodels the skin from within, stimulating collagen and elastin production for improvements in firmness, hydration, and skin quality."
    },
    {
      q: "How is Profhilo different from dermal fillers?",
      a: "Unlike fillers, Profhilo does not add volume or structure. It spreads through the tissue to deeply hydrate and biologically stimulate the skin. The result is improved skin quality rather than a volumised or filled appearance."
    },
    {
      q: "Does Profhilo hurt?",
      a: "Most patients find Profhilo treatment very tolerable. Five small injections are placed on each side of the face using a fine needle. Discomfort is minimal and the appointment is brief."
    },
    {
      q: "How many Profhilo treatments do I need?",
      a: "The standard protocol is two sessions, four weeks apart. This is the minimum recommended to achieve full bio-remodelling results. Maintenance sessions every six months are recommended."
    },
    {
      q: "How long does Profhilo last?",
      a: "Results from a full course of Profhilo typically last around 6 months. A maintenance programme of two sessions per year is recommended to sustain collagen stimulation."
    }
  ],
  
  pricing: [
    { name: "Profhilo — single session", price: "£295" },
    { name: "Profhilo — course of 2", price: "£550" }
  ],
  
  consultation: {
    name: "Aesthetic & Skin Consultation",
    price: "£95"
  },
  
  procedureSchema: {
    name: "Profhilo Skin Booster Oxford",
    description: "Injectable hyaluronic acid bio-remodelling treatment that stimulates collagen and elastin production for improvements in skin firmness, hydration, and quality. Delivered in Oxford by Dr Inga Taganova.",
    bodyLocation: "Face"
  }
};
