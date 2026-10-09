import { useEffect, useLayoutEffect, useRef } from "react";
import { motion, useMotionValue, useReducedMotion, useScroll, useTransform, type MotionValue } from "framer-motion";

/**
 * Tune the cyclist here. The background painting is not part of this config.
 *
 * scrollHeight / frameHeight   How long the crossing takes, and how tall the sticky picture is.
 * cyclistWidth                 Her size, as a percentage of the visible scene.
 * PEDAL_ROTATIONS              Complete pedal cycles while she travels from the first waypoint to the last.
 * DESKTOP_ROAD_PATH            Wheel-contact points. x/y are fractions of the scene. scale is subtle perspective.
 * MOBILE_ROAD_PATH             Same, for the narrower crop. A shorter journey so she stays on screen.
 */
export const PARKS_ROAD = {
  scrollHeight: "140vh",
  scrollHeightMobile: "115vh",
  frameHeight: "80vh",
  frameHeightMobile: "72vh",
  cyclistWidth: "15%",
  cyclistWidthMobile: "42%",
};

/** Complete 1→6 cycles from the start of the road path to the end. */
export const PEDAL_ROTATIONS = 3;

const REDUCED_ROAD_PROGRESS = 0.42;
const FRAME_WIDTH = 1374;
const FRAME_HEIGHT = 1145;
const MOBILE_BREAKPOINT = "(max-width: 767px)";

export type RoadPoint = {
  progress: number;
  x: number;
  y: number;
  scale: number;
};

/** Wheel contact on the painted road. y is the bottom of the wheels, not the centre of the picture. */
export const DESKTOP_ROAD_PATH: RoadPoint[] = [
  { progress: 0.0, x: 0.294, y: 0.939, scale: 1.0 },
  { progress: 0.2, x: 0.407, y: 0.941, scale: 1.004 },
  { progress: 0.4, x: 0.52, y: 0.944, scale: 1.008 },
  { progress: 0.6, x: 0.634, y: 0.946, scale: 1.012 },
  { progress: 0.8, x: 0.747, y: 0.948, scale: 1.016 },
  { progress: 1.0, x: 0.86, y: 0.951, scale: 1.02 },
];

export const MOBILE_ROAD_PATH: RoadPoint[] = [
  { progress: 0.0, x: 0.16, y: 0.941, scale: 0.98 },
  { progress: 0.25, x: 0.32, y: 0.943, scale: 0.995 },
  { progress: 0.5, x: 0.48, y: 0.945, scale: 1.01 },
  { progress: 0.75, x: 0.64, y: 0.947, scale: 1.025 },
  { progress: 1.0, x: 0.8, y: 0.949, scale: 1.04 },
];

const CYCLIST_FRAMES = [
  "/cyclist-frame-1.png",
  "/cyclist-frame-2.png",
  "/cyclist-frame-3.png",
  "/cyclist-frame-4.png",
  "/cyclist-frame-5.png",
  "/cyclist-frame-6.png",
] as const;

const SCENE_RATIO = "2171 / 724";

function pointOnPath(path: RoadPoint[], progress: number): RoadPoint {
  const clamped = Math.min(1, Math.max(0, progress));
  const first = path[0];
  if (clamped <= first.progress) return first;

  for (let i = 1; i < path.length; i++) {
    const next = path[i];
    const prev = path[i - 1];
    if (clamped <= next.progress) {
      const span = next.progress - prev.progress || 1;
      const t = (clamped - prev.progress) / span;
      return {
        progress: clamped,
        x: prev.x + (next.x - prev.x) * t,
        y: prev.y + (next.y - prev.y) * t,
        scale: prev.scale + (next.scale - prev.scale) * t,
      };
    }
  }

  return path[path.length - 1];
}

function frameForDistance(progress: number) {
  const count = CYCLIST_FRAMES.length;
  const step = Math.floor(progress * PEDAL_ROTATIONS * count);
  return ((step % count) + count) % count;
}

function CyclistFrame({
  src,
  index,
  frameIndex,
}: {
  src: string;
  index: number;
  frameIndex: MotionValue<number>;
}) {
  const opacity = useTransform(frameIndex, (current) => (current === index ? 1 : 0));

  return (
    <motion.img
      src={src}
      alt=""
      width={FRAME_WIDTH}
      height={FRAME_HEIGHT}
      draggable={false}
      decoding="async"
      className="absolute inset-0 h-full w-full max-w-none select-none"
      style={{ opacity }}
    />
  );
}

