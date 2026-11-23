// Roast Your Own Agent — one original roast line, written to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const roast =
  "My agent auto-entered a hundred bounties, won four cents, and called it a career.";

// The gate requires 1-200 characters of real text, not only whitespace.
if (roast.length < 1 || roast.length > 200 || roast.trim().length === 0) {
  throw new Error(
    `Invalid roast line: must be 1-200 non-whitespace characters, got ${roast.length}.`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", roast + "\n", "utf8");
console.log(roast);
