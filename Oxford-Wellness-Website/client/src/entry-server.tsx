import { renderToReadableStream } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { ssrHead } from "./hooks/useSEO";
import { ssrJsonLdScripts } from "./hooks/useBreadcrumbSchema";
import { preloadPath } from "./routes/lazyPages";

async function streamToString(stream: ReadableStream<Uint8Array>) {
  const reader = stream.getReader();
  const decoder = new TextDecoder();
  let html = "";
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    html += decoder.decode(value, { stream: true });
  }
  html += decoder.decode();
  return html;
}

export async function render(url: string) {
  ssrHead.current = null;
  ssrJsonLdScripts.current = [];
  // Resolve the page module before render so createLazyRoute can render
  // synchronously. Otherwise React.lazy suspends and prerendered HTML ships
  // an empty <main> with content in a hidden Suspense slot (huge mobile CLS).
  await preloadPath(url);
  const stream = await renderToReadableStream(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
  await stream.allReady;
  const html = await streamToString(stream);
  return {
    html,
    head: ssrHead.current,
    jsonLd: [...ssrJsonLdScripts.current],
  };
}
