import { useEffect } from "react";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

const BASE_URL = "https://www.theoxfordwellnessdoctor.com";

export function useBreadcrumbSchema(items: BreadcrumbItem[], id = "breadcrumb-schema") {
  useEffect(() => {
    const schema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": `${BASE_URL}/`,
        },
        ...items.map((item, i) => ({
          "@type": "ListItem",
          "position": i + 2,
          "name": item.name,
          "item": `${BASE_URL}${item.path}`,
        })),
      ],
    };

    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = JSON.stringify(schema);

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [JSON.stringify(items), id]);
}
