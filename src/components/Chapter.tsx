import type { ReactNode } from 'react'

interface Props {
  id: string
  numeral: string
  title: string
  note?: ReactNode
  children: ReactNode
}

export function Chapter({ id, numeral, title, note, children }: Props) {
  return (
    <section className="chapter" id={id} aria-labelledby={`${id}-h`}>
      <header className="chapter-head">
        <span className="chapter-no">{numeral}</span>
        <h2 id={`${id}-h`}>{title}</h2>
        {note && <p className="chapter-note">{note}</p>}
      </header>
      {children}
    </section>
  )
}
