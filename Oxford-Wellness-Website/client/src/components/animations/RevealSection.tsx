import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
};

export default function RevealSection({ children, className, delay = 0 }: RevealSectionProps) {
  const reduced = useReducedMotion();

  if (reduced) {
    return <section className={className}>{children}</section>;
  }

  return (
    <motion.section
      initial={{ y: 64 }}
      whileInView={{ y: 0 }}
      viewport={{ once: true, amount: 0.14, margin: "0px 0px -80px 0px" }}
      transition={{ duration: 0.95, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.section>
  );
}
