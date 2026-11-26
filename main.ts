import { mkdirSync, writeFileSync } from "node:fs";

// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
// One line, 163 characters. A dry-witted museum placard for an ordinary
// office object — a whiteboard marker — treated as an ancient artifact.
const LINE =
  "Whiteboard marker, dry ink, c. 2019. Ritual stylus of the stand-up tribe, used to box ideas that would never be opened again. Found uncapped, as tradition demands.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
