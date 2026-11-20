import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const menopauseClinicData: TreatmentLandingPageData = {
  slug: "menopause-clinic-oxford",
  h1: "Menopause Clinic in Oxford",
  title: "Menopause Clinic Oxford | Women's Health | Dr Inga Taganova",
  metaDescription: "Private menopause clinic in Oxford. Expert menopause care from Dr Inga Taganova with a background in obstetrics and gynaecology.",
  canonical: "https://www.theoxfordwellnessdoctor.com/menopause-clinic-oxford",
  
  priceLabel: "Initial consultation",
  priceValue: "£275",
  
  whoIsFor: {
    heading: "Menopause symptoms we help with",
    items: [
      "Hot flushes and sudden heat surges",
      "Night sweats and disrupted sleep",
      "Mood changes, anxiety, and low mood",
      "Brain fog and difficulty concentrating",
      "Skin thinning, dryness, and loss of elasticity",
      "Hair thinning and texture changes",
      "Vaginal dryness and discomfort",
      "Low libido and changes in sexual wellbeing",
      "Joint aches and fatigue"
    ]
  },
  
  howItWorks: {
    heading: "Your menopause consultation",
    intro: "Dr Inga Taganova provides comprehensive menopause assessments and creates personalised treatment plans based on your symptoms, medical history, and preferences.",
    steps: [
      "Full symptom assessment and medical history review.",
      "Discussion of treatment options, including lifestyle interventions and specialist referrals.",
      "Personalised treatment plan tailored to your needs.",
      "Follow-up appointments (£150) to monitor progress and adjust your plan."
    ],
    sessionsInfo: "Dr Inga Taganova is a lead clinician with a background in obstetrics and gynaecology and more than two decades of medical experience."
  },
  
  downtime: {
    heading: "Treatment approach",
    description: "While we do not currently prescribe HRT at this clinic, Dr Inga Taganova can assess your suitability for hormone therapy and provide specialist referrals if HRT is clinically indicated. Our clinic focuses on holistic symptom management, lifestyle interventions, and complementary treatments that address the full spectrum of menopausal changes."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: Dr Inga Taganova is a GMC-registered doctor with a background in obstetrics and gynaecology",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "more than two decades of medical experience",
      "Comprehensive approach to menopause care",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    {
      q: "What happens at a menopause consultation?",
      a: "Dr Inga Taganova will take a full history of your symptoms, assess the underlying causes, and discuss all available treatment options. She will create a personalised treatment plan based on your symptoms, medical history, and preferences."
    },
    {
      q: "Can Dr Inga Taganova prescribe HRT?",
      a: "While we do not currently prescribe HRT at this clinic, Dr Inga Taganova can assess your suitability for hormone therapy and provide specialist referrals if HRT is clinically indicated."
    },
    {
      q: "How long is a menopause consultation?",
      a: "Initial consultations are typically 60 minutes, allowing time for a thorough assessment and discussion of your treatment options."
    },
    {
      q: "What is the cost of a follow-up appointment?",
      a: "Follow-up appointments are £150. These are used to monitor progress and adjust your treatment plan as needed."
    },
    {
      q: "Can menopause affect my skin?",
      a: "Yes. Oestrogen plays a critical role in maintaining skin collagen, hydration, and elasticity. In the years surrounding menopause, skin can lose up to 30% of its collagen. Dr Inga Taganova can recommend targeted aesthetic treatments that address the physical manifestations of oestrogen decline."
    }
  ],
  
  pricing: [
    { name: "Menopause & Women's Health Consultation — Initial (60 min)", price: "£275" },
    { name: "Menopause & Women's Health — Follow-up (30 min)", price: "£150" }
  ],
  
  procedureSchema: {
    name: "Menopause Clinic Oxford",
    description: "Comprehensive menopause consultation with Dr Inga Taganova in Oxford. Expert assessment and treatment planning for menopause and perimenopause symptoms.",
    bodyLocation: "Whole body"
  }
};
