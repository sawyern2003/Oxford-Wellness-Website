import BlogPostTemplate, { BlogPostData } from "@/components/blog/BlogPostTemplate";
import clinicInteriorImg from "@/assets/blog/choosing-aesthetics-clinic-oxford.png";

const data: BlogPostData = {
  title: "How to Choose an Aesthetics Clinic in Oxford: A Checklist",
  metaDescription: "What to look for when choosing an aesthetic clinic in Oxford. Credentials, safety, results - expert guide from GMC-registered Dr. Inga Taganova.",
  canonical: "https://www.theoxfordwellnessdoctor.com/blog/choosing-aesthetics-clinic-oxford",
  h1: "How to Choose an Aesthetics Clinic in Oxford: A Checklist",
  category: "Choosing a Clinic",
  readTime: "6 min",
  intro: "Choosing an aesthetics clinic is one of the most important decisions in your aesthetic journey - and one of the most confusing. Oxford has a growing number of clinics and practitioners offering injectable treatments, energy devices, and wellness services. The quality, safety standards, and clinical expertise vary enormously. Dr. Inga Taganova shares the checklist she would use if she were a patient choosing a practitioner - because the standards she holds herself to are the same standards every patient deserves.",
  sections: [
    {
      heading: "Check Credentials First - Before Anything Else",
      image: { src: clinicInteriorImg, alt: "The Oxford Wellness Doctor clinic in Oxford, Littlemore - a professional medical environment for aesthetic treatments in Oxford", position: "left" as const },
      paragraphs: [
        "The single most important step in choosing an aesthetics clinic is verifying the qualifications of the person who will be treating you. This is non-negotiable.",
      ],
      bullets: [
        "For a doctor: Check GMC registration at gmcuk.org. A registered doctor will have their name, registration number, and current status listed. If someone claims to be a doctor but is not on the GMC register, they are not a qualified medical doctor in the UK.",
        "For a nurse: Check NMC registration at nmc.org.uk. Registered nurses and nurse practitioners will be listed with their current registration status.",
        "For pharmacists: Check GPhC registration at pharmacyregulation.org.",
        "If the practitioner does not appear on any professional register, they are unregulated. This is a serious red flag for any injectable treatment.",
      ],
    },
    {
      heading: "Distinguish Medical Clinics from Beauty Salons",
      paragraphs: [
        "The aesthetics market in the UK includes everything from hospital-linked medical clinics to beauty salons offering dermal filler 'parties'. Understanding where on this spectrum a clinic sits is essential.",
        "A medical-led aesthetics clinic should have: a clinical environment with appropriate infection control; qualified prescribers on-site or overseeing treatment; protocols for managing complications; access to emergency equipment including hyaluronidase; professional medical indemnity insurance.",
        "A beauty salon offering aesthetic treatments may have none of these things - and you would have limited legal recourse if something went wrong.",
      ],
    },
    {
      heading: "Ask About Training and Experience",
      paragraphs: [
        "All reputable practitioners should be willing to tell you about their training and experience - specifically in the treatments they are offering. Questions worth asking include:",
      ],
      bullets: [
        "'Where did you train in aesthetic medicine and how long did the training last?'",
        "'How many of this specific procedure have you performed?'",
        "'What do you do if there is a complication?'",
        "'Do you have access to hyaluronidase?' (the enzyme used to dissolve filler in an emergency)",
        "'Can I see examples of your work?'",
        "A practitioner who becomes defensive or evasive about these questions is telling you something important.",
      ],
    },
    {
      heading: "Assess the Quality of the Consultation",
      paragraphs: [
        "The consultation is where the quality of a practitioner becomes most visible. A good aesthetics consultation should include a full medical history review, a thorough assessment of your facial anatomy, an honest discussion of what can and cannot be achieved, clear explanations of the recommended treatment and why, a transparent discussion of risks and side effects, and time for your questions.",
        "A poor consultation looks like this: a quick chat about what you want, a price quote, and an immediate booking - or worse, treatment on the same day without any real assessment. The best outcomes come from practitioners who tell you the truth, even when the truth is 'I don't think that treatment will achieve what you want'.",
      ],
    },
    {
      heading: "Look at Before and After Photographs",
      paragraphs: [
        "Before and after photographs are one of the clearest indicators of a practitioner's aesthetic judgement and technical skill. Look for:",
      ],
      bullets: [
        "Results that look natural - the goal of aesthetic treatment is to enhance, not to replace",
        "Consistency across different patients and different ages",
        "Appropriate results for the treatment type (subtle improvement, not dramatic transformation)",
        "Photographs that appear to be of actual patients, not stock images or images sourced from the internet",
        "Images of patients similar to you in age and skin type",
      ],
      note: "Be cautious of before and after photographs that look heavily filtered or that show implausible results for the stated treatment.",
    },
    {
      heading: "Check Reviews - But Read Them Critically",
      paragraphs: [
        "Patient reviews on Google, Trustpilot, and Glowday provide useful information - but read them with some critical awareness. Look for specificity (detailed, genuine accounts of the consultation and treatment experience) over generic praise. Patterns matter more than individual reviews. Consider the recency of reviews.",
        "Also look at how the clinic responds to any critical reviews. A professional response that addresses concerns directly is more reassuring than no response or a defensive reaction.",
      ],
    },
    {
      heading: "Red Flags to Walk Away From",
      bullets: [
        "Practitioners who cannot confirm their professional registration details",
        "Clinics offering treatment without any consultation",
        "Pressure to book immediately or accept additional treatments",
        "Prices significantly below market rate for the treatments offered",
        "Claims of guaranteed results or 'natural alternatives to surgery' without appropriate caveats",
        "Treatment in a non-clinical environment",
        "No mention of risks or aftercare",
        "Inability to explain what they would do in a complication",
        "No before and after portfolio available",
      ],
    },
    {
      heading: "What Makes The Oxford Wellness Doctor Different",
      paragraphs: [
        "At The Oxford Wellness Doctor, every element of the patient journey is designed around the standards we believe every patient deserves - not the minimum regulatory requirement. Dr. Taganova is GMC-registered, medically trained across gynaecology, general practice, and aesthetic medicine, and brings over 20 years of clinical experience to every patient interaction.",
        "Every new patient receives a full consultation before any treatment. Hyaluronidase is always available. Treatments are only recommended where Dr. Taganova believes they will genuinely benefit the patient. And patients are never pressured - if she doesn't think a treatment is right for you, she will tell you honestly.",
      ],
    },
  ],
  cta: {
    heading: "Experience the Difference",
    text: "Book a consultation and see for yourself what genuinely patient-centred aesthetic medicine looks like.",
    buttonLabel: "Book a Consultation",
    buttonExternal: true,
    buttonHref: "https://www.glowday.com/clinic/the-oxford-wellness-doctor",
  },
  relatedPosts: [
    { label: "How to Get Natural-Looking Lip Fillers: A Doctor's Guide", href: "/blog/lip-filler-natural-results" },
    { label: "Best Aesthetic Treatments for Women Over 50", href: "/blog/aesthetic-treatments-over-50" },
  ],
  relatedTreatments: [
    { label: "About Dr. Taganova", href: "/about" },
    { label: "All Treatments in Oxford", href: "/treatments" },
  ],
};

export default function ChoosingAestheticsClinicOxfordPost() {
  return <BlogPostTemplate data={data} />;
}
