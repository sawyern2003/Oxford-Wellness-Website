import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import TypewriterPhrase from "@/components/animations/TypewriterPhrase";
import cafeJpg from "@/assets/lifestyle-cafe.jpg";
import cafe640Avif from "@/assets/optimized/lifestyle-cafe-640.avif";
import cafe640Webp from "@/assets/optimized/lifestyle-cafe-640.webp";
import cafe960Avif from "@/assets/optimized/lifestyle-cafe-960.avif";
import cafe960Webp from "@/assets/optimized/lifestyle-cafe-960.webp";
import cafe1024Avif from "@/assets/optimized/lifestyle-cafe-1024.avif";
import cafe1024Webp from "@/assets/optimized/lifestyle-cafe-1024.webp";

const heroPhrases = [
  "symptoms of menopause",
  "fatigue",
  "skin changes",
  "body confidence",
  "intimate wellness",
];

const cafeAvifSrcSet = `${cafe640Avif} 640w, ${cafe960Avif} 960w, ${cafe1024Avif} 1024w`;
const cafeWebpSrcSet = `${cafe640Webp} 640w, ${cafe960Webp} 960w, ${cafe1024Webp} 1024w`;
/** Matches the hero collage column (~7/12 of container-wide). */
const cafeSizes = "(min-width: 1024px) 42vw, 92vw";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-12 md:pb-24 bg-white overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-14 items-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 order-1"
          >
            <h1 className="font-sans font-semibold text-[2.15rem] sm:text-4xl md:text-[2.75rem] leading-[1.15] text-foreground tracking-tight mb-4">
              Doctor-led women's health, menopause and longevity care in Oxford
            </h1>
            <p className="font-sans font-medium text-lg text-secondary mb-5" aria-hidden="true">
              Get care today for
              <TypewriterPhrase
                phrases={heroPhrases}
                className="relative block"
              />
            </p>
            <p className="text-[15px] text-muted-foreground leading-relaxed mb-6 max-w-md">
              Private clinic at Belsyre Court, in the centre of Oxford.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8 md:mb-0">
              <Link href="/book">
                <Button
                  data-testid="hero-book-consultation-btn"
                  className="bg-secondary text-secondary-foreground hover:bg-secondary/90 rounded-full px-7 h-11 text-sm font-medium w-full sm:w-auto"
                >
                  Book consultation
                </Button>
              </Link>
              <Link href="/treatments">
                <Button
                  data-testid="hero-treatments-btn"
                  variant="outline"
                  className="rounded-full border-border px-7 h-11 text-sm font-medium bg-white w-full sm:w-auto"
                >
                  View treatments
                </Button>
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-7 order-2"
          >
            <div className="relative">
              {/* Holds the previous collage box: two 4/5 frames in a 5/12 column, same gaps. */}
              <div className="grid grid-cols-12 gap-3 md:gap-4" aria-hidden="true">
                <div className="col-span-5 aspect-[4/5]" />
                <div className="col-span-7 row-span-2 min-h-[280px] md:min-h-[420px]" />
                <div className="col-span-5 aspect-[4/5]" />
              </div>
              <div className="absolute inset-0 flex items-center">
                <picture>
                  <source type="image/avif" srcSet={cafeAvifSrcSet} sizes={cafeSizes} />
                  <source type="image/webp" srcSet={cafeWebpSrcSet} sizes={cafeSizes} />
                  <img
                    src={cafeJpg}
                    alt=""
                    width={1024}
                    height={682}
                    className="h-auto w-full rounded-3xl"
                    fetchPriority="high"
                    loading="eager"
                    decoding="async"
                  />
                </picture>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
