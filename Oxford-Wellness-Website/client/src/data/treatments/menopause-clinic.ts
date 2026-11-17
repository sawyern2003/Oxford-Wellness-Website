import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const menopauseClinicData: TreatmentLandingPageData = {
  slug: "menopause-clinic-oxford",
  h1: "Menopause Clinic in Oxford",
  title: "Menopause Clinic Oxford | Women's Health | Dr Inga Taganova",
  metaDescription: "Private menopause clinic in Oxford. Expert menopause care from GP Dr Inga Taganova with a background in obstetrics and gynaecology. Book your consultation.",
  canonical: "https://www.theoxfordwellnessdoctor.com/menopause-clinic-oxford",
  
  priceLabel: "Initial consultation",
  priceValue: "£195",
  
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
    intro: "Dr Taganova provides comprehensive menopause assessments and creates personalised treatment plans based on your symptoms, medical history, and preferences.",
    steps: [
      "Full symptom assessment and medical history review.",
      "Discussion of treatment options, including lifestyle interventions and specialist referrals.",
      "Personalised treatment plan tailored to your needs.",
      "Follow-up appointments (£95) to monitor progress and adjust your plan."
    ],
    sessionsInfo: "Dr Taganova is a GP with a background in obstetrics and gynaecology and over 20 years of experience in women's health."
  },
  
  downtime: {
    heading: "Treatment approach",
    description: "While we do not currently prescribe HRT at this clinic, Dr Taganova can assess your suitability for hormone therapy and provide specialist referrals if HRT is clinically indicated. Our clinic focuses on holistic symptom management, lifestyle interventions, and complementary treatments that address the full spectrum of menopausal changes."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: Dr Inga Taganova is a GMC-registered GP with a background in obstetrics and gynaecology",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "Over 20 years of experience in women's health",
      "Comprehensive approach to menopause care",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    {
      q: "What happens at a menopause consultation?",
      a: "Dr Taganova will take a full history of your symptoms, assess the underlying causes, and discuss all available treatment options. She will create a personalised treatment plan based on your symptoms, medical history, and preferences."
    },
    {
      q: "Can Dr Taganova prescribe HRT?",
      a: "While we do not currently prescribe HRT at this clinic, Dr Taganova can assess your suitability for hormone therapy and provide specialist referrals if HRT is clinically indicated."
    },
    {
      q: "How long is a menopause consultation?",
      a: "Initial consultations are typically 30–45 minutes, allowing time for a thorough assessment and discussion of your treatment options."
    },
    {
      q: "What is the cost of a follow-up appointment?",
      a: "Follow-up appointments are £95. These are used to monitor progress and adjust your treatment plan as needed."
    },
    {
      q: "Can menopause affect my skin?",
      a: "Yes. Oestrogen plays a critical role in maintaining skin collagen, hydration, and elasticity. In the years surrounding menopause, skin can lose up to 30% of its collagen. Dr Taganova can recommend targeted aesthetic treatments that address the physical manifestations of oestrogen decline."
    }
  ],
  
  pricing: [
    { name: "Menopause & Women's Health Consultation — Initial", price: "£195" },
    { name: "Menopause & Women's Health — Follow-up", price: "£95" }
  ],
  
  procedureSchema: {
    name: "Menopause Clinic Oxford",
    description: "Comprehensive menopause consultation with GP Dr Inga Taganova in Oxford. Expert assessment and treatment planning for menopause and perimenopause symptoms.",
    bodyLocation: "Whole body"
  }
};
