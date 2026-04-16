import type { VercelRequest, VercelResponse } from "@vercel/node";

const SITE_URL = "https://www.theoxfordwellnessdoctor.com";

function buildRobotsTxt(): string {
  return `User-agent: *\nAllow: /\nSitemap: ${SITE_URL}/sitemap.xml\n`;
}

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(buildRobotsTxt());
}
