import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Neauvia N Rose Intimate Area Rejuvenation Oxford | Dr. Inga Taganova",
  metaDescription: "Intimate area rejuvenation in Oxford with Neauvia N Rose - a regenerative injectable treatment for dryness, discomfort, and loss of volume. GMC-registered doctor. £350. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
  h1: "Neauvia N Rose Intimate Area Rejuvenation in Oxford",
  intro: "Medical-grade hyaluronic acid restores hydration, comfort, and tissue integrity in the intimate area – especially for menopause-related changes.",
  sections: [
    {
      heading: "Who Is This Treatment For?",
      bullets: [
        "Vaginal dryness and discomfort",
        "Reduced sensitivity during intimacy",
        "Loss of volume or laxity",
        "Postpartum changes",
        "Vulvovaginal atrophy from menopause",
      ],
    },
    {
      heading: "The Procedure - What to Expect",
      paragraphs: [
        "Private consultation and medical history review. Topical anaesthetic applied; treatment takes 30–45 minutes with mild, brief discomfort.",
        "Minimal downtime – abstain from sexual activity for a few days. Hydration improves within days; results last 9–12 months.",
      ],
    },
  ],
  pricing: [
    { name: "Neauvia N Rose Intimate Area Rejuvenation", price: "£350" },
    { name: "Follow-up Consultation", price: "Complimentary" },
  ],
  faqs: [
    { q: "Is intimate area rejuvenation painful?", a: "Topical anaesthetic cream is applied before the treatment to ensure your comfort. Most patients experience only mild, brief discomfort during the procedure." },
    { q: "How long does the treatment take?", a: "The appointment typically takes 30–45 minutes in total, including consultation and aftercare advice." },
    { q: "How long do results last?", a: "Results typically last 9–12 months. A second session may be recommended for optimal outcomes, particularly for more advanced symptoms." },
    { q: "Is there any downtime?", a: "Minimal downtime. We recommend abstaining from sexual activity for a few days post-treatment. Most daily activities can be resumed immediately." },
    { q: "Is this the same as HRT?", a: "No. Neauvia N Rose is a local, injectable treatment for the intimate area and is not a substitute for systemic HRT. Dr. Taganova can discuss both options during consultation and may recommend a combination approach." },
    { q: "Can this be combined with HRT?", a: "Yes - many patients benefit from both HRT for systemic symptoms and local intimate rejuvenation. Dr. Taganova, as a menopause specialist, can advise on the most appropriate combined approach." },
    { q: "Who is not suitable for this treatment?", a: "This treatment is not suitable during pregnancy or if there is an active infection or inflammation in the area. A full medical assessment is always carried out before treatment." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ." },
  ],
  procedureSchema: {
    name: "Neauvia N Rose Intimate Area Rejuvenation Oxford",
    description: "Injectable hyaluronic acid treatment to restore hydration, comfort, and tissue integrity to the intimate area. Delivered by GMC-registered Dr. Inga Taganova, formally trained gynaecologist, in Oxford.",
    bodyLocation: "Intimate/vulvovaginal area",
  },
  relatedLinks: [
    { label: "Menopause Clinic", href: "/menopause-clinic-oxford" },
    { label: "Medical Weight Loss", href: "/treatments/medical-weight-loss-oxford" },
    { label: "Skin Boosters", href: "/treatments/skin-boosters-oxford" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function NeauviaNRosePage() {
  return <TreatmentPageTemplate data={data} />;
}
