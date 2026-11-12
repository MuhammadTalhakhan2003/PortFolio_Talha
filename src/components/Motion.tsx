import { useEffect, useRef, useState } from 'react'
import { animate, motion, useInView, useReducedMotion, useScroll, useSpring } from 'motion/react'

const EASE = [0.16, 1, 0.3, 1] as const

export interface Word {
  text: string
  /** Set in the italic serif accent. */
  em?: boolean
}

/**
 * Words that rise out of a blur, one after another. Assistive tech reads the plain
 * sentence from a visually hidden copy; the animated words are decorative.
 */
export function BlurWords({ words, delay = 0, stagger = 0.08, onView = false }: { words: Word[]; delay?: number; stagger?: number; onView?: boolean }) {
  const calm = useReducedMotion()
  return (
    <>
      <span className="visually-hidden">{words.map((w) => w.text).join(' ')}</span>
      <span aria-hidden="true">
      {words.map((w, i) => {
        const target = { opacity: 1, y: 0, filter: 'blur(0px)' }
        const props = calm
          ? {}
          : {
              initial: { opacity: 0, y: '0.35em', filter: 'blur(10px)' },
              ...(onView ? { whileInView: target, viewport: { once: true, margin: '-40px' } } : { animate: target }),
              transition: { duration: 0.8, delay: delay + i * stagger, ease: EASE },
            }
        const Tag = w.em ? motion.em : motion.span
        return (
          <span key={i}>
            <Tag className="bw" {...props}>
              {w.text}
            </Tag>
            {i < words.length - 1 ? ' ' : null}
          </span>
        )
      })}
      </span>
    </>
  )
}

export const toWords = (s: string): Word[] => s.split(' ').map((text) => ({ text }))

/** Counts a figure such as "100K+" or "30%" up from zero the first time it scrolls into view. */
export function CountUp({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-30px' })
  const calm = useReducedMotion()
  const m = value.match(/^(\D*)(\d+(?:\.\d+)?)(.*)$/)
  const numeric = m !== null
  const target = m ? parseFloat(m[2]) : 0
  const [n, setN] = useState(calm || !numeric ? target : 0)

  useEffect(() => {
    if (!inView || calm || !numeric) return
    const c = animate(0, target, { duration: 1.6, ease: EASE, onUpdate: setN })
    return () => c.stop()
  }, [inView, calm, target, numeric])

  if (!m) return <>{value}</>
  const decimals = m[2].includes('.') ? m[2].split('.')[1].length : 0
  return (
    <span ref={ref}>
      <span aria-hidden="true">
        {m[1]}
        {n.toFixed(decimals)}
        {m[3]}
      </span>
      <span className="visually-hidden">{value}</span>
    </span>
  )
}

/** Thin bar along the top edge that fills as you read down the page. */
export function ScrollProgress() {
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, { stiffness: 140, damping: 30, mass: 0.3 })
  return <motion.div className="scroll-progress" style={{ scaleX }} aria-hidden="true" />
}
