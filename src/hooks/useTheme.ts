import { useCallback, useEffect, useState } from 'react'
import { readStored, writeStored } from '../lib/storage'

export const THEMES = [
  { id: 'light', label: 'Paper', note: 'Ivory, ink and brass' },
  { id: 'dark', label: 'Midnight', note: 'Navy night, warm gold' },
  { id: 'terminal', label: 'Terminal', note: 'Phosphor green on black' },
  { id: 'mughal', label: 'Mughal', note: 'Emerald and gold, from Lahore' },
] as const

export type Theme = (typeof THEMES)[number]['id']

const isTheme = (v: string | null): v is Theme => THEMES.some((t) => t.id === v)

function systemTheme(): Theme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

type ViewTransitionDoc = Document & { startViewTransition?: (cb: () => void) => unknown }

/** Named theme layered over the OS light/dark preference, remembered per browser. */
export function useTheme() {
  const [theme, setThemeState] = useState<Theme | null>(() => {
    // A shared link can preset the theme with ?theme=terminal without overwriting the visitor's saved choice.
    const fromUrl = new URLSearchParams(window.location.search).get('theme')
    if (isTheme(fromUrl)) return fromUrl
    const saved = readStored('theme')
    return isTheme(saved) ? saved : null
  })

  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  /** Switches theme; when the browser supports view transitions the new theme grows out of `origin` as a circle. */
  const setTheme = useCallback((next: Theme, origin?: { x: number; y: number }) => {
    const root = document.documentElement
    const apply = () => {
      root.setAttribute('data-theme', next)
      setThemeState(next)
    }
    writeStored('theme', next)
    const doc = document as ViewTransitionDoc
    const calm = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    if (!doc.startViewTransition || calm) return apply()
    root.style.setProperty('--vt-x', `${origin?.x ?? window.innerWidth - 40}px`)
    root.style.setProperty('--vt-y', `${origin?.y ?? 30}px`)
    doc.startViewTransition(apply)
  }, [])

  const cycle = useCallback(
    (origin?: { x: number; y: number }) => {
      const current = theme ?? systemTheme()
      const i = THEMES.findIndex((t) => t.id === current)
      setTheme(THEMES[(i + 1) % THEMES.length].id, origin)
    },
    [theme, setTheme],
  )

  return { theme: theme ?? systemTheme(), setTheme, cycle }
}
