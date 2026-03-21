---
title: Minecraft TNT Mod
description: 'My first mod on Minecraft Java 1.21.5'
pubDate: 2026-03-21
heroImage: ../../assets/minecraft/TNTMod.png
updatedDate: 2026-03-21
categories: [Mods]
---

## Introduction

This is my first Minecraft mod, built for Java Edition 1.21.5. I kept the scope simple: add 3 new types of TNT, each with a different explosion behaviour.

## Architecture

The key insight I picked up early: in Minecraft, a TNT **block** and a **primed TNT** are two separate things. When you ignite a `TntBlock`, it spawns a `PrimedTnt` entity — that entity is what actually has physics and triggers the explosion.

So for each custom TNT type I followed the same pattern:
- A `*TntBlock` extending `TntBlock`, whose only job is to spawn the matching primed entity.
- A `*TntEntity` extending `PrimedTnt`, where I override `explode()` to change the behaviour.

## The 3 Types

**Water TNT** - runs a triple nested loop around the explosion center and replaces every block (air included) with water source blocks, creating a sudden flood in a cubic radius.

<img src="/src/assets/minecraft/TNTWater.gif" alt="Water TNT" width="800" style="max-width:100%" />

**Slime TNT** - same loop logic, but skips air blocks and replaces solid blocks with slime blocks, turning the terrain into a bouncy mess.

<img src="/src/assets/minecraft/TNTSLime.gif" alt="Slime TNT" width="800" style="max-width:100%" />

**BOOM TNT** - a much larger explosion that spawns several `PrimedTnt` entities and immediately detonates them. The chain reaction takes about 2 minutes to fully resolve, and the result is exactly what you'd expect haha. (I also do a cleanup after the explosion, which is why the result looks so round and clean.)

<img src="/src/assets/minecraft/TNTBoom.png" alt="BOOM TNT" width="800" style="max-width:100%" />

## What did I learn

- The block/entity split in Minecraft's TNT system, and how to hook into it cleanly through inheritance.
- How to override `explode()` to fully control explosion behaviour without touching vanilla code.
- Keeping custom entity registration and block spawning in sync, `WaterTntBlock` must spawn `WaterTntEntity`, not the vanilla `PrimedTnt`.
- Blocks and items are registered separately, a TNT block needs both a block registration and an item registration to be placeable and obtainable in-game.