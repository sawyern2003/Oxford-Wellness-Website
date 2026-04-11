import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Neauvia N Rose Intimate Area Rejuvenation Oxford | Dr. Inga Taganova",
  metaDescription: "Intimate area rejuvenation in Oxford with Neauvia N Rose - a regenerative injectable treatment for dryness, discomfort, and loss of volume. GMC-registered doctor. £350. Book now.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/neauvia-n-rose-intimate-rejuvenation-oxford",
  h1: "Neauvia N Rose Intimate Area Rejuvenation in Oxford",
  intro: "The Neauvia N Rose treatment is a discreet, medically-administered injectable designed to restore hydration, comfort, and tissue integrity to the intimate area. Particularly beneficial for women experiencing changes related to menopause, postpartum recovery, or hormonal shifts, this treatment is delivered personally by Dr. Inga Taganova - a former gynaecologist and menopause specialist - in a private, professional setting in Oxford.",
  sections: [
    {
      heading: "What Is Neauvia N Rose?",
      paragraphs: [
        "Neauvia N Rose is a certified medical-grade hyaluronic acid filler specifically formulated for intimate health. Unlike standard dermal fillers, it is designed to restore the natural hydration, elasticity, and volume of vulvar and vaginal tissues that are often depleted by hormonal changes.",
        "The product works by integrating into the tissue and attracting water molecules, restoring a healthier, more comfortable environment. It also has a gentle regenerative effect, stimulating natural collagen production over time.",
      ],
    },
    {
      heading: "Who Is This Treatment For?",
      paragraphs: [
        "This treatment is especially suited to women who are experiencing:",
      ],
      bullets: [
        "Vaginal dryness or discomfort during daily activities",
        "Reduced sensitivity or pleasure during intimacy",
        "Loss of volume or laxity in the intimate area",
        "Recurrent irritation or soreness due to hormonal changes",
        "Postpartum changes including dryness and discomfort",
        "Symptoms of vulvovaginal atrophy associated with perimenopause or menopause",
      ],
      note: "Dr. Taganova's background as a former consultant gynaecologist makes her uniquely qualified to assess and treat intimate health concerns with sensitivity, discretion, and clinical precision.",
    },
    {
      heading: "The Procedure - What to Expect",
      paragraphs: [
        "Your appointment begins with a thorough consultation in which Dr. Taganova will take a full medical history and discuss your symptoms, expectations, and any concerns. There is no pressure, and treatment is only recommended when clinically appropriate.",
        "The treatment itself takes approximately 30–45 minutes. A topical anaesthetic cream is applied beforehand to ensure your comfort. The injections are administered with precision using a very fine needle. Most patients describe only mild, brief discomfort.",
        "There is minimal downtime. We recommend abstaining from sexual activity for a few days following treatment, and Dr. Taganova will advise on any other aftercare steps.",
      ],
    },
    {
      heading: "Results",
      paragraphs: [
        "Many patients notice an improvement in hydration and comfort within days of treatment. The regenerative effects - improved tissue quality and elasticity - continue to develop over the following weeks.",
        "Results typically last 9–12 months. A second session may be recommended for optimal results, particularly in more advanced cases of atrophy.",
      ],
    },
    {
      heading: "Why Choose Dr. Taganova for This Treatment?",
      bullets: [
        "Former consultant gynaecologist with deep expertise in intimate health",
        "GMC-registered doctor (No. 4727817) with 20+ years of clinical experience",
        "Menopause specialist - understands the hormonal context of intimate changes",
        "Completely private, discreet clinic in Oxford",
        "Compassionate, non-judgemental care with full medical consent process",
        "Treatment always performed personally by Dr. Taganova - never delegated",
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
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Neauvia N Rose Intimate Area Rejuvenation Oxford",
    description: "Injectable hyaluronic acid treatment to restore hydration, comfort, and tissue integrity to the intimate area. Delivered by GMC-registered Dr. Inga Taganova, former gynaecologist, in Oxford.",
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
