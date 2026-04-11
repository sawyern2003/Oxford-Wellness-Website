import { motion } from "framer-motion";
import consultationImg from "@assets/dr-taganova-patient-consultation-oxford-clinic.webp";
import treatmentImg from "@assets/morpheus8-skin-tightening-treatment-oxford.webp";
import FadeIn from "@/components/animations/FadeIn";
import ReviewCarousel from "@/components/about/ReviewCarousel";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

export default function About() {
  useBreadcrumbSchema([{ name: "About Dr. Taganova", path: "/about" }]);
  useSEO({
    title: "Dr. Inga Taganova | Menopause Specialist | GMC Doctor Oxford",
    description: "Meet Dr. Inga Taganova - specialist menopause lead, GMC-registered GP with 20+ years experience. Former gynaecologist, women's health expert, and medical aesthetics specialist. Oxford's trusted women's wellness doctor.",
    canonical: "https://www.theoxfordwellnessdoctor.com/about",
  });
  return (
    <div className="pt-24 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="max-w-6xl mx-auto"
        >
          <h1 className="font-serif text-5xl text-primary mb-16 text-center">Our Story</h1>
          
          {/* Stats Section - Moved Top */}
          <div className="grid md:grid-cols-3 gap-8 text-center mb-20 border-b border-primary/10 pb-16">
            <div className="p-8">
              <h3 className="font-serif text-4xl text-primary mb-2">20+</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Years Women's Health</p>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-4xl text-primary mb-2">2k+</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Patients Treated</p>
            </div>
            <div className="p-8">
              <h3 className="font-serif text-4xl text-primary mb-2">100+</h3>
              <p className="text-sm uppercase tracking-widest text-muted-foreground">Certificates Attained</p>
            </div>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-16 items-start mb-20">
            <FadeIn direction="right" className="space-y-6 text-muted-foreground font-light text-lg leading-relaxed">
              <p className="text-2xl text-primary font-serif italic mb-8">
                "The best aesthetic results are the ones that whisper, not shout."
              </p>
              <p>
                Dr Inga Taganova is a GMC-registered GP and specialist menopause lead with over 20 years of experience in women's health and medical aesthetics. As a former gynaecologist trained in the UK, France and Monaco, she brings unparalleled depth to menopause care, perimenopause support, and intimate health - while also offering expert medical aesthetics informed by her understanding of hormonal influences on skin and aging.
              </p>
              <p>
                She strongly believes that the best approach to providing medical procedures is to deliver tailor-made treatments that are of the highest quality and safety, based on her expert knowledge in the cosmetic and wellness field.
              </p>
              <p>
                Dr Taganova believes that exceptional care starts with listening. She takes the time to deeply understand your unique concerns, lifestyle, and aspirations before suggesting any treatment.
              </p>
              <p>
                Every treatment plan is bespoke-built with the utmost care and attention to detail. Whether you’re new or a long-term client, Dr Inga will carefully guide you on your journey with her professional, reassuring manner.
              </p>
            </FadeIn>

            <FadeIn direction="left" delay={0.2} className="relative mt-8 lg:mt-0">
               <div className="aspect-[4/5] w-3/4 ml-auto overflow-hidden rounded-sm shadow-xl">
                 <img src={consultationImg} alt="Dr. Inga Taganova consulting with a patient at The Oxford Wellness Doctor clinic - personalised medical aesthetics and women's health care in Oxford" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width="800" height="1000" />
               </div>
               <div className="absolute bottom-12 left-0 w-2/3 aspect-[4/3] overflow-hidden rounded-sm shadow-xl border-4 border-white">
                 <img src={treatmentImg} alt="Morpheus8 skin tightening and radiofrequency microneedling treatment being administered at The Oxford Wellness Doctor, Oxford" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" loading="lazy" width="600" height="450" />
               </div>
            </FadeIn>
          </div>

          {/* Location Section */}
          <FadeIn className="mb-20">
            <div className="bg-muted/30 border border-border p-10 md:p-14">
              <p className="text-xs uppercase tracking-widest text-muted-foreground mb-3">Our Clinic</p>
              <h2 className="font-serif text-3xl text-primary mb-6">Located in Oxford</h2>
              <p className="text-muted-foreground font-light leading-relaxed mb-8 max-w-3xl">
                The Oxford Wellness Doctor is located in Oxford - a location carefully chosen to provide the optimal environment for medical aesthetics and women's wellness care. Our clinic embodies our commitment to scientific rigour, medical excellence, and patient-centered care in a professional, discreet setting.
              </p>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
                {[
                  { title: "Professional Medical Environment", body: "Our Oxford clinic provides a professional medical setting that reflects our commitment to evidence-based medicine and clinical excellence." },
                  { title: "Discreet & Private", body: "Located in a professional medical environment, ensuring complete confidentiality and privacy for all your treatments." },
                  { title: "Calm Clinical Atmosphere", body: "A peaceful, professional environment that promotes relaxation and wellbeing - the ideal setting for aesthetic care." },
                  { title: "Modern Treatment Rooms", body: "State-of-the-art, sleek treatment rooms designed for your comfort, privacy, and the highest clinical standards." },
                  { title: "Convenient Parking", body: "Street parking available nearby on Woodstock Road for your convenience when visiting the clinic." },
                  { title: "Central Oxford Location", body: "Located on Woodstock Road in Oxford - easily accessible from throughout the city and surrounding areas." },
                ].map((item) => (
                  <div key={item.title}>
                    <div className="w-6 h-0.5 bg-secondary mb-3" />
                    <h3 className="font-serif text-base text-primary mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground font-light leading-relaxed">{item.body}</p>
                  </div>
                ))}
              </div>
              <address className="not-italic text-sm text-muted-foreground border-t border-border pt-6 space-y-0.5">
                <p className="font-medium text-primary">The Oxford Wellness Doctor</p>
                <p>3 Woodstock Rd</p>
                <p>Oxford OX2 6HA</p>
                <p>United Kingdom</p>
              </address>
            </div>
          </FadeIn>

          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-4">Patient Stories</p>
            <h2 className="font-serif text-3xl md:text-4xl text-secondary">But don't just take our word for it...</h2>
          </div>

          <ReviewCarousel />

        </motion.div>
      </div>
    </div>
  );
}
