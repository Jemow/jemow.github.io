---
title: Xquation
description: 'Chili Code Jam #4 - "Grow"'
pubDate: 2026-03-23
heroImage: ../../assets/xquation/xquation.png
updatedDate: 2026-03-23
categories: [Game Jams]
---

## Overview

This is a game made in less than one week for the [Chili Code Jam #4](https://itch.io/jam/-chili-code-jam-4). For this jam I made a fusion between math and a roguelike top-down arena shooter. The key feature is simple: the player can shoot bullets but can also shoot a laser beam, and the particular thing is that the player builds a mathematical function throughout the run, and the laser beam follows that function's trajectory! (I used [Desmos](https://www.desmos.com/calculator) a lot!)

[Play on itch.io](https://jemow.itch.io/xquation)

<img src="/images/xquation/XTan.png" alt="Laser Beam Tan" width="400" />

Between each wave, the player can choose from 3 functions/variables to Add, Subtract, Divide, Multiply, or Compose into their main function, this panel is called the **Function Lab**. X is the main variable, but I also added a variable called **t** for "Time": a value that ping-pongs from -10 to 10, making the laser beam completely chaotic!

<img src="/images/xquation/XT.png" alt="Laser Beam T variable" width="400" />

At the start of the jam I thought the theme was "Wave", and only near the end did I notice on the Discord server that it had been updated to "Grow". A bit unfortunate, but it still fits, a growing mathematical function works!

## Gameplay

- Gameplay 1

<video src="/videos/xquation/XQGameplay1.mp4" controls playsinline></video>

- Gameplay 2

<video src="/videos/xquation/XQGameplay2.mp4" controls playsinline></video>

## Math Functions/Variables

- X
- T
- Constant
- Sin(X)
- Cos(X)
- Tan(X)
- Asin(X)
- Acos(X)
- Atan(X)
- Log(X)
- Sign(X)
- 1/X

## Arithmetic Operations

- \+
- \-
- \*
- /
- Compose (wraps the main function in parentheses)

## Feedback

One piece of feedback I got was to add a preview so players can see what the laser beam will look like before confirming their choice in the Function Lab. I had actually thought of that myself but ran out of time. It would definitely make the game easier to read and more fun to experiment with.

## What I learned

- More math