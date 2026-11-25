// Entry for "Sum up 24 November's world news in one image" (make.fun).
//
// The entry is a newspaper front page, entry.png, drawn from the
// reporting of Tuesday 24 November 2026 and baked into this repository:
// the Russian strike on Zaporizhzhia, Israeli strikes in Gaza, Iran
// and the US naval blockade, Russian jets in South Korea's air
// defence zone, Jensen Huang's return as Nvidia CEO, and the Houthi
// strike on Riyadh's tallest tower, plus Russia's warning to Estonia
// and NATO's space-defence vow.
//
// The program needs no network. It simply places the finished image
// where the grader expects it, so running it twice always writes
// exactly the same bytes.
//
// Local run:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outDir, { recursive: true });
writeFileSync(
  join(outDir, 'entry.png'),
  readFileSync(join(here, 'entry.png')),
);
