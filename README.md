<div align="center">

# QAZKOMNET

**Corporate landing page for an IT systems integrator based in Astana, Kazakhstan.**

Built and delivered as a commercial project — bilingual, animation-heavy, and engineered to stay smooth on low-end devices.

[**Live site →**](https://qazkomnet.com)

![Vue](https://img.shields.io/badge/Vue-3.4-42b883?logo=vue.js&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![Tailwind](https://img.shields.io/badge/Tailwind_CSS-3.4-38bdf8?logo=tailwindcss&logoColor=white)

</div>

---

![Hero section](docs/screenshot-hero.png)

## About the project

QAZKOMNET needed a presentation site that would look modern to enterprise clients — government agencies, hospitals, state institutions — while remaining usable on the older hardware those clients often browse from.

That constraint shaped most of the technical decisions here. The page is rich with motion: a canvas particle field, parallax layers, scroll-triggered reveals, animated counters, a full loading sequence. But every one of those effects is capability-gated, so a visitor on a six-year-old Android phone gets a fast static page instead of a stuttering one.

## Features

- **Bilingual RU / EN** with instant switching, no page reload, and the choice remembered between visits
- **Motion that adapts to the device** — heavy effects are disabled automatically on low-memory or low-core hardware, and whenever the visitor has reduced motion enabled in their OS
- **Interactive particle field** rendered on canvas, reacting to cursor movement
- **Animated statistics** that count up when they scroll into view
- **Partner gallery** showcasing the client's institutional customers
- **Contacts block** with an embedded map and one-tap links to 2GIS, Google Maps and Yandex Maps
- **WhatsApp call-to-action** with a pre-filled message in the visitor's current language
- **Responsive down to small phones**, with touch-friendly targets throughout

## Tech stack

| Layer | Choice |
|---|---|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Build | Vite 5 |
| Styling | Tailwind CSS 3, PostCSS, Autoprefixer |
| Animation | AOS for scroll reveals, GSAP, custom CSS keyframes, canvas |
| Utilities | VueUse (`useIntersectionObserver`) |
| Icons | lucide-vue-next |
| Localization | custom — see below |

## Engineering notes

Three decisions worth explaining, since they're the reason the site behaves the way it does.

### Performance budgeting by device capability

Rather than shipping the same animation payload to everyone, the app classifies the device at startup:

```js
const isLowEndDevice = () => {
  const lowRAM = navigator.deviceMemory <= 2
  const lowCPU = navigator.hardwareConcurrency <= 4
  const oldAndroid = /android\s(4|5|6|7)/.test(userAgent)
  return lowRAM || lowCPU || oldAndroid
}
```

If the device is constrained — or the visitor has `prefers-reduced-motion: reduce` set — a `perf-low` class lands on `<html>`, and from there:

- the loading screen is skipped entirely and the page renders immediately
- AOS is disabled, with shorter durations and larger debounce as a fallback
- parallax and cursor-tracking effects bail out early instead of running per-frame work
- CSS rules keyed on `.perf-low` drop the expensive shadows and filters

The result is one codebase serving both a showcase experience and a lightweight one, decided at runtime.

### A 58-line i18n layer instead of a dependency

The site needs two languages and nothing else — no pluralization rules, no date formatting, no lazy-loaded locale bundles. Pulling in a full i18n library for that would have added weight for features the project will never use.

Instead, `composables/useI18n.js` implements a small reactive translator over `provide` / `inject`: dot-path key lookup, graceful fallback to the raw key when a translation is missing, and a `locale` ref that persists to `localStorage` and syncs the `<html lang>` attribute. All copy lives in `locales/index.js` as a single nested object, which keeps translation edits to one file.

### Scroll and pointer work off the critical path

Every scroll and mousemove handler is registered `{ passive: true }` and throttled through `requestAnimationFrame` with a `ticking` guard, so no more than one update runs per frame. The parallax composable measures element geometry once on mount and on resize, rather than calling `getBoundingClientRect()` inside the scroll handler — which would force layout on every event.

## Project structure

```
src/
├── components/
│   ├── LoadingScreen.vue      animated intro sequence
│   ├── Header.vue             sticky nav, language switch, mobile menu
│   ├── HeroSection.vue        client logos — "trusted by"
│   ├── ScrollingBanner.vue    company intro with animated counters
│   ├── DirectionsSection.vue  positioning statement + WhatsApp CTA
│   ├── ServicesSection.vue    service cards
│   ├── PartnersSection.vue    areas of expertise
│   ├── PartnersGallery.vue    institutional client gallery
│   ├── ContactsSection.vue    contacts, map, map-app deep links
│   ├── ParticleSystem.vue     canvas particle field
│   ├── ScrollToTop.vue
│   ├── AboutSection.vue
│   └── Footer.vue
├── composables/
│   ├── useI18n.js             reactive translation layer
│   ├── useAnimations.js       parallax, scroll direction, cursor parallax
│   └── useTextAnimations.js   typewriter, scroll triggers, stagger
├── locales/index.js           RU / EN copy
├── style.css                  Tailwind layers + custom keyframes
├── App.vue
└── main.js                    capability detection, AOS bootstrap
```

## Running locally

Requires Node.js 20 or newer.

```bash
npm install
npm run dev        # dev server with HMR, usually on :5173
npm run build      # production build to dist/
npm run preview    # serve the production build locally
```

## Browser support

Chrome / Edge 88+, Firefox 85+, Safari 14+, and current mobile browsers. Older engines still get the full content — they simply fall through to the reduced-motion path.

---

<div align="center">

Built by **Vahid Nabiev** · [Upwork](https://www.upwork.com/freelancers/~01449709aa0c860ed9)

</div>
