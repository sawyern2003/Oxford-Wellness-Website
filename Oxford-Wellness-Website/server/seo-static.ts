/** Re-export shared sitemap helpers (canonical copy lives in api/_lib for Vercel). */
export {
  SITE_URL,
  SITEMAP_PAGES,
  buildRobotsTxt,
  buildSitemapXml,
} from "../api/_lib/seo-static.js";
