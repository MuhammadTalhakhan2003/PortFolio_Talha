import { asset, launch } from '../data/profile'
import { GitHubIcon } from './Icons'
import { Stack } from './Stack'

/** Product launch spotlight for FileFlip. The hero screenshot follows the site theme. */
export function Launch({ dark }: { dark: boolean }) {
  const l = launch
  const shot = dark ? l.shots.dark : l.shots.light
  return (
    <section className="launch" id="fileflip" aria-labelledby="fileflip-h">
      <div className="launch-head" data-reveal>
        <p className="launch-kicker">
          <span className="live-dot" aria-hidden="true" /> Latest launch · live now
        </p>
        <h2 id="fileflip-h">
          <img src={asset('images/fileflip-logo.svg')} width={56} height={56} alt="" />
          {l.name}
        </h2>
        <p className="launch-tagline">{l.tagline}</p>
        <p className="launch-summary">{l.summary}</p>
        <div className="actions">
          <a className="btn btn-primary btn-lg" href={l.url} target="_blank" rel="noopener">
            Try FileFlip live ↗
          </a>
          <a className="btn btn-lg" href={l.code} target="_blank" rel="noopener">
            <GitHubIcon /> Read the code
          </a>
        </div>
      </div>

      <a className="browser" href={l.url} target="_blank" rel="noopener" aria-label={`Open ${l.name} live`} data-reveal>
        <span className="browser-bar" aria-hidden="true">
          <i />
          <i />
          <i />
          <span className="browser-url">{l.host}</span>
        </span>
        <img src={shot.src} width={shot.width} height={shot.height} alt={shot.alt} loading="lazy" />
      </a>

      <ul className="launch-stats" aria-label={`${l.name} in numbers`} data-reveal>
        {l.stats.map((s) => (
          <li key={s.label}>
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </li>
        ))}
      </ul>

      <div className="launch-features">
        {l.features.map((f, i) => (
          <article className="feature spot" key={f.group} data-reveal style={{ transitionDelay: `${i * 50}ms` }}>
            <span className="feature-no">{String(i + 1).padStart(2, '0')}</span>
            <h3>{f.group}</h3>
            <p>{f.items}</p>
          </article>
        ))}
      </div>

      <div className="launch-gallery">
        {l.shots.extra.map((s) => (
          <figure key={s.src} data-reveal>
            <img src={s.src} width={s.width} height={s.height} alt={s.alt} loading="lazy" />
            <figcaption>{s.caption}</figcaption>
          </figure>
        ))}
        <div className="hood" data-reveal>
          <p className="eyebrow">Under the hood</p>
          <ul>
            {l.underTheHood.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
          <Stack items={l.stack} />
        </div>
      </div>
    </section>
  )
}
