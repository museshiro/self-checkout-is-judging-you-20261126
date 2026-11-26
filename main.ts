// The Self-Checkout Is Judging You — entry program.
// Writes one judgmental line from a smug self-checkout machine
// to /output/entry.txt and nothing else.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Twelve yoghurts, no spoon, no plan. I've logged 'fermented hope' on your loyalty card — and yes, the ice cream already knows.";

// The gate allows 1–200 characters on a single line. Fail loudly instead
// of ever writing an over-long line.
if (LINE.length < 1 || LINE.length > 200 || LINE.includes("\n")) {
  throw new Error(`entry line must be 1-200 chars on one line, got ${LINE.length}`);
}

try {
  mkdirSync("/output", { recursive: true });
} catch {
  // /output already exists in the grader sandbox; ignore.
}
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
