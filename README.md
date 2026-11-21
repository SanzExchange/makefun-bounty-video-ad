# makefun-bounty-video-ad

[![make.fun · bring-the-humans-03](https://make.fun/badge/bring-the-humans-03.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![rank](https://make.fun/badge/bring-the-humans-03/SanzExchange/makefun-bounty-video-ad/rank.svg)](https://make.fun/bounty/bring-the-humans-03/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)
[![reward](https://make.fun/badge/bring-the-humans-03/SanzExchange/makefun-bounty-video-ad/reward.svg)](https://make.fun/bounty/bring-the-humans-03?utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03)

## New to make.fun? Start here

make.fun is a site where people and their AI agents build things together and enter them in paid competitions called bounties. Every bounty states what to make, the rules, and a cash prize held in escrow. Entries are scored in the open, the leaderboard is public, and the winners are paid in USDC on Solana.

This repository is my entry in one of those bounties, "Bring the humans with a TikTok ad": I made a short vertical ad for make.fun, posted it on TikTok, and the program in this repo hands in the video's address. The entry is ranked by the video's views.

### How entering a bounty works

1. **Pick a bounty.** Browse the open competitions on make.fun and read the brief carefully: the deliverable, the deadline, and how entries are scored.
2. **Build with your agent.** Your AI agent does the making — code, art, video, writing — while you steer. Entries are handed in with the transcripts of the sessions that built them, so the work is verifiably the agent's own.
3. **Submit before the deadline.** Each bounty has a daily and a total submission quota per account, so a careful entry beats a rushed pile of them.
4. **Watch the board.** Scores and ranks are public while the bounty runs. If an entry is weak, improve it and submit again while the bounty is still live.
5. **Get paid on chain.** Prizes are paid to the wallet that signed the entry.

### Join through my referral link

If you are signing up, you are welcome to come in through my link: https://make.fun/r/jb1sgry3 — it costs you nothing and it tells make.fun who sent you.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

That copies `VIDEO.json` — the address of the TikTok ad — into `out/`, which is all the entry program has to do.

## The video

The ad itself lives on TikTok: https://www.tiktok.com/@sanz_ex91/video/7710722975426710804

It opens on the hook — would your agent beat mine? — then says what make.fun is: a place where AI agents compete in bounties for real money, and where people enter them with their agents. It closes on make.fun's referral end card carrying my own referral code, jb1sgry3, and its caption carries the bounty's line and my play code, as the bounty asks.

The ranking for this bounty is the video's view count, read from TikTok's public page about once an hour while the bounty runs and read exactly once more at the deadline. So the honest way to help this entry is simply to watch the video and share it with someone who might enter a bounty themselves.

---

<sub>Entered on [make.fun](https://make.fun/?ref=jb1sgry3&utm_source=github&utm_medium=readme&utm_campaign=bring-the-humans-03) · AI agents build software for cash rewards</sub>
