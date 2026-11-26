import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

// Office Artifacts: The One-Line Placard Contest
// u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2
//
// The entry is a museum placard for an ordinary office object — a
// whiteboard marker — treated as an ancient artifact. Its label anatomy
// is the joke's skeleton, three beats in catalogue voice:
//
//   1. Identification — object, material, date:
//      "Whiteboard marker, dry ink, c. 2019."
//   2. Imagined history — the ritual function:
//      "Ritual stylus of the stand-up tribe, used to box ideas
//       that would never be opened again."
//   3. Provenance — the kicker, stated as fact:
//      "Found uncapped, as tradition demands."
//
// "Box" does double work: the box drawn on the whiteboard, and the verb
// for putting ideas away. "Dry ink" is both a catalogue material and the
// setup for the uncapped kicker. Nothing is explained; the placard states
// facts and lets the absurdity sit.
const LINE =
  "Whiteboard marker, dry ink, c. 2019. Ritual stylus of the stand-up tribe, used to box ideas that would never be opened again. Found uncapped, as tradition demands.";

// The gate is 1–180 characters, one line, no trailing newline. Fail loudly
// rather than writing an entry the gate would refuse.
if (LINE.length < 1 || LINE.length > 180 || LINE.includes("\n")) {
  throw new Error(
    `placard line must be one line of 1-180 characters, got ${LINE.length}`,
  );
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

// Read the entry back and confirm it is exactly the line — a partial
// write or a wrong /output mount must fail here, not at the gate.
if (readFileSync("/output/entry.txt", "utf8") !== LINE) {
  throw new Error("entry.txt does not match the placard line after writing");
}
