import { build as viteBuild } from "vite";
import { mkdir, readFile, rm, writeFile } from "fs/promises";
import path from "path";
import { pathToFileURL } from "url";
import { SITE_URL, SITEMAP_PAGES } from "../server/seo-static";

const PUBLIC_DIR = path.resolve("dist/public");
const SSR_DIR = path.resolve("dist/ssr");

/** Served for URLs without a prerendered page; must stay free of page-specific content. */
export const SPA_SHELL = "spa.html";

type Head = { title: string; description: string; canonical?: string } | null;
type RenderFn = (url: string) => { html: string; head: Head };

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

  let count = 0;
  for (const { path: pagePath } of SITEMAP_PAGES) {
    let rendered: ReturnType<RenderFn>;
    try {
      rendered = render(pagePath);
    } catch (err) {
      console.warn(`  ${pagePath}: skipped, renders client-side only (${(err as Error).message})`);
      continue;
    }
    const { html: appHtml, head } = rendered;
    if (!head) console.warn(`  ${pagePath}: no useSEO metadata, kept default title`);

    const page = applyHead(template, pagePath, head).replace(
      '<div id="root"></div>',
      `<div id="root">${appHtml}</div>`,
    );
    const outFile = path.join(PUBLIC_DIR, pagePath, "index.html");
    await mkdir(path.dirname(outFile), { recursive: true });
    await writeFile(outFile, page);
    count++;
  }

  await rm(SSR_DIR, { recursive: true, force: true });
  console.log(`prerendered ${count} of ${SITEMAP_PAGES.length} pages`);
}
