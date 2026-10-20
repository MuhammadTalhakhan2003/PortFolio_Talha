import { builds, employers, experience, introVideo, launch, lede, metrics, profile } from '../data/profile'
import { useTypewriter } from '../hooks/useMotion'
import { formatDuration, monthsBetween } from '../lib/duration'
import { QuickContact } from './QuickContact'
import { Seal } from './Seal'

export function Hero() {
  const typed = useTypewriter(builds)
  const current = experience[0]
  const total = formatDuration(monthsBetween(profile.careerStart, null))
  const facts: [string, string][] = [
    ['Currently', `${current.role}, ${current.company}${current.product ? ` (${current.product.name})` : ''}`],
    ['Experience', `${total} across ${experience.length} roles`],
    ['Core stack', 'Node.js, TypeScript, React, Next.js, PostgreSQL, MongoDB'],
    ['Based in', `${profile.location} · remote-friendly`],
    ['Hours', profile.hours],
    ['Education', 'MS CS, FAST-NUCES (in progress) · BS CS, University of South Asia'],
  ]

  return (
    <section className="title-page" id="top" aria-labelledby="name">
      <div className="title-grid">
        <div className="title-text">
          <a className="launch-pill" href="#fileflip">
            <span className="launch-new">New</span>
            Just launched: {launch.name}, {launch.stats[0].value} free PDF &amp; image tools
            <span aria-hidden="true">→</span>
          </a>
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 id="name">
            Muhammad Talha <em>Khan</em>
          </h1>
          <p className="builds">
            <span className="visually-hidden">I build products people love to use.</span>
            <span aria-hidden="true">
              I build <span className="typed">{typed}</span>
              <span className="caret" />
            </span>
          </p>
          <p className="lede">{lede}</p>
          <div className="actions">
            <a className="btn btn-primary" href={launch.url} target="_blank" rel="noopener">
              Try FileFlip ↗
            </a>
            <a className="btn" href="#work">
              See my work
            </a>
            <a className="btn btn-quiet" href={profile.resume} target="_blank" rel="noopener">
              Résumé (PDF)
            </a>
          </div>
          <a className="watch" href={introVideo.url} target="_blank" rel="noopener">
            <span className="watch-icon" aria-hidden="true">▶</span>
            <span>
              <strong>Watch my intro video</strong>
              <small>AI apps overview, plus Hifazat and Chatley.ai walkthroughs</small>
            </span>
          </a>
        </div>

        <div className="title-side">
          <figure className="portrait">
            <img src={profile.portrait} width={800} height={1200} alt={`Portrait of ${profile.name}`} />
            <Seal />
          </figure>
          <QuickContact />
        </div>
      </div>

      <ul className="figures" aria-label="Key figures">
        {metrics.map((m) => (
          <li key={m.label}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </li>
        ))}
      </ul>

      <dl className="facts">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <div className="shipped">
        <span className="label">Shipped with</span>
        <ul>
          {employers.map((e) => (
            <li key={e}>{e}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
