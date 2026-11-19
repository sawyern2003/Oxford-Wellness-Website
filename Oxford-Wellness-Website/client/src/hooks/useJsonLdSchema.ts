import { useEffect } from "react";

export function useJsonLdSchema(schema: object | object[], id = "json-ld-schema") {
  useEffect(() => {
    const schemas = Array.isArray(schema) ? schema : [schema];
    
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
  }, [JSON.stringify(schema), id]);
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
    "description": "Doctor-led women's health, menopause, intimate health and longevity clinic in Oxford",
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
    // TODO: Add openingHoursSpecification with opens/closes times once confirmed
    // "openingHoursSpecification": [
    //   {
    //     "@type": "OpeningHoursSpecification",
    //     "dayOfWeek": ["Monday", "Thursday", "Friday", "Saturday", "Sunday"],
    //     "opens": "09:00",
    //     "closes": "18:00"
    //   }
    // ],
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
