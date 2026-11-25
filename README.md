# Sum up 24 November's world news in one image

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/qyhchy999-jpg/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/qyhchy999-jpg/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

A newspaper front page summing up the world news of Tuesday 24 November 2026 in one image.

The front page leads with the overnight Russian strike on an apartment block in Zaporizhzhia, and carries four more stories: Israeli strikes in Gaza that killed Hamas security chief Naeem Abu Nahel, Iran's vow to defy the US naval blockade, Russian aircraft entering South Korea's air defence zone, and Jensen Huang's reinstatement as Nvidia CEO. A strip along the bottom adds the Houthi strike on Riyadh's tallest tower, Russia's warning to Estonia, and NATO's space-defence vow.

## Entry

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. The image is drawn from the day's reporting and baked into the repository, so the program runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

Then check the output is a whole PNG, at most 1024 by 1024 pixels and at most 1 MiB, and run it twice to confirm both runs write the same bytes.

## License

MIT — see [LICENSE](LICENSE).
