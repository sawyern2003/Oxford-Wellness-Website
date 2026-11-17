import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const formaFaceliftData: TreatmentLandingPageData = {
  slug: "forma-facelift-oxford",
  h1: "Forma Facelift in Oxford",
  title: "Forma Facelift Oxford | Non-Surgical RF Skin Tightening | Dr Inga Taganova",
  metaDescription: "Forma non-surgical facelift in Oxford - radiofrequency skin tightening with zero downtime. Lift, firm, and contour without surgery. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/forma-facelift-oxford",
  priceLabel: "From",
  priceValue: "£300",
  whoIsFor: { heading: "Who is Forma for?", items: ["Skin laxity and loss of firmness", "Jowls and jawline definition", "Fine lines and wrinkles", "Sagging neck and décolletage", "Those seeking a non-surgical lift with no downtime"] },
  howItWorks: { heading: "How it works", intro: "Forma uses radiofrequency energy to heat the deep layers of skin, stimulating collagen and elastin production for a tightening, lifting effect.", steps: ["Consultation to assess your concerns.", "Handpiece glides over skin delivering controlled RF heat. Comfortable, relaxing. Takes 30–45 minutes.", "No discomfort. Skin feels warm. No needles, no anaesthetic."], sessionsInfo: "Most patients see gradual tightening over 4–6 sessions, spaced weekly. Results continue to improve for 2–3 months after the course as collagen remodels." },
  downtime: { heading: "Downtime", description: "Zero downtime. Mild warmth and temporary redness that fades within an hour. You can return to work immediately and apply make-up straight away." },
  trust: { heading: "Why choose The Oxford Wellness Doctor", items: ["Doctor-led clinic: Dr Inga Taganova, GMC-registered GP", "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ", "More than two decades of medical experience", "InMode Forma - advanced RF technology", "Relaxing, comfortable treatments"] },
  faqs: [
    { q: "Does Forma hurt?", a: "No. The treatment is comfortable and relaxing. You'll feel controlled warmth as the handpiece glides over your skin. No pain, no needles, no anaesthetic." },
    { q: "How many sessions do I need?", a: "4–6 weekly sessions for optimal results. Dr Taganova will tailor a plan during consultation." },
    { q: "When will I see results?", a: "Some patients notice subtle improvement after 1–2 sessions. Best results develop gradually over 2–3 months as collagen remodels." },
    { q: "Can Forma be combined with other treatments?", a: "Yes. Forma pairs well with Profhilo, skin boosters, dermal fillers and anti-wrinkle injections for comprehensive facial rejuvenation." }
  ],
  pricing: [{ name: "Forma — single session", price: "£300" }, { name: "Forma — course of 6", price: "£1,200" }],
  consultation: { name: "Aesthetic & Skin Consultation", price: "£75" },
  procedureSchema: { name: "Forma Facelift Oxford", description: "Non-surgical radiofrequency facelift for skin tightening and lifting. Delivered by GMC-registered Dr Inga Taganova in Oxford.", bodyLocation: "Face" }
};
