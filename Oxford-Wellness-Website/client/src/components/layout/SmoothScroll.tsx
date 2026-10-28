import { ReactNode, useEffect } from "react";
import { useLocation } from "wouter";
import { ReactLenis, useLenis } from "lenis/react";

function RouteScroll() {
  const [location] = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    const id = window.location.hash.replace("#", "");
    if (id) {
      const timer = window.setTimeout(() => {
        const target = document.getElementById(id);
        if (!target) return;
        if (lenis) lenis.scrollTo(target, { offset: -104 });
        else target.scrollIntoView();
      }, 60);
      return () => window.clearTimeout(timer);
    }

    if (lenis) lenis.scrollTo(0, { immediate: true });
    else window.scrollTo(0, 0);
  }, [location, lenis]);

  return null;
}

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.085,
        smoothWheel: true,
        syncTouch: false,
        anchors: { offset: -104 },
        stopInertiaOnNavigate: true,
      }}
    >
      <RouteScroll />
      {children}
    </ReactLenis>
  );
}
