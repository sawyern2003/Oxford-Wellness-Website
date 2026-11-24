import { Link } from "wouter";
import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import TypewriterPhrase from "@/components/animations/TypewriterPhrase";
import cafeJpg from "@/assets/lifestyle-cafe.jpg";
import cafe640Avif from "@/assets/optimized/lifestyle-cafe-640.avif";
import cafe640Webp from "@/assets/optimized/lifestyle-cafe-640.webp";
import cafe960Avif from "@/assets/optimized/lifestyle-cafe-960.avif";
import cafe960Webp from "@/assets/optimized/lifestyle-cafe-960.webp";
import cafe1024Avif from "@/assets/optimized/lifestyle-cafe-1024.avif";
import cafe1024Webp from "@/assets/optimized/lifestyle-cafe-1024.webp";
import { CONSULTATION_WHATSAPP_MESSAGE, whatsappHref } from "@/lib/whatsapp";

const heroPhrases = [
  "skin changes",
  "intimate wellness",
  "body confidence",
  "fatigue",
  "hormone changes",
  "symptoms of menopause",
];

const cafeAvifSrcSet = `${cafe640Avif} 640w, ${cafe960Avif} 960w, ${cafe1024Avif} 1024w`;
const cafeWebpSrcSet = `${cafe640Webp} 640w, ${cafe960Webp} 960w, ${cafe1024Webp} 1024w`;
/** Image column ~half of container-wide at lg+. */
const cafeSizes = "(min-width: 1024px) 46vw, 92vw";

export default function Hero() {
  return (
    <section className="pt-24 md:pt-32 pb-10 md:pb-20 bg-white overflow-hidden">
      <div className="container-wide">
        {/*
          No framer-motion entrance here: opacity/y initial states were
          collapsing large hero regions on hydration and driving CLS.
          Prerendered HTML must match the final layout size.
        */}
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-12 lg:items-center">
          <div className="lg:col-span-6 order-1">
            <div className="max-w-xl lg:max-w-none">
              <h1 className="font-sans font-semibold text-[2.15rem] sm:text-4xl md:text-[2.75rem] leading-[1.15] text-foreground tracking-tight mb-5">
                Feel like yourself again.
                {/*
                  Stable two-line subline (prefix / phrase) so the cycling
                  word never leaves an empty underlined row. Colour accent only.
                */}
                <span className="mt-3 block text-lg sm:text-xl font-medium text-foreground leading-snug tracking-normal">
                  <span className="block">Doctor-led care in Oxford for</span>
                  <TypewriterPhrase
                    phrases={heroPhrases}
                    className="relative mt-1 block w-fit max-w-full text-primary"
                  />
                </span>
              </h1>
              <div className="flex flex-col sm:flex-row flex-wrap gap-3">
                <Link href="/book" className="js-book-cta">
                  <Button
                    data-testid="hero-book-consultation-btn"
                    className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-7 h-11 text-sm font-medium w-full sm:w-auto"
                  >
                    Book consultation
                  </Button>
                </Link>
                <a
                  href={whatsappHref(CONSULTATION_WHATSAPP_MESSAGE)}
                  className="js-whatsapp-cta"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button
                    data-testid="hero-whatsapp-btn"
                    variant="outline"
                    className="rounded-full border-border px-7 h-11 text-sm font-medium bg-white w-full sm:w-auto"
                  >
                    <MessageCircle size={16} className="mr-2" />
                    WhatsApp
                  </Button>
                </a>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 order-2">
            {/*
              Image in normal flow at its intrinsic aspect ratio.
              The old absolute collage spacer was much taller than the photo
              and created the large empty gap under the CTAs on mobile, plus
              unstable 0×0 CLS regions during hydration.
            */}
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
      </div>
    </section>
  );
}
