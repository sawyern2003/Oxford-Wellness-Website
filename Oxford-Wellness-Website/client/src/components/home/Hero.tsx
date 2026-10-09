import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TypewriterPhrase from "@/components/animations/TypewriterPhrase";
import imgCafe from "@/assets/lifestyle-cafe.jpg";

const heroPhrases = [
  "symptoms of menopause",
  "fatigue",
  "skin changes",
  "body confidence",
  "intimate wellness",
];

export default function Hero() {
  return (
    <section className="pt-28 md:pt-32 pb-16 md:pb-24 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 order-2 lg:order-1"
          >
            <p className="text-[11px] font-medium tracking-[0.18em] uppercase text-muted-foreground mb-5">
              The Oxford Wellness Doctor
            </p>
            <h1 className="font-sans font-semibold text-[2.15rem] sm:text-4xl md:text-[2.75rem] leading-[1.15] text-foreground tracking-tight mb-5">
              <span className="sr-only">
                Get care today for symptoms of menopause, fatigue, skin changes, body confidence and intimate wellness.
              </span>
              <span aria-hidden="true" className="block">
                Get care today for
                <TypewriterPhrase
                  phrases={heroPhrases}
                  className="relative block text-secondary"
                />
              </span>
            </h1>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-8 max-w-md">
              Doctor-led care for women experiencing changes in their skin, body confidence and intimate wellbeing – now in our new clinic at Belsyre Court, in the centre of Oxford.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link href="/programme-finder">
                <Button
                  data-testid="hero-programme-finder-btn"
                  className="bg-secondary text-primary hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium w-full sm:w-auto"
                >
                  Find my programme
                </Button>
              </Link>
              <Link href="/book">
                <Button
                  data-testid="hero-book-consultation-btn"
                  variant="outline"
                  className="rounded-full border-border px-7 h-11 text-sm font-medium bg-white w-full sm:w-auto"
                >
                  Book consultation
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 order-1 lg:order-2"
          >
            <div className="relative">
              {/* Holds the previous collage box: two 4/5 frames in a 5/12 column, same gaps. */}
              <div className="grid grid-cols-12 gap-3 md:gap-4" aria-hidden="true">
                <div className="col-span-5 aspect-[4/5]" />
                <div className="col-span-7 row-span-2 min-h-[280px] md:min-h-[420px]" />
                <div className="col-span-5 aspect-[4/5]" />
              </div>
              <div className="absolute inset-0 flex items-center">
                <img
                  src={imgCafe}
                  alt=""
                  width={1024}
                  height={682}
                  className="h-auto w-full rounded-3xl"
                  fetchPriority="high"
                  loading="eager"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
