import { useScrollSpy } from '../hooks/useScrollSpy'
import { profile } from '../data/profile'

const SECTIONS = [
  { id: 'intro', label: 'Intro video' },
  { id: 'record', label: 'Experience' },
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
          Talha<span>Khan</span>
        </a>
        <nav className="toc" aria-label="Sections">
          {SECTIONS.map((s) => (
            <a key={s.id} href={`#${s.id}`} aria-current={active === s.id ? 'true' : undefined}>
              {s.label}
            </a>
          ))}
        </nav>
        <a className="btn small mast-cta mast-resume" href={profile.resume} target="_blank" rel="noopener">
          Résumé
        </a>
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
