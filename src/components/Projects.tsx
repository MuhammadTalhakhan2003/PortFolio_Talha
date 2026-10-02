import { projects } from '../data/profile'
import { Chapter } from './Chapter'
import { Stack } from './Stack'

export function Projects() {
  return (
    <Chapter id="work" numeral="III" title="Selected projects" note="Personal and academic work outside the roles above. Source code is on GitHub.">
      <div className="projects">
        {projects.map((p) => (
          <article className={`project${p.image ? '' : ' project-wide'}`} key={p.name}>
            {p.image && <img src={p.image.src} width={p.image.width} height={p.image.height} alt={p.image.alt} loading="lazy" />}
            <h3>{p.name}</h3>
            <p className="meta">{p.kind}</p>
            <p>{p.summary}</p>
            {p.detail && <p className="detail">{p.detail}</p>}
            <Stack items={p.stack} />
            <p className="links-inline">
              {p.links.map((l) => (
                <a key={l.url} href={l.url} target="_blank" rel="noopener">
                  {l.label} ↗
                </a>
              ))}
            </p>
          </article>
        ))}
      </div>
    </Chapter>
  )
}
