import { Link } from "wouter";
import womensWellnessImg from "@/assets/womens-wellness-menopause-clinic-oxford.webp";
import regenerativeImg from "@/assets/regenerative-medicine-profhilo-skin-booster-oxford.webp";
import aestheticsImg from "@/assets/medical-aesthetics-botox-dermal-fillers-oxford.webp";
import FadeIn from "@/components/animations/FadeIn";

const treatments = [
  {
    title: "Wellness",
    description: "Holistic healthcare focused on hormonal balance, menopausal support, and preventive medicine for women at every stage of life.",
    href: "/treatments?filter=Wellness",
    image: womensWellnessImg,
    alt: "Women's wellness and menopause clinic at The Oxford Wellness Doctor, Oxford - HRT, perimenopause support, and hormonal health care"
  },
  {
    title: "Regenerative Medicine",
    description: "Cutting-edge therapies designed to stimulate your body's natural healing processes, restoring function and vitality from within.",
    href: "/treatments?filter=Regenerative Medicine",
    image: regenerativeImg,
    alt: "Regenerative medicine treatments including Profhilo and skin boosters at The Oxford Wellness Doctor in Oxford - administered by GMC-registered Dr. Inga Taganova"
  },
  {
    title: "Medical Aesthetics",
    description: "Ethical, subtle enhancements performed by medical experts to reveal your natural radiance through science-backed precision.",
    href: "/treatments?filter=Medical Aesthetics",
    image: aestheticsImg,
    alt: "Medical aesthetics treatments including Botox, dermal fillers, and Morpheus8 at The Oxford Wellness Doctor clinic, Oxford"
  }
];

export default function WhatWeOffer() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <FadeIn className="max-w-2xl mb-16">
          <span className="block text-primary text-sm uppercase tracking-[0.2em] mb-4">Our Specialisms</span>
          <h2 className="font-serif text-4xl md:text-5xl">What We Offer</h2>
        </FadeIn>

        <div className="grid md:grid-cols-3 gap-12">
          {treatments.map((item, index) => (
            <FadeIn key={index} delay={index * 0.1} className="h-full">
              <div className="group border-l border-primary/20 pl-8 py-4 flex flex-col h-full">
                <div className="aspect-[4/5] mb-8 overflow-hidden bg-muted/20">
                  <img 
                    src={item.image} 
                    alt={item.alt}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                    loading="lazy"
                    width="400"
                    height="500"
                  />
                </div>
                <h3 className="font-serif text-2xl text-secondary mb-4 group-hover:text-primary transition-colors duration-300">
                  {item.title}
                </h3>
                <p className="text-muted-foreground font-light leading-relaxed mb-8 flex-grow">
                  {item.description}
                </p>
                <Link
                  href={item.href}
                  className="text-sm uppercase tracking-widest text-primary font-medium hover:tracking-[0.2em] transition-all duration-300 flex items-center"
                >
                  Learn More <span className="ml-2">→</span>
                </Link>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
