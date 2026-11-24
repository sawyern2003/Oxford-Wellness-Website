/**
 * Nicholas's hand-made flourish above the care-section sprig.
 * Display: 130×27 mobile / 190×40 desktop (aspect ≈ 4.776:1).
 * Assets stay 160/320 and 240/480 for sharp 1x/2x.
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
        width={190}
        height={40}
        alt=""
        aria-hidden="true"
        loading="eager"
        decoding="async"
        className="w-[130px] md:w-[190px] h-auto"
      />
    </picture>
  );
}
