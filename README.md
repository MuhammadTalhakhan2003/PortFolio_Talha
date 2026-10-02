# Muhammad Talha Khan · Portfolio

[![Test and deploy](https://github.com/MuhammadTalhakhan2003/PortFolio_Talha/actions/workflows/deploy.yml/badge.svg)](https://github.com/MuhammadTalhakhan2003/PortFolio_Talha/actions/workflows/deploy.yml)

Portfolio of **Muhammad Talha Khan**, Full Stack Software Engineer (Node.js · MERN · real-time systems · AI integrations).

**Live:** https://muhammadtalhakhan2003.github.io/PortFolio_Talha/

Share a version written for a specific reader:

| Reader | Link |
|---|---|
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

- **Audience switch.** Recruiter, Founder/CEO and Client views change the pitch, the calls to action and the default inquiry type. `?for=` links preset the view.
- **Fit check.** Paste a job post and every technology in it is checked against where Talha has used it. Gaps are listed, not hidden. Runs entirely in the browser.
- **Computed durations.** Role lengths and total experience are calculated from start and end months, so they never go stale.
- **Contact form** that posts to Formspree with field validation, a spam honeypot and clear success and error states.
- Light and dark themes, keyboard focus states, reduced-motion support, and SEO metadata with Open Graph and JSON-LD.

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
