import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const chemicalPeelsData: TreatmentLandingPageData = {
  slug: "chemical-peels-oxford",
  h1: "Chemical Peels in Oxford",
  title: "Chemical Peels Oxford | Medical Grade Skin Peels | Expert Treatment",
  metaDescription: "Medical-grade chemical peels in Oxford. Improve acne, pigmentation, fine lines & texture. Doctor-led safety.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/chemical-peels-oxford",
  priceLabel: "From",
  priceValue: "£125",
  whoIsFor: { heading: "What can chemical peels treat?", items: ["Acne and acne scarring", "Pigmentation and sun damage", "Fine lines and wrinkles", "Uneven skin tone and texture", "Dull, congested skin"] },
  howItWorks: { heading: "How it works", intro: "Medical-grade chemical peels use controlled acids to exfoliate the skin, revealing fresher, clearer skin beneath.", steps: ["Consultation to assess your skin type and concerns.", "Cleanse and apply peel solution. Treatment takes 20–30 minutes.", "Mild tingling or warmth during application. Peel is neutralised and skin is cleansed."], sessionsInfo: "Peeling typically begins 2–3 days after treatment and lasts 3–5 days. Results visible once peeling complete. Most patients benefit from a course of 3–6 peels spaced 2–4 weeks apart." },
  downtime: { heading: "Downtime", description: "Mild redness immediately after treatment. Peeling begins 2–3 days later and lasts 3–5 days. Avoid sun exposure and wear SPF 50 during and after treatment. Most patients continue normal activities with minor flaking." },
  trust: { heading: "Why choose The Oxford Wellness Doctor", items: ["Doctor-led clinic: Dr Inga Taganova, GMC-registered GP", "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ", "More than two decades of medical experience", "Medical-grade peels (Obagi, Perfect Peel)", "Safe, controlled application"] },
  faqs: [
    { q: "Do chemical peels hurt?", a: "You may feel mild tingling or warmth during application. Most patients tolerate this well. The sensation subsides once the peel is neutralised." },
    { q: "How long does peeling last?", a: "Peeling typically begins 2–3 days after treatment and lasts 3–5 days. The amount of visible peeling varies by peel strength and skin type." },
    { q: "Can I wear make-up after a peel?", a: "Avoid make-up for 24 hours. After that, mineral make-up can be worn gently. Do not pick or force peeling skin." },
    { q: "How many peels do I need?", a: "Most patients benefit from 3–6 treatments spaced 2–4 weeks apart for optimal results." }
  ],
  pricing: [{ name: "Obagi Blue Peel Radiance", price: "£125" }, { name: "Perfect Peel", price: "£375" }],
  consultation: { name: "Aesthetic & Skin Consultation (45 min)", price: "£75" },
  procedureSchema: { name: "Chemical Peels Oxford", description: "Medical-grade chemical peels for acne, pigmentation, fine lines and texture improvement. Delivered by GMC-registered Dr Inga Taganova in Oxford.", bodyLocation: "Face" }
};
