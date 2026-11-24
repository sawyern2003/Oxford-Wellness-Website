import { renderToReadableStream } from "react-dom/server";
import { Router } from "wouter";
import App from "./App";
import { ssrHead } from "./hooks/useSEO";

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
  const stream = await renderToReadableStream(
    <Router ssrPath={url}>
      <App />
    </Router>,
  );
  await stream.allReady;
  const html = await streamToString(stream);
  return { html, head: ssrHead.current };
}
