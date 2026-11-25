import { useEffect } from "react";

export interface BreadcrumbItem {
  name: string;
  path: string;
}

const BASE_URL = "https://www.theoxfordwellnessdoctor.com";

/** Collected during SSR/prerender (effects do not run) so JSON-LD lands in HTML. */
export const ssrJsonLdScripts: { current: { id: string; json: string }[] } = {
  current: [],
};

function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: `${BASE_URL}/`,
      },
      ...items.map((item, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: item.name,
        item: `${BASE_URL}${item.path}`,
      })),
    ],
  };
}

export function useBreadcrumbSchema(items: BreadcrumbItem[], id = "breadcrumb-schema") {
  const schema = buildBreadcrumbSchema(items);
  const json = JSON.stringify(schema);

  if (typeof document === "undefined") {
    ssrJsonLdScripts.current = ssrJsonLdScripts.current.filter((s) => s.id !== id);
    ssrJsonLdScripts.current.push({ id, json });
  }

  useEffect(() => {
    let script = document.getElementById(id) as HTMLScriptElement | null;
    if (!script) {
      script = document.createElement("script");
      script.id = id;
      script.type = "application/ld+json";
      document.head.appendChild(script);
    }
    script.textContent = json;

    return () => {
      document.getElementById(id)?.remove();
    };
  }, [json, id]);
}
