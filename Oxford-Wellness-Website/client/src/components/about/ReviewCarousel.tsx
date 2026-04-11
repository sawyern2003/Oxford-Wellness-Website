import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";

const reviews = [
  {
    name: "Sarah M.",
    text: "Dr Inga is incredible. She made me feel so comfortable and the results are natural and perfect.",
    rating: 5,
  },
  {
    name: "Emma L.",
    text: "Best clinic in Oxford. Professional, safe, and truly bespoke care. I highly recommend Dr Taganova.",
    rating: 5,
  },
  {
    name: "Rebecca H.",
    text: "I wouldn't trust anyone else. Dr Taganova's expertise is unmatched and her manner is so reassuring.",
    rating: 5,
  },
  {
    name: "Jessica P.",
    text: "The team is wonderful. My skin has never looked better. The results are subtle yet transformative.",
    rating: 5,
  },
  {
    name: "Michelle K.",
    text: "A truly 5-star experience from consultation to aftercare. The attention to detail is outstanding.",
    rating: 5,
  },
];

export default function ReviewCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-transparent py-4 px-6">
      <div className="max-w-4xl mx-auto text-center">
        
        <div className="relative h-48 overflow-hidden">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="absolute inset-0 flex flex-col items-center justify-center"
          >
            <div className="flex gap-1 mb-6 text-yellow-500/80">
              {[...Array(reviews[currentIndex].rating)].map((_, i) => (
                <Star key={i} size={20} fill="currentColor" />
              ))}
            </div>
            <blockquote className="font-sans text-lg md:text-xl text-muted-foreground font-light mb-6 leading-relaxed">
              "{reviews[currentIndex].text}"
            </blockquote>
            <cite className="not-italic text-sm uppercase tracking-widest text-primary font-medium block">
              - {reviews[currentIndex].name}
            </cite>
          </motion.div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {reviews.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                idx === currentIndex ? "bg-secondary w-8" : "bg-primary/20 hover:bg-primary/40"
              }`}
              aria-label={`Go to review ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
