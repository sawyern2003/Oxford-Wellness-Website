import { Link } from "wouter";
import womensHealth from "@/assets/treatments/menu-womens-health.jpg";
import skinAesthetics from "@/assets/treatments/menu-skin-aesthetics.jpg";
import weightBody from "@/assets/treatments/menu-weight-body.jpg";

const treatmentCategories = [
  {
    name: "Women's Health & Menopause",
    href: "/treatments#womens-health",
    image: womensHealth,
    alt: "Watercolour still life of a silk scarf and perfume atomiser",
  },
  {
    name: "Skin & Aesthetics",
    href: "/treatments#skin",
    image: skinAesthetics,
    alt: "Watercolour still life with an ornate hand mirror",
  },
  {
    name: "Weight & Body",
    href: "/treatments#weight",
    image: weightBody,
    alt: "Watercolour of a vintage brass weighing scale with olive branches",
  },
];

const viewAllTreatments = { name: "View All Treatments", href: "/treatments" };

function CategoryImage({ src, alt }: { src: string; alt: string }) {
  return (
    <img
      src={src}
      alt={alt}
      width={1024}
      height={682}
      className="h-20 w-auto shrink-0 object-contain transition-transform duration-500 ease-out motion-safe:group-hover:scale-[1.06] motion-safe:group-focus-visible:scale-[1.06]"
    />
  );
}

export function TreatmentMenuPanel({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <div
      id="how-can-we-help"
      className="treatment-menu absolute inset-x-0 top-full z-50 border-t border-border bg-white"
      role="menu"
    >
      <div className="container-page flex items-center gap-6 py-3 lg:gap-10">
        {treatmentCategories.map((link) => (
          <Link
            key={link.name}
            href={link.href}
            role="menuitem"
            onClick={() => onNavigate(link.href)}
            className="group flex min-w-0 flex-1 items-center gap-3 rounded-md px-2 py-1 text-sm text-foreground transition-colors duration-300 hover:bg-accent hover:text-primary focus-visible:bg-accent focus-visible:text-primary focus-visible:outline-none"
          >
            <CategoryImage src={link.image} alt={link.alt} />
            <span className="leading-snug">{link.name}</span>
          </Link>
        ))}
        <Link
          href={viewAllTreatments.href}
          role="menuitem"
          onClick={() => onNavigate(viewAllTreatments.href)}
          className="group shrink-0 whitespace-nowrap rounded-md px-2 py-1 text-sm text-foreground transition-colors duration-300 hover:bg-accent hover:text-primary focus-visible:bg-accent focus-visible:text-primary focus-visible:outline-none"
        >
          {viewAllTreatments.name}
        </Link>
      </div>
    </div>
  );
}

export function TreatmentMenuMobile({ onNavigate }: { onNavigate: (href: string) => void }) {
  return (
    <div className="mb-1 border-b border-border/50 pb-2">
      <p className="py-3 text-base font-medium text-primary">Treatments</p>
      {treatmentCategories.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={() => onNavigate(link.href)}
          className="group flex items-center gap-3 rounded-md py-1.5 pl-3 pr-2 text-sm text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-primary"
        >
          <CategoryImage src={link.image} alt={link.alt} />
          {link.name}
        </Link>
      ))}
      <Link
        href={viewAllTreatments.href}
        onClick={() => onNavigate(viewAllTreatments.href)}
        className="block rounded-md py-2 pl-3 text-sm text-muted-foreground transition-colors duration-300 hover:bg-accent hover:text-primary"
      >
        {viewAllTreatments.name}
      </Link>
    </div>
  );
}
