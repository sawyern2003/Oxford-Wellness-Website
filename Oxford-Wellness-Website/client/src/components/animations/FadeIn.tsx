import { motion, useReducedMotion } from "framer-motion";
import { ReactNode, useLayoutEffect, useRef, useState } from "react";

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  className?: string;
  duration?: number;
}

const ease = [0.22, 1, 0.36, 1] as const;

/**
 * Above-the-fold: plain markup (matches prerender, no opacity/transform CLS).
 * Below-the-fold: opacity-only fade once mounted. No translate offsets.
 */
export default function FadeIn({
  children,
  delay = 0,
  direction: _direction = "up",
  className = "",
  duration = 0.8,
}: FadeInProps) {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLDivElement>(null);
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
      <div ref={ref} className={className}>
        {children}
      </div>
    );
  }

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.2, margin: "0px 0px -60px 0px" }}
      transition={{ duration, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
