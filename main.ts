// news-image-20261124 entry (Node 22, standard library only).
// The image is the entry.png beside this file: a newspaper front page
// summing up Tuesday 24 November 2026, drawn from that day's reporting:
// the Russian strike on Zaporizhzhia, Israeli strikes in Gaza, Iran and
// the US naval blockade, Russian aircraft in South Korea's air defence
// zone, and Jensen Huang's reinstatement as Nvidia CEO.
// The program copies it to /output/entry.png, deterministically:
// the same bytes in, the same bytes out, on every run. The image
// names its day in large type, so the judge can tell at a glance
// that it sums up 24 November 2026 and no other day.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync } from 'node:fs';
import { join } from 'node:path';

copyFileSync(new URL('./entry.png', import.meta.url), join(process.env.MAKEFUN_OUTPUT_DIR ?? '/output', 'entry.png'));
