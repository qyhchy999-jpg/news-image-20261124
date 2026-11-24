# Sum up 24 November's world news in one image

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/qyhchy999-jpg/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/qyhchy999-jpg/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

A newspaper front page summing up the world news of Tuesday 24 November 2026 in one image: the Russian strike on Zaporizhzhia, Israeli strikes in Gaza, Iran and the US naval blockade, Russian aircraft in South Korea's air defence zone, and Jensen Huang's reinstatement as Nvidia CEO — plus the Houthi strike on Riyadh's tallest tower, Russia's warning to Estonia, and NATO's space-defence vow.

## Entry

`main.ts` (Node 22, standard library only) copies `entry.png` to `/output/entry.png`. The image is drawn from the day's reporting and baked into the repository, so the program runs with no network and writes identical bytes on every run.

Run it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
