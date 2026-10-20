import { experience } from '../data/profile'
import { formatDuration, formatMonth, monthsBetween } from '../lib/duration'
import { Chapter } from './Chapter'
import { Stack } from './Stack'

export function Experience() {
  return (
    <Chapter id="record" numeral="II" title="Where I've worked" note="Most recent first. Four teams, from internship to building AI agents for a US company.">
      <ol className="ledger">
        {experience.map((e) => (
          <li className="entry" key={`${e.company}-${e.start}`} data-reveal>
            <div className="entry-dates">
              {formatMonth(e.start)} – {formatMonth(e.end)}
              <span className="span">{formatDuration(monthsBetween(e.start, e.end))}</span>
              {!e.end && <span className="current">CURRENT</span>}
            </div>
            <div className="min0">
              <h3>{e.role}</h3>
              <p className="org">
                <strong>{e.company}</strong> · {e.mode}
              </p>
              {e.product && (
                <p className="product">
                  <span className="meta">Live product</span>
                  <a href={e.product.url} target="_blank" rel="noopener">
                    {e.product.name}
                  </a>
                  <span>{e.product.note}</span>
                </p>
              )}
              <ul>
                {e.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <Stack items={e.stack} />
            </div>
          </li>
        ))}
      </ol>
    </Chapter>
  )
}
