---
title: Cursed Ghost
description: Pixel Game Jam 2025 - "From The Dead"
pubDate: 2026-03-21
heroImage: ../../assets/cursed-ghost/CursedGhostCover.png
updatedDate: 2026-03-21
categories: [Game Jams]
---

## Overview

[Cursed Ghost](https://jemow.itch.io/cursed-ghost) is a top-down 2D game made in less than one week for the [Pixel Game Jam - 2025](https://itch.io/jam/-pixel-game-jam-2025/rate/3570828), this is one of my favorite games because I managed to keep all the mechanics really minimal and the result was quite cool! In this game we play as a ghost that can possess bodies, we start with a human body, when the body's health reaches 0 our ghost form gets ejected, then we need to find another body really fast because when we're not controlling one the timer decrements permanently. The goal is to survive as many waves as possible, each wave a new type of character with different stats or a new mechanic will appear.

## Gameplay

(The body possessed by the Player has a grayscale filter)

- Gameplay 1

<video src="/videos/cursed-ghost/CG1.mp4" controls playsinline></video>

- Gameplay 2

<video src="/videos/cursed-ghost/CG2.mp4" controls playsinline></video>

## Stats

Here is every type of stat for every entity:

- Speed
- Attack Speed
- Attack Damage
- Attack Range (AI)
- Knockback Force
- Knockback Resistance
- Knockback Duration
- Dash Speed (using a self knockback for the dash hehe)
- Health

## Body Mechanics

All bodies can perform an attack in 4 directions (top left, top right, bottom left and bottom right) but some bodies can have a different style of attack:

- Dash Attack
- Around Attack (using a CircleCollider around the body for hitbox damage)
- Long Range Attack (just extending the attack hitbox further and spawning a VFX for the illusion)

## AI

The AI in Cursed Ghost is pretty simple, I didn't need to implement a State Machine or Behavior Tree for this one. The AI goes towards the player and if it's close enough (player inside attack range), it stops and performs an attack. Quite simple right?

But there was something I didn't like, at the beginning they were just going towards the player and nothing else, and sometimes multiple AIs would stack on top of each other. It becomes really easy for the player because they can hit them all at the same time, which gets pretty boring fast. That's why I got the idea to stop them from always chasing the player directly: I shoot a ray from the enemy towards the player, and if another enemy blocks the ray, I give the AI a random position to move to and stay at until it sees the player again. Each time the enemy loses sight of the player a new random position is assigned, so it never just sits in the same spot.

![AI Example](/images/cursed-ghost/CGAI.png)

It can sound really stupid but it works pretty well because the player never pays attention to any single AI.

## Jam's end

In the last stretch I was mostly rushing to get everything wrapped up, settings (SFX, Music, Camera Shake), a small menu, a one-page tutorial, and the WebGL build.

![Tutorial](/images/cursed-ghost/CGTuto.png)

## Conclusion

I'm really happy about the result, that was a fun Jam to participate!
If you want to see in more detail how I made this game, feel free to check my [Github](https://github.com/Jemow/From-The-Dead/tree/main)

## What I Learned

- Unity overall
- Even when something is simple it can works pretty well
- Customizing the web version of the build (I just removed the footer)