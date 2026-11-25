import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const antiWrinkleData: TreatmentLandingPageData = {
  slug: "anti-wrinkle-injections-oxford",
  h1: "Lines and wrinkles consultation in Oxford",
  title: "Lines and Wrinkles Consultation in Oxford | The Oxford Wellness Doctor",
  metaDescription:
    "Consultation for expression lines in Oxford with Dr Inga Taganova, GP. Forehead lines, frown lines and crow's feet assessed in clinic.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/anti-wrinkle-injections-oxford",

  priceLabel: "From",
  priceValue: "£230",

  whoIsFor: {
    heading: "Who it is for",
    items: [
      "Forehead lines",
      "Frown lines between the eyebrows",
      "Crow's feet around the eyes",
      "Lines across the nose bridge",
      "A dimpled chin",
      "Downturned mouth corners",
    ],
  },

  howItWorks: {
    heading: "What happens at your appointment",
    intro:
      "Dr Inga Taganova, GP, assesses the expression lines that bother you and explains what may help. Any treatment is discussed only after that assessment, without product or brand names on this page.",
    steps: [
      "Consultation to review your concerns and the areas you would like to discuss.",
      "If treatment proceeds, small injections are placed carefully into the target muscles. This usually takes 10 to 15 minutes.",
      "Change is often visible in 3 to 5 days, with fuller effect around 2 weeks.",
    ],
    sessionsInfo:
      "Results typically last 3 to 4 months. Many people schedule maintenance appointments a few times a year.",
  },

  downtime: {
    heading: "What to expect afterwards",
    description:
      "No downtime. You can return to normal activities straight away. Avoid lying flat for 4 hours and strenuous exercise for 24 hours. Mild bruising at injection sites can occur but is uncommon.",
  },

  trust: {
    heading: "How it fits with other care",
    items: [
      "Doctor-led clinic: all treatments performed by Dr Inga Taganova, a GMC-registered GP",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "More than two decades of medical experience",
      "A natural-looking result that keeps facial movement",
      "Calm, private consultation rooms",
    ],
  },

  faqs: [
    {
      q: "Will I look frozen?",
      a: "No. Dr Inga Taganova uses a careful approach to soften lines while keeping natural facial movement. The aim is a refreshed look, not a frozen one.",
    },
    {
      q: "Does it hurt?",
      a: "Most people report only mild discomfort. The needles are fine, and the procedure is quick.",
    },
    {
      q: "How long do results last?",
      a: "Results typically last 3 to 4 months. With regular appointments, some people find the effect lasts a little longer.",
    },
    {
      q: "When will I see results?",
      a: "You will usually notice change within 3 to 5 days, with fuller results at about 2 weeks.",
    },
    {
      q: "How much does treatment cost?",
      a: "One area is £230, two areas £295, and three areas £350. Common combinations are forehead and frown lines, or forehead, frown and crow's feet.",
    },
  ],

  pricing: [
    { name: "One area", price: "£230" },
    { name: "Two areas", price: "£295" },
    { name: "Three areas", price: "£350" },
    { name: "Masseter / jaw treatment", price: "£295" },
  ],

  consultation: {
    name: "Aesthetic & Skin Consultation (45 min)",
    price: "£75",
  },

  procedureSchema: {
    name: "Lines and wrinkles consultation",
    description:
      "Consultation and treatment for expression lines such as forehead lines, frown lines and crow's feet with Dr Inga Taganova, GP, in Oxford.",
    bodyLocation: "Face",
  },
};
