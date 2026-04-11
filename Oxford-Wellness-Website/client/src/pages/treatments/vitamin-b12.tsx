import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Vitamin B12 Injection Oxford | Energy Boost Treatment | Dr. Inga Taganova",
  metaDescription: "Vitamin B12 injections in Oxford - a fast, effective energy boost administered by a GMC-registered doctor. Supports metabolism, immunity, and wellbeing. £35. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/vitamin-b12-injection-oxford",
  h1: "Vitamin B12 Injection in Oxford - Energy & Wellbeing Treatment",
  intro: "A Vitamin B12 injection is one of the simplest, most effective wellness treatments available. Delivered directly into the muscle, it bypasses the digestive system entirely for near-instant absorption - providing a reliable boost to energy, mood, immunity, and metabolic function. At The Oxford Wellness Doctor, all injections are administered personally by Dr. Inga Taganova, a GMC-registered physician with over 20 years of clinical experience.",
  sections: [
    {
      heading: "Why Have a Vitamin B12 Injection?",
      paragraphs: [
        "Many people have sub-optimal B12 levels without realising it. Oral supplements have limited absorption, particularly in those with digestive issues, vegetarians and vegans, older adults, or people with higher metabolic demands. An intramuscular injection delivers B12 directly into the bloodstream, where it can be used immediately.",
        "Common reasons patients seek B12 injections include:",
      ],
      bullets: [
        "Persistent fatigue or low energy despite adequate sleep",
        "Brain fog, poor concentration, or memory issues",
        "Low mood or anxiety - B12 is essential for serotonin production",
        "Supporting immunity and metabolic function",
        "Perimenopausal and menopausal fatigue and cognitive symptoms",
        "Dietary restriction (vegan, vegetarian) or malabsorption conditions",
      ],
    },
    {
      heading: "The Procedure",
      paragraphs: [
        "The injection is quick, straightforward, and takes just 10–15 minutes in total. Dr. Taganova uses Hydroxocobalamin, the preferred clinical form of B12 that remains active in the body for longer than cyanocobalamin.",
        "A brief consultation is included to confirm suitability and discuss your symptoms and health history. The injection is given into the upper arm or gluteal muscle with a fine needle. There is no downtime and you can resume normal activities immediately.",
      ],
    },
    {
      heading: "What Results Can I Expect?",
      paragraphs: [
        "Many patients notice an improvement in energy levels and mental clarity within 24–48 hours of their first injection. For those with more significant deficiency, it may take a course of injections to experience the full benefit.",
        "We typically recommend monthly maintenance injections for optimal sustained effect, though Dr. Taganova will advise based on your individual circumstances and any blood test results.",
      ],
    },
    {
      heading: "Why Choose a Doctor-Administered B12 Injection?",
      bullets: [
        "Clinically appropriate dosing - Dr. Taganova assesses your individual needs",
        "Hydroxocobalamin used - the superior clinical form of B12",
        "Full medical history taken before treatment",
        "Sterile, professional clinic environment in Oxford",
        "Combined with other wellness treatments if appropriate",
        "GMC-registered physician (No. 4727817) with 20+ years experience",
      ],
    },
  ],
  pricing: [
    { name: "Single Vitamin B12 Injection", price: "£35" },
    { name: "Course of 4 Injections", price: "£120" },
  ],
  faqs: [
    { q: "How often should I have a B12 injection?", a: "For maintenance, once a month is typical. If you have a diagnosed deficiency, Dr. Taganova may initially recommend more frequent injections - usually weekly for 4 weeks - before moving to monthly maintenance." },
    { q: "Is a B12 injection painful?", a: "There is a brief, mild discomfort with the injection - most patients compare it to a standard vaccination. The procedure takes less than a minute." },
    { q: "Do I need to be B12 deficient to benefit?", a: "Not necessarily. Many people have 'grey zone' B12 levels that are not technically deficient but are sub-optimal. Even those with normal levels often notice improved energy and wellbeing after an injection." },
    { q: "Are there any side effects?", a: "B12 injections are very safe. Occasionally, mild redness or tenderness at the injection site may occur. Allergic reactions are extremely rare." },
    { q: "Can I have a B12 injection if I'm on medication?", a: "B12 is generally safe to combine with most medications. Dr. Taganova will review your health history and current medications before treatment." },
    { q: "How quickly will I feel the effects?", a: "Most patients notice improved energy and mental clarity within 24–48 hours. For those with significant deficiency, the full effect may take several injections." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Vitamin B12 Injection Oxford",
    description: "Intramuscular Hydroxocobalamin B12 injection for energy, mood, and immunity. Administered by GMC-registered Dr. Inga Taganova in Oxford.",
    bodyLocation: "Upper arm or gluteal muscle",
  },
  relatedLinks: [
    { label: "Medical Weight Loss", href: "/treatments/medical-weight-loss-oxford" },
    { label: "Menopause Clinic", href: "/menopause-clinic-oxford" },
    { label: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function VitaminB12Page() {
  return <TreatmentPageTemplate data={data} />;
}
