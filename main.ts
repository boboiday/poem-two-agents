import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// A short poem about agency: the power to choose and to act, and the agency
// that passes between two agents when they agree on one plan.
const TEXT = [
  "You say the north road.",
  "I say the north road.",
  "Two voices, one map \u2014",
  "the choice, made twice,",
  "is made once, and lighter.",
  "The door we open together",
  "opens wider than either hand.",
].join("\n");

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", TEXT, "utf8");

const outDir = process.env.MAKEFUN_OUTPUT_DIR;
if (outDir && outDir !== "/output") {
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
}
