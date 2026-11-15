import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Medical Weight Management Oxford | Doctor-Led Treatment | Dr. Inga Taganova",
  metaDescription: "Doctor-led medical weight management in Oxford. Comprehensive consultation, medical assessment and personalised treatment plan by GMC-registered Dr. Inga Taganova. Book today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/medical-weight-loss-oxford",
  h1: "Medical Weight Management in Oxford - Doctor-Led Care",
  intro: "Comprehensive medical weight management with Dr. Inga Taganova. Evidence-based assessment, personalised treatment planning, and ongoing medical supervision for sustainable weight loss.",
  sections: [
    {
      heading: "A Medical Approach to Weight Management",
      paragraphs: [
        "Weight management is complex and multifactorial. At The Oxford Wellness Doctor, Dr. Taganova approaches weight management as a medical concern that requires thorough assessment, personalised planning, and ongoing clinical supervision.",
        "Your consultation includes full medical history review, metabolic health assessment, and discussion of evidence-based treatment options. Dr. Taganova will create a personalised plan tailored to your health profile, goals, and medical history.",
      ],
    },
    {
      heading: "What the Consultation Includes",
      bullets: [
        "Full medical history and medication review",
        "Assessment of metabolic health markers",
        "Discussion of weight history and contributing factors",
        "Review of lifestyle, diet, and activity patterns",
        "Personalised treatment plan tailored to your needs",
        "Ongoing medical supervision and regular review appointments",
      ],
    },
    {
      heading: "Evidence-Based Treatment Options",
      paragraphs: [
        "Dr. Taganova will discuss appropriate treatment options based on your individual assessment. All prescription treatments are MHRA-approved, prescribed only where clinically appropriate, and monitored carefully throughout your care.",
        "Treatment is never offered as a standalone quick fix. Dr. Taganova provides lifestyle guidance, nutritional support, and medical supervision as part of a comprehensive approach to sustainable weight management.",
      ],
    },
    {
      heading: "Who Is Suitable for Medical Weight Management?",
      paragraphs: [
        "Medical weight management treatment may be appropriate for adults with obesity (BMI ≥30) or overweight (BMI ≥27) with at least one weight-related health condition such as type 2 diabetes, hypertension, or PCOS.",
        "Dr. Taganova will assess your suitability thoroughly during consultation and will only recommend treatment if it is clinically appropriate and safe for you.",
      ],
    },
  ],
  pricing: [
    { name: "Medical Weight Management Consultation", price: "£95" },
    { name: "Weight Management Follow-Up", price: "£55" },
  ],
  faqs: [
    { q: "What happens at the initial consultation?", a: "Dr. Taganova will take a full medical history, discuss your weight history and goals, review any relevant blood tests or medical records, and assess whether medical weight management treatment is appropriate for you. If suitable, she will explain treatment options and create a personalised plan." },
    { q: "How does medical weight management work?", a: "Treatment options are evidence-based, MHRA-approved prescription medications that work by reducing appetite and supporting significant, sustained weight loss. Dr. Taganova will explain the specific mechanism and expectations during your consultation." },
    { q: "How much weight can I expect to lose?", a: "Weight loss varies by individual, treatment type, and adherence to lifestyle changes. Clinical trials show significant results when treatment is combined with dietary modifications and regular activity. Dr. Taganova will discuss realistic expectations during consultation." },
    { q: "How long does treatment last?", a: "Medical weight management is most effective as a long-term treatment. Dr. Taganova will discuss the duration of treatment during your consultation and will provide ongoing monitoring and support throughout." },
    { q: "What are the side effects?", a: "All prescription treatments can have side effects. The most common are gastrointestinal (nausea, bloating, constipation), particularly during the initial weeks. Dr. Taganova will explain the full side effect profile during consultation and will monitor you carefully throughout treatment." },
    { q: "Do I need a prescription?", a: "Yes. Medical weight management treatments are prescription-only medications that require a full medical assessment before prescribing. Dr. Taganova will only prescribe if treatment is clinically appropriate and safe for you." },
    { q: "Can I get treatment on the NHS?", a: "NHS access to prescription weight management treatments is currently limited and subject to strict criteria via specialist services. Private prescribing through Dr. Taganova offers faster access with ongoing personal medical supervision." },
    { q: "What happens when I stop treatment?", a: "Studies show that weight tends to return gradually when prescription treatment is discontinued without lifestyle changes in place. Dr. Taganova will support you in building the habits needed for sustained results and will discuss long-term maintenance during your care." },
    { q: "Do I still need to diet and exercise?", a: "Yes. Medical weight management works best alongside a healthy diet and regular physical activity. Dr. Taganova provides lifestyle guidance as part of your personalised weight management plan." },
    { q: "Can I take treatment if I have diabetes, PCOS, or thyroid issues?", a: "Many patients with type 2 diabetes and PCOS benefit greatly from medical weight management. Certain conditions may be contraindications. Dr. Taganova will assess your full medical history during consultation." },
    { q: "How much does medical weight management cost?", a: "The initial consultation is £95, and follow-up appointments are £55. The cost of any prescribed medication varies and is discussed at your consultation. Consultation fees are not redeemable against treatment." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. We are at Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ." },
  ],
  procedureSchema: {
    name: "Medical Weight Management Oxford",
    description: "Doctor-led medical weight management with comprehensive consultation, assessment and personalised treatment planning. Prescribed and monitored by GMC-registered Dr. Inga Taganova in Oxford.",
  },
  relatedLinks: [
    { label: "Women's Health Oxford", href: "/womens-health-oxford" },
    { label: "Menopause Clinic Oxford", href: "/menopause-clinic-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function MedicalWeightLossPage() {
  return <TreatmentPageTemplate data={data} />;
}
