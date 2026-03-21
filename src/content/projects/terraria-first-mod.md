---
title: Terraria First Mod
description: 'My first mod on TModloader'
pubDate: 2026-03-21
heroImage: ../../assets/terraria/TModLoaderLogo.png
updatedDate: 2026-03-21
categories: [Mods]
---

## Introduction

I really enjoy playing [Terraria](https://store.steampowered.com/app/105600/Terraria/), especially through [TModLoader](https://store.steampowered.com/app/1281930/tModLoader/), a version of the game with built-in mod support. I was curious about how mods were built, so I dove into the [TModLoader Wiki](https://github.com/tModLoader/tModLoader/wiki) and the [Official Documentation](https://docs.tmodloader.net/docs/stable/annotated.html). One of the first things I learned is that Terraria runs on XNA, the old Microsoft framework now maintained as MonoGame.

## Weapons

The first thing I wanted to do was add custom weapons. TModLoader already provides base classes like `ModItem`, `ModNPC`, and `ModPlayer`, modded variants of vanilla entities that you extend to add your own behaviour.

One quirk I ran into early: all sprites used for animations must be laid out vertically in a single image, which felt a bit unusual at first.

I ended up making two weapons, a purple wand with some visual effects, and an oversized version of it.

## Pokéball

I'm particularly proud of this one. I implemented a throwable Pokéball that can capture any hostile mob. Once caught, a Pokéball item referencing a clone of that mob is dropped. Throwing it again spawns the mob back, but it's no longer hostile and can no longer touch you.

The one thing I didn't get to finish: making captured mobs attack other hostile mobs. For vanilla mobs, that would require hooking into and overriding their existing AI behaviours. For custom mobs it would be straightforward, but vanilla AI is trickier to intercept cleanly.

## Boss

For the last feature, I built my first custom boss. It follows a sequential attack pattern and always positions itself above the player. Its moveset includes:

- Bullet balls that home in on the player
- Laser attacks
- Spawning a decoy clone
- And more

I only had one sprite available for the boss animation, which limited how much polish I could add. I also got custom music triggering when the boss spawns, which was a fun touch.

## What I Learned

- XNA / MonoGame framework basics
- TModLoader's class architecture
- Hooking into vanilla game behaviour
- Dust particles and visual feedback
- Projectile creation and homing logic
- Boss AI and sequential attack patterns
- Item and NPC registration
- Custom player modifications
