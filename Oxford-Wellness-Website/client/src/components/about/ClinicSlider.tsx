import { useCallback, useEffect, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowLeft, ArrowRight } from "lucide-react";

type Slide = { src: string; alt: string; width: number; height: number };

const control =
  "grid size-11 place-items-center rounded-full border border-border bg-white text-primary transition-colors hover:border-secondary disabled:opacity-40 disabled:hover:border-border";

export default function ClinicSlider({ slides }: { slides: Slide[] }) {
  const [viewportRef, embla] = useEmblaCarousel({ align: "start", containScroll: "trimSnaps" });
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const sync = useCallback(() => {
    if (!embla) return;
    setCanPrev(embla.canScrollPrev());
    setCanNext(embla.canScrollNext());
  }, [embla]);

  useEffect(() => {
    if (!embla) return;
    sync();
    embla.on("select", sync).on("reInit", sync);
    return () => {
      embla.off("select", sync).off("reInit", sync);
    };
  }, [embla, sync]);

  return (
    <div
      className="mt-14 md:mt-20"
      role="region"
      aria-roledescription="carousel"
      aria-label="The clinic at Belsyre Court"
    >
      <div ref={viewportRef} className="overflow-hidden cursor-grab active:cursor-grabbing">
        <div className="flex touch-pan-y">
          {slides.map((slide, i) => (
            <figure
              key={slide.src}
              className="m-0 mr-6 min-w-0 flex-[0_0_min(88vw,64rem)]"
              role="group"
              aria-roledescription="slide"
              aria-label={`${i + 1} of ${slides.length}`}
            >
              <img
                src={slide.src}
                alt={slide.alt}
                width={slide.width}
                height={slide.height}
                loading="lazy"
                draggable={false}
                className="block aspect-[1024/682] w-full select-none object-cover"
              />
            </figure>
          ))}
        </div>
      </div>
      <div className="container-wide mt-5 flex justify-end gap-2">
        <button type="button" className={control} onClick={() => embla?.scrollPrev()} disabled={!canPrev} aria-label="Previous image">
          <ArrowLeft aria-hidden className="size-4" />
        </button>
        <button type="button" className={control} onClick={() => embla?.scrollNext()} disabled={!canNext} aria-label="Next image">
          <ArrowRight aria-hidden className="size-4" />
        </button>
      </div>
    </div>
  );
}
