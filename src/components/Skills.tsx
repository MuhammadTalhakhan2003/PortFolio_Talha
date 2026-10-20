import { skills } from '../data/profile'
import { Chapter } from './Chapter'

export function Skills() {
  return (
    <Chapter id="skills" numeral="V" title="Toolbox" note="The languages, frameworks and tools I reach for, grouped by where they sit in a product.">
      <div data-reveal>
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
      </div>
    </Chapter>
  )
}
