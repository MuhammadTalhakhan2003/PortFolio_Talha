import { useCallback, useEffect, useState } from 'react'
import { readStored, writeStored } from '../lib/storage'

type Theme = 'light' | 'dark'

function systemTheme(): Theme {
  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
}

/** Explicit light/dark choice layered over the OS preference, remembered per browser. */
export function useTheme() {
  const [theme, setTheme] = useState<Theme | null>(() => {
    const saved = readStored('theme')
    return saved === 'light' || saved === 'dark' ? saved : null
  })

  useEffect(() => {
    if (theme) document.documentElement.setAttribute('data-theme', theme)
  }, [theme])

  const toggle = useCallback(() => {
    setTheme((current) => {
      const next: Theme = (current ?? systemTheme()) === 'dark' ? 'light' : 'dark'
      writeStored('theme', next)
      return next
    })
  }, [])

  return { theme, toggle }
}
