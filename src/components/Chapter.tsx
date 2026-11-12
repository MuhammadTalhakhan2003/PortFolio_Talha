import type { ReactNode } from 'react'
import { BlurWords, toWords } from './Motion'

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
        <h2 id={`${id}-h`}>
          <BlurWords words={toWords(title)} onView stagger={0.06} />
        </h2>
        {note && <p className="chapter-note" data-reveal>{note}</p>}
      </header>
      {children}
    </section>
  )
}
