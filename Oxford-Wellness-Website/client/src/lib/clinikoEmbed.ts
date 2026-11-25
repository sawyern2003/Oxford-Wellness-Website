import { useEffect, useState } from "react";

/** True when the postMessage origin is Cliniko over HTTPS. */
export function isClinikoOrigin(origin: string): boolean {
  try {
    const url = new URL(origin);
    if (url.protocol !== "https:") return false;
    const host = url.hostname.toLowerCase();
    return host === "cliniko.com" || host.endsWith(".cliniko.com");
  } catch {
    return false;
  }
}

const RESIZE_PREFIX = "cliniko-bookings-resize:";

/**
 * Listen for Cliniko iframe height messages so the diary can grow without
 * nested scrolling. SSR-safe: starts at `initialPx`, updates after mount.
 */
export function useClinikoIframeHeight(initialPx = 720): number {
  const [height, setHeight] = useState(initialPx);

  useEffect(() => {
    const onMessage = (event: MessageEvent) => {
      if (!isClinikoOrigin(event.origin)) return;
      if (typeof event.data !== "string" || !event.data.startsWith(RESIZE_PREFIX)) {
        return;
      }
      const raw = event.data.slice(RESIZE_PREFIX.length);
      const px = Number.parseInt(raw, 10);
      if (!Number.isFinite(px) || px < 200) return;
      setHeight(px);
    };

    window.addEventListener("message", onMessage);
    return () => window.removeEventListener("message", onMessage);
  }, []);

  return height;
}
