import { motion } from "framer-motion";
import PreConsultForm from "@/components/home/PreConsultForm";
import { useSEO } from "@/hooks/useSEO";
import { useBreadcrumbSchema } from "@/hooks/useBreadcrumbSchema";

export default function AIPreConsult() {
  useBreadcrumbSchema([{ name: "Pre-Consultation", path: "/ai-consultation" }]);
  useSEO({
    title: "AI Consultation | The Oxford Wellness Doctor | Find Your Treatment",
    description: "Discover which aesthetic treatment is right for you with our AI consultation tool. Get personalized recommendations from Dr. Taganova's Oxford clinic.",
    canonical: "https://www.theoxfordwellnessdoctor.com/ai-consultation",
  });
  return (
    <div className="pt-32 min-h-screen bg-background">
      <div className="container mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto mb-10 md:mb-14"
        >
          <span className="text-primary text-sm uppercase tracking-[0.2em] mb-4 block text-center">Exclusive Access</span>
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-6 text-center">
            AI Pre-Consultation
          </h1>
          <div className="grid lg:grid-cols-[1.1fr_1fr] gap-8 lg:gap-14 text-left mt-12 lg:mt-14 items-start">
            <div className="max-w-xl">
              <h2 className="text-sm uppercase tracking-wider text-muted-foreground mb-4">Enter your details below to access a</h2>
              <h3 className="font-serif text-4xl md:text-5xl text-secondary mb-5 leading-tight">
                5 minute, free <br />pre-consultation
              </h3>
              <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed max-w-[36ch]">
                Ask questions about any treatment we offer - for free. You'll get guidance on options, suitability, pricing ranges, and next steps before booking.
              </p>
            </div>
            <div className="bg-white/95 p-4 md:p-6 shadow-2xl border border-border/50 rounded-2xl backdrop-blur-sm max-w-[660px] w-full justify-self-center">
              <PreConsultForm 
                buttonText="Start pre-consultation"
                minutesLimitText="You’ll get up to 5 minutes. Please have your questions ready."
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
