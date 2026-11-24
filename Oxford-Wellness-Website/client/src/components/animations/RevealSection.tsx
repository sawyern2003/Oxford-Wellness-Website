import { motion, useReducedMotion } from "framer-motion";
import { useLayoutEffect, useRef, useState, type ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

/**
 * Above-the-fold sections stay static (prerender-safe). Below-the-fold can
 * opacity-fade. No translateY: that was a major CLS source on hydrate.
 */
export default function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement>(null);
  const [motionOn, setMotionOn] = useState(false);

  useLayoutEffect(() => {
    if (reduced) return;
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    if (rect.top >= window.innerHeight * 0.92) setMotionOn(true);
  }, [reduced]);

  if (reduced || !motionOn) {
    return (
      <section ref={ref} className={className}>
        {children}
      </section>
    );
  }

  return (
    <motion.section
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.14, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
