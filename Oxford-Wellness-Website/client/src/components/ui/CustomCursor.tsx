import { useEffect, useRef } from "react";

const INTERACTIVE = 'a, button, [role="button"], label[for], summary, select, [data-cursor="hover"]';
const TEXT_ENTRY = 'input:not([type="checkbox"]):not([type="radio"]):not([type="range"]):not([type="submit"]):not([type="button"]), textarea, [contenteditable="true"]';

export default function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const dot = dotRef.current;
    if (!dot || !finePointer.matches) return;

    const root = document.documentElement;
    root.classList.add("has-custom-cursor");

    let x = -100;
    let y = -100;
    let targetX = -100;
    let targetY = -100;
    let raf = 0;

    const render = () => {
      const ease = reduceMotion.matches ? 1 : 0.32;
      x += (targetX - x) * ease;
      y += (targetY - y) * ease;
      dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      raf = Math.abs(targetX - x) > 0.1 || Math.abs(targetY - y) > 0.1 ? requestAnimationFrame(render) : 0;
    };

    const onMove = (e: PointerEvent) => {
      if (e.pointerType !== "mouse") return;
      targetX = e.clientX;
      targetY = e.clientY;
      if (!("visible" in dot.dataset)) {
        x = targetX;
        y = targetY;
        dot.style.transform = `translate3d(${x}px, ${y}px, 0)`;
        dot.dataset.visible = "";
      }
      const target = e.target instanceof Element ? e.target : null;
      dot.dataset.state = target?.closest(TEXT_ENTRY) ? "text" : target?.closest(INTERACTIVE) ? "hover" : "";
      if (!raf) raf = requestAnimationFrame(render);
    };

    const onLeave = (e: MouseEvent) => {
      if (!e.relatedTarget) delete dot.dataset.visible;
    };
    const onDown = () => (dot.dataset.pressed = "");
    const onUp = () => delete dot.dataset.pressed;

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseout", onLeave);
    window.addEventListener("pointerdown", onDown);
    window.addEventListener("pointerup", onUp);

    return () => {
      cancelAnimationFrame(raf);
      root.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseout", onLeave);
      window.removeEventListener("pointerdown", onDown);
      window.removeEventListener("pointerup", onUp);
    };
  }, []);

  return (
    <div ref={dotRef} className="custom-cursor" aria-hidden>
      <span />
    </div>
  );
}
