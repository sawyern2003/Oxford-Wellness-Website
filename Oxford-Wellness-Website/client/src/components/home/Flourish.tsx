/**
 * Nicholas's hand-made flourish above the care-section sprig.
 * Mobile 160×34 (1x/2x); desktop 240×50 (1x/2x). Aspect ≈ 4.776:1.
 */
export default function Flourish({ className = "" }: { className?: string }) {
  return (
    <picture className={className}>
      <source
        type="image/webp"
        media="(min-width: 768px)"
        srcSet="/images/flourish/flourish-240.webp 1x, /images/flourish/flourish-480.webp 2x"
      />
      <source
        type="image/png"
        media="(min-width: 768px)"
        srcSet="/images/flourish/flourish-240.png 1x, /images/flourish/flourish-480.png 2x"
      />
      <source
        type="image/webp"
        srcSet="/images/flourish/flourish-160.webp 1x, /images/flourish/flourish-320.webp 2x"
      />
      <img
        src="/images/flourish/flourish-160.png"
        srcSet="/images/flourish/flourish-160.png 1x, /images/flourish/flourish-320.png 2x"
        width={240}
        height={50}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="w-[160px] md:w-[240px] h-auto"
      />
    </picture>
  );
}
