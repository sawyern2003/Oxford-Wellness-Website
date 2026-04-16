import type { VercelRequest, VercelResponse } from "@vercel/node";

const SITE_URL = "https://www.theoxfordwellnessdoctor.com";

const SITEMAP_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly" },
  { path: "/about", priority: "0.9", changefreq: "monthly" },
  { path: "/contact", priority: "0.9", changefreq: "monthly" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly" },
  { path: "/ai-consultation", priority: "0.8", changefreq: "monthly" },
  { path: "/shop", priority: "0.7", changefreq: "weekly" },
  { path: "/menopause-clinic-oxford", priority: "1.0", changefreq: "monthly" },
  { path: "/perimenopause-oxford", priority: "1.0", changefreq: "monthly" },
  { path: "/womens-health-oxford", priority: "1.0", changefreq: "monthly" },
  { path: "/sexual-wellness-oxford", priority: "1.0", changefreq: "monthly" },
  { path: "/postpartum-recovery-oxford", priority: "1.0", changefreq: "monthly" },
  { path: "/treatments", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/anti-wrinkle-injections-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/dermal-fillers-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/lip-fillers-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/profhilo-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/morpheus8-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/medical-weight-loss-oxford", priority: "0.3", changefreq: "monthly" },
  { path: "/treatments/excessive-sweating-treatment-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/chemical-peels-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/skin-boosters-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/votiva-forma-v-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/vitamin-b12-injection-oxford", priority: "0.8", changefreq: "monthly" },
  { path: "/treatments/medical-form-completion-oxford", priority: "0.8", changefreq: "monthly" },
  { path: "/treatments/forma-facelift-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/forma-plus-body-contouring-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/inmode-fx-skin-tightening-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/lumecca-ipl-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/filler-dissolving-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/treatments/jaw-slimming-teeth-grinding-oxford", priority: "0.9", changefreq: "monthly" },
  { path: "/blog", priority: "0.9", changefreq: "weekly" },
  { path: "/blog/wegovy-vs-mounjaro-comparison", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/menopause-skin-changes", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/profhilo-vs-dermal-fillers", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/lip-filler-natural-results", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/morpheus8-results-timeline", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/weight-gain-perimenopause", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/choosing-aesthetics-clinic-oxford", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/aesthetic-treatments-over-50", priority: "0.7", changefreq: "monthly" },
  { path: "/blog/new-oxford-science-park-clinic", priority: "0.8", changefreq: "monthly" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/cookie-policy", priority: "0.3", changefreq: "yearly" },
  { path: "/terms-and-conditions", priority: "0.3", changefreq: "yearly" },
];

function buildSitemapXml(): string {
  const today = new Date().toISOString().split("T")[0];
  const urls = SITEMAP_PAGES.map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "application/xml; charset=utf-8");
  res.status(200).send(buildSitemapXml());
}
