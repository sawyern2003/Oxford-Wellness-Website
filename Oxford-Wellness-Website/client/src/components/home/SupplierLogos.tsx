const suppliers = ["InMode", "Neauvia", "Profhilo", "Obagi"];

function LogoRow({ hidden }: { hidden?: boolean }) {
  const row = [...suppliers, ...suppliers, ...suppliers];
  return (
    <ul className="flex shrink-0 items-center">
      {row.map((name, index) => (
        <li key={`${hidden ? "copy" : "live"}-${name}-${index}`} className="px-10 md:px-14">
          <span className="whitespace-nowrap font-sans text-lg font-medium tracking-[0.14em] text-primary/70 uppercase">
            {name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function SupplierLogos() {
  return (
    <section aria-label="Suppliers used in treatment" className="border-y border-border bg-muted/40">
      <ul className="sr-only">
        {suppliers.map((name) => (
          <li key={name}>{name}</li>
        ))}
      </ul>
      <div
        className="overflow-hidden py-7"
        style={{
          maskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          WebkitMaskImage: "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
        }}
      >
        <div className="supplier-marquee-track flex w-max" aria-hidden="true">
          <LogoRow />
          <LogoRow hidden />
        </div>
      </div>
    </section>
  );
}
