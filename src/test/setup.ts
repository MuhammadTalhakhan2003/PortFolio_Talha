import '@testing-library/jest-dom/vitest'

// jsdom lacks these browser APIs; Motion's scroll-triggered animations rely on them.
window.matchMedia ??= ((q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {}, addListener() {}, removeListener() {} })) as never
globalThis.IntersectionObserver ??= class {
  root = null
  rootMargin = ''
  thresholds = []
  observe() {}
  unobserve() {}
  disconnect() {}
  takeRecords() { return [] }
} as never
