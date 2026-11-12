/// <reference types="vitest/config" />
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// Use a relative base so the site works both locally and when served from the GitHub Pages repo subdirectory.
export default defineConfig({
  base: './',
  plugins: [react()],
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/test/setup.ts',
    css: false,
    restoreMocks: true,
    // App tests render the whole site (plus Motion) in jsdom; give slow CI runners headroom.
    testTimeout: 15000,
  },
})
