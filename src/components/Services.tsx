import { process, services } from '../data/profile'
import { Chapter } from './Chapter'

export function Services() {
  return (
    <Chapter
      id="services"
      numeral="II"
      title="What I can build for you"
      note="For companies hiring and for businesses that need a project done. Each item is work I already do in production."
    >
      <div className="services">
        {services.map((s) => (
          <article className="service" key={s.title}>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <p className="proof">
              <span className="meta">Proof</span> {s.proof}
            </p>
          </article>
        ))}
      </div>
      <div className="process">
        <p className="eyebrow">How a project runs</p>
        <ol>
          {process.map((p) => (
            <li key={p.title}>
              <strong>{p.title}</strong> {p.body}
            </li>
          ))}
        </ol>
      </div>
    </Chapter>
  )
}
