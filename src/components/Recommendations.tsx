import { useState } from 'react'
import { recommendations } from '../data/profile'
import type { RecommendationGroup } from '../types'
import { Chapter } from './Chapter'

/** Longer quotes are clamped on small screens with a "Read more" toggle. */
const LONG = 260

function initials(name: string) {
  return name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0].toUpperCase())
    .join('')
}

function Quote({ text }: { text: string }) {
  const [open, setOpen] = useState(false)
  const long = text.length > LONG
  return (
    <>
      <blockquote className={`rec-text${long && !open ? ' is-clamped' : ''}`}>
        <p>{text}</p>
      </blockquote>
      {long && (
        <button type="button" className="rec-more" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? 'Show less' : 'Read more'}
        </button>
      )}
    </>
  )
}

export function Recommendations({ groups = recommendations }: { groups?: RecommendationGroup[] }) {
  if (!groups.length) return null
  return (
    <Chapter id="voices" numeral="VII" title="What people say about working with me" note="Managers, colleagues and teachers, in their own words.">
      {groups.map((g) => (
        <div className="rec-group" key={g.org}>
          <header className="rec-group-head">
            <div>
              <h3>{g.org}</h3>
              <p className="meta">{g.kind}</p>
            </div>
            <span className="rec-count">
              {g.items.length} recommendation{g.items.length === 1 ? '' : 's'}
            </span>
          </header>
          <ul className="rec-grid">
            {g.items.map((r) => (
              <li className="rec spot" key={r.name} data-reveal>
                <div className="rec-who">
                  <span className="rec-avatar" aria-hidden="true">
                    {initials(r.name)}
                  </span>
                  <div>
                    <p className="rec-name">{r.name}</p>
                    <p className="rec-role">{r.headline}</p>
                  </div>
                </div>
                <Quote text={r.text} />
                <p className="rec-tag">
                  <span>{r.relation}</span> · {g.org}
                </p>
                {r.url && (
                  <a className="rec-link" href={r.url} target="_blank" rel="noopener">
                    View on LinkedIn ↗
                  </a>
                )}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </Chapter>
  )
}
