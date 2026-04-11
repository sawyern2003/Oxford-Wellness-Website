import type { Express } from "express";
import { createServer, type Server } from "http";
import { buildRobotsTxt, buildSitemapXml } from "./seo-static";
import { submitContactJson } from "./contact-submit";

export async function registerRoutes(
  httpServer: Server,
  app: Express,
): Promise<Server> {
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

  return httpServer;
}
