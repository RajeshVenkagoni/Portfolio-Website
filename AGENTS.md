# AGENTS.md — Rajesh Venkagoni Portfolio Website

This document provides guidance for AI coding agents working on this personal portfolio website.

---

## Project Overview

This is the **personal portfolio website** of Rajesh Goud Venkagoni, a Full-Stack Python Developer. It is a single-page application (SPA) built with React, TypeScript, and Vite. The site showcases five full-stack portfolio projects through an immersive, animation-heavy experience featuring a 3D animated character, GSAP scroll-driven animations, and interactive WebGL elements.

**Key characteristics:**
- Frontend-only static site (no backend API).
- No client-side router — all sections live on one scrollable page.
- Heavy use of GSAP for scroll-triggered animations and text effects.
- A Three.js 3D character model reacts to mouse movement and scroll position.
- A physics-based 3D tech-stack visualization appears in the Work section.

**Live URL:** https://rajesh-venkagoni.vercel.app  
**Author:** Rajesh Goud Venkagoni  
**Target Role:** Full-Stack Python Developer (Django + React)

---

## Technology Stack

| Layer | Technology | Version | Purpose |
|-------|------------|---------|---------|
| **Framework** | React | 18.3.1 | UI library |
| **Language** | TypeScript | 5.5.3 | Type safety |
| **Build Tool** | Vite | 5.4.1 | Dev server & bundler |
| **Animation** | GSAP | 3.14.2 | Core animation engine |
| | gsap/ScrollTrigger | (bundled) | Scroll-driven animations |
| | gsap/ScrollSmoother | (bundled) | Smooth scroll & pinning |
| | gsap/SplitText | (bundled) | Text splitting animations |
| | @gsap/react | 2.1.1 | GSAP React helpers |
| **3D / WebGL** | Three.js | 0.168.0 | Low-level 3D engine |
| | @react-three/fiber | 8.17.10 | React renderer for Three.js |
| | @react-three/drei | 9.120.4 | Three.js helpers |
| | @react-three/rapier | 1.5.0 | Physics engine (tech spheres) |
| | @react-three/postprocessing | 2.16.3 | Post-processing effects (N8AO) |
| | @react-three/cannon | 6.6.0 | Physics (installed, verify usage) |
| | three-stdlib | 2.33.0 | GLTFLoader, DRACOLoader, RGBELoader |
| **Icons** | react-icons | 5.3.0 | Social & UI icons |
| **Marquee** | react-fast-marquee | 1.6.5 | Loading screen text scroll |
| **Analytics** | @vercel/analytics | 1.4.1 | Vercel Web Analytics |
| **Linting** | ESLint | 9.9.0 | Code quality |
| | typescript-eslint | 8.0.1 | TS rules |
| | eslint-plugin-react-hooks | 5.1.0-rc.0 | Hooks rules |
| | eslint-plugin-react-refresh | 0.4.9 | Fast Refresh rules |

> **Important:** GSAP `ScrollSmoother` and `SplitText` are **Club GSAP (paid) plugins**. The project uses `gsap-trial` variants. Do not replace them with standard `gsap` — the plugins will fail.

---

## Project Structure

