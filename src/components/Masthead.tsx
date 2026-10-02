import { useScrollSpy } from '../hooks/useScrollSpy'

const SECTIONS = [
  { id: 'record', label: 'Record' },
  { id: 'services', label: 'Services' },
  { id: 'work', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'fit', label: 'Fit check' },
  { id: 'contact', label: 'Contact' },
]
const IDS = SECTIONS.map((s) => s.id)

export function Masthead({ onToggleTheme }: { onToggleTheme: () => void }) {
  const active = useScrollSpy(IDS)
  return (
    <header className="masthead">
      <div className="masthead-inner">
        <a className="monogram" href="#top" aria-label="Back to top">
          M T K
        </a>
        <nav className="toc" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="btn btn-primary small mast-cta" href="#contact">
          Hire Talha
        </a>
        <button className="theme-toggle" type="button" onClick={onToggleTheme} aria-label="Switch colour theme">
          <span aria-hidden="true">◐</span>
        </button>
      </div>
    </header>
  )
}
