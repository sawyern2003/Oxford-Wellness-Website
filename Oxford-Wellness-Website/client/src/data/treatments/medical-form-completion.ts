import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const medicalFormCompletionData: TreatmentLandingPageData = {
  slug: "medical-form-completion-oxford",
  h1: "Medical Form Completion in Oxford",
  title: "Medical Form Completion Oxford | GP Signature & Certification | Dr Inga Taganova",
  metaDescription: "GMC-registered GP in Oxford available to complete medical forms, sign certifications, and provide medical verification for official documents. Book appointment today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/medical-form-completion-oxford",
  priceLabel: "",
  priceValue: "Price on consultation",
  whoIsFor: { heading: "What forms can Dr Taganova complete?", items: ["Insurance and mortgage medical forms", "Occupational health and fitness-to-work certificates", "Travel and visa medical forms", "School, university or sports club medical forms", "Other official medical certifications requiring a GMC-registered GP signature"] },
  howItWorks: { heading: "How it works", intro: "Dr Inga Taganova, GMC-registered GP, reviews your medical history and completes the required form accurately and professionally.", steps: ["Book an appointment and bring your form.", "Dr Taganova reviews your medical history and the form requirements.", "Form completed, signed, and returned to you."], sessionsInfo: "Most forms completed during a single appointment. Complex forms may require additional time or follow-up." },
  downtime: { heading: "What to bring", description: "Bring the blank form, any supporting documents requested by the form, your medical history summary (if available), and photo ID. Dr Taganova will review and complete the form during your appointment." },
  trust: { heading: "Why choose The Oxford Wellness Doctor", items: ["Doctor-led clinic: Dr Inga Taganova, GMC-registered GP", "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ", "More than two decades of medical experience", "Professional, accurate form completion", "Convenient Oxford city centre location"] },
  faqs: [
    { q: "What types of forms can you complete?", a: "Insurance, mortgage, occupational health, travel, visa, school, sports club and other official forms requiring a GMC-registered GP signature." },
    { q: "Do I need to be registered with Dr Taganova to use this service?", a: "No. This service is available to anyone who needs a GMC-registered GP to complete a medical form." },
    { q: "How long does it take?", a: "Most forms are completed during a single appointment. Complex forms may take longer or require follow-up." },
    { q: "What is the cost?", a: "Fees depend on the complexity and length of the form. Please contact the clinic for a quote." }
  ],
  pricing: [{ name: "Medical form completion", price: "Price on consultation" }],
  procedureSchema: { name: "Medical Form Completion Oxford", description: "GMC-registered GP medical form completion, signature and certification services in Oxford.", bodyLocation: "N/A" }
};
