import BlogPostTemplate, { BlogPostData } from "@/components/blog/BlogPostTemplate";
import scienceParkImg from "@/assets/blog/oxford-science-park-clinic.png";

const data: BlogPostData = {
  h1: "Welcome to Our Oxford Clinic",
  title: "Oxford Medical Aesthetics & Women's Health Clinic | The Oxford Wellness Doctor",
  metaDescription: "The Oxford Wellness Doctor is located in Oxford at 3 Woodstock Rd. Discover our professional medical aesthetics and women's health clinic with convenient parking and discreet, professional environment.",
  canonical: "https://www.theoxfordwellnessdoctor.com/blog/new-oxford-science-park-clinic",
  category: "Clinic News",
  readTime: "4 min",
  intro: "We are delighted to welcome patients to our clinic in Oxford. This location has been carefully chosen to provide the finest possible environment for medical aesthetics and women's wellness care - combining professional medical credentials with privacy, convenience, and a calm clinical atmosphere.",
  sections: [
    {
      heading: "Our Oxford Clinic",
      image: { src: scienceParkImg, alt: "The Oxford Wellness Doctor clinic in Oxford - a professional medical aesthetics and women's wellness clinic providing expert care", position: "full" as const },
      paragraphs: [
        "Our clinic in Oxford provides the ideal setting for medical aesthetics and women's health care. We've chosen a location that offers both professionalism and privacy, where patients can receive expert care in a calm, discreet environment.",
        "This isn't just a convenient location. It is an environment that aligns perfectly with our philosophy: evidence-based, medically rigorous care delivered with warmth and precision. Every detail has been considered to ensure your comfort and privacy.",
      ],
    },
    {
      heading: "Why This Location is Different",
      bullets: [
        "Professional medical environment - purpose-designed for clinical excellence and patient care",
        "Complete discretion - a private, calm setting where your visits remain entirely confidential",
        "Peaceful atmosphere - a tranquil environment that promotes relaxation and wellbeing",
        "Modern, sleek treatment rooms - purpose-designed for comfort, privacy, and clinical precision",
        "Convenient parking - street parking available nearby for your convenience",
        "Easy access from all Oxford areas - centrally located in Oxford, easily accessible from throughout the city",
      ],
    },
    {
      heading: "The Same Doctor, the Same Excellence",
      paragraphs: [
        "What has not changed is what matters most: Dr. Inga Taganova continues to see every patient personally. As a GMC-registered GP (No. 4727817), former NHS gynaecologist, and menopause specialist with over 20 years of clinical experience, Dr. Taganova brings exceptional depth of medical knowledge to every treatment and consultation.",
        "Our treatments - anti-wrinkle injections, dermal fillers, Profhilo, Morpheus8, lip fillers, chemical peels, skin boosters, medical weight loss, and our specialist menopause clinic - are all available at the new clinic. The standard of care remains exactly as it has always been: thorough, honest, and patient-led.",
      ],
    },
    {
      heading: "How to Find Us",
      paragraphs: [
        "Our address is: 3 Woodstock Rd, Oxford OX2 6HA.",
      ],
      bullets: [
        "From Oxford city centre (5 minutes): Head north on St Giles', continue onto Woodstock Road, clinic on your left",
        "From Headington (10 minutes): Take London Road west towards city centre, turn right onto Woodstock Road",
        "From Cowley (15 minutes): Head west towards city centre, follow signs to Woodstock Road via Headington",
        "From Abingdon (20 minutes): Head north on A4183, follow signs to Oxford city centre, then north to Woodstock Road",
        "By bus: Multiple routes serve Woodstock Road including the 500 and S3 services",
        "By bike: Cycle-friendly route via central Oxford - Woodstock Road has good cycling infrastructure",
      ],
    },
    {
      heading: "Getting Here",
      paragraphs: [
        "Our Oxford location offers convenient access from throughout the city. Street parking is available on Woodstock Road and surrounding streets. We recommend allowing a few extra minutes for parking if you're driving.",
        "We know that ease of access matters. Whether you're visiting for a 30-minute skin booster treatment or a 45-minute menopause consultation, our central Oxford location is easily reached by car, bus, bike, or on foot.",
      ],
    },
    {
      heading: "Serving All of Oxford and Oxfordshire",
      paragraphs: [
        "Our Oxford clinic is ideally placed to serve patients from across the city and county. We regularly welcome patients from Jericho, Summertown, Headington, Cowley, Rose Hill, Iffley, Blackbird Leys, Kennington, Oxford city centre, Abingdon, Witney, Kidlington, Bicester, and throughout Oxfordshire.",
        "If you have any questions about reaching us or would like to discuss our services, please don't hesitate to get in touch on 07739 309380 or email info@theoxfordwellnessdoctor.com. We look forward to welcoming you.",
      ],
    },
  ],
  cta: {
    heading: "Book Your Consultation in Oxford",
    text: "Experience professional medical aesthetics in a calming, private environment. Ample free parking and easy access from all Oxford areas.",
    buttonLabel: "Book a Consultation",
    buttonHref: "https://www.glowday.com/clinic/the-oxford-wellness-doctor",
    buttonExternal: true,
  },
  relatedPosts: [
    { label: "How to Choose an Aesthetics Clinic in Oxford", href: "/blog/choosing-aesthetics-clinic-oxford" },
    { label: "Profhilo vs. Dermal Fillers: Which Is Right for You?", href: "/blog/profhilo-vs-dermal-fillers" },
  ],
  relatedTreatments: [
    { label: "All Treatments", href: "/treatments" },
    { label: "Menopause Clinic Oxford", href: "/menopause-clinic-oxford" },
    { label: "Contact & Directions", href: "/contact" },
  ],
};

export default function NewOxfordScienceParkClinicPost() {
  return <BlogPostTemplate data={data} />;
}
