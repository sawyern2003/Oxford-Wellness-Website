import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const weightLossConsultationData: TreatmentLandingPageData = {
  slug: "weight-loss-consultation",
  bookingUrl: "/book",
  h1: "Weight Loss Consultation in Oxford",
  title: "Weight Loss Consultation Oxford | The Oxford Wellness Doctor",
  metaDescription:
    "Doctor-led weight loss consultation at our Oxford clinic. In-person assessment, lifestyle and nutrition advice, and a personalised plan with Dr Inga Taganova.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/weight-loss-consultation-oxford",

  // TODO: Confirm price - currently showing as TBC at booking
  priceLabel: "Consultation",
  priceValue: "Price confirmed at booking",

  whoIsFor: {
    heading: "Who is this for?",
    items: [
      "Adults seeking doctor-led guidance on weight management",
      "Women experiencing weight changes during perimenopause or menopause",
      "Those looking for a personalised approach to sustainable weight loss",
      "Anyone wanting professional support with nutrition and lifestyle changes",
    ],
  },

  howItWorks: {
    heading: "What to expect",
    intro:
      "Doctor-led weight management consultation: assessment, lifestyle and nutrition advice, and a personalised plan. Consultations take place in person at our clinic in Oxford.",
    steps: [
      "In-person consultation at Belsyre Court, Oxford",
      "Discussion of your weight concerns, health history, and goals",
      "Assessment of factors affecting weight, including lifestyle, nutrition, activity levels, sleep and stress",
      "Personalised plan covering nutrition, physical activity, lifestyle changes and realistic goal-setting",
      "Follow-up consultations available to review progress and adjust your plan",
    ],
    sessionsInfo:
      "This is an in-person consultation and advice service for adults. It provides assessment, lifestyle and nutrition guidance, and ongoing support.",
  },

  downtime: {
    heading: "What this consultation includes",
    description:
      "An in-person doctor's assessment of the lifestyle and nutritional factors affecting your weight, a personalised nutrition and activity plan tailored to your circumstances, and ongoing support through follow-up consultations when needed.",
  },

  trust: {
    heading: "Why Dr Inga's approach",
    items: [
      "GP with a background in obstetrics and gynaecology who understands how hormonal changes can affect weight during perimenopause and menopause",
      "More than two decades of medical experience",
      "Evidence-based, realistic guidance focused on sustainable lifestyle and nutrition changes",
      "In-person consultations at our Oxford clinic",
    ],
  },

  faqs: [
    {
      q: "What happens during the consultation?",
      a: "Dr Inga will discuss your weight concerns and goals, take a health history, and assess factors that may be affecting your weight such as nutrition, activity levels, sleep and stress. She will then create a personalised plan covering nutrition, activity and lifestyle changes to support your goals. Consultations take place in person at our clinic at Belsyre Court, Oxford.",
    },
    {
      q: "Who is this consultation suitable for?",
      a: "This service is for adults who want doctor-led guidance on weight management. It is particularly helpful for women experiencing weight changes during perimenopause or menopause, and for those who want a personalised, evidence-based approach to nutrition and lifestyle.",
    },
    {
      q: "Is this an in-person consultation?",
      a: "Yes. All consultations take place in person at our clinic at Belsyre Court, 57 Woodstock Road, Oxford. We do not offer video or remote weight consultations.",
    },
    {
      q: "What does the personalised plan include?",
      a: "Your plan will include evidence-based nutrition guidance, recommendations for physical activity suited to your circumstances, lifestyle changes to support your goals, and realistic target-setting. The plan is tailored to your individual circumstances and preferences.",
    },
    {
      q: "Are follow-up consultations available?",
      a: "Yes. Follow-up consultations can be arranged to review your progress, adjust your plan, discuss any challenges, and provide ongoing support. Frequency of follow-up is decided based on your individual needs.",
    },
  ],

  pricing: [
    {
      name: "Weight Loss Consultation",
      price: "Price confirmed at booking", // TODO: Confirm actual price
    },
    {
      name: "Follow-up consultation",
      price: "Price confirmed at booking", // TODO: Confirm follow-up price
    },
  ],

  consultation: null,

  procedureSchema: {
    name: "Weight Loss Consultation",
    description:
      "Doctor-led weight loss consultation providing in-person assessment, personalised nutrition and lifestyle guidance, and ongoing support for adults seeking evidence-based advice.",
  },
};
