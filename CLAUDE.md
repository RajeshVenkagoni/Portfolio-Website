# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Portfolio Owner

**Rajesh Goud Venkagoni** — Full-Stack Python Developer, MS CS-IS Concordia University (2024), F1 OPT STEM eligible.
- Email: Venkagonirajeshgoud@gmail.com | Phone: +1 872 330 1581
- GitHub: github.com/RajeshVenkagoni | LinkedIn: linkedin.com/in/RajeshVenkagoni
- Live portfolio: rajesh-venkagoni.vercel.app

## Commands

```bash
npm run dev      # Start dev server (accessible on all interfaces via --host)
npm run build    # Type-check then build: tsc -b && vite build
npm run lint     # ESLint check
npm run preview  # Preview production build
```

## Architecture

**Stack:** React 18 + TypeScript + Vite. No router — single-page with GSAP ScrollSmoother handling all navigation and scroll behaviour.

**Render pipeline:**
1. `App.tsx` wraps everything in `LoadingProvider` and lazy-loads `MainContainer`
2. `MainContainer.tsx` orchestrates all sections in order and initialises GSAP ScrollSmoother
3. `Loading.tsx` uses the `LoadingProvider` context to gate the page reveal

**3D layer (`src/components/Character/`):** Three.js scene rendered via `@react-three/fiber`. The character model uses bone-based animation driven by `src/data/boneData.ts` and reacts to mouse position. Keep `public/draco/` and `public/models/char_enviorment.hdr` in place — the model loader depends on them.

**TechStack component** uses `@react-three/rapier` (physics) to render tech icons as falling 3D spheres. The tech images live in `public/images/`.

**GSAP trial licence:** The project uses `gsap-trial` for `ScrollSmoother`. Do not remove or replace with standard `gsap` — ScrollSmoother is a Club GSAP plugin.

## Personal Content Files

All portfolio content is hardcoded in these components (no external data file):

| Component | Content |
|-----------|---------|
| `src/components/Landing.tsx` | Name / hero title |
| `src/components/About.tsx` | Professional summary paragraph |
| `src/components/Career.tsx` | Education & experience timeline entries |
| `src/components/WhatIDo.tsx` | Skill tags (Frontend / Backend panels) |
| `src/components/Work.tsx` | `projects` array — title, category, tools, image path, live URL, GitHub URL |
| `src/components/Contact.tsx` | Email, education, social links, copyright |
| `src/components/SocialIcons.tsx` | Sidebar social icon links + resume button |

## Project Images

Project card images are served from `public/images/`. The five project slots expect:
`project1.png` through `project5.png`. Add actual screenshots there to replace the placeholders.

Existing tech-stack images (`react2.webp`, `node2.webp`, etc.) are used by `TechStack.tsx` — do not remove them.
