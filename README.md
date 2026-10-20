# Muhammad Talha Khan · Portfolio

[![Test and deploy](https://github.com/MuhammadTalhakhan2003/PortFolio_Talha/actions/workflows/deploy.yml/badge.svg)](https://github.com/MuhammadTalhakhan2003/PortFolio_Talha/actions/workflows/deploy.yml)

Portfolio of **Muhammad Talha Khan**, Full Stack Software Engineer (Node.js · MERN · real-time systems · AI integrations).

**Live:** https://muhammadtalhakhan2003.github.io/PortFolio_Talha/

Featuring **[FileFlip](https://fileflip-gules.vercel.app/)**, a free toolkit of 61 PDF and image tools ([code](https://github.com/MuhammadTalhakhan2003/fileflip)), plus [Paperly](https://github.com/MuhammadTalhakhan2003/Paperly), [Hifazat](https://github.com/MuhammadTalhakhan2003/Hifazat-FYP) and Chatley.ai.

Open it in a specific theme: `?theme=light`, `?theme=dark`, `?theme=terminal` or `?theme=mughal`.

---|---|
| Recruiters | https://muhammadtalhakhan2003.github.io/PortFolio_Talha/ |
| Founders and CEOs | https://muhammadtalhakhan2003.github.io/PortFolio_Talha/?for=ceo |
| Clients | https://muhammadtalhakhan2003.github.io/PortFolio_Talha/?for=client |

---

## Stack

| Area | Choice |
|---|---|
| UI | React 19, TypeScript (strict) |
| Build | Vite |
| Tests | Vitest, Testing Library, jsdom (unit and component tests) |
| Lint | oxlint |
| Forms | Formspree JSON API, with honeypot and client-side validation |
| CI/CD | GitHub Actions: typecheck, lint, test and build on every push and pull request; deploy to GitHub Pages from `main` |

## Features

- **Four themes.** Paper, Midnight, Terminal and Mughal (emerald and gold, with a jaali lattice). Switching grows the new theme out of the click with the View Transitions API. `?theme=` links preset one.
- **Command menu.** ⌘K / Ctrl+K (or `/`) to jump to a section, switch theme, open a project or copy contact details. `T` cycles themes.
- **Product launch spotlight** for FileFlip, with a theme-matched screenshot, stats, features and links to the live app and the source.
- **Stack check.** Paste a job post or project brief and every technology in it is checked against where Talha has used it. Gaps are listed, not hidden. Runs entirely in the browser.
- **Computed durations.** Role lengths and total experience are calculated from start and end months, so they never go stale.
- **Contact form** that posts to Formspree with field validation, a spam honeypot and clear success and error states.
- Scroll reveals, a pointer spotlight on cards, keyboard focus states, reduced-motion support, and SEO metadata with Open Graph and JSON-LD.

## Project structure

```
src/
  App.tsx                 page composition
  components/             Hero, Experience, Services, Projects, Skills, FitCheck, Contact, ...
  data/profile.ts         all page content, typed
  hooks/                  useAudience, useTheme, useScrollSpy
  lib/                    matcher, duration, contact (each with tests)
  styles/global.css       design tokens and layout
public/images/            portrait, project screenshots, résumé PDF, link preview card
design/originals/         full-size source images (not deployed)
.github/workflows/        CI and GitHub Pages deploy
```

To change content, edit `src/data/profile.ts`. TypeScript flags any missing fields.

## Run locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # http://localhost:5173/PortFolio_Talha/
npm test           # 22 tests
npm run lint
npm run build      # production build in dist/
```

## Deploy

Pushing to `main` runs the checks and publishes to GitHub Pages. One-time setup: **Settings → Pages → Build and deployment → Source: GitHub Actions**.

---

© Muhammad Talha Khan. Content and images are mine; the code is MIT licensed.
