import { useScrollSpy } from '../hooks/useScrollSpy'
import type { Theme } from '../hooks/useTheme'
import { SearchIcon } from './Icons'
import { ThemePicker } from './ThemePicker'

export const SECTIONS = [
  { id: 'fileflip', label: 'FileFlip' },
  { id: 'work', label: 'Work' },
  { id: 'record', label: 'Experience' },
  { id: 'services', label: 'Services' },
  { id: 'skills', label: 'Skills' },
  { id: 'fit', label: 'Stack check' },
  { id: 'contact', label: 'Contact' },
]
const IDS = SECTIONS.map((s) => s.id)

interface Props {
  theme: Theme
  onTheme: (t: Theme, origin?: { x: number; y: number }) => void
  onOpenPalette: () => void
}

export function Masthead({ theme, onTheme, onOpenPalette }: Props) {
  const active = useScrollSpy(IDS)
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <a className="monogram" href="#top" aria-label="Back to top">
          Talha<span>Khan</span>
        </a>
        <nav className="toc" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
        <button className="kbd-btn" type="button" onClick={onOpenPalette} aria-label="Open command menu" aria-keyshortcuts="Control+K Meta+K">
          <SearchIcon />
          <kbd>⌘K</kbd>
        </button>
        <ThemePicker theme={theme} onTheme={onTheme} />
        <a className="btn btn-primary small mast-cta" href="#contact">
          Let's talk
        </a>
      </div>
    </header>
  )
}
