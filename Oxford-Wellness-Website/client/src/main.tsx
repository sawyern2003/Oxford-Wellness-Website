import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import { preloadPath } from "./routes/lazyPages";
import "./index.css";

async function boot() {
  // Await the matched lazy route before hydrate so Suspense does not blank
  // prerendered HTML (CLS). Homepage is eager and skips preload.
  try {
    await preloadPath(window.location.pathname);
  } catch {
    // Fall through; Suspense may briefly show null if the chunk fails.
  }

  const root = document.getElementById("root")!;

  // Prerendered pages ship HTML inside #root. createRoot() would wipe that DOM
  // (homepage CLS ~0.98 as large sections collapse to 0×0). Hydrate instead when
  // markup is already present; keep createRoot for the empty SPA shell.
  if (root.hasChildNodes()) {
    hydrateRoot(root, <App />);
  } else {
    createRoot(root).render(<App />);
  }
}

void boot();
