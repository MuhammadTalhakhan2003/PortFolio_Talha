import { process, services } from '../data/profile'
import { Chapter } from './Chapter'

export function Services() {
  return (
    <Chapter
      id="services"
      numeral="IV"
      title="What I can build with you"
      note="Whether you are hiring, building a startup or need one project done, this is the work I already do in production."
    >
      <div className="services">
        {services.map((s) => (
          <article className="service spot" key={s.title} data-reveal>
            <h3>{s.title}</h3>
            <p>{s.body}</p>
            <p className="proof">
              <span className="meta">Proof</span> {s.proof}
            </p>
          </article>
        ))}
      </div>
      <div className="process" data-reveal>
        <p className="eyebrow">How we would work together</p>
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
