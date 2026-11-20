import { TreatmentLandingPageData } from "@/components/treatments/TreatmentLandingPage";

export const sexualWellnessData: TreatmentLandingPageData = {
  slug: "sexual-wellness-oxford",
  h1: "Sexual Wellness & Intimate Health in Oxford",
  title: "Sexual Wellness & Intimate Health Oxford | Dr Inga Taganova",
  metaDescription: "Discreet sexual wellness and intimate health care in Oxford. Expert treatment for dryness, discomfort, and intimate concerns from Dr Inga Taganova.",
  canonical: "https://www.theoxfordwellnessdoctor.com/sexual-wellness-oxford",
  
  priceLabel: "Intimate Health Consultation",
  priceValue: "£150",
  
  whoIsFor: {
    heading: "Common intimate health concerns",
    items: [
      "Vaginal dryness and lack of natural lubrication",
      "Discomfort or pain during intercourse",
      "Loss of libido or reduced sexual desire",
      "Burning or itching in the intimate area",
      "Urinary symptoms (frequency, urgency, recurrent UTIs)",
      "Loss of sensation or changes in sexual response"
    ]
  },
  
  howItWorks: {
    heading: "Your intimate health consultation",
    intro: "Your consultation is conducted in a private, discreet setting at our Oxford clinic.",
    steps: [
      "Dr Inga Taganova discusses your symptoms, medical history, and treatment goals in detail.",
      "A physical examination may be performed if appropriate and consented to.",
      "Treatment options are explained, including Votiva FormaV and intimate wellness treatments.",
      "You will leave with a clear understanding of your options and a personalised treatment plan."
    ],
    sessionsInfo: "All consultations are confidential. Dr Inga Taganova is a lead clinician with a background in obstetrics and gynaecology."
  },
  
  downtime: {
    heading: "Treatment options",
    description: "We offer Forma V (£450 single session, £1,200 course of 3) – a non-invasive radiofrequency treatment for intimate wellness – and intimate hyaluronic acid treatments. Suitability is decided during your consultation. Dr Inga Taganova can also provide specialist referrals if other treatments are clinically appropriate."
  },
  
  trust: {
    heading: "Why choose The Oxford Wellness Doctor",
    items: [
      "Doctor-led clinic: Dr Inga Taganova is a GMC-registered doctor with a background in obstetrics and gynaecology",
      "Located at Belsyre Court, 57 Woodstock Road, Oxford OX2 6HJ",
      "more than two decades of medical experience",
      "Discreet, empathetic, and professional approach",
      "Calm, private consultation rooms"
    ]
  },
  
  faqs: [
    {
      q: "Is intimate health treatment embarrassing to discuss?",
      a: "Not at all. Dr Inga Taganova is a lead clinician with a background in obstetrics and gynaecology who has has more than two decades of medical experience with women. She approaches these topics with sensitivity, professionalism, and complete discretion. You won't be judged – you'll be listened to and helped."
    },
    {
      q: "What is Votiva FormaV?",
      a: "Votiva FormaV is a non-invasive radiofrequency treatment for intimate wellness. It uses gentle heat to stimulate collagen production and improve tissue quality. The treatment is comfortable and performed in-clinic."
    },
    {
      q: "Is there downtime after intimate treatments?",
      a: "Downtime is minimal. You can return to normal activities immediately, though sexual abstinence is recommended for 3–5 days to allow the tissue to settle. Any mild tenderness typically resolves within 24–48 hours."
    },
    {
      q: "Can intimate wellness treatments help with urinary symptoms?",
      a: "Yes. Declining oestrogen often affects urinary function as well, causing frequency, urgency, or recurrent UTIs. Restoring intimate tissue health can improve urinary symptoms for many women, though this is not the primary indication."
    },
    {
      q: "How do I book an intimate health consultation?",
      a: "You can book confidentially via the online booking system, or contact us directly by phone (07739 309380) or email (info@theoxfordwellnessdoctor.com). All consultations are private and discreet."
    }
  ],
  
  pricing: [
    { name: "Intimate Health Consultation (30 min)", price: "£150" },
    { name: "Forma V — single session", price: "£450" },
    { name: "Forma V — course of 3", price: "£1,200" },
    { name: "Intimate hyaluronic acid treatment", price: "Price on consultation" }
  ],
  
  procedureSchema: {
    name: "Sexual Wellness & Intimate Health Consultation",
    description: "Discreet intimate health consultation with Dr Inga Taganova – lead clinician with a background in obstetrics and gynaecology – in Oxford. Expert treatment for dryness, discomfort, and sexual wellness concerns.",
    bodyLocation: "Pelvis"
  }
};
