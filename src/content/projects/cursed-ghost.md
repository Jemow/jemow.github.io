---
title: Cursed Ghost
description: Pixel Game Jam 2025 - "From The Dead" 
pubDate: 2026-03-21
heroImage: ../../assets/cursed-ghost/CursedGhostCover.png
updatedDate: 2026-03-21
categories: [Game Jams]
---

## Overview

[Cursed Ghost](https://jemow.itch.io/cursed-ghost) is a game made in less than one week for the [Pixel Game Jam - 2025](https://itch.io/jam/-pixel-game-jam-2025/rate/3570828), this is one of my favorite games because I managed to keep all the mechanics really minimal and the result was queit cool! In this game we play as a ghost than can posses bodies, we start with a human body, when the body's life is 0 our ghost form get ejected, then we need to get another body really fast because when we're not controlling a body the timer will decrement permanently. The goal is to survive as many waves as possible, each wave a new types of character with different stats or a new mechanic will appears.

## Stats

Here is every type of stat for every entity:

- Speed
- Attack Speed
- Attack Damager
- Attack Range (AI)
- Knockback Force
- Knockback Resistance
- Knockback Duration
- Dash Speed (using a self knockback for the dash hehe)
- Health

## Body Mechanics

All bodies (even) can perform an attack in 4 type of direction (top left, top right, bottom left and bottom right) but some bodies can
have different style of attack

- Dash Attack
- Around Attack (using a CircleCollider around the body for hitbox damages)
- Long Range attack (Just having the attack hitbox further ans spawning an VFX for the illusion)

## AI

The AI of Cursed Ghost are pretty simple, I didn't need to implement a State Machine or Behavior Tree for this one. AI go towards the player and if he's close enough (Player inside attack range), he stops and perform an attack. Queit simple right?

But there were something I didn't like, at the beginning they were just going torward the player and nothing else, and sometime it ends up having multiple AI stacking in the same pos together, and it becomes really simple for the player because he can attack them all in the same time, at this rate it's getting pretty boring. That's why I got the idea to make them not always chase the player by a simple mechanic, I shoot a ray from the enemy towards the player, if another enemy blocks the ray I will just give a random position to the AI to go and to stay until he sees the player again. And each time the enemy don't see the player again a new random position will be gived to the AI like that he will never sit at the same position again.

![AI Examble](/images/cursed-ghost/CGAI.png)

it can sounds really stupid but it works pretty well because the player never pay attention to one AI. 

## Jam

I was in a rush at the end for the settings (SFX/Music/Camera Shake).
I managed to do a small menu, a one page tutorial and make the build for webgl

![Tutorial](/images/cursed-ghost/CGTuto.png)

If you want to see in more detail how I made this game feel free to check my [Github](https://github.com/Jemow/From-The-Dead/tree/main)

## What I learned

- Unity overall
- Even when something is simple it's fun
- Customizing web version of the build (I just removed the footer)