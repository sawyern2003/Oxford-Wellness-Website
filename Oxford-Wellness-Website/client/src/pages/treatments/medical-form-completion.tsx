import TreatmentPageTemplate, { TreatmentPageData } from "@/components/treatments/TreatmentPageTemplate";

const data: TreatmentPageData = {
  title: "Medical Form Completion Oxford | GP Signature & Certification | Dr. Inga Taganova",
  metaDescription: "GMC-registered GP in Oxford available to complete medical forms, sign certifications, and provide medical verification for official documents. From £50. Book appointment today.",
  canonical: "https://www.theoxfordwellnessdoctor.com/treatments/medical-form-completion-oxford",
  h1: "Medical Form Completion in Oxford - GP Signature & Medical Certification",
  intro: "Dr. Inga Taganova is a fully GMC-registered GP (No. 4727817) available to complete, review, and sign a range of medical forms and official documents. Whether you need a medical certificate, a GP signature for an application, or clinical verification for insurance or legal purposes, appointments are available at our private clinic in Oxford on Fridays and Saturdays.",
  sections: [
    {
      heading: "What Types of Forms Can Dr. Taganova Complete?",
      paragraphs: [
        "As a GMC-registered GP and qualified medical practitioner, Dr. Taganova can assist with a wide range of official medical documentation, including:",
      ],
      bullets: [
        "Camp America and overseas camp programme medical forms",
        "Adoption medical reports and assessments",
        "Driving licence medical certificates (DVLA D4 and similar)",
        "Travel insurance medical letters",
        "Sports or fitness to participate medical clearance",
        "Immigration health assessments (basic)",
        "Life assurance and insurance medical questionnaires",
        "Fitness to travel letters",
        "General medical certification and verification letters",
        "Occupational health referral letters",
      ],
      note: "If you're unsure whether your form falls within Dr. Taganova's scope, please contact us before booking and we will advise.",
    },
    {
      heading: "What to Bring to Your Appointment",
      paragraphs: [
        "To ensure your appointment runs smoothly, please bring the following:",
      ],
      bullets: [
        "The completed form or documentation requiring signature (or blank forms if the doctor is to complete them)",
        "A valid form of photo ID",
        "Any relevant medical history, previous test results, or letters from other healthcare providers",
        "Details of any medications you are currently taking",
      ],
    },
    {
      heading: "The Appointment",
      paragraphs: [
        "Appointments are typically 30 minutes. Dr. Taganova will review your documentation, take a brief medical history if required, and complete and sign the relevant forms. For more complex assessments (such as full DVLA reports or adoption medicals), a longer appointment may be needed - please mention this when booking.",
        "All documentation is handled with strict confidentiality in line with GMC guidelines and UK data protection law.",
      ],
    },
    {
      heading: "Why Choose a Private GP for Form Completion?",
      bullets: [
        "Fast, convenient appointments - no long NHS waiting lists",
        "Fully GMC-registered GP (No. 4727817) - accepted by all major organisations",
        "Private, discreet clinic in Oxford with free parking",
        "Appointments available Fridays 4–8pm and Saturdays 9am–1pm",
        "Friendly, professional service with same-week availability",
        "All documentation handled confidentially",
      ],
    },
  ],
  pricing: [
    { name: "Medical Form Completion Appointment (30 min)", price: "£50" },
  ],
  faqs: [
    { q: "Can Dr. Taganova sign any type of medical form?", a: "Dr. Taganova can sign a wide range of medical forms as a fully GMC-registered GP. If you are unsure whether your specific form is within scope, please contact us before booking." },
    { q: "Do I need to bring my medical records?", a: "It is helpful to bring any relevant medical history, test results, or letters from other healthcare providers. This allows Dr. Taganova to complete forms accurately and safely." },
    { q: "How quickly can I get an appointment?", a: "We typically have availability within the same week. Appointments are available on Fridays 4–8pm and Saturdays 9am–1pm in Oxford." },
    { q: "Is this appointment confidential?", a: "Yes. All appointments are fully confidential and handled in accordance with GMC guidelines and UK data protection legislation." },
    { q: "Can I have a consultation for something else at the same appointment?", a: "Please mention any additional concerns when booking. If time allows, Dr. Taganova may be able to discuss other matters, or she can book you a separate appointment." },
    { q: "How do I book?", a: "Call 07739 309380, email info@theoxfordwellnessdoctor.com, or book online via Glowday. Our clinic is at 3 Woodstock Rd, Oxford OX2 6HA." },
  ],
  procedureSchema: {
    name: "Medical Form Completion Oxford",
    description: "Private GP service for completing and signing medical forms, certifications, and official documentation. Delivered by GMC-registered Dr. Inga Taganova in Oxford.",
  },
  relatedLinks: [
    { label: "Medical Weight Loss Consultation", href: "/treatments/medical-weight-loss-oxford" },
    { label: "Menopause Clinic", href: "/menopause-clinic-oxford" },
    { label: "Contact Us", href: "/contact" },
    { label: "All Treatments", href: "/treatments" },
  ],
};

export default function MedicalFormCompletionPage() {
  return <TreatmentPageTemplate data={data} />;
}
