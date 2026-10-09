import { useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { brainLinks, brainRegions, type BrainRegion } from "@/data/painBrain";
import { cn } from "@/lib/utils";

const PAPER = "#f4f1ec";
const CORTEX = "#e3dfd8";
const DEPTH = "#c9c3ba";
const LINE = "#b7b0a6";
const WHITE = "#fbfaf7";
const PEACH = "#f3c4a6";
const PEACH_ON = "#e7a888";
const INK = "#3a332e";

function RegionShape({
  region,
  index,
  active,
  linked,
  idle,
  onSelect,
  onHover,
}: {
  region: BrainRegion;
  index: number;
  active: boolean;
  linked: boolean;
  idle: boolean;
  onSelect: (id: string) => void;
  onHover: (id: string | null) => void;
}) {
  const rotate = region.rotate ?? 0;
  const shape = `rotate(${rotate} ${region.cx} ${region.cy})`;
  return (
    <g
      className="cursor-pointer outline-none"
      role="button"
      tabIndex={0}
      aria-pressed={active}
      aria-label={`${region.name}. ${region.role}`}
      onClick={() => onSelect(region.id)}
      onMouseEnter={() => onHover(region.id)}
      onMouseLeave={() => onHover(null)}
      onFocus={() => onHover(region.id)}
      onBlur={() => onHover(null)}
      onKeyDown={(event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          onSelect(region.id);
        }
      }}
    >
      {idle ? (
        <ellipse
          cx={region.cx}
          cy={region.cy}
          rx={region.rx + 7}
          ry={region.ry + 7}
          transform={shape}
          fill="#e7a888"
          className="pain-brain-idle"
          style={{ animationDelay: `${index * 0.42}s` }}
        />
      ) : null}
      {active ? (
        <ellipse
          cx={region.cx}
          cy={region.cy}
          rx={region.rx + 10}
          ry={region.ry + 10}
          transform={shape}
          fill="none"
          stroke="#8f3d32"
          strokeWidth="2"
          className="pain-brain-ring"
        />
      ) : null}
      <ellipse
        cx={region.cx}
        cy={region.cy}
        rx={region.rx}
        ry={region.ry}
        transform={shape}
        fill={active ? PEACH_ON : linked ? "#f6d3bc" : PEACH}
        stroke={active ? "#8f3d32" : linked ? "#d7a88f" : "#e3b394"}
        strokeWidth={active ? 2.5 : 1}
        className="transition-[fill,stroke] duration-200"
      />
      <text
        x={region.cx}
        y={region.cy}
        textAnchor="middle"
        dominantBaseline="central"
        fill={INK}
        fontSize={region.rx < 50 ? 13 : 15}
        fontWeight={600}
        className="pointer-events-none select-none"
        style={{ fontFamily: "inherit" }}
      >
        {region.short}
      </text>
    </g>
  );
}

const CEREBRUM =
  "M108 300C88 220 100 145 155 100C195 68 230 92 268 72C310 50 345 78 388 58C435 36 475 68 525 50C575 32 615 64 665 48C715 32 755 62 800 58C855 52 895 95 918 155C938 210 932 270 900 318C872 358 840 348 808 372C770 400 748 388 720 412C688 440 660 430 640 452C610 430 560 448 530 470C490 455 450 478 400 488C330 500 240 492 180 450C130 414 100 360 108 300Z";

function Anatomy() {
  return (
    <g aria-hidden="true">
      <path
        fill="#d7d1c8"
        d="M648 430C730 372 860 378 924 448C968 498 948 600 860 642C772 684 668 640 646 568C630 514 628 458 648 430Z"
      />
      <path
        fill={WHITE}
        d="M710 470C760 438 830 448 868 492C830 468 760 486 728 530C752 572 820 584 864 558C820 624 724 608 702 546C688 504 692 476 710 470Z"
      />
      <g fill="none" stroke="#c8c1b7" strokeWidth="1.25" strokeLinecap="round">
        <path d="M668 478c40-20 92-16 136 10" />
        <path d="M656 510c48-16 108-4 154 24" />
        <path d="M652 544c48-8 112 8 156 36" />
        <path d="M668 578c44 0 96 20 138 42" />
        <path d="M748 430c8 52 32 100 74 136" />
        <path d="M812 418c10 54 38 98 80 130" />
      </g>
      <path fill={CORTEX} d={CEREBRUM} />
      <g clipPath="url(#cerebrum-clip)" fill="none" stroke={LINE} strokeWidth="1.35" strokeLinecap="round">
        <path d="M200 118c28 36 40 84 36 132" />
        <path d="M292 96c16 44 14 96-6 146" />
        <path d="M400 78c6 48-2 104-22 156" />
        <path d="M520 70c-2 46-16 98-40 146" />
        <path d="M640 78c-14 42-36 84-66 118" />
        <path d="M748 96c-18 38-46 70-84 96" />
        <path d="M840 140c-22 34-54 60-96 78" />
        <path d="M230 210c70 18 140 10 210-16" />
        <path d="M188 330c64 34 140 40 214 16" />
        <path d="M560 168c36 22 78 24 124 8" />
      </g>
      <path
        fill={WHITE}
        stroke={DEPTH}
        strokeWidth="1"
        d="M250 250C330 176 490 168 610 214C646 230 650 262 608 270C500 246 370 250 292 304C262 282 238 266 250 250Z"
      />
      <path
        fill={WHITE}
        opacity="0.95"
        d="M500 286C534 274 582 286 600 314C612 332 598 348 572 346C540 342 512 324 500 302C494 292 494 288 500 286Z"
      />
      <path fill="none" stroke={DEPTH} strokeWidth="1.25" d={CEREBRUM} />
      <path
        fill="#cfc8be"
        stroke={DEPTH}
        strokeWidth="1"
        d="M468 360C545 378 620 450 600 545C584 640 558 710 530 748C488 742 470 670 486 590C498 510 450 430 468 360Z"
      />
    </g>
  );
}

