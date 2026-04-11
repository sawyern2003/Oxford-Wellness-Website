import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Phone, Shield, Award, Star } from "lucide-react";
import heroImage from "@/assets/oxford-aesthetics-clinic-oxford-science-park.webp";

export default function Hero() {
  return (
    <section className="relative min-h-[95vh] flex items-center overflow-hidden bg-background">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="The Oxford Wellness Doctor clinic in Oxford - professional women's health and medical aesthetics"
          className="w-full h-full object-cover"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-white/97 via-white/80 to-white/20" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-2xl"
        >
          {/* Trust pills */}
          <div className="flex flex-col gap-3 mb-6">
            <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-secondary/30 bg-secondary/10 backdrop-blur-md text-primary text-xs tracking-[0.15em] uppercase shadow-sm w-fit">
              <Award size={12} className="text-secondary" />
              Specialist Menopause Lead
            </span>
            <span className="inline-flex items-center gap-2 py-1.5 px-4 border border-primary/20 bg-white/90 backdrop-blur-md text-primary text-xs tracking-[0.15em] uppercase shadow-sm w-fit">
              <Shield size={12} className="text-secondary" />
              GMC-Registered Doctor - No. 4727817
            </span>
          </div>

          <h1 className="font-serif font-medium leading-tight text-primary mb-5 drop-shadow-sm">
            <span className="text-5xl md:text-7xl text-secondary block mb-2">Women's Health & Medical Aesthetics</span>
            <span className="text-3xl md:text-4xl text-primary/80">in Oxford</span>
          </h1>

          <p className="text-base md:text-lg text-primary/75 mb-8 max-w-lg leading-relaxed">
            Led by Dr. Inga Taganova - specialist menopause lead, GMC-registered GP, and former gynaecologist. Expert women's health care and aesthetic treatments in Oxford.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-3 mb-10">
            <Button
              data-testid="hero-book-btn"
              size="lg"
              className="bg-primary text-white hover:bg-primary/90 rounded-none px-8 py-6 text-sm tracking-widest uppercase border-none shadow-lg"
              onClick={() => window.open("https://www.glowday.com/clinic/the-oxford-wellness-doctor", "_blank")}
            >
              Book Free Consultation
            </Button>
            <Link href="/treatments">
              <Button
                data-testid="hero-treatments-btn"
                variant="outline"
                size="lg"
                className="border-primary text-primary hover:bg-primary hover:text-white bg-white/70 backdrop-blur-sm rounded-none px-8 py-6 text-sm tracking-widest uppercase shadow-sm w-full sm:w-auto"
              >
                View Treatments
              </Button>
            </Link>
            <a href="tel:+4407739309380" data-testid="hero-phone-btn">
              <Button
                variant="outline"
                size="lg"
                className="border-secondary text-secondary hover:bg-secondary/10 bg-white/70 backdrop-blur-sm rounded-none px-6 py-6 text-sm tracking-widest uppercase shadow-sm w-full sm:w-auto flex items-center gap-2"
              >
                <Phone size={15} /> 07739 309380
              </Button>
            </a>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap gap-5 items-center">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 border border-border/50">
              <Star size={14} className="text-secondary fill-secondary" />
              <span className="text-xs text-primary uppercase tracking-wider">Menopause Specialist</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 border border-border/50">
              <Award size={14} className="text-secondary" />
              <span className="text-xs text-primary uppercase tracking-wider">Former Gynaecologist</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-3 py-2 border border-border/50">
              <Shield size={14} className="text-secondary" />
              <span className="text-xs text-primary uppercase tracking-wider">20+ Years Experience</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
