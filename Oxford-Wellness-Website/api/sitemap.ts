import type { VercelRequest, VercelResponse } from "@vercel/node";
import { buildSitemapXml } from "../server/seo-static";

/** Serves /sitemap.xml — same page list as Express + prerender (server/seo-static.ts). */
export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(buildSitemapXml());
}
