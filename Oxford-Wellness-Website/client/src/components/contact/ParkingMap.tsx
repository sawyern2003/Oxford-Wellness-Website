import { Bus, CircleParking, TrainFront } from "lucide-react";
import type { ReactNode } from "react";

const CLINIC_QUERY = "Belsyre Court, 57 Woodstock Rd, Oxford OX2 6HJ";

const mapSrc =
  "https://maps.google.com/maps?q=51.762121,-1.263889+(Belsyre+Court)&z=16&t=m&hl=en&output=embed";

const directionsHref = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent("Oxford Station")}&destination=${encodeURIComponent(CLINIC_QUERY)}&travelmode=walking`;
const busStopHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("Plantation Road bus stop, Woodstock Road, Oxford")}`;
const parkingHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("parking near Belsyre Court, 57 Woodstock Rd, Oxford")}`;
const mapHref = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(CLINIC_QUERY)}`;

const facts = [
  {
    icon: TrainFront,
    title: "Oxford station",
    body: "Just over a mile south. About 20 minutes on foot.",
    href: directionsHref,
    link: "Walking directions",
  },
  {
    icon: Bus,
    title: "Plantation Road",
    body: "The local stop, on Woodstock Road, about a minute north of the clinic. Buses run into the city centre from here.",
    href: busStopHref,
    link: "Stop on the map",
  },
  {
    icon: CircleParking,
    title: "Street parking",
    body: "On the roads around the clinic. Read the signs when you arrive. The courtyard at Belsyre Court is private.",
    href: parkingHref,
    link: "Parking nearby",
  },
] as const;

function MapFrame({ className }: { className: string }) {
  return (
    <div className={className}>
      <iframe
        title="Map of Belsyre Court, Woodstock Road, Oxford"
        src={mapSrc}
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}

export default function ParkingMap({ companion }: { companion?: ReactNode }) {
  return (
    <div id="parking" className="max-w-6xl mx-auto mt-16 mb-8 scroll-mt-28">
      {companion ? (
        <div className="mb-12 grid items-start gap-8 lg:grid-cols-2 lg:gap-12">
          <MapFrame className="h-[260px] overflow-hidden rounded-[20px] bg-muted sm:h-[300px]" />
          <div>{companion}</div>
        </div>
      ) : null}

      <div className="mb-6 max-w-2xl">
        <h2 className="font-sans font-semibold text-2xl md:text-3xl text-foreground tracking-tight mb-3">
          Getting here
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed max-w-[65ch]">
          Belsyre Court is on Woodstock Road. There is no clinic car park – use the streets around it.
        </p>
      </div>

      <div className="rounded-3xl overflow-hidden bg-white shadow-[0_12px_40px_-24px_rgba(20,30,50,0.45)]">
        {companion ? null : (
          <MapFrame className="h-[420px] w-full bg-muted md:h-[480px]" />
        )}

        <div className="grid md:grid-cols-3 md:divide-x divide-border/70">
          {facts.map((fact) => {
            const Icon = fact.icon;
            return (
              <div key={fact.title} className="px-6 py-5 md:px-7 md:py-6 border-t border-border/70">
                <div className="flex items-center gap-2.5 mb-2">
                  <Icon className="size-4 text-secondary shrink-0" strokeWidth={1.75} aria-hidden="true" />
                  <h3 className="text-sm font-medium text-foreground">{fact.title}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{fact.body}</p>
                <a
                  href={fact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-3 text-sm font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary"
                >
                  {fact.link}
                </a>
              </div>
            );
          })}
        </div>

        <div className="px-6 py-3 border-t border-border/70 bg-muted/30">
          <a
            href={mapHref}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-medium text-primary underline decoration-primary/30 underline-offset-4 hover:text-secondary"
          >
            Open in Google Maps
          </a>
        </div>
      </div>
    </div>
  );
}
