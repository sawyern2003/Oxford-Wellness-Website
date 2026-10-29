import express, { type Express } from "express";
import fs from "fs";
import path from "path";

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath, { redirect: false }));

  // serve the prerendered page when there is one, otherwise the empty SPA shell
  app.use((req, res) => {
    const page = path.join(distPath, req.path, "index.html");
    const hasPage = page.startsWith(distPath + path.sep) && fs.existsSync(page);
    res.sendFile(hasPage ? page : path.resolve(distPath, "spa.html"));
  });
}
