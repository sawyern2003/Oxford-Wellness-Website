import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Longevity Medicine Oxford | Metabolic Health & Healthy Ageing | Dr. Taganova",
  metaDescription:
    "Doctor-led longevity medicine in Oxford. Metabolic health, medical weight loss, regenerative treatments and preventative care with GMC-registered Dr. Inga Taganova. Book a consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/longevity-medicine-oxford",
  h1: "Longevity Medicine in Oxford",
  intro:
    "Longevity medicine at The Oxford Wellness Doctor focuses on how you feel and function as you age – metabolic health, energy, body composition, and regenerative skin care – guided personally by Dr. Inga Taganova.",
  summary:
    "A calm, doctor-led approach to healthy ageing: metabolic assessment, medical weight loss where appropriate, nutrient support, and regenerative treatments chosen for long-term wellbeing rather than quick fixes.",
  sections: [
    {
      heading: "What longevity medicine means here",
      paragraphs: [
        "Longevity care is not about promising to stop ageing. It is about understanding the systems that shape how you age – metabolism, hormones, inflammation, body composition, and skin – and intervening thoughtfully where it helps.",
        "As a GMC-registered GP, formally trained gynaecologist, and specialist menopause lead, Dr. Taganova brings particular depth for women in midlife, when metabolic and hormonal shifts often arrive together.",
      ],
    },
    {
      heading: "What we can help with",
      bullets: [
        "Medical weight management with Wegovy or Mounjaro where clinically appropriate",
        "Metabolic and lifestyle guidance alongside treatment",
        "Vitamin B12 support for energy and wellbeing",
        "Regenerative skin treatments that support collagen and tissue quality",
        "Integrated menopause and midlife health planning",
      ],
    },
    {
      heading: "Medical weight loss as part of longevity care",
      paragraphs: [
        "For some patients, medically supervised GLP-1 treatment is an important part of restoring metabolic health. Wegovy and Mounjaro are considered carefully, monitored closely, and never offered as a standalone quick fix.",
        "This is particularly relevant for women experiencing perimenopause or menopause-related weight change, where appetite, insulin sensitivity, and body composition can shift despite consistent effort.",
      ],
    },
    {
      heading: "Regenerative support for skin and tissue",
      paragraphs: [
        "Skin quality is one of the most visible markers of ageing. Treatments such as Profhilo, polynucleotide skin boosters, and Morpheus8 are used to support collagen, hydration, and firmness in a measured way – aligning aesthetic outcomes with longer-term tissue health.",
      ],
    },
    {
      heading: "What to expect",
      paragraphs: [
        "Your consultation begins with listening: health history, goals, current symptoms, and what sustainable change would look like for you. From there, Dr. Taganova outlines which options are clinically suitable – and which are not.",
        "There is no pressure to start treatment on the day. The aim is clear advice and a plan you understand.",
      ],
    },
  ],
  pricing: [
    { name: "Longevity / metabolic consultation", price: "£150" },
    { name: "Medical weight loss consultation", price: "£50" },
    { name: "Vitamin B12 injection", price: "£35" },
    { name: "Wegovy / Mounjaro programme", price: "Discussed at consultation" },
  ],
  faqs: [
    {
      q: "What is longevity medicine?",
      a: "Longevity medicine focuses on preserving healthspan – how well you function as you age – through metabolic care, preventative planning, and evidence-based interventions. At this clinic it includes medical weight management, nutrient support, regenerative skin treatments, and midlife women's health expertise.",
    },
    {
      q: "Is longevity medicine only for older patients?",
      a: "No. Many people begin longevity-focused care in their 40s and 50s, particularly during perimenopause and menopause, when metabolic and hormonal changes become more noticeable.",
    },
    {
      q: "Do you offer Wegovy and Mounjaro?",
      a: "Yes, where clinically appropriate. Medical weight loss is doctor-supervised, with suitability assessed carefully and follow-up built into the plan.",
    },
    {
      q: "How is this different from a standard aesthetics consultation?",
      a: "Aesthetic treatments may form part of the plan, but longevity consultations look more broadly at metabolic health, energy, body composition, and how treatments support longer-term wellbeing – not only appearance.",
    },
    {
      q: "Do I need blood tests?",
      a: "Not always at the first visit. Dr. Taganova will advise if investigations are useful based on your history and goals.",
    },
  ],
  procedureSchema: {
    name: "Longevity Medicine Consultation",
    description:
      "Doctor-led longevity and metabolic health consultation with Dr. Inga Taganova in Oxford, covering healthy ageing, medical weight management, and regenerative care.",
    bodyLocation: "Whole body",
  },
  relatedLinks: [
    { label: "Medical Weight Loss", href: "/treatments/medical-weight-loss-oxford" },
    { label: "Vitamin B12", href: "/treatments/vitamin-b12-injection-oxford" },
    { label: "Profhilo", href: "/treatments/profhilo-oxford" },
    { label: "Morpheus8", href: "/treatments/morpheus8-oxford" },
    { label: "Menopause Clinic", href: "/menopause-clinic-oxford" },
    { label: "Women's Health", href: "/womens-health-oxford" },
  ],
};

export default function LongevityMedicineOxford() {
  return <TreatmentPageTemplate data={data} />;
}
