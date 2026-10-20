import { featured, projects } from '../data/profile'
import type { Featured } from '../types'
import { Chapter } from './Chapter'
import { Stack } from './Stack'

export function Projects() {
  return (
    <Chapter id="work" numeral="I" title="Selected work" note="Products I have built and shipped, from AI agents in production to my own apps. Live links and source code included.">
      <div className="featured">
        {featured.map((f, i) => (
          <FeaturedRow key={f.name} f={f} flip={i % 2 === 1} />
        ))}
      </div>

      <div className="workshop">
        <p className="eyebrow">From the workshop</p>
        <div className="projects">
          {projects.map((p) => (
            <article className="project spot" key={p.name} data-reveal>
              {p.image && <img src={p.image.src} width={p.image.width} height={p.image.height} alt={p.image.alt} loading="lazy" />}
              <p className="meta">{p.kind}</p>
              <h3>{p.name}</h3>
              <p>{p.summary}</p>
              <Stack items={p.stack} />
              <p className="links-inline">
                {p.links.map((l) => (
                  <a key={l.url} href={l.url} target="_blank" rel="noopener">
                    {l.label} ↗
                  </a>
                ))}
              </p>
            </article>
          ))}
        </div>
      </div>
    </Chapter>
  )
}

function FeaturedRow({ f, flip }: { f: Featured; flip: boolean }) {
  return (
    <article className={`feat${flip ? ' feat-flip' : ''}`} data-reveal>
      <a className="feat-media" href={f.links[0].url} target="_blank" rel="noopener" tabIndex={-1}>
        {f.image ? (
          <img src={f.image.src} width={f.image.width} height={f.image.height} alt={f.image.alt} loading="lazy" />
        ) : (
          f.poster && (
            <span className="poster" role="img" aria-label={`${f.poster.title}: ${f.poster.lines.join(". ")}`}>
              <span className="poster-title">{f.poster.title}</span>
              {f.poster.lines.map((l) => (
                <span className="poster-line" key={l}>
                  {l}
                </span>
              ))}
            </span>
          )
        )}
      </a>
      <div className="feat-text">
        <p className="meta">
          {f.kind} · {f.credit}
        </p>
        <h3>{f.name}</h3>
        <p>{f.summary}</p>
        <ul className="feat-points">
          {f.highlights.map((h) => (
            <li key={h}>{h}</li>
          ))}
        </ul>
        <Stack items={f.stack} />
        <p className="feat-links">
          {f.links.map((l, i) => (
            <a key={l.url} className={`btn small${i === 0 ? ' btn-primary' : ''}`} href={l.url} target="_blank" rel="noopener">
              {l.label} ↗
            </a>
          ))}
        </p>
      </div>
    </article>
  )
}
