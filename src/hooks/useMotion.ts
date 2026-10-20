import { useEffect, useState } from 'react'

const calm = () => window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false

/**
 * Fades `[data-reveal]` elements in as they scroll into view. Content stays visible
 * when IntersectionObserver is missing or the visitor prefers reduced motion.
 */
export function useReveal() {
  useEffect(() => {
    if (!('IntersectionObserver' in window) || calm()) return
    const root = document.documentElement
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue
          e.target.classList.add('is-in')
          io.unobserve(e.target)
        }
      },
      { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
    )
    root.classList.add('js-reveal')
    document.querySelectorAll('[data-reveal]').forEach((el) => io.observe(el))
    return () => {
      io.disconnect()
      root.classList.remove('js-reveal')
    }
  }, [])
}

/** Lets `.spot` cards follow the pointer with a soft glow via --mx / --my. */
export function useSpotlight() {
  useEffect(() => {
    const onMove = (e: PointerEvent) => {
      const card = (e.target as Element | null)?.closest?.<HTMLElement>('.spot')
      if (!card) return
      const r = card.getBoundingClientRect()
      card.style.setProperty('--mx', `${e.clientX - r.left}px`)
      card.style.setProperty('--my', `${e.clientY - r.top}px`)
    }
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
}

/** Cycles through `words`, typing and deleting each one. Returns the full first word when motion is reduced. */
export function useTypewriter(words: string[], { type = 55, erase = 28, hold = 1900 } = {}) {
  const [text, setText] = useState(words[0])
  useEffect(() => {
    if (calm()) return
    let i = 0
    let n = words[0].length
    let deleting = true
    let timer: number
    const step = () => {
      const word = words[i]
      n += deleting ? -1 : 1
      setText(word.slice(0, n))
      let delay = deleting ? erase : type
      if (deleting && n === 0) {
        deleting = false
        i = (i + 1) % words.length
        delay = 320
      } else if (!deleting && n === word.length) {
        deleting = true
        delay = hold
      }
      timer = window.setTimeout(step, delay)
    }
    timer = window.setTimeout(step, hold)
    return () => window.clearTimeout(timer)
  }, [words, type, erase, hold])
  return text
}
