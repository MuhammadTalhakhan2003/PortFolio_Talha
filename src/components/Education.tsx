import { education, profile } from '../data/profile'
import { Chapter } from './Chapter'
import { FileIcon } from './Icons'

export function Education() {
  return (
    <Chapter id="education" numeral="III" title="Education & résumé" note="Computer science from first principles, now a master's at FAST alongside full-time work.">
      <div className="edu-layout">
        <ol className="degrees">
          {education.map((e) => (
            <li className="degree spot" key={e.degree} data-reveal>
              <p className="degree-top">
                <span className="meta">{e.years}</span>
                <span className={`degree-status${e.status === 'In progress' ? ' is-live' : ''}`}>{e.status}</span>
              </p>
              <h3>{e.degree}</h3>
              <p className="degree-school">
                {e.school} · {e.place}
              </p>
              <p className="degree-note">{e.note}</p>
              {e.focus && (
                <ul className="tags">
                  {e.focus.map((f) => (
                    <li key={f}>{f}</li>
                  ))}
                </ul>
              )}
              {e.capstone && (
                <a className="degree-link" href={e.capstone.url} target="_blank" rel="noopener">
                  {e.capstone.label} ↗
                </a>
              )}
            </li>
          ))}
        </ol>

        <aside className="resume-card" aria-labelledby="resume-h" data-reveal>
          <span className="resume-icon" aria-hidden="true">
            <FileIcon />
          </span>
          <h3 id="resume-h">My résumé</h3>
          <p>Experience, projects, skills and education in one PDF, ready to share with your team.</p>
          <div className="resume-actions">
            <a className="btn btn-primary" href={profile.resume} target="_blank" rel="noopener">
              View résumé ↗
            </a>
            <a className="btn" href={profile.resume} download="Muhammad-Talha-Khan-Resume.pdf">
              Download PDF
            </a>
          </div>
        </aside>
      </div>
    </Chapter>
  )
}
