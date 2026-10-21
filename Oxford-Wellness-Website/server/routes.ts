import type { Express } from "express";
import { createServer, type Server } from "http";
import { buildRobotsTxt, buildSitemapXml } from "./seo-static";
import { submitContactJson } from "./contact-submit";
import { submitProgrammeFinderJson } from "./programme-finder-submit";
import { belsyreRedirectLocation, isLikelyBot } from "../shared/belsyre-qr";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
  app.get(["/belsyre", "/belsyre/"], (req, res) => {
    if (!isLikelyBot(req.get("user-agent"))) {
      console.log(
        JSON.stringify({
          qr: "belsyre",
          day: new Date().toISOString().slice(0, 10),
        }),
      );
    }
    res.setHeader("Cache-Control", "no-store");
    res.redirect(302, belsyreRedirectLocation());
  });

  app.get("/robots.txt", (_req, res) => {
    res.type("text/plain");
    res.send(buildRobotsTxt());
  });

  app.get("/sitemap.xml", (_req, res) => {
    res.type("application/xml");
    res.send(buildSitemapXml());
  });

  app.post("/api/contact", async (req, res) => {
    const { status, json } = await submitContactJson(req.body);
    res.status(status).json(json);
  });

  app.post("/api/programme-finder", async (req, res) => {
    const { status, json } = await submitProgrammeFinderJson(req.body);
    res.status(status).json(json);
  });

  return httpServer;
}
