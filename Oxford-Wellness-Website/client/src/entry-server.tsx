import { renderToString } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { ssrHead } from "./hooks/useSEO";

export function render(url: string) {
  ssrHead.current = null;
  const html = renderToString(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
  return { html, head: ssrHead.current };
}
