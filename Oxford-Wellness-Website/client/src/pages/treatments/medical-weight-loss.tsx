import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Medical Weight Loss Oxford | Wegovy & Mounjaro | GLP-1 Injections",
  metaDescription: "Wegovy & Mounjaro weight loss injections in Oxford. Medically supervised GLP-1 treatment by GMC-registered doctor. Safe, effective weight loss. Book consultation today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/medical-weight-loss-oxford",
  h1: "Medical Weight Loss in Oxford - Wegovy, Mounjaro & GLP-1 Treatments",
  intro: "Medically supervised Wegovy and Mounjaro GLP-1 injections for significant, sustained weight loss under close doctor monitoring.",
  sections: [
    {
      heading: "What Are GLP-1 Weight Loss Injections?",
      paragraphs: [
        "Once-weekly self-injections that reduce appetite and slow digestion. Both Wegovy (semaglutide) and Mounjaro (tirzepatide) are MHRA-approved for adults with obesity or overweight plus a weight-related health condition.",
      ],
    },
    {
      heading: "Wegovy vs Mounjaro",
      tableHeaders: ["", "Wegovy", "Mounjaro"],
      table: [
        { col1: "Mechanism", col2: "GLP-1 agonist", col3: "Dual GIP + GLP-1" },
        { col1: "Avg. weight loss", col2: "15–17%", col3: "20–25%" },
        { col1: "Dosing", col2: "Weekly, escalated over 16–20 weeks", col3: "Weekly, escalated to 15mg max" },
      ],
      paragraphs: ["Dr. Taganova will recommend the most appropriate option based on your health profile and goals."],
    },
    {
      heading: "Who Is Suitable?",
      bullets: [
        "BMI ≥30, or BMI ≥27 with a weight-related condition",
        "Not responded adequately to diet and exercise alone",
        "Not pregnant or breastfeeding",
        "No history of medullary thyroid carcinoma or MEN2",
      ],
    },
    {
      heading: "The Treatment Process",
      paragraphs: [
        "Full medical consultation and baseline screening, then a personalised plan with weekly self-injection and monthly follow-ups to monitor progress, manage side effects, and adjust dosing.",
        "Particularly beneficial for women experiencing menopause- or PCOS-related weight gain, with holistic lifestyle support alongside medication.",
      ],
    },
  ],
  pricing: [
    { name: "Medical Weight Loss Consultation", price: "£50" },
    { name: "Wegovy / Mounjaro (monthly, dose-dependent)", price: "Price at consultation" },
  ],
  faqs: [
    { q: "What is Wegovy?", a: "Wegovy is a once-weekly injectable medication containing semaglutide, a GLP-1 receptor agonist that reduces appetite and supports significant weight loss. It is MHRA-approved in the UK for obesity treatment." },
    { q: "What is Mounjaro?", a: "Mounjaro contains tirzepatide, a dual GIP and GLP-1 receptor agonist. It is MHRA-approved and produces greater average weight loss than semaglutide alone, with clinical trials showing an average of 20–25% body weight reduction." },
    { q: "How do GLP-1 injections work for weight loss?", a: "GLP-1 medications act on receptors in the brain and gut to reduce hunger, increase fullness after meals, and slow digestion. This leads to a natural, significant reduction in caloric intake and progressive weight loss." },
    { q: "Which is better - Wegovy or Mounjaro?", a: "Mounjaro (tirzepatide) produces greater average weight loss in clinical trials. However, 'better' depends on your individual health profile, goals, and tolerability. Dr. Taganova will advise during your consultation." },
    { q: "How much weight can I lose with Wegovy or Mounjaro?", a: "Clinical trials show average weight loss of 15–17% with Wegovy and 20–25% with Mounjaro over approximately 18 months. Individual results vary based on adherence, lifestyle, and starting weight." },
    { q: "What are the side effects?", a: "The most common side effects are nausea, vomiting, and reduced appetite - particularly during dose escalation. These typically improve as your body adjusts. Dr. Taganova manages dose escalation carefully to minimise discomfort." },
    { q: "How much do Wegovy and Mounjaro cost in Oxford?", a: "The initial Medical Weight Loss Consultation at The Oxford Wellness Doctor is £50. The cost of medication (Wegovy or Mounjaro) varies by dose and is discussed at your consultation. All programmes include ongoing medical support." },
    { q: "Do I need a prescription?", a: "Yes. Wegovy and Mounjaro are prescription-only medications that require a full medical assessment before prescribing. Dr. Taganova will conduct a thorough consultation and prescribe only if clinically appropriate." },
    { q: "Can I get Wegovy or Mounjaro on the NHS in Oxford?", a: "NHS access to these medications is currently limited and subject to strict criteria via specialist weight management services. Private prescribing through Dr. Taganova offers faster access with ongoing personal medical supervision." },
    { q: "How long do I need to take the injections?", a: "GLP-1 medications are most effective as a long-term treatment. Weight regain is common when medication is stopped, so Dr. Taganova will discuss a long-term plan - including lifestyle modifications - during your ongoing care." },
    { q: "Are GLP-1 injections safe?", a: "Yes, when prescribed and supervised by a qualified medical doctor. They have extensive clinical trial data supporting their safety profile. Dr. Taganova conducts thorough screening to exclude contraindications before prescribing." },
    { q: "Can I take these if I have diabetes, PCOS, or thyroid issues?", a: "Many patients with type 2 diabetes and PCOS benefit greatly from GLP-1 medications. Certain thyroid conditions are contraindications. Dr. Taganova will assess your full medical history during consultation." },
    { q: "What happens when I stop taking the medication?", a: "Studies show that weight tends to return gradually when GLP-1 medications are discontinued without lifestyle changes in place. Dr. Taganova will support you in building the habits needed for sustained results." },
    { q: "Do I still need to diet and exercise?", a: "Yes. GLP-1 medications work best alongside a healthy diet and regular physical activity. Dr. Taganova provides lifestyle guidance as part of your personalised weight management plan." },
    { q: "How do I book a weight loss consultation in Oxford?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book via Glowday. Clinic at Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ. Open Friday 4–8pm and Saturday 9am–1pm." },
  ],
  procedureSchema: {
    name: "Medical Weight Loss Oxford - Wegovy & Mounjaro",
    description: "Medically supervised GLP-1 weight loss treatment using Wegovy (semaglutide) and Mounjaro (tirzepatide) in Oxford, prescribed and monitored by GMC-registered Dr. Inga Taganova.",
  },
  relatedLinks: [
    { label: "Menopause Clinic Oxford", href: "/menopause-clinic-oxford" },
    { label: "About Dr. Taganova", href: "/about" },
    { label: "All Treatments", href: "/treatments" },
    { label: "Book Consultation", href: "/contact" },
  ],
};

export default function MedicalWeightLossPage() {
  return <TreatmentPageTemplate data={data} />;
}
