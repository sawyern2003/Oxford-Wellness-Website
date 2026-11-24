/**
 * Elongated decorative S-curve flourish for the care typewriter section.
 * Long, almost-flat centre with delicate spiral curls at each end
 * (left: down + inward; right: up + inward).
 * Stroke stays fine at every size via non-scaling-stroke.
 */
export default function Flourish({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 240 22"
      width="240"
      height="22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      role="presentation"
      focusable="false"
    >
      <path
        d="M20.2 5.4C15.6 5.4 12.2 8.2 12.2 11.6C12.2 15.2 15.4 17.8 19.4 17.8C22.8 17.8 25.4 15.6 25.8 12.6C48 11.4 88 9.6 120 10.8C152 12 192 12.8 214.2 11.6C214.6 14.6 217.2 16.8 220.6 16.8C224.6 16.8 227.8 14.2 227.8 10.6C227.8 7.2 224.4 4.4 219.8 4.4"
        stroke="#293c56"
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
        vectorEffect="non-scaling-stroke"
      />
    </svg>
  );
}
