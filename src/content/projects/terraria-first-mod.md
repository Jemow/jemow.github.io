---
title: Terraria First Mod
description: 'My first mod on TModloader'
pubDate: 2026-03-21
heroImage: ../../assets/terraria/TModLoaderLogo.png
updatedDate: 2026-03-21
categories: [Mods]
---

## Overview

My first dive into [TModLoader](https://store.steampowered.com/app/1281930/tModLoader/) modding for [Terraria](https://store.steampowered.com/app/105600/Terraria/). I explored the [Wiki](https://github.com/tModLoader/tModLoader/wiki) and [Official Documentation](https://docs.tmodloader.net/docs/stable/annotated.html), built three features from scratch — a Pokéball capture system, a custom boss, and new weapons — and learned how the game's XNA/MonoGame architecture works under the hood.

## Boss

My first custom boss, with a sequential attack pattern that always keeps it flying above the player. Its moveset includes:

- Bullet balls that home in on the player
- Laser attacks
- Spawning a decoy clone
- And more

I only had one sprite for the animation, which limited the polish. I also got custom music triggering on spawn, which was a fun touch.

<video src="/videos/TModBoss.mp4" controls playsinline></video>

## Pokéball

The feature I like the most. I implemented a throwable Pokéball that can capture any hostile mob. Once caught, a Pokéball item referencing a clone of that mob is dropped. Throwing it again spawns the mob back — no longer hostile and unable to touch you.

<video src="/videos/Pokeball1.mp4" controls playsinline></video>

The one thing I didn't finish: making captured mobs attack other hostile mobs. For vanilla mobs that would require hooking into their existing AI to override targeting logic — trickier than it sounds. For custom mobs it would be straightforward since you control the AI from scratch.

<video src="/videos/Pokeball2.mp4" controls playsinline></video>

## Weapons

A good starting point for learning the basics. TModLoader provides base classes like `ModItem`, `ModNPC`, and `ModPlayer` — modded variants of vanilla entities you extend to add your own behaviour.

One quirk: all animation sprites must be stacked vertically in a single image. I made a few weapons, a purple wand with visual effects, an oversized fast sword for fun, and one that spawns an explosion at the mouse position.

<div style="display:flex; gap:12px;">
  <img src="/images/terraria/TModWeapons1.gif" alt="Swords Demonstration" style="width:50%; max-width:100%;" />
  <img src="/images/terraria/TModWeapons2.gif" alt="Explosion Demonstration" style="width:50%; max-width:100%;" />
</div>

## What I Learned

- XNA / MonoGame framework basics
- TModLoader's class architecture
- Hooking into vanilla game behaviour
- Dust particles and visual feedback
- Projectile creation and homing logic
- Boss AI and sequential attack patterns
- Item and NPC registration
- Custom player modifications