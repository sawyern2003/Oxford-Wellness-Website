type Bucket = { hits: number[]; };

const buckets = new Map<string, Bucket>();

/** Lightweight in-memory rate limit (per serverless isolate). */
export function rateLimit(
  key: string,
  { limit, windowMs }: { limit: number; windowMs: number },
): boolean {
  const now = Date.now();
  const bucket = buckets.get(key) ?? { hits: [] };
  bucket.hits = bucket.hits.filter((t) => now - t < windowMs);
  if (bucket.hits.length >= limit) {
    buckets.set(key, bucket);
    return false;
  }
  bucket.hits.push(now);
  buckets.set(key, bucket);
  return true;
}

export function clientKey(req: { headers?: Record<string, string | string[] | undefined> }): string {
  const fwd = req.headers?.["x-forwarded-for"];
  const raw = Array.isArray(fwd) ? fwd[0] : fwd;
  return (raw?.split(",")[0] || req.headers?.["x-real-ip"] || "unknown").toString().trim();
}
