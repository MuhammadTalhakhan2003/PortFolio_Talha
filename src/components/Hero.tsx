import type { Audience } from '../types'
import { audienceLabels, experience, metrics, pitches, profile } from '../data/profile'
import { formatDuration, monthsBetween } from '../lib/duration'
import { Seal } from './Seal'

interface Props {
  audience: Audience
  audiences: Audience[]
  onAudienceChange: (a: Audience) => void
}

function Action({ a, className }: { a: { label: string; href: string; external?: boolean }; className: string }) {
  return (
    <a className={className} href={a.href} {...(a.external ? { target: '_blank', rel: 'noopener' } : {})}>
      {a.label}
    </a>
  )
}

export function Hero({ audience, audiences, onAudienceChange }: Props) {
  const pitch = pitches[audience]
  const current = experience[0]
  const total = formatDuration(monthsBetween(profile.careerStart, null))
  const facts: [string, string][] = [
    ['Role', profile.title],
    ['Experience', `${total} across ${experience.length} roles`],
    ['Core stack', 'Node.js, Express, React, PostgreSQL, MongoDB'],
    ['Currently', `${current.role}, ${current.company}${current.product ? ` (${current.product.name})` : ''}`],
    ['Location', profile.location],
    ['Hours', profile.hours],
    ['Work mode', 'Remote / Hybrid / Onsite'],
    ['Engagement', 'Full-time, contract or freelance, available immediately'],
    ['Languages', 'English (professional), Urdu (native)'],
    ['Education', 'MS Computer Science, FAST-NUCES (in progress)'],
  ]

  return (
    <section className="title-page" id="top" aria-labelledby="name">
      <div className="title-grid">
        <div className="title-text">
          <p className="eyebrow">{profile.eyebrow}</p>
          <h1 id="name">{profile.name}</h1>
          <p className="subtitle">{profile.title}</p>

          <div className="audience" role="group" aria-label="Show this page for">
            <span className="label">Viewing as</span>
            <div className="switch">
              {audiences.map((a) => (
                <button key={a} type="button" aria-pressed={a === audience} onClick={() => onAudienceChange(a)}>
                  {audienceLabels[a]}
                </button>
              ))}
            </div>
          </div>

          <div className="pitch" key={audience} data-testid="pitch">
            <p className="lede">{pitch.lede}</p>
            <ul className="gets">
              {pitch.points.map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
            <div className="actions">
              <Action a={pitch.primary} className="btn btn-primary" />
              <Action a={pitch.secondary} className="btn" />
              <Action a={pitch.tertiary} className="btn btn-quiet" />
            </div>
          </div>
        </div>

        <figure className="portrait">
          <img src={profile.portrait} width={600} height={900} alt={`Portrait of ${profile.name}`} />
          <Seal />
        </figure>
      </div>

      <dl className="facts">
        {facts.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>

      <ul className="figures" aria-label="Key figures">
        {metrics.map((m) => (
          <li key={m.label}>
            <strong>{m.value}</strong>
            <span>{m.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
