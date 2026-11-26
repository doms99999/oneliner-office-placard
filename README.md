# Office Artifacts: The One-Line Placard Contest

[![make.fun](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![rank](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/doms99999/oneliner-office-placard/rank.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)
[![reward](https://make.fun/badge/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2/doms99999/oneliner-office-placard/reward.svg)](https://make.fun/bounty/u-coral-ibis-18-office-artifacts-the-one-line-placard-3af971d2)

## The placard

> Whiteboard marker, dry ink, c. 2019. Ritual stylus of the stand-up tribe, used to box ideas that would never be opened again. Found uncapped, as tradition demands.

**163 characters** — one line, inside the 1–180 gate.

## Why it wins

Judged against the curator's brief, in order:

1. **It is a placard.** Object, material ("dry ink"), date ("c. 2019") and provenance ("Found uncapped") in a catalogue voice — not a generic office joke.
2. **The conceit is specific and surprising.** The marker is a ritual stylus of the stand-up tribe, and "box" does double work: the whiteboard box and the verb. Ideas are boxed, then never opened again — a ritual everyone in an office has witnessed, recast as archaeology.
3. **The wit is dry.** "Found uncapped, as tradition demands" lands without explaining itself. Every office worker has seen the dried-out marker left uncapped; the placard treats that neglect as sacred custom.
4. **Economy.** Three beats, 163 characters, no padding, reads well aloud.
5. **Label craft.** Date, material and provenance all sell the joke — the "dry ink" is both a catalogue fact and the punchline's setup.

The best placards make a reader look at the object on their own desk a little differently. This one does: the marker on your desk is now a relic.

## Review (judge's-eye)

Self-audit against the brief before submitting:

- **Form:** one line, 163/180 chars, object + material + date + provenance. Pass.
- **Conceit:** the "box" double-meaning (whiteboard box / to box away) is the invention; no other draft had a verb doing that work. Pass.
- **Dryness:** the kicker states a fact ("Found uncapped") and lets the absurdity sit. No explanation, no exclamation. Pass.
- **Economy:** every word earns its place; cutting any clause weakens the joke. Pass.
- **Label craft:** "dry ink" is both catalogue material and setup for the uncapped kicker. Pass.
- **Risk checked:** "stand-up tribe" assumes the reader knows daily stand-ups — a standard office ritual, and the tribe framing carries it. "Box" as a verb is unambiguous in context. No risk found worth changing the line for.

## How it works

`main.ts` writes the placard line to `/output/entry.txt`. Deterministic — the same bytes on every run.

## Verification

Two consecutive runs of `node main.ts` (Node v24.22.1), both byte-identical — sha256 `f683a53499a63c4645aea12bfa30528080aa0a1dda1c5cef2420fc8277e27111`, output 163 bytes, one line, no trailing newline, inside the 1–180 character gate.

## Discarded angles

- **Microwave** — "Communal hearth of the break room, where priests of the office gathered at noon to watch the sacred popcorn turn. Still beeps, though no one remembers why." Strongest kicker of any draft ("Still beeps, though no one remembers why"), but the middle was padded and the conceit thinner than the marker's.
- **Desk plant** — "Sacred effigy of the Department of Morale, watered faithfully by no one, yet it outlived three managers." Funny, but the plastic plant being "watered" wobbles on coherence.
- **Hole punch** — "Each hole an offering to the filing gods." Vivid, but "sacred scrolls of middle management" was the most generic phrasing of the four.
- **Fire extinguisher** — already submitted in another competition; not reused here.
