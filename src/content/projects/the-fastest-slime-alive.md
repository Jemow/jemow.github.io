---
title: The fastest slime alive
description: 'Speed Jam #8 - "Flow" / First Game Jam'
pubDate: 2026-03-23
heroImage: ../../assets/TFSACover.png
updatedDate: 2026-03-23
categories: [Game Jams]
engine: Unity
---

## Overview

[Speed Jam #8](https://itch.io/jam/speedjam8) was the first game jam I participated in, a solo entry on itch.io with the theme "Flow" and a 72-hour limit. One special rule of this jam: the game must include a leaderboard, making it competitive between players.

My idea was a 2D platformer where you control a slime, which felt like a natural fit for "Flow" given how fluid slimes are. The gameplay revolves around managing your velocity and sweeping through slopes. To add more creativity for speedruns, I added the **Bumper** mechanic — the player can throw a bumper and choose the direction it bounces them, gaining more *Speed*. I ended up with 5 levels, and while the level design wasn't my best work, I'm really happy with the result for my first game jam!

[Play on itch.io](https://jemow.itch.io/the-fastest-slime-alive)

## Gameplay

<video src="/videos/the-fastest-slime-alive/TFSAGameplay.mp4" controls playsinline></video>

## Tilemap

Building the 5 levels took a long time since I was placing tiles and slopes manually. The frustrating part is that I only discovered [Rule Tiles](https://docs.unity3d.com/Packages/com.unity.2d.tilemap.extras@2.2/manual/RuleTile.html) after the jam, they would have saved me a lot of time. Lesson learned for next time!

## Leaderboard

For the leaderboard I used [Danial Jumagaliyev's Leaderboard Creator](https://danqzq.itch.io/leaderboard-creator), a really simple way to add a leaderboard to a Unity game.

![Leaderboard Creator](/images/the-fastest-slime-alive/leaderboard.png)

## What I learned

- Rule tiles for tilemaps (discovered after the jam)
- Implementing a leaderboard
- First web build with Unity