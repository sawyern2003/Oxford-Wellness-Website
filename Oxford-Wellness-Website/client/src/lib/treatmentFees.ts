/** Lowest £ amount found in the given fee strings, or null if none. */
export function lowestPoundAmount(...sources: string[]): string | null {
  const amounts: number[] = [];
  for (const source of sources) {
    for (const match of source.matchAll(/£\s*([\d,]+(?:\.\d+)?)/g)) {
      amounts.push(Number(match[1].replace(/,/g, "")));
    }
  }
  if (!amounts.length) return null;
  const lowest = Math.min(...amounts);
  return Number.isInteger(lowest) ? `£${lowest}` : `£${lowest.toFixed(2)}`;
}

/**
 * Single fee line for treatment detail pages: "From £X" or "Price on consultation".
 */
export function formatTreatmentFromFee(sources: string[]): string {
  const cleaned = sources.map((s) => s.trim()).filter(Boolean);
  if (!cleaned.length) return "Price on consultation";
  if (cleaned.every((s) => /price on consultation/i.test(s))) {
    return "Price on consultation";
  }
  const lowest = lowestPoundAmount(...cleaned);
  if (!lowest) return "Price on consultation";
  return `From ${lowest}`;
}
