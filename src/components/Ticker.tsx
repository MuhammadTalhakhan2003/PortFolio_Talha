import { ticker } from '../data/profile'

/** Endless strip of the stack. The list is drawn twice so the loop is seamless; the copy is hidden from screen readers. */
export function Ticker() {
  return (
    <div className="ticker" role="region" aria-label="Technologies I work with">
      <div className="ticker-track">
        {[0, 1].map((copy) => (
          <ul key={copy} aria-hidden={copy === 1 || undefined}>
            {ticker.map((t) => (
              <li key={t}>{t}</li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
