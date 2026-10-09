import building from "@/assets/belsyre-court-building.jpg";
import room from "@/assets/belsyre-court-room.jpg";
import { cn } from "@/lib/utils";

const print =
  "block w-full rounded-sm shadow-[6px_12px_22px_-16px_rgba(33,48,68,0.42)]";

export default function ClinicLocationPictures({ className }: { className?: string }) {
  return (
    <div className={cn("grid grid-cols-2 gap-4 sm:gap-6", className)}>
      <img
        src={building}
        alt="Belsyre Court, the clinic building on Woodstock Road"
        width={1024}
        height={682}
        loading="lazy"
        className={cn(print, "-rotate-2")}
      />
      <img
        src={room}
        alt="The sitting room at the clinic"
        width={1024}
        height={682}
        loading="lazy"
        className={cn(print, "rotate-2 translate-y-3")}
      />
    </div>
  );
}
