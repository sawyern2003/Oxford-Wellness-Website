import { useLayoutEffect, useRef } from "react";
import { useReducedMotion } from "framer-motion";

const PILL_ASPECT = 1.4;
const MAX_ZOOM = 1.4;

const clamp01 = (v: number) => Math.min(1, Math.max(0, v));
const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
const easeInOut = (t: number) => (t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2);
type Props = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function PortraitReveal({ src, alt, width, height }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  useLayoutEffect(() => {
    const track = trackRef.current;
    const stage = stageRef.current;
    const frame = frameRef.current;
    if (!track || !stage || !frame) return;

    let raf = 0;

    const update = () => {
      raf = 0;
      const vw = stage.clientWidth;
      const vh = stage.clientHeight;
      const navHeight = document.querySelector("header")?.getBoundingClientRect().height ?? 72;
      const available = vh - navHeight;

      let pillH = Math.min(available - 56, Math.max(vw * 0.3, Math.min(320, vw - 64)) * PILL_ASPECT);
      let pillW = pillH / PILL_ASPECT;
      if (pillW > vw - 40) {
        pillW = vw - 40;
        pillH = pillW * PILL_ASPECT;
      }
      const pillTop = navHeight + (available - pillH) / 2;

      const distance = track.offsetHeight - vh;
      const raw = reduceMotion || distance <= 0 ? 0 : clamp01(-track.getBoundingClientRect().top / distance);
      const p = easeInOut(raw);
      const corner = Math.pow(1 - clamp01(raw / 0.9), 1.5);

      frame.style.width = `${lerp(pillW, vw, p)}px`;
      frame.style.height = `${lerp(pillH, vh, p)}px`;
      frame.style.top = `${lerp(pillTop, 0, p)}px`;
      frame.style.borderRadius = `${(pillW / 2) * corner}px`;
      const maxZoom = Math.min(MAX_ZOOM, Math.max(1, (vw / vh) * 0.9));
      frame.style.setProperty("--zoom", String(lerp(1, maxZoom, p)));
    };

    const schedule = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };

    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
    };
  }, [reduceMotion]);

  return (
    <div ref={trackRef} className="about-reveal" data-static={reduceMotion ? "" : undefined}>
      <div ref={stageRef} className="about-reveal-stage">
        <div ref={frameRef} className="about-reveal-frame">
          <img src={src} alt={alt} width={width} height={height} fetchPriority="high" />
        </div>
      </div>
    </div>
  );
}
