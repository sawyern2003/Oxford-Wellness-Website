import { useEffect } from "react";
import { ssrJsonLdScripts } from "@/hooks/useBreadcrumbSchema";

export function useJsonLdSchema(schema: object | object[], id = "json-ld-schema") {
  const schemas = Array.isArray(schema) ? schema : [schema];
  const serialized = JSON.stringify(schemas);

  if (typeof document === "undefined") {
    schemas.forEach((schemaObj, index) => {
      const schemaId = schemas.length > 1 ? `${id}-${index}` : id;
      const json = JSON.stringify(schemaObj);
      ssrJsonLdScripts.current = ssrJsonLdScripts.current.filter((s) => s.id !== schemaId);
      ssrJsonLdScripts.current.push({ id: schemaId, json });
    });
  }

  useEffect(() => {
    schemas.forEach((schemaObj, index) => {
      const schemaId = schemas.length > 1 ? `${id}-${index}` : id;
      let script = document.getElementById(schemaId) as HTMLScriptElement | null;

      if (!script) {
        script = document.createElement("script");
        script.id = schemaId;
        script.type = "application/ld+json";
        document.head.appendChild(script);
      }

      script.textContent = JSON.stringify(schemaObj);
    });

    return () => {
      schemas.forEach((_, index) => {
        const schemaId = schemas.length > 1 ? `${id}-${index}` : id;
        document.getElementById(schemaId)?.remove();
      });
    };
  }, [serialized, id]);
}

export function createFAQPageSchema(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.q,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.a
      }
    }))
  };
}

export function createMedicalClinicSchema() {
  return {
    "@context": "https://schema.org",
    "@type": ["MedicalClinic", "LocalBusiness"],
    "name": "The Oxford Wellness Doctor",
    "description": "Skin, intimate and women's health, considered together by one doctor. Dr Inga Taganova, GP, at Belsyre Court, Oxford.",
    "image": "https://www.theoxfordwellnessdoctor.com/images/clinic-exterior.jpg",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Belsyre Court, 57 Woodstock Road",
      "addressLocality": "Oxford",
      "addressRegion": "Oxfordshire",
      "postalCode": "OX2 6HJ",
      "addressCountry": "GB"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "51.7633",
      "longitude": "-1.2649"
    },
    "telephone": "+447739309380",
    "priceRange": "££-£££",
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "09:00",
        "closes": "19:00"
      }
    ],
    "medicalSpecialty": ["Gynecology", "GeneralPractice"],
    "availableService": [
      {
        "@type": "MedicalProcedure",
        "name": "Menopause Consultation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Women's Health Consultation"
      },
      {
        "@type": "MedicalProcedure",
        "name": "Intimate Health Treatment"
      }
    ]
  };
}

export function createBlogPostingSchema(data: {
  title: string;
  description: string;
  canonical: string;
  datePublished: string;
  dateModified?: string;
  author?: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": data.title,
    "description": data.description,
    "author": {
      "@type": "Person",
      "name": data.author || "Dr Inga Taganova"
    },
    "datePublished": data.datePublished,
    "dateModified": data.dateModified || data.datePublished,
    "publisher": {
      "@type": "Organization",
      "name": "The Oxford Wellness Doctor",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.theoxfordwellnessdoctor.com/logo.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": data.canonical
    }
  };
}
