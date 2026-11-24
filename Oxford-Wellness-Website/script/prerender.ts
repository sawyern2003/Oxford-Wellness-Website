import { build as viteBuild } from "vite";
import { mkdir, readdir, readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import { SITE_URL, SITEMAP_PAGES } from "../server/seo-static";

const PUBLIC_DIR = path.resolve("dist/public");
const SSR_DIR = path.resolve("dist/ssr");

/** Prerendered but not in the sitemap (internal / noindex pages). */
const EXTRA_PRERENDER_PATHS = ["/flourish-compare"] as const;

/** Served for URLs without a prerendered page; must stay free of page-specific content. */
export const SPA_SHELL = "spa.html";

type Head = { title: string; description: string; canonical?: string } | null;
type JsonLdScript = { id: string; json: string };
type RenderFn = (url: string) => Promise<{ html: string; head: Head; jsonLd?: JsonLdScript[] }>;

function escapeAttr(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/"/g, "&quot;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");
}

function setTag(html: string, pattern: RegExp, replacement: string): string {
  if (!pattern.test(html)) throw new Error(`Template is missing ${pattern}`);
  return html.replace(pattern, replacement);
}

function applyHead(template: string, pagePath: string, head: Head): string {
  const canonical = head?.canonical ?? `${SITE_URL}${pagePath}`;
  let html = template;
  html = setTag(html, /<link rel="canonical" href="[^"]*" \/>/, `<link rel="canonical" href="${escapeAttr(canonical)}" />`);
  html = setTag(html, /<meta property="og:url" content="[^"]*" \/>/, `<meta property="og:url" content="${escapeAttr(canonical)}" />`);
  if (!head) return html;

  const title = escapeAttr(head.title);
  const description = escapeAttr(head.description);
  html = setTag(html, /<title>[^<]*<\/title>/, `<title>${title}</title>`);
  html = setTag(html, /<meta name="description" content="[^"]*" \/>/, `<meta name="description" content="${description}" />`);
  html = setTag(html, /<meta property="og:title" content="[^"]*" \/>/, `<meta property="og:title" content="${title}" />`);
  html = setTag(html, /<meta property="og:description" content="[^"]*" \/>/, `<meta property="og:description" content="${description}" />`);
  html = setTag(html, /<meta name="twitter:title" content="[^"]*" \/>/, `<meta name="twitter:title" content="${title}" />`);
  html = setTag(html, /<meta name="twitter:description" content="[^"]*" \/>/, `<meta name="twitter:description" content="${description}" />`);
  return html;
}

/** Content markers and/or filename prefixes that identify a route's lazy chunks. */
const ROUTE_CHUNK_HINTS: Record<
  string,
  { markers?: string[]; prefixes?: string[] }
> = {
  "/": { markers: ["Meet Dr Inga", "parks-road-background-900"] },
  "/treatments/morpheus8-oxford": {
    prefixes: ["morpheus8-", "TreatmentLandingPage-"],
  },
};

async function findAssetChunks(hints: {
  markers?: string[];
  prefixes?: string[];
}): Promise<string[]> {
  const assetsDir = path.join(PUBLIC_DIR, "assets");
  const files = (await readdir(assetsDir)).filter((name) => name.endsWith(".js"));
  const hits: string[] = [];

  for (const prefix of hints.prefixes ?? []) {
    for (const file of files) {
      if (!file.startsWith(prefix)) continue;
      // Blog "morpheus8-results-timeline-*" shares the morpheus8- prefix.
      if (prefix === "morpheus8-" && file.startsWith("morpheus8-results-")) continue;
      const href = `/assets/${file}`;
      if (!hits.includes(href)) hits.push(href);
    }
  }

  for (const marker of hints.markers ?? []) {
    for (const file of files) {
      const href = `/assets/${file}`;
      if (hits.includes(href)) continue;
      const source = await readFile(path.join(assetsDir, file), "utf-8");
      if (source.includes(marker)) hits.push(href);
    }
  }
  return hits;
}

function injectModulePreloads(html: string, hrefs: string[]): string {
  if (!hrefs.length) return html;
  const tags = hrefs
    .map((href) => `<link rel="modulepreload" crossorigin href="${escapeAttr(href)}" />`)
    .join("\n    ");
  return html.replace("</head>", `    ${tags}\n  </head>`);
}

/** Homepage-only LCP preload (keep in sync with heroImage.ts). */
const HOME_HERO_LCP_PRELOAD = `<link
      rel="preload"
      as="image"
      type="image/avif"
      imagesrcset="/images/hero/dr-inga-about-640.avif 640w, /images/hero/dr-inga-about-960.avif 960w, /images/hero/dr-inga-about-1280.avif 1280w"
      imagesizes="(min-width: 1024px) min(42vw, 720px), 92vw"
      fetchpriority="high"
    />`;

function injectHomeHeroPreload(html: string, pagePath: string): string {
  if (pagePath !== "/") return html;
  if (html.includes('rel="preload"') && html.includes("imagesrcset=") && html.includes("dr-inga-about-")) {
    return html;
  }
  return html.replace("</head>", `    ${HOME_HERO_LCP_PRELOAD}\n  </head>`);
}

function injectJsonLd(html: string, scripts: JsonLdScript[] | undefined): string {
  if (!scripts?.length) return html;
  const tags = scripts
    .map((s) => {
      // Prevent </script> breakouts in JSON text nodes.
      const safe = s.json.replace(/</g, "\\u003c");
      return `<script id="${escapeAttr(s.id)}" type="application/ld+json">${safe}</script>`;
    })
    .join("\n    ");
  return html.replace("</head>", `    ${tags}\n  </head>`);
}

/**
 * React SSR streams lazy/Suspense content into hidden #S:N slots and swaps
 * them in via requestAnimationFrame ($RC). On a static host that first paint
 * is an empty <main>, then content pops in (CLS ~2). Inline the slots so the
 * prerendered HTML already has the page in place.
 */
function resolveReactSuspenseSlots(html: string): string {
  let result = html;
  const calls = [...result.matchAll(/\$RC\("B:(\d+)","S:\1"\)/g)];
  for (const call of calls) {
    const id = call[1];
    const hiddenRe = new RegExp(
      `<div hidden id="S:${id}">([\\s\\S]*?)</div>`,
    );
    const hidden = result.match(hiddenRe);
    if (!hidden) continue;
    const content = hidden[1];
    const placeholderRe = new RegExp(
      `<!--\\$\\?--><template id="B:${id}"></template><!--/\\$-->`,
    );
    if (!placeholderRe.test(result)) continue;
    result = result.replace(placeholderRe, () => content);
    result = result.replace(hiddenRe, "");
  }
  // Drop the streaming bootstrap once deferred slots are gone (content is inline).
  if (!/id="S:\d+"/.test(result) && !/<template id="B:\d+">/.test(result)) {
    result = result.replace(
      /<script>\$RB=\[[\s\S]*?\$RC\("B:\d+","S:\d+"\)<\/script>/g,
      "",
    );
  }
  // Strip any remaining React streaming comment markers.
  result = result
    .replace(/<!--\$\??-->/g, "")
    .replace(/<!--\/\$-->/g, "")
    .replace(/<!--\$~-->/g, "")
    .replace(/<!--\$!-->/g, "");
  return result;
}

export async function prerender() {
  await viteBuild({
    build: {
      ssr: "src/entry-server.tsx",
      outDir: SSR_DIR,
      emptyOutDir: true,
    },
    logLevel: "warn",
  });

  const template = await readFile(path.join(PUBLIC_DIR, "index.html"), "utf-8");
  if (!template.includes('<div id="root"></div>')) {
    throw new Error("Template is missing the empty #root element");
  }
  await writeFile(path.join(PUBLIC_DIR, SPA_SHELL), template);

  const { render } = (await import(
    pathToFileURL(path.join(SSR_DIR, "entry-server.js")).href
  )) as { render: RenderFn };

  const preloadCache = new Map<string, string[]>();

  const prerenderPaths = [
    ...SITEMAP_PAGES.map((p) => p.path),
    ...EXTRA_PRERENDER_PATHS,
  ];

  let count = 0;
  for (const pagePath of prerenderPaths) {
    let rendered: Awaited<ReturnType<RenderFn>>;
    try {
      rendered = await render(pagePath);
    } catch (err) {
      console.warn(`  ${pagePath}: skipped, renders client-side only (${(err as Error).message})`);
      continue;
    }
    const { html: appHtml, head, jsonLd } = rendered;
    if (!head) console.warn(`  ${pagePath}: no useSEO metadata, kept default title`);

    let page = applyHead(template, pagePath, head).replace(
      '<div id="root"></div>',
      `<div id="root">${resolveReactSuspenseSlots(appHtml)}</div>`,
    );
    page = injectHomeHeroPreload(page, pagePath);
    page = injectJsonLd(page, jsonLd);
    if ((EXTRA_PRERENDER_PATHS as readonly string[]).includes(pagePath)) {
      page = page.replace(
        "</head>",
        '    <meta name="robots" content="noindex, nofollow" />\n  </head>',
      );
    }

    const hints = ROUTE_CHUNK_HINTS[pagePath];
    if (hints) {
      let hrefs = preloadCache.get(pagePath);
      if (!hrefs) {
        hrefs = await findAssetChunks(hints);
        preloadCache.set(pagePath, hrefs);
      }
      page = injectModulePreloads(page, hrefs);
    }

    const outFile = path.join(PUBLIC_DIR, pagePath === "/" ? "" : pagePath, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, page);
    count++;
  }

  await rm(SSR_DIR, { recursive: true, force: true });
  console.log(`prerendered ${count} of ${prerenderPaths.length} pages`);
}
