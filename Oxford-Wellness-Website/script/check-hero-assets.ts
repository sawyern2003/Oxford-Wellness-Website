/**
 * Build-time guard: every /images/hero/… URL used by the homepage hero
 * (and listed in heroImageAssetPaths) must exist under client/public.
 */
import { access, readFile } from "fs/promises";
import path from "path";
import { constants } from "fs";
import { pathToFileURL } from "url";

const PUBLIC = path.resolve("client/public");

async function loadAssetPaths(): Promise<string[]> {
  const mod = await import(
    pathToFileURL(path.resolve("client/src/components/home/heroImage.ts")).href
  );
  return [...(mod.heroImageAssetPaths as readonly string[])];
}

async function pathsFromSources(): Promise<string[]> {
  const files = [
    path.resolve("client/src/components/home/Hero.tsx"),
    path.resolve("client/src/components/home/heroImage.ts"),
    path.resolve("client/index.html"),
  ];
  const urls = new Set<string>();
  const re = /\/images\/hero\/[A-Za-z0-9._-]+/g;
  for (const file of files) {
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(re)) urls.add(match[0]);
  }
  return [...urls];
}

export async function checkHeroAssets() {
  const listed = await loadAssetPaths();
  const scanned = await pathsFromSources();
  const urls = new Set([...listed, ...scanned]);

  const missing: string[] = [];
  for (const url of [...urls].sort()) {
    const filePath = path.join(PUBLIC, url.replace(/^\//, ""));
    try {
      await access(filePath, constants.F_OK);
    } catch {
      missing.push(url);
    }
  }

  if (missing.length) {
    throw new Error(
      `Hero assets missing from client/public:\n${missing.map((u) => `  ${u}`).join("\n")}`,
    );
  }

  console.log(`hero assets ok (${urls.size} URLs checked)`);
}

const isDirectRun =
  process.argv[1]?.includes("check-hero-assets") ||
  import.meta.url === `file://${process.argv[1]}`;

if (isDirectRun) {
  checkHeroAssets().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
