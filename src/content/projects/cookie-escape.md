---
title: Cookie Escape
description: Brackeys Game Jam 2025.2 - "Risk it for the Biscuit" / First team project
pubDate: 2026-03-23
heroImage: ../../assets/CECover.jpg
updatedDate: 2026-03-23
categories: [Game Jams]
---

## Overview

This game was made in one week for the [Brackeys Game Jam 2025.2](https://itch.io/jam/brackeys-14) — and my first time working in a team to make a game! I found the team in the itch.io *Community* section and we formed a team of 4: 2 programmers (me included), 1 music/SFX designer, and 1 artist.

You play as a cookie trying to escape a room before getting eaten by kids, adults, or dogs. Between rooms you enter a HUB where you can buy upgrades or switch cookie types. You can also sacrifice some of your health to throw a crumb and distract enemies!

On my side I handled the 3C (movement, health, biscuit separation/reconstitution, and the throw crumb mechanic), player feedback (particles, camera shake, signs), AI (Kid, Adult, and Dog), asset integration, level design (I tried), level building (tilemap, level manager, key-door system), the money system, and the upgrade system (speed, max health, crumble resistance). For the UI I displayed the health bar and money counter with a feedback animation on pickup. One bug we caught too late: player health wasn't refilling between levels, and the max health upgrade accidentally acted as a heal, not ideal, but too late to fix before the deadline!

Overall, working in a team was harder than I expected, but it was a great experience.

[Play on itch.io](https://jemow.itch.io/cookie-escape)

## Gameplay

<video src="/videos/cookie-escape/CEGameplay.mp4" controls playsinline></video>

## Cookie Types

- **Oreo** - A balanced playstyle with solid speed and health.
- **Toxic Biscuit** - Poisons enemies and kills them over time, but costs more health when throwing crumbs.
- **Chocolate Biscuit** - Much faster, but with 30% less health. Perfect for speed enthusiasts.

## Upgrades

- Speed
- Max Health
- Crumble Resistance

## Unity Version Control

The other programmer introduced me to Unity Version Control during this jam. I was surprised by how smooth it was to collaborate with it!

## What I learned

- Unity Version Control
- Working in a team
- Integrating assets from a sound designer and artist