const byId = Object.fromEntries(brainRegions.map((region) => [region.id, region]));

export default function PainBrainMap() {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);
  const [inView, setInView] = useState(true);
  const reduced = useReducedMotion();
  const frameRef = useRef<HTMLDivElement>(null);
  const active = brainRegions.find((region) => region.id === activeId) ?? null;
  const linkedIds = active ? brainLinks[active.id] ?? [] : [];
  const focusId = activeId ?? hoveredId;

  useEffect(() => {
    const node = frameRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => setInView(entry.isIntersecting),
      { threshold: 0.2 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-start">
      <style>{`
        @keyframes pain-brain-breathe {
          0%, 100% { transform: scale(1); }
          50% { transform: scale(1.018); }
        }
        @keyframes pain-brain-idle {
          0%, 12%, 100% { opacity: 0; }
          6% { opacity: 0.8; }
        }
        @keyframes pain-brain-ring {
          0% { opacity: 0.75; }
          70%, 100% { opacity: 0; }
        }
        @keyframes pain-brain-signal {
          to { stroke-dashoffset: -28; }
        }
        .pain-brain-breathe {
          transform-box: fill-box;
          transform-origin: center;
          animation: pain-brain-breathe 7.5s ease-in-out infinite;
        }
        .pain-brain-idle {
          opacity: 0;
          animation: pain-brain-idle 5.04s ease-in-out infinite backwards;
          pointer-events: none;
        }
        .pain-brain-ring {
          animation: pain-brain-ring 1.5s ease-out infinite;
          pointer-events: none;
        }
        .pain-brain-signal {
          stroke-dasharray: 5 8;
          animation: pain-brain-signal 0.9s linear infinite;
        }
        .pain-brain-paused .pain-brain-breathe,
        .pain-brain-paused .pain-brain-idle,
        .pain-brain-paused .pain-brain-ring,
        .pain-brain-paused .pain-brain-signal {
          animation-play-state: paused;
        }
        @media (prefers-reduced-motion: reduce) {
          .pain-brain-breathe,
          .pain-brain-idle,
          .pain-brain-ring,
          .pain-brain-signal { animation: none; }
          .pain-brain-idle { opacity: 0; }
          .pain-brain-ring { opacity: 0.45; }
        }
      `}</style>
      <div ref={frameRef} className={cn("lg:col-span-7", !inView && "pain-brain-paused")}>
        <svg
          viewBox="40 20 940 740"
          role="group"
          aria-label="Side view of the brain. Activity moves through the highlighted areas. Choose one to read how it can affect pain."
          className="w-full h-auto"
        >
          <defs>
            <clipPath id="cerebrum-clip">
              <path d={CEREBRUM} />
            </clipPath>
          </defs>
          <rect x="40" y="20" width="940" height="740" fill={PAPER} rx="28" />
          <g className="pain-brain-breathe">
            <Anatomy />
            {focusId
              ? (brainLinks[focusId] ?? []).map((partnerId) => {
                  const from = byId[focusId];
                  const to = byId[partnerId];
                  if (!from || !to) return null;
                  return (
                    <line
                      key={`${focusId}-${partnerId}`}
                      x1={from.cx}
                      y1={from.cy}
                      x2={to.cx}
                      y2={to.cy}
                      stroke="#b85a48"
                      strokeWidth="1.75"
                      strokeLinecap="round"
                      opacity="0.7"
                      className="pain-brain-signal"
                    />
                  );
                })
              : null}
            {brainRegions.map((region, index) => (
              <RegionShape
                key={region.id}
                region={region}
                index={index}
                active={region.id === activeId}
                linked={linkedIds.includes(region.id) || region.id === hoveredId}
                idle={!activeId && !hoveredId}
                onSelect={setActiveId}
                onHover={setHoveredId}
              />
            ))}
          </g>
        </svg>
        <ul className="mt-4 flex flex-wrap gap-2 lg:hidden">
          {brainRegions.map((region) => (
            <li key={region.id}>
              <button
                type="button"
                onClick={() => setActiveId(region.id)}
                aria-pressed={region.id === activeId}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm transition-colors",
                  region.id === activeId
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-foreground"
                )}
              >
                {region.short}
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className="lg:col-span-5 lg:sticky lg:top-28" aria-live="polite">
        <motion.div
          key={active?.id ?? "idle"}
          initial={reduced ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
        >
          {active ? (
            <>
              <p className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-3">
                {active.name}
                <span className="text-secondary font-medium"> · {active.short}</span>
              </p>
              <p className="text-[15px] text-foreground/80 leading-relaxed mb-4">{active.role}</p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">{active.pain}</p>
              <p className="mt-5 text-sm text-foreground/70 leading-relaxed">
                The lines show areas this one works with. Pain is a conversation between them, not a single switch.
              </p>
            </>
          ) : (
            <>
              <p className="font-sans font-semibold text-2xl text-foreground tracking-tight mb-3">
                Choose a region
              </p>
              <p className="text-[15px] text-muted-foreground leading-relaxed">
                The glow moving across the diagram is activity passing through the pain network. Select an area to see which others it talks to, and how that can change what you feel.
              </p>
            </>
          )}
        </motion.div>
        <p className="mt-8 text-sm text-muted-foreground leading-relaxed">
          A simplified teaching diagram, drawn in the style of a mid-line section. Selecting an area does not locate the cause of your pain.
        </p>
      </div>
    </div>
  );
}
