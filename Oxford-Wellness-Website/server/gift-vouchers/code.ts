import { createHash } from "crypto";

/** Unambiguous alphabet (no 0/O/1/I/L). */
const ALPHABET = "23456789ABCDEFGHJKMNPQRSTUVWXYZ";

/** Deterministic OWD-XXXX-XXXX from SumUp checkout id (idempotent re-issue). */
export function voucherCodeFromCheckoutId(checkoutId: string): string {
  const digest = createHash("sha256").update(`owd-gv:${checkoutId}`).digest();
  let out = "";
  for (let i = 0; i < 8; i++) {
    out += ALPHABET[digest[i] % ALPHABET.length];
  }
  return `OWD-${out.slice(0, 4)}-${out.slice(4, 8)}`;
}
