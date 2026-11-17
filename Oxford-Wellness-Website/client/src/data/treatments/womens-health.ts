import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const womensHealthData: TreatmentLandingPageData = {
  slug: "womens-health-oxford",
  h1: "Women's Health & Menopause in Oxford",
  title: "Women's Health & Menopause Clinic Oxford | Dr Inga Taganova",
  metaDescription: "Expert women's health and menopause care in Oxford. Menopause, perimenopause, intimate health support with GP Dr Inga Taganova at Belsyre Court, Woodstock Road.",
  canonical: "https://www.theoxfordwellnessdoctor.com/womens-health-oxford",
  
  priceLabel: "Menopause & Women's Health Initial Consultation",
  priceValue: "£195",
  
  whoIsFor: {
    heading: "Women's health concerns we help with",
    items: [
      "Menopause and perimenopause symptoms",
      "Hot flushes, night sweats, and sleep disturbances",
      "Mood changes, anxiety, and brain fog",
      "Intimate health concerns and vaginal dryness",
      "Skin and hair changes during menopause",
      "Low libido and sexual wellness concerns",
      "Hormonal changes and their effects"
    ]
  },
  
  howItWorks: {
    heading: "Your women's health consultation",
    intro: "Dr Inga Taganova is a GP with a background in obstetrics and gynaecology who provides expert women's health consultations at her clinic in central Oxford.",
    steps: [
      "Comprehensive assessment of your symptoms and medical history.",
      "Discussion of treatment options tailored to your specific concerns.",
      "Personalised treatment plan combining medical and holistic approaches.",
      "Follow-up appointments (£95) to monitor progress and adjust care as needed."
    ],
    sessionsInfo: "With over 20 years of experience in women's healthcare, Dr Taganova offers comprehensive support for menopause, perimenopause, intimate health and hormonal concerns."
  },
  
  downtime: {
    heading: "Our approach to women's health",
    description: "Dr Taganova's approach combines clinical expertise with genuine empathy, recognising that these transitions affect not just your physical health but your confidence, relationships and daily life. Our clinic on Woodstock Road provides a calm, private space for women seeking specialist advice about menopause symptoms, hormone changes, and intimate health concerns."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: Dr Inga Taganova is a GMC-registered GP with a background in obstetrics and gynaecology",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "Over 20 years of experience in women's health",
      "Comprehensive, empathetic approach to menopause and women's health",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    {
      q: "What women's health concerns can you help with?",
      a: "We provide expert care for menopause, perimenopause, intimate health concerns, hormonal changes, and related symptoms. Dr Taganova's background in obstetrics and gynaecology means she can address women's health concerns holistically."
    },
    {
      q: "What happens at a women's health consultation?",
      a: "Dr Taganova will take a full history of your symptoms, assess the underlying causes, and discuss all available treatment options. She will create a personalised treatment plan based on your symptoms, medical history, and preferences."
    },
    {
      q: "Can you prescribe hormone therapy?",
      a: "While we do not currently prescribe HRT at this clinic, Dr Taganova can assess your suitability for hormone therapy and provide specialist referrals if HRT is clinically indicated."
    },
    {
      q: "How much are follow-up appointments?",
      a: "Follow-up appointments for menopause and women's health are £95. These are used to monitor progress and adjust your treatment plan as needed."
    },
    {
      q: "Can you help with intimate health concerns?",
      a: "Yes. Dr Taganova's background in obstetrics and gynaecology means she can address intimate health concerns including vaginal dryness, discomfort, and sexual wellness. We offer an Intimate Health Consultation at £150."
    }
  ],
  
  pricing: [
    { name: "Menopause & Women's Health Consultation — Initial", price: "£195" },
    { name: "Menopause & Women's Health — Follow-up", price: "£95" },
    { name: "Intimate Health Consultation", price: "£150" }
  ],
  
  procedureSchema: {
    name: "Women's Health & Menopause Consultation Oxford",
    description: "Expert women's health consultation with GP Dr Inga Taganova in Oxford. Comprehensive support for menopause, perimenopause, intimate health and hormonal concerns.",
    bodyLocation: "Whole body"
  }
};
