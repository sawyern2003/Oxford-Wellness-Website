import {
  treatmentIllustrations,
  type IllustrationId,
} from "@/data/treatmentIllustrations";

const aspectClass = {
  portrait: "aspect-[3/4]",
  landscape: "aspect-[5/4]",
  square: "aspect-square",
} as const;

export function IllustrationSlot({
  id,
  aspect,
}: {
  id: IllustrationId;
  aspect: keyof typeof aspectClass;
}) {
  const asset = treatmentIllustrations[id];
  const compact = aspect === "square";

  return (
    <figure className="m-0 min-w-0" data-illustration={id} data-file={asset.file}>
      <div className={`relative overflow-hidden border border-border bg-white ${asset.src ? "" : aspectClass[aspect]}`}>
        {asset.src ? (
          <img src={asset.src} alt="" className="block h-auto w-full" />
        ) : null}
      </div>
      {asset.src ? null : (
        <figcaption className={`text-muted-foreground ${compact ? "mt-2 text-[10px] leading-snug" : "mt-3 text-xs leading-snug"}`}>
          <span className={`block font-medium uppercase ${compact ? "text-[10px] tracking-[0.14em]" : "text-[11px] tracking-[0.18em]"}`}>
            Watercolour
          </span>
          <span className="mt-1 block break-words">{asset.file}</span>
        </figcaption>
      )}
    </figure>
  );
}