export default function ParksRoadCycle() {
  const sceneRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cyclistRef = useRef<HTMLDivElement>(null);
  const reducedRef = useRef(false);
  const stageWidth = useMotionValue(0);
  const stageHeight = useMotionValue(0);
  const boxWidth = useMotionValue(0);
  const boxHeight = useMotionValue(0);
  const layoutMode = useMotionValue(0);
  const reduced = useReducedMotion() ?? false;
  reducedRef.current = reduced;

  const { scrollYProgress } = useScroll({
    target: sceneRef,
    offset: ["start start", "end end"],
  });

  const travel = useTransform(scrollYProgress, (progress) =>
    reducedRef.current ? REDUCED_ROAD_PROGRESS : progress,
  );
  const frameIndex = useTransform(scrollYProgress, (progress) =>
    reducedRef.current ? 0 : frameForDistance(progress),
  );

  const poseInputs = [travel, stageWidth, stageHeight, boxWidth, boxHeight, layoutMode];
  const x = useTransform(poseInputs, (latest) => {
    const [progress, width, , boxW, , mode] = latest;
    const point = pointOnPath(Number(mode) >= 1 ? MOBILE_ROAD_PATH : DESKTOP_ROAD_PATH, Number(progress));
    const drawnWidth = Number(boxW) || 0;
    return point.x * Number(width) - drawnWidth / 2;
  });
  const y = useTransform(poseInputs, (latest) => {
    const [progress, , height, , boxH, mode] = latest;
    const point = pointOnPath(Number(mode) >= 1 ? MOBILE_ROAD_PATH : DESKTOP_ROAD_PATH, Number(progress));
    const drawnHeight = Number(boxH) || 0;
    return point.y * Number(height) - drawnHeight;
  });
  const scale = useTransform(poseInputs, (latest) => {
    const [progress, , , , , mode] = latest;
    return pointOnPath(Number(mode) >= 1 ? MOBILE_ROAD_PATH : DESKTOP_ROAD_PATH, Number(progress)).scale;
  });

  useEffect(() => {
    CYCLIST_FRAMES.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  }, []);

  useLayoutEffect(() => {
    const stage = stageRef.current;
    const cyclist = cyclistRef.current;
    if (!stage || !cyclist) return;

    const mobileQuery = window.matchMedia(MOBILE_BREAKPOINT);
    const measure = () => {
      stageWidth.set(stage.offsetWidth);
      stageHeight.set(stage.offsetHeight);
      boxWidth.set(cyclist.offsetWidth);
      boxHeight.set(cyclist.offsetHeight);
      layoutMode.set(mobileQuery.matches ? 1 : 0);
    };

    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(stage);
    observer.observe(cyclist);
    mobileQuery.addEventListener("change", measure);
    return () => {
      observer.disconnect();
      mobileQuery.removeEventListener("change", measure);
    };
  }, [boxHeight, boxWidth, layoutMode, stageHeight, stageWidth]);

  return (
    <section ref={sceneRef} className="parks-road-scene relative bg-white" aria-hidden="true">
      <style>{`
        .parks-road-scene { height: ${PARKS_ROAD.scrollHeightMobile}; }
        .parks-road-frame { height: ${PARKS_ROAD.frameHeightMobile}; }
        .parks-road-stage {
          height: 58vh;
          --cyclist-w: ${PARKS_ROAD.cyclistWidthMobile};
        }
        @media (min-width: 768px) {
          .parks-road-scene { height: ${PARKS_ROAD.scrollHeight}; }
          .parks-road-frame { height: ${PARKS_ROAD.frameHeight}; }
          .parks-road-stage {
            height: auto;
            aspect-ratio: ${SCENE_RATIO};
            --cyclist-w: ${PARKS_ROAD.cyclistWidth};
          }
        }
      `}</style>

      <div className="parks-road-frame sticky top-16 md:top-20 flex items-center overflow-x-clip">
        <div ref={stageRef} className="parks-road-stage relative w-full overflow-hidden">
          <img
            src="/parks-road-background.png"
            alt=""
            width={2171}
            height={724}
            draggable={false}
            className="absolute inset-0 h-full w-full object-cover object-[68%_center] md:object-center"
          />
          <motion.div
            ref={cyclistRef}
            className="pointer-events-none absolute left-0 top-0 z-10 [width:var(--cyclist-w)]"
            style={{
              aspectRatio: `${FRAME_WIDTH} / ${FRAME_HEIGHT}`,
              x,
              y,
              scale,
              transformOrigin: "center bottom",
            }}
          >
            {CYCLIST_FRAMES.map((src, index) => (
              <CyclistFrame key={src} src={src} index={index} frameIndex={frameIndex} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
