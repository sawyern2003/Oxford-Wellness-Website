import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const lumeccaIPLData: TreatmentLandingPageData = {
  slug: "lumecca-ipl-oxford",
  h1: "Lumecca IPL in Oxford",
  title: "Lumecca IPL Oxford | Pigmentation, Rosacea & Skin Rejuvenation | Dr Inga Taganova",
  metaDescription: "Lumecca intense pulsed light treatment in Oxford - clear pigmentation, sun damage, rosacea, spider veins, and acne. GMC-registered doctor. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/lumecca-ipl-oxford",
  priceLabel: "From",
  priceValue: "£150",
  whoIsFor: { heading: "What can Lumecca IPL treat?", items: ["Pigmentation and sun damage", "Rosacea and facial redness", "Spider veins and broken capillaries", "Age spots and freckles", "Acne and general photorejuvenation"] },
  howItWorks: { heading: "How it works", intro: "Lumecca delivers intense pulsed light energy to target pigment, redness, and vascular lesions in the skin.", steps: ["Consultation and skin assessment.", "Eye protection applied. IPL handpiece delivers controlled light pulses. Takes 15–30 minutes.", "Mild heat sensation during treatment. Cooling gel applied after."], sessionsInfo: "Most patients see significant improvement after 1–2 sessions. Sessions spaced 3–4 weeks apart." },
  downtime: { heading: "Downtime", description: "Redness and mild swelling for a few hours. Pigmented spots darken before flaking off over 7–10 days. Avoid sun exposure and wear SPF 50. Most patients return to work immediately." },
  trust: { heading: "Why choose The Oxford Wellness Doctor", items: ["Doctor-led clinic: Dr Inga Taganova, GMC-registered GP", "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ", "More than two decades of medical experience", "Lumecca - up to 3x more powerful than standard IPL", "Safe, effective treatments"] },
  faqs: [
    { q: "Does IPL hurt?", a: "You'll feel a warm snapping sensation during treatment. Most patients tolerate this well. Cooling gel helps with comfort." },
    { q: "How many treatments do I need?", a: "1–2 sessions for most concerns. More resistant pigmentation may need 3 sessions. Dr Taganova will advise during consultation." },
    { q: "Can IPL be combined with other treatments?", a: "Yes. IPL pairs well with Profhilo, skin boosters, and chemical peels for comprehensive skin rejuvenation." },
    { q: "Who is not suitable for IPL?", a: "IPL is not suitable for very dark skin tones or tanned skin. A skin assessment is required before treatment." }
  ],
  pricing: [{ name: "Lumecca IPL — hands", price: "£150" }, { name: "Lumecca IPL — small area", price: "£150" }, { name: "Lumecca IPL — medium area", price: "£225" }, { name: "Lumecca IPL — full face", price: "£225" }, { name: "Lumecca IPL — face and neck", price: "£300" }],
  consultation: { name: "Aesthetic & Skin Consultation", price: "£75" },
  procedureSchema: { name: "Lumecca IPL Oxford", description: "Intense pulsed light treatment for pigmentation, rosacea, spider veins and skin rejuvenation. Delivered by GMC-registered Dr Inga Taganova in Oxford.", bodyLocation: "Face" }
};
