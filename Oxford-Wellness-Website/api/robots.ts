import type { VercelRequest, VercelResponse } from "@vercel/node";
import { buildRobotsTxt } from "../server/seo-static";

export default function handler(_req: VercelRequest, res: VercelResponse) {
  res.setHeader("Content-Type", "text/plain; charset=utf-8");
  res.status(200).send(buildRobotsTxt());
}
