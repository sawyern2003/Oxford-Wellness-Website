import Hero from "@/components/home/Hero";
import HomeRest from "@/components/home/HomeRest";
import { useSEO } from "@/hooks/useSEO";
import { useJsonLdSchema, createMedicalClinicSchema } from "@/hooks/useJsonLdSchema";

export default function Home() {
  useSEO({
    title: "The Oxford Wellness Doctor | Skin, Intimate & Women's Health in Oxford",
    description:
      "Skin, intimate and women's health, considered together by one doctor. Dr Inga Taganova, GP, at Belsyre Court, Oxford. Book online.",
    canonical: "https://www.theoxfordwellnessdoctor.com/",
  });

  useJsonLdSchema(createMedicalClinicSchema(), "medical-clinic-schema");

  return (
    <>
      <Hero />
      <HomeRest />
    </>
  );
}
