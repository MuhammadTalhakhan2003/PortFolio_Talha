import { education, skills } from '../data/profile'
import { Chapter } from './Chapter'

export function Skills() {
  return (
    <Chapter id="skills" numeral="IV" title="Toolbox & education">
      <div className="skills-layout" data-reveal>
        <dl className="toolbox">
          {skills.map((g) => (
            <div key={g.group}>
              <dt>{g.group}</dt>
              <dd>
                <ul className="tags">
                  {g.items.map((s) => (
                    <li key={s}>{s}</li>
                  ))}
                </ul>
              </dd>
            </div>
          ))}
        </dl>
        <div className="education">
          <p className="eyebrow edu-label">Education</p>
          {education.map((e) => (
            <div className="school" key={e.degree}>
              <h3>{e.degree}</h3>
              <p>
                {e.school} · {e.years}
              </p>
              <p>{e.note}</p>
            </div>
          ))}
        </div>
      </div>
    </Chapter>
  )
}
