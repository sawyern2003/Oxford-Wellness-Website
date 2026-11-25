import type { VercelRequest, VercelResponse } from "@vercel/node";
// Explicit .js extension for ESM resolution inside the Vercel function bundle.
import { buildSitemapXml } from "./_lib/seo-static.js";

/** Serves /sitemap.xml — same page list as Express + prerender. */
export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(buildSitemapXml());
}
