import { useEffect, useRef, useState } from 'react'
import { THEMES, type Theme } from '../hooks/useTheme'
import { PaletteIcon } from './Icons'

interface Props {
  theme: Theme
  onTheme: (t: Theme, origin?: { x: number; y: number }) => void
}

/** Swatch menu for the four themes. Closes on Escape, outside click or a choice. */
export function ThemePicker({ theme, onTheme }: Props) {
  const [open, setOpen] = useState(false)
  const wrap = useRef<HTMLDivElement>(null)
  const button = useRef<HTMLButtonElement>(null)

  useEffect(() => {
    if (!open) return
    const onDown = (e: PointerEvent) => {
      if (!wrap.current?.contains(e.target as Node)) setOpen(false)
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key !== 'Escape') return
      setOpen(false)
      button.current?.focus()
    }
    document.addEventListener('pointerdown', onDown)
    document.addEventListener('keydown', onKey)
    wrap.current?.querySelector<HTMLButtonElement>('[aria-checked="true"]')?.focus()
    return () => {
      document.removeEventListener('pointerdown', onDown)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <div className="theme-picker" ref={wrap}>
      <button
        ref={button}
        className="theme-toggle"
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        aria-label="Choose a theme"
        onClick={() => setOpen((o) => !o)}
      >
        <PaletteIcon />
      </button>
      {open && (
        <div className="theme-menu" role="menu" aria-label="Themes">
          {THEMES.map((t) => (
            <button
              key={t.id}
              type="button"
              role="menuitemradio"
              aria-checked={t.id === theme}
              onClick={(e) => {
                onTheme(t.id, { x: e.clientX, y: e.clientY })
                setOpen(false)
              }}
            >
              <span className={`swatch swatch-${t.id}`} aria-hidden="true" />
              <span>
                <strong>{t.label}</strong>
                <small>{t.note}</small>
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}