```
Portfolio-Website-main/
├── public/
│   ├── draco/                     # Draco decoder files (required for GLTF compression)
│   │   ├── draco_decoder.js
│   │   └── draco_decoder.wasm
│   ├── images/                    # Static images & project screenshots
│   │   ├── project1.png … project5.png   # Portfolio project cards
│   │   ├── react2.webp, node2.webp, etc. # Tech-stack sphere textures
│   │   └── preview.png, 1.png     # Portfolio previews
│   └── models/
│       ├── character.enc          # Encrypted 3D character model (AES-CBC)
│       ├── char_enviorment.hdr    # HDR environment map for 3D scene
│       └── encrypt.cjs            # Encryption script (Node.js)
├── src/
│   ├── components/
│   │   ├── Character/             # 3D character scene & utilities
│   │   │   ├── index.tsx          # Entry point (wraps Scene)
│   │   │   ├── Scene.tsx          # Main Three.js scene setup, render loop
│   │   │   ├── exports.ts         # (if any re-exports)
│   │   │   └── utils/
│   │   │       ├── animationUtils.ts   # Bone filtering, intro/typing/hover animations
│   │   │       ├── character.ts        # GLTF loading, Draco, material theming
│   │   │       ├── decrypt.ts          # AES-CBC decryption of character.enc
│   │   │       ├── lighting.ts         # Directional, point, HDR environment setup
│   │   │       ├── mouseUtils.ts       # Mouse/touch → head rotation mapping
│   │   │       └── resizeUtils.ts      # Responsive canvas resize + ScrollTrigger rebuild
│   │   ├── styles/                # Component-specific CSS files
│   │   │   ├── About.css, Career.css, Contact.css, Cursor.css
│   │   │   ├── Landing.css, Loading.css, Navbar.css
│   │   │   ├── SocialIcons.css, WhatIDo.css, Work.css
│   │   │   └── style.css          # Shared hover-link styles
│   │   ├── utils/                 # Cross-component utilities
│   │   │   ├── GsapScroll.ts      # Scroll-driven timelines (character + career)
│   │   │   ├── initialFX.ts       # Post-loading entrance animations (SplitText)
│   │   │   └── splitText.ts       # ScrollTrigger text splitting for .para / .title
│   │   ├── About.tsx              # Bio / professional summary
│   │   ├── Career.tsx             # Education & experience timeline
│   │   ├── Contact.tsx            # Email, social links, copyright
│   │   ├── Cursor.tsx             # Custom cursor with GSAP follow
│   │   ├── HoverLinks.tsx         # Reusable hover-reveal link text
│   │   ├── Landing.tsx            # Hero section (name, title)
│   │   ├── Loading.tsx            # Preloader with progress simulation
│   │   ├── MainContainer.tsx      # Orchestrates all page sections + smooth scroll
│   │   ├── Navbar.tsx             # Fixed nav + ScrollSmoother init
│   │   ├── SocialIcons.tsx        # Sidebar GitHub/LinkedIn + resume button
│   │   ├── TechStack.tsx          # 3D physics simulation with tech logos
│   │   ├── WhatIDo.tsx            # Frontend / Backend skill cards
│   │   ├── Work.tsx               # Project carousel (5 projects)
│   │   └── WorkImage.tsx          # Project image with optional video hover
│   ├── context/
│   │   └── LoadingProvider.tsx    # Global loading state & percent
│   ├── data/
│   │   └── boneData.ts            # Bone names for typing & eyebrow animations
│   ├── App.tsx                    # Root component, lazy loads Character + MainContainer
│   ├── App.css                    # (minimal / unused — styles are component-scoped)
│   ├── index.css                  # Global styles, CSS variables, font import
│   ├── main.tsx                   # React DOM root mount (StrictMode)
│   └── vite-env.d.ts             # Vite client types
├── index.html                     # HTML entry point
├── package.json
├── vite.config.ts                 # Vite + React plugin config
├── tsconfig.json                  # Project references (app + node)
├── tsconfig.app.json              # App TS config
├── tsconfig.node.json             # Vite config TS config
├── eslint.config.js               # ESLint flat config (TS + React Hooks + Refresh)
└── README.md
```

---

## Build and Run Commands

```bash
# Install dependencies
npm install

# Start development server (accessible on all interfaces via --host)
npm run dev

# Type-check and build for production
npm run build

# Lint with ESLint
npm run lint

# Preview production build locally
npm run preview
```

**Development server:** Usually runs on `http://localhost:5173` (Vite default).  
**Production output:** `dist/` directory (standard Vite output).

---

## Architecture & Runtime Flow

### 1. Loading Sequence

