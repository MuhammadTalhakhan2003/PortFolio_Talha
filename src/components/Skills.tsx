import { education, skills } from '../data/profile'
import { Chapter } from './Chapter'

export function Skills() {
  return (
    <Chapter id="skills" numeral="IV" title="Skills & education">
      <div className="skills-layout">
        <table className="skills-table">
          <caption className="visually-hidden">Skills by area</caption>
          <tbody>
            {skills.map((g) => (
              <tr key={g.group}>
                <th scope="row">{g.group}</th>
                <td>{g.items.join(', ')}</td>
              </tr>
            ))}
          </tbody>
        </table>
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
