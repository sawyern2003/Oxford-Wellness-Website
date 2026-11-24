/**
 * Build-time guard: every /images/hero/… URL referenced by the hero-mockup
 * components (srcset, src, preload) must exist under client/public.
 *
 * Run from the package root (via `npm run build` or `tsx script/check-hero-mockup-assets.ts`).
 */
import { readdir, readFile, access } from "fs/promises";
import path from "path";
import { constants } from "fs";

const ROOT = path.resolve("client/src/components/hero-mockups");
const PUBLIC = path.resolve("client/public");

const HERO_URL = /\/images\/hero\/[A-Za-z0-9._-]+/g;

async function collectSourceFiles(dir: string): Promise<string[]> {
  const entries = await readdir(dir, { withFileTypes: true });
  const files: string[] = [];
  for (const entry of entries) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) files.push(...(await collectSourceFiles(full)));
    else if (/\.(tsx?|jsx?|css)$/.test(entry.name)) files.push(full);
  }
  return files;
}

export async function checkHeroMockupAssets() {
  const sources = await collectSourceFiles(ROOT);
  const urls = new Set<string>();

  for (const file of sources) {
    const text = await readFile(file, "utf8");
    for (const match of text.matchAll(HERO_URL)) {
      urls.add(match[0]);
    }
  }

  if (urls.size === 0) {
    throw new Error("No /images/hero/ URLs found in hero-mockups — check path.");
  }

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
    const list = missing.map((url) => `  ${url}`).join("\n");
    throw new Error(`Hero mockup assets missing from client/public:\n${list}`);
  }

  console.log(`hero-mockup assets ok (${urls.size} URLs checked)`);
}

const isDirectRun =
  process.argv[1]?.includes("check-hero-mockup-assets") ||
  import.meta.url === `file://${process.argv[1]}`;

if (isDirectRun) {
  checkHeroMockupAssets().catch((err) => {
    console.error(err);
    process.exit(1);
  });
}
