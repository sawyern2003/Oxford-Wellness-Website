import { useEffect } from "react";
import { Redirect, useParams } from "wouter";
import HomeRest from "@/components/home/HomeRest";
import HeroEditorial from "@/components/hero-mockups/HeroEditorial";
import HeroPortraitPlate from "@/components/hero-mockups/HeroPortraitPlate";
import HeroFullBleed from "@/components/hero-mockups/HeroFullBleed";
import HeroTypographic from "@/components/hero-mockups/HeroTypographic";
import HeroClubRoom from "@/components/hero-mockups/HeroClubRoom";
import { useSEO } from "@/hooks/useSEO";

const VARIANTS = {
  "1": HeroEditorial,
  "2": HeroPortraitPlate,
  "3": HeroFullBleed,
  "4": HeroTypographic,
  "5": HeroClubRoom,
} as const;

type VariantId = keyof typeof VARIANTS;

const LABELS: Record<VariantId, string> = {
  "1": "Editorial split",
  "2": "Centred portrait plate",
  "3": "Full-bleed panel",
  "4": "Typographic",
  "5": "Club room",
};

function isVariantId(value: string | undefined): value is VariantId {
  return value === "1" || value === "2" || value === "3" || value === "4" || value === "5";
}

function useNoIndex() {
  useEffect(() => {
    let el = document.querySelector('meta[name="robots"]') as HTMLMetaElement | null;
    if (!el) {
      el = document.createElement("meta");
      el.setAttribute("name", "robots");
      document.head.appendChild(el);
    }
    el.setAttribute("content", "noindex, nofollow");
    return () => {
      el?.setAttribute("content", "index, follow");
    };
  }, []);
}

/**
 * Unlinked hero mockups for Nicholas's review.
 * Prerendered (200) but noindex and excluded from the sitemap.
 */
export default function HeroMockupPage() {
  const params = useParams<{ id?: string }>();
  const id = isVariantId(params.id) ? params.id : null;
  const label = id ? LABELS[id] : "Hero mockup";

  useNoIndex();
  useSEO({
    title: id
      ? `Hero mockup ${id}: ${label} | The Oxford Wellness Doctor`
      : "Hero mockup | The Oxford Wellness Doctor",
    description: "Internal hero mockup. Not for public indexing.",
    canonical: id
      ? `https://www.theoxfordwellnessdoctor.com/hero-mockups/${id}`
      : "https://www.theoxfordwellnessdoctor.com/",
  });

  if (!id) return <Redirect to="/" />;

  const Hero = VARIANTS[id];
  return (
    <>
      <Hero />
      <HomeRest showParksRoad={id !== "5"} />
    </>
  );
}
