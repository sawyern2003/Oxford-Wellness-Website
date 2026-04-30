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
          <h1 className="font-serif text-5xl md:text-6xl text-primary mb-5 text-center">
            Free 5 Minute AI Pre-Consultation
          </h1>
          <p className="text-base md:text-lg text-muted-foreground text-center max-w-3xl mx-auto">
            Enter your details below to start your pre-consultation and get guidance on options, suitability, pricing ranges, and next steps before booking.
          </p>
          <div className="text-left mt-10 md:mt-12">
            <div className="max-w-3xl mx-auto">
              <p className="text-lg md:text-xl font-light text-muted-foreground leading-relaxed">
                Ask questions about any treatment we offer - for free. You'll get guidance on options, suitability, pricing ranges, and next steps before booking.
              </p>
              <p className="mt-4 text-sm md:text-base text-muted-foreground/90">
                You’ll get up to 5 minutes. Please have your questions ready.
              </p>
            </div>
            <div className="mt-8 md:mt-10 bg-white/95 p-4 md:p-6 shadow-2xl border border-border/50 rounded-2xl backdrop-blur-sm max-w-[700px] w-full mx-auto">
              <PreConsultForm 
                buttonText="Start pre-consultation"
                minutesLimitText=""
              />
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
