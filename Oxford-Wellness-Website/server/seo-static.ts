/** Shared sitemap / robots content for Express (local/Replit) and Vercel serverless. */

export const SITE_URL = "https://www.theoxfordwellnessdoctor.com";

/** Keep in sync with client/src/lib/brand.ts SHOW_PAIN_DOCTOR */
const SHOW_PAIN_DOCTOR = true;

const ALL_SITEMAP_PAGES = [
  { path: "/", priority: "1.0", changefreq: "weekly", lastmod: "2024-11-10" },
  { path: "/how-we-help", priority: "1.0", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/symptoms-and-treatments", priority: "1.0", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/programme-finder", priority: "1.0", changefreq: "monthly", lastmod: "2024-09-20" },
  { path: "/programmes/skin-health-regeneration", priority: "0.95", changefreq: "monthly", lastmod: "2024-09-20" },
  { path: "/programmes/weight-body-confidence", priority: "0.95", changefreq: "monthly", lastmod: "2024-09-20" },
  { path: "/programmes/intimate-wellness", priority: "0.95", changefreq: "monthly", lastmod: "2024-09-20" },
  { path: "/about", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-01" },
  { path: "/oxford-pain-doctor", priority: "1.0", changefreq: "monthly" },
  { path: "/oxford-pain-doctor/about", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/oxford-pain-doctor/how-we-help", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/oxford-pain-doctor/library", priority: "0.8", changefreq: "monthly", lastmod: "2024-09-15" },
  { path: "/oxford-pain-doctor/library/where-pain-is-shaped-in-the-brain", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/biopsychosocial-approach", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/exercise-and-chronic-pain", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/sleep-stress-mood-and-pain", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/integrative-pain-care-plan", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/mindfulness-yoga-evidence", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/when-injections-are-useful", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/understanding-nerve-pain", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/library/digital-technology-and-pain", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/oxford-pain-doctor/contact", priority: "0.8", changefreq: "monthly", lastmod: "2024-09-15" },
  { path: "/oxford-pain-doctor/book", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/contact", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/book", priority: "0.95", changefreq: "monthly", lastmod: "2024-11-10" },
  { path: "/pricing", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/recommended-skincare", priority: "0.8", changefreq: "monthly", lastmod: "2024-09-15" },
  { path: "/ai-consultation", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/shop", priority: "0.5", changefreq: "monthly", lastmod: "2024-09-01" },
  { path: "/menopause-clinic-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-10" },
  { path: "/perimenopause-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-10" },
  { path: "/womens-health-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-16" },
  { path: "/sexual-wellness-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-10" },
  { path: "/postpartum-recovery-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-10-20" },
  { path: "/longevity-medicine-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-16" },
  { path: "/skin-clinic-oxford", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-16" },
  { path: "/menopause-skin", priority: "1.0", changefreq: "monthly", lastmod: "2024-11-16" },
  { path: "/treatments", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/anti-wrinkle-injections-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/dermal-fillers-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/lip-fillers-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/profhilo-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/morpheus8-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/medical-weight-loss-oxford", priority: "0.3", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/excessive-sweating-treatment-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/chemical-peels-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/skin-boosters-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/neauvia-n-rose-intimate-rejuvenation-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/votiva-forma-v-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/vitamin-b12-injection-oxford", priority: "0.8", changefreq: "monthly", lastmod: "2024-09-15" },
  { path: "/treatments/medical-form-completion-oxford", priority: "0.8", changefreq: "monthly", lastmod: "2024-09-15" },
  { path: "/treatments/forma-facelift-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/forma-plus-body-contouring-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/inmode-fx-skin-tightening-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/lumecca-ipl-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/filler-dissolving-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/treatments/jaw-slimming-teeth-grinding-oxford", priority: "0.9", changefreq: "monthly", lastmod: "2024-10-15" },
  { path: "/blog", priority: "0.9", changefreq: "weekly", lastmod: "2024-11-10" },
  { path: "/blog/menopause-skin-changes", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/profhilo-vs-dermal-fillers", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/lip-filler-natural-results", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/morpheus8-results-timeline", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/weight-gain-perimenopause", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/choosing-aesthetics-clinic-oxford", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/aesthetic-treatments-over-50", priority: "0.7", changefreq: "monthly", lastmod: "2024-08-10" },
  { path: "/blog/new-oxford-science-park-clinic", priority: "0.8", changefreq: "monthly", lastmod: "2024-09-15" },
  { path: "/privacy-policy", priority: "0.3", changefreq: "yearly", lastmod: "2024-06-01" },
  { path: "/cookie-policy", priority: "0.3", changefreq: "yearly", lastmod: "2024-06-01" },
  { path: "/terms-and-conditions", priority: "0.3", changefreq: "yearly", lastmod: "2024-06-01" },
] as const;

export const SITEMAP_PAGES = ALL_SITEMAP_PAGES.filter(
  (page) => SHOW_PAIN_DOCTOR || !page.path.startsWith("/oxford-pain-doctor"),
);

export function buildRobotsTxt(): string {
  const hidePain = SHOW_PAIN_DOCTOR ? "" : "Disallow: /oxford-pain-doctor\n";
  return `User-agent: *\nAllow: /\n${hidePain}Sitemap: ${SITE_URL}/sitemap.xml\n`;
}

export function buildSitemapXml(): string {
  const today = new Date().toISOString().split("T")[0];
  const urls = SITEMAP_PAGES.map(
    (p) => `  <url>
    <loc>${SITE_URL}${p.path}</loc>
    <lastmod>${(p as any).lastmod || today}</lastmod>
    <changefreq>${p.changefreq}</changefreq>
    <priority>${p.priority}</priority>
  </url>`,
  ).join("\n");
  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}
