import { useEffect, useMemo, useRef, useState, type KeyboardEvent } from 'react'
import { featured, launch, links, profile } from '../data/profile'
import { THEMES, type Theme } from '../hooks/useTheme'
import { SECTIONS } from './Masthead'

interface Command {
  group: 'Go to' | 'Theme' | 'Open' | 'Do'
  label: string
  hint?: string
  run: () => void
}

interface Props {
  open: boolean
  onClose: () => void
  onTheme: (t: Theme) => void
}

const openTab = (url: string) => window.open(url, '_blank', 'noopener')

/** ⌘K / Ctrl+K menu: jump to a section, switch theme, open a project or copy contact details. */
export function CommandPalette({ open, onClose, onTheme }: Props) {
  const [query, setQuery] = useState('')
  const [index, setIndex] = useState(0)
  const [toast, setToast] = useState('')
  const input = useRef<HTMLInputElement>(null)
  const returnFocus = useRef<Element | null>(null)

  const commands = useMemo<Command[]>(() => {
    const go = (id: string) => () => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    const copy = (value: string, what: string) => async () => {
      try {
        await navigator.clipboard.writeText(value)
        setToast(`${what} copied`)
      } catch {
        window.prompt('Copy this:', value)
      }
    }
    return [
      ...SECTIONS.map((s) => ({ group: 'Go to' as const, label: s.label, run: go(s.id) })),
      ...THEMES.map((t) => ({ group: 'Theme' as const, label: `${t.label} theme`, hint: t.note, run: () => onTheme(t.id) })),
      { group: 'Open', label: 'Try FileFlip live', hint: launch.host, run: () => openTab(launch.url) },
      { group: 'Open', label: 'FileFlip source code', hint: 'GitHub', run: () => openTab(launch.code) },
      ...featured.flatMap((f) => f.links.map((l) => ({ group: 'Open' as const, label: `${f.name.split(' ')[0]}: ${l.label}`, hint: new URL(l.url).host, run: () => openTab(l.url) }))),
      ...links.map((l) => ({ group: 'Open' as const, label: l.label, hint: 'Profile', run: () => openTab(l.url) })),
      { group: 'Do', label: 'Copy email address', hint: profile.email, run: copy(profile.email, 'Email') },
      { group: 'Do', label: 'Copy phone number', hint: profile.phone, run: copy(profile.phone, 'Phone number') },
      { group: 'Do', label: 'Message on WhatsApp', run: () => openTab(profile.whatsappHire) },
      { group: 'Do', label: 'Download résumé (PDF)', run: () => openTab(profile.resume) },
    ]
  }, [onTheme])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return commands
    return commands.filter((c) => `${c.group} ${c.label} ${c.hint ?? ''}`.toLowerCase().includes(q))
  }, [commands, query])

  useEffect(() => {
    if (!open) return
    returnFocus.current = document.activeElement
    setQuery('')
    setIndex(0)
    input.current?.focus()
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
      ;(returnFocus.current as HTMLElement | null)?.focus?.()
    }
  }, [open])

  useEffect(() => {
    if (!toast) return
    const t = window.setTimeout(() => setToast(''), 1800)
    return () => window.clearTimeout(t)
  }, [toast])

  useEffect(() => {
    document.getElementById(`cmd-${index}`)?.scrollIntoView({ block: 'nearest' })
  }, [index])

  function run(c: Command | undefined) {
    if (!c) return
    onClose()
    c.run()
  }

  function onKeyDown(e: KeyboardEvent) {
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setIndex((i) => (i + 1) % Math.max(results.length, 1))
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setIndex((i) => (i - 1 + results.length) % Math.max(results.length, 1))
    } else if (e.key === 'Enter') {
      e.preventDefault()
      run(results[index])
    } else if (e.key === 'Escape') {
      e.preventDefault()
      onClose()
    }
  }

  return (
    <>
      {toast && (
        <p className="toast" role="status">
          {toast}
        </p>
      )}
      {open && (
        <div className="palette-backdrop" onPointerDown={(e) => e.target === e.currentTarget && onClose()}>
          <div className="palette" role="dialog" aria-modal="true" aria-label="Command menu">
            <input
              ref={input}
              className="palette-input"
              role="combobox"
              aria-expanded="true"
              aria-controls="cmd-list"
              aria-activedescendant={results.length ? `cmd-${index}` : undefined}
              aria-label="Type a command or search"
              placeholder="Jump to a section, switch theme, open a project…"
              value={query}
              onChange={(e) => {
                setQuery(e.target.value)
                setIndex(0)
              }}
              onKeyDown={onKeyDown}
            />
            <ul className="palette-list" id="cmd-list" role="listbox" aria-label="Commands">
              {results.map((c, i) => (
                <li
                  key={`${c.group}-${c.label}`}
                  id={`cmd-${i}`}
                  role="option"
                  aria-selected={i === index}
                  data-group={i === 0 || results[i - 1].group !== c.group ? c.group : undefined}
                  onPointerMove={() => setIndex(i)}
                  onClick={() => run(c)}
                >
                  <span>{c.label}</span>
                  {c.hint && <small>{c.hint}</small>}
                </li>
              ))}
              {!results.length && <li className="palette-empty">Nothing matches “{query}”. Try “theme” or “code”.</li>}
            </ul>
            <p className="palette-foot">
              <span><kbd>↑</kbd><kbd>↓</kbd> move</span>
              <span><kbd>↵</kbd> run</span>
              <span><kbd>esc</kbd> close</span>
            </p>
          </div>
        </div>
      )}
    </>
  )
}