1. `main.tsx` mounts `App` inside `StrictMode`.
2. `App.tsx` wraps children in `LoadingProvider`.
3. `LoadingProvider` renders `Loading` overlay while `isLoading === true`.
4. `Loading.tsx` simulates progress (0 → 100%) via `setProgress()`.
5. Meanwhile, `Character/Scene.tsx` asynchronously:
   - Fetches & decrypts `public/models/character.enc` (AES-CBC, password hardcoded).
   - Loads the GLTF via `three-stdlib` GLTFLoader + DRACOLoader.
   - Compiles shaders and adds the character to the scene.
6. Once model loads and progress hits 100%, `Loading` triggers `initialFX()` which:
   - Fades out the loader.
   - Unpauses `ScrollSmoother`.
   - Plays `SplitText` entrance animations on hero text.

### 2. Scroll & Navigation

- `Navbar.tsx` initializes `ScrollSmoother` on `#smooth-wrapper` / `#smooth-content`.
- Nav links use `data-href` attributes; on click, `smoother.scrollTo()` animates to the target section.
- All scroll-triggered animations are defined in:
  - `src/components/utils/GsapScroll.ts` — character camera moves, career timeline reveals.
  - `src/components/utils/splitText.ts` — paragraph and title word/char reveals.

### 3. Responsive Behavior

- **Desktop (>1024px):** 3D character is fixed beside content; `TechStack` physics scene is rendered.
- **Mobile/Tablet (≤1024px):** 3D character is moved inside `Landing`; `TechStack` is hidden.
- Breakpoints also exist at **900px** for font sizes and `SplitText` disabling.

### 4. Custom Cursor

- `Cursor.tsx` creates a div that follows the mouse with GSAP smoothing.
- Elements with `data-cursor="disable"` hide the custom cursor.
- Elements with `data-cursor="icons"` snap the cursor to the element bounds.

---

## Code Organization Conventions

### Component Patterns

- **Functional components** with arrow functions (e.g., `const About = () => …`).
- **Lazy loading** for heavy components: `Character` and `TechStack` are loaded via `React.lazy()` and wrapped in `Suspense`.
- **PropsWithChildren** is used when a component accepts children (e.g., `Landing`, `MainContainer`).
- **CSS is co-located**: each major component has a matching `.css` file in `src/components/styles/`.

### Animation Conventions

- **GSAP plugins must be registered** before use (e.g., `gsap.registerPlugin(ScrollSmoother, ScrollTrigger)`).
- **ScrollTrigger timelines** use `scrub: true` for scroll-scrubbed animations.
- **SplitText** is used extensively; it creates DOM wrappers that must be reverted on resize/unmount to avoid duplication.
- **Bone-based animation** in the 3D character filters `AnimationClip` tracks by bone name arrays defined in `src/data/boneData.ts`.

### 3D Scene Conventions

- The character model file (`character.enc`) is **encrypted at rest** and decrypted client-side using Web Crypto API (`crypto.subtle.decrypt`).
- Draco compression is used; the decoder path is hardcoded to `/draco/` (served from `public/draco/`).
- Materials are cloned and recolored at runtime to match the site theme (shirt → `#8B4513`, pants → `#000000`).
- `frustumCulled = true` is set on all meshes for performance.

### Styling Conventions

- **CSS custom properties** in `:root`:
  - `--accentColor: #5eead4` (teal)
  - `--backgroundColor: #0a0e17` (dark navy)
- **Font:** Geist (loaded from Google Fonts) via `font-optical-sizing`.
- **Global:** `user-select: none`, `-webkit-font-smoothing: antialiased`, `scroll-behavior: smooth`.
- **No CSS framework** (no Tailwind, no styled-components) — plain CSS files.

---

## Asset Management

### Images (`public/images/`)

| File | Used By | Notes |
|------|---------|-------|
| `project1.png` … `project5.png` | `Work.tsx` | Portfolio project card images |
| `react2.webp`, `node2.webp`, etc. | `TechStack.tsx` | Spherical textures for physics scene |
| `preview.png`, `1.png` | README / meta | Portfolio preview screenshots |

### 3D Assets (`public/models/`)

| File | Purpose |
|------|---------|
| `character.enc` | Encrypted GLB/GLTF character model |
| `char_enviorment.hdr` | HDR environment map (RGBELoader) |
| `encrypt.cjs` | Node.js script used to encrypt the model |

