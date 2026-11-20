import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const vitaminB12Data: TreatmentLandingPageData = {
  slug: "vitamin-b12-injection-oxford",
  h1: "Vitamin B12 Injection in Oxford",
  title: "Vitamin B12 Injection Oxford | Energy Boost Treatment | Dr Inga Taganova",
  metaDescription: "Vitamin B12 injections in Oxford - a fast, effective energy boost administered by a GMC-registered doctor. Supports metabolism, immunity, and wellbeing.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/vitamin-b12-injection-oxford",
  priceLabel: "",
  priceValue: "£45",
  whoIsFor: { heading: "Who is B12 injection for?", items: ["Low energy and fatigue", "B12 deficiency or low levels", "Vegan or vegetarian diet", "Supporting metabolism and immunity", "General wellbeing boost"] },
  howItWorks: { heading: "How it works", intro: "Vitamin B12 (methylcobalamin) is injected into the muscle for rapid absorption, bypassing the digestive system for maximum effectiveness.", steps: ["Brief consultation to confirm suitability.", "Quick injection into upper arm or thigh. Takes 2–3 minutes.", "Mild pinch during injection."], sessionsInfo: "Effects typically felt within 24–48 hours. Energy boost lasts 2–4 weeks. Regular injections can be scheduled monthly or as needed." },
  downtime: { heading: "Downtime", description: "Zero downtime. Mild tenderness at injection site for a few hours. Return to normal activities immediately." },
  trust: { heading: "Why choose The Oxford Wellness Doctor", items: ["Doctor-led clinic: Dr Inga Taganova, GMC-registered doctor", "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ", "More than two decades of medical experience", "High-quality B12 (methylcobalamin)", "Quick, safe, professional administration"] },
  faqs: [
    { q: "Does B12 injection hurt?", a: "You'll feel a brief pinch. Most patients tolerate this very well. The injection takes just a few seconds." },
    { q: "When will I feel the effects?", a: "Most patients notice increased energy within 24–48 hours." },
    { q: "How long do effects last?", a: "Typically 2–4 weeks. You can schedule regular monthly injections or book as needed." },
    { q: "Do I need a blood test first?", a: "Not required, but if you have a recent B12 blood test result, please bring it to your appointment." }
  ],
  pricing: [{ name: "Vitamin B12 injection", price: "£45" }],
  procedureSchema: { name: "Vitamin B12 Injection Oxford", description: "Vitamin B12 injection for energy, metabolism and wellbeing. Administered by GMC-registered Dr Inga Taganova in Oxford.", bodyLocation: "Arm or Thigh" }
};
