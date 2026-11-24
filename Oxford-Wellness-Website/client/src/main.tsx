import { createRoot, hydrateRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const root = document.getElementById("root")!;

// Prerendered pages ship HTML inside #root. createRoot() would wipe that DOM
// (homepage CLS ~0.98 as large sections collapse to 0×0). Hydrate instead when
// markup is already present; keep createRoot for the empty SPA shell.
if (root.hasChildNodes()) {
  hydrateRoot(root, <App />);
} else {
  createRoot(root).render(<App />);
}
