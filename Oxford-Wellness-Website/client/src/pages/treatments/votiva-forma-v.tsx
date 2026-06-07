import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Votiva Forma V Vaginal Tightening Oxford | Dr. Inga Taganova",
  metaDescription: "Votiva Forma V vaginal tightening in Oxford - non-surgical radiofrequency treatment for vaginal laxity, dryness, and intimate wellness. Formerly trained gynaecologist Dr. Taganova. Book consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/votiva-forma-v-oxford",
  h1: "Votiva Forma V Vaginal Tightening in Oxford",
  intro: "Non-surgical radiofrequency treatment for vaginal laxity, dryness, and intimate wellness. Stimulates collagen remodeling with no downtime.",
  sections: [
    {
      heading: "What Is Votiva Forma V?",
      paragraphs: [
        "An FDA-cleared radiofrequency device for internal vaginal rejuvenation. Controlled thermal energy heats vaginal tissue, stimulating collagen production. Non-invasive, no anaesthesia, typically described as a gentle warmth. Sessions take 20–30 minutes.",
      ],
    },
    {
      heading: "What Does Votiva Forma V Treat?",
      bullets: [
        "Vaginal laxity (often post-childbirth)",
        "Dryness and reduced lubrication",
        "Reduced sensation during intimacy",
        "Mild stress urinary incontinence",
        "Menopause-related tissue thinning",
      ],
    },
    {
      heading: "The Treatment - What to Expect",
      paragraphs: [
        "A private consultation to assess your symptoms and suitability, followed by the RF treatment using an internal handpiece — most patients feel only mild warmth.",
        "Return to normal activities immediately. Avoid sexual intercourse for 2–3 days. A course of 3 treatments, 4 weeks apart, is recommended.",
      ],
    },
    {
      heading: "Results and Timeline",
      paragraphs: [
        "Some hydration improvement may be noticed early; significant results develop over 8–12 weeks as collagen remodels. Results typically last 12–18 months. Can be combined with Neauvia N Rose for hydration.",
      ],
      note: "Not suitable during pregnancy, active infection, or with certain implanted devices. Full medical assessment before treatment.",
    },
  ],
  pricing: [
    { name: "Initial Votiva Forma V Consultation", price: "£150" },
    { name: "Single Votiva Forma V Treatment Session", price: "£400" },
    { name: "Course of 3 Votiva Forma V Sessions", price: "£1,050 (save £150)" },
  ],
  faqs: [
    {
      q: "Is Votiva Forma V painful?",
      a: "No. Most women describe the treatment as a gentle warming sensation. It is well-tolerated without anesthesia. Dr. Taganova adjusts the energy level to ensure your comfort throughout.",
    },
    {
      q: "How long does each treatment take?",
      a: "Each Votiva Forma V session takes approximately 20-30 minutes. Including consultation and aftercare discussion, your appointment will typically last 45 minutes.",
    },
    {
      q: "How many treatments do I need?",
      a: "Most patients require 3 treatments spaced 4 weeks apart for optimal results. Dr. Taganova will assess your individual needs and recommend a treatment plan during your consultation.",
    },
    {
      q: "Is there any downtime?",
      a: "No downtime. You can return to normal daily activities immediately. We recommend avoiding sexual intercourse for 2-3 days post-treatment and avoiding hot baths or swimming for 24 hours.",
    },
    {
      q: "When will I see results?",
      a: "Some improvement in hydration and comfort may be noticed immediately. The most significant results develop over 8-12 weeks as collagen remodeling takes place. Results continue to improve after completing the course of treatments.",
    },
    {
      q: "How long do results last?",
      a: "Results typically last 12-18 months. Many patients choose to have an annual maintenance treatment to sustain the benefits.",
    },
    {
      q: "Can Votiva help with urinary incontinence?",
      a: "Votiva Forma V can help with mild stress urinary incontinence (leakage when coughing, sneezing, or exercising) by improving tissue tone and support. For more significant incontinence, pelvic floor physiotherapy may be more appropriate. Dr. Taganova can provide referrals if needed.",
    },
    {
      q: "Can I have Votiva if I've had a caesarean section?",
      a: "Yes. While caesarean delivery avoids vaginal stretching, pregnancy itself affects vaginal tissue due to hormonal changes and the weight of the baby. Many women who've had caesarean births benefit from vaginal rejuvenation.",
    },
    {
      q: "Can Votiva be combined with other treatments?",
      a: "Yes. Votiva can be combined with injectable treatments like Neauvia N Rose for comprehensive vaginal rejuvenation. Dr. Taganova will assess your needs and recommend the most appropriate treatment or combination.",
    },
    {
      q: "How do I book?",
      a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA.",
    },
  ],
  procedureSchema: {
    name: "Votiva Forma V Vaginal Tightening Oxford",
    description: "Non-surgical radiofrequency vaginal rejuvenation treatment to improve vaginal tone, tightness, hydration and intimate wellness. Delivered by formerly trained gynaecologist Dr. Inga Taganova in Oxford.",
    bodyLocation: "Vaginal/intimate area",
  },
  relatedLinks: [
    { label: "Women's Health Hub", href: "/womens-health-oxford" },
    { label: "Menopause Clinic", href: "/menopause-clinic-oxford" },
    { label: "Post-Birth Recovery", href: "/postpartum-recovery-oxford" },
    { label: "Sexual Wellness", href: "/sexual-wellness-oxford" },
    { label: "Neauvia N Rose Injectable", href: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford" },
  ],
};

export default function VotivaFormaVPage() {
  return <TreatmentPageTemplate data={data} />;
}
