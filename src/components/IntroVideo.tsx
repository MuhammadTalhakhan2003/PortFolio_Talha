import { useState } from 'react'
import { introVideo, showcase } from '../data/profile'
import { Stack } from './Stack'

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M8 5.5v13a1 1 0 0 0 1.5.86l10.5-6.5a1 1 0 0 0 0-1.72L9.5 4.64A1 1 0 0 0 8 5.5Z" />
    </svg>
  )
}

/** Featured walkthrough video plus the two products it demos. */
export function IntroVideo() {
  const [playing, setPlaying] = useState(false)
  const v = introVideo

  const screen = v.embed && playing ? (
    <iframe src={`${v.embed}?autoplay=1`} title={v.title} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen />
  ) : (
    <a
      className="reel-poster"
      href={v.url}
      target="_blank"
      rel="noopener"
      onClick={(e) => {
        if (v.embed) {
          e.preventDefault()
          setPlaying(true)
        }
      }}
    >
      <span className="reel-titles" aria-hidden="true">
        <span>AI apps</span>
        <span>Hifazat</span>
        <span>Chatley.ai</span>
      </span>
      <span className="reel-play">
        <PlayIcon />
      </span>
      <span className="reel-caption">
        <span className="eyebrow">Video introduction</span>
        <strong>Watch the walkthrough</strong>
        <span>{v.embed ? 'Plays here' : 'Opens in a new tab'} ↗</span>
      </span>
    </a>
  )

  return (
    <section className="reel" id="intro" aria-labelledby="intro-h">
      <div className="reel-grid">
        <div className="reel-screen">{screen}</div>
        <div className="reel-text">
          <p className="eyebrow">Recorded walkthrough</p>
          <h2 id="intro-h">{v.title}</h2>
          <p className="reel-blurb">{v.blurb}</p>
          <ol className="reel-chapters">
            {v.chapters.map((c, i) => (
              <li key={c.label}>
                <span className="reel-no">{String(i + 1).padStart(2, '0')}</span>
                <span>
                  <strong>{c.label}</strong>
                  <small>{c.note}</small>
                </span>
              </li>
            ))}
          </ol>
          <a className="btn btn-primary" href={v.url} target="_blank" rel="noopener">
            ▶ Watch the intro video
          </a>
        </div>
      </div>

      <div className="showcase">
        {showcase.map((s) => (
          <article className="show-card" key={s.name}>
            <p className="meta">{s.tag}</p>
            <h3>{s.name}</h3>
            <p>{s.summary}</p>
            <ul className="show-points">
              {s.highlights.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
            <Stack items={s.stack} />
            <p className="show-links">
              <a href={s.link.url} target="_blank" rel="noopener">
                {s.link.label} ↗
              </a>
              <a href={v.url} target="_blank" rel="noopener">
                See it in the walkthrough ↗
              </a>
            </p>
          </article>
        ))}
      </div>
    </section>
  )
}
