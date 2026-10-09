import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

type ParallaxImageProps = {
  src: string;
  alt: string;
  className?: string;
  imgClassName?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  width?: number;
  height?: number;
};

export default function ParallaxImage({
  src,
  alt,
  className,
  imgClassName,
  loading = "lazy",
  fetchPriority,
  width,
  height,
}: ParallaxImageProps) {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["-11%", "11%"]);

  return (
    <div ref={ref} className={cn("overflow-hidden", className)}>
      <motion.div style={reduced ? undefined : { y }} className="h-full w-full">
        <img
          src={src}
          alt={alt}
          loading={loading}
          fetchPriority={fetchPriority}
          width={width}
          height={height}
          className={cn(
            "h-full w-full object-cover scale-110 transition-transform duration-700 ease-out group-hover:scale-125",
            imgClassName
          )}
        />
      </motion.div>
    </div>
  );
}