> **Do not delete** `public/draco/`, `public/models/char_enviorment.hdr`, or `public/models/character.enc`. The site will fail to load without them.

---

## Content Editing Guide

All portfolio content is **hardcoded in components** (no CMS, no JSON data files). To update:

| Content | File | Location |
|---------|------|----------|
| Name / hero text | `Landing.tsx` | `landing-intro` h1/h2 |
| Professional bio | `About.tsx` | `about-me` paragraph |
| Education & jobs | `Career.tsx` | `career-info-box` blocks |
| Skill tags | `WhatIDo.tsx` | `what-tags` divs inside panels |
| Projects (title, tools, links, images) | `Work.tsx` | `projects` array at top of file |
| Contact info / socials | `Contact.tsx` & `SocialIcons.tsx` | Links and email |
| Resume URL | `SocialIcons.tsx` | `resume-button` href |

---

## Deployment

- **Platform:** Vercel (configured via `@vercel/analytics` import in `main.tsx` — verify presence).
- **Type:** Static site deployment from `dist/` after `npm run build`.
- **No environment variables** are required — the site has no backend API calls.
- **SPA routing:** Not applicable (single page, no router), but standard Vercel rewrites may be added if routing is introduced later.

---

## Testing Strategy

**Current state:** No automated tests are implemented.

**Recommended additions:**
- **Visual regression:** Playwright or Percy for capturing animation-heavy sections.
- **Component tests:** Vitest + React Testing Library for `Work` carousel logic, `Loading` progress state.
- **Accessibility:** axe-core for checking contrast and focus management (custom cursor may hide native focus indicators).

---

## Security Considerations

### Current

- **No sensitive data** in source code (no API keys, no tokens).
- **Encrypted model:** The 3D character is encrypted at rest, but the decryption key (`MyCharacter12`) and algorithm (AES-CBC) are visible in `src/components/Character/utils/decrypt.ts`. This is obfuscation, not strong security.
- **No CSP headers** configured in `index.html` — consider adding `Content-Security-Policy` meta tag if deploying to a custom server.
- **No HTTPS enforcement** in code — relies on hosting platform (Vercel provides HTTPS by default).

### To Consider

- Add `rel="noopener noreferrer"` to all external links (partially present; audit for completeness).
- Add `aria-label` attributes to icon-only buttons for screen readers.
- The custom cursor disables native pointer visibility on `data-cursor="disable"` elements — ensure keyboard focus outlines remain visible.

---

## Important Notes for Agents

1. **GSAP Club Plugins:** This project relies on `ScrollSmoother` and `SplitText`. These are paid GSAP Club plugins. If you see import errors, ensure the installed `gsap` package includes the trial/bundled plugins. Do not attempt to install them separately from npm — they are not published publicly.

2. **Character Model Encryption:** If you need to swap the 3D character, you must either:
   - Re-encrypt the new model using the same AES-CBC key and update `character.ts`.
   - Or remove encryption entirely by loading a plain `.glb`/`.gltf` file.

3. **Performance:** The site runs two WebGL contexts simultaneously on desktop:
   - One in `Character/Scene.tsx` (raw Three.js renderer).
   - One in `TechStack.tsx` (`@react-three/fiber` Canvas).
   Be mindful of GPU memory when adding new 3D elements.

4. **ScrollTrigger Refresh:** After any DOM mutation that changes section heights, call `ScrollTrigger.refresh()` (or `ScrollSmoother.refresh(true)`) to recalculate scroll positions.

5. **Build Warnings:** `tsc -b` in the build script may emit warnings about `any` types or unused variables. The project currently does not treat these as fatal errors, but keeping TypeScript strict is encouraged for new code.

---

## Contact

**Developer:** Rajesh Goud Venkagoni  
**Email:** Venkagonirajeshgoud@gmail.com  
**GitHub:** https://github.com/RajeshVenkagoni  
**LinkedIn:** https://www.linkedin.com/in/RajeshVenkagoni
