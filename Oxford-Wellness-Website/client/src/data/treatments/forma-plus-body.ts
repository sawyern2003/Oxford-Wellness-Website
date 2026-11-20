import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const formaPlusBodyData: TreatmentLandingPageData = {
  slug: "forma-plus-body-contouring-oxford",
  h1: "Forma Plus Body Contouring in Oxford",
  title: "Forma Plus Body Contouring Oxford | RF Skin Tightening | Dr Inga Taganova",
  metaDescription: "Forma Plus non-invasive body contouring in Oxford - radiofrequency skin tightening and firming for arms, abdomen, knees, and more. Zero downtime.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/forma-plus-body-contouring-oxford",
  priceLabel: "From",
  priceValue: "£250",
  whoIsFor: { heading: "Who is Forma Plus for?", items: ["Loose, sagging skin on arms, abdomen, knees, or thighs", "Skin laxity after pregnancy or weight changes", "Improving body contour without surgery", "Those seeking non-invasive tightening with no downtime"] },
  howItWorks: { heading: "How it works", intro: "Forma Plus uses advanced radiofrequency energy to heat the deep layers of skin, stimulating collagen and elastin production for a firming, tightening effect on the body.", steps: ["Consultation to assess target areas.", "Large RF handpiece delivers controlled heat. Comfortable, relaxing. Takes 30–60 minutes per area.", "No discomfort. Skin feels warm. No needles, no anaesthetic."], sessionsInfo: "Most patients benefit from 6 weekly sessions for optimal results. Skin continues to tighten for 2–3 months after the course as collagen remodels." },
  downtime: { heading: "Downtime", description: "Zero downtime. Mild warmth and temporary redness that fades within an hour. You can return to normal activities immediately." },
  trust: { heading: "Why choose The Oxford Wellness Doctor", items: ["Doctor-led clinic: Dr Inga Taganova, GMC-registered GP", "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ", "More than two decades of medical experience", "InMode Forma Plus - advanced RF body technology", "Comfortable, relaxing treatments"] },
  faqs: [
    { q: "Does Forma Plus hurt?", a: "No. The treatment is comfortable and relaxing. You'll feel controlled warmth as the handpiece glides over your skin. No pain, no needles, no anaesthetic." },
    { q: "How many sessions do I need?", a: "6 weekly sessions recommended for optimal results. Dr Inga Taganova will advise during consultation." },
    { q: "When will I see results?", a: "Some improvement after 2–3 sessions. Best results develop gradually over 2–3 months as collagen remodels." },
    { q: "Which areas can be treated?", a: "Arms, abdomen, flanks, knees, thighs, and buttocks. Any area with loose or sagging skin." }
  ],
  pricing: [{ name: "Forma Plus — single session", price: "£250" }, { name: "Forma Plus — course of 6", price: "£1,250" }],
  procedureSchema: { name: "Forma Plus Body Contouring Oxford", description: "Non-invasive radiofrequency body contouring and skin tightening. Delivered by GMC-registered Dr Inga Taganova in Oxford.", bodyLocation: "Body" }
};
