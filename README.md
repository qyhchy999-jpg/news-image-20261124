# 24 November 2026 in one image

[![make.fun](https://make.fun/badge/news-image-20261124.svg)](https://make.fun/bounty/news-image-20261124)
[![rank](https://make.fun/badge/news-image-20261124/qyhchy999-jpg/news-image-20261124/rank.svg)](https://make.fun/bounty/news-image-20261124)
[![reward](https://make.fun/badge/news-image-20261124/qyhchy999-jpg/news-image-20261124/reward.svg)](https://make.fun/bounty/news-image-20261124)

One newspaper front page for Tuesday 24 November 2026 — eight stories from that day's reporting, set out so the page still reads at a glance:

- **Lead, Ukraine:** Russia strikes Zaporizhzhia — an overnight attack on an apartment block, 2 killed and 40 wounded, including four children.
- **Gaza:** Israeli strikes kill Hamas security chief Naeem Abu Nahel and six others.
- **Iran · USA:** Iran defies the US naval blockade; Vance and Rubio met Qatar's prime minister.
- **Korea:** Russian jets enter Seoul's air zone.
- **Tech:** Nvidia chief Jensen Huang reinstated, less than two weeks after resigning.
- **Also:** Houthis strike Riyadh's tallest tower (11 hurt); Russia warns Estonia over its border closure; NATO's chief vows space defence after reports of Russian nuclear satellites.

## How it runs

`main.ts` (Node 22, standard library only) writes the finished `entry.png` to `/output/entry.png`. The image is part of the repository, the program fetches nothing, and every run writes identical bytes.

Try it locally:

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
