import { useCallback, useEffect, useState } from 'react'
import { useTheme } from './hooks/useTheme'
import { useReveal, useSpotlight } from './hooks/useMotion'
import { links, profile } from './data/profile'
import { Masthead } from './components/Masthead'
import { Hero } from './components/Hero'
import { Ticker } from './components/Ticker'
import { Launch } from './components/Launch'
import { Projects } from './components/Projects'
import { IntroVideo } from './components/IntroVideo'
import { Experience } from './components/Experience'
import { Education } from './components/Education'
import { Services } from './components/Services'
import { Skills } from './components/Skills'
import { FitCheck } from './components/FitCheck'
import { Contact } from './components/Contact'
import { HireBar } from './components/HireBar'
import { CommandPalette } from './components/CommandPalette'

const YEAR = new Date().getFullYear()

export default function App() {
  const { theme, setTheme, cycle } = useTheme()
  const [paletteOpen, setPaletteOpen] = useState(false)
  useReveal()
  useSpotlight()

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const typing = e.target instanceof HTMLElement && e.target.closest('input, textarea, [contenteditable="true"]')
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault()
        setPaletteOpen((o) => !o)
      } else if (!typing && !e.metaKey && !e.ctrlKey && !e.altKey) {
        if (e.key === '/') {
          e.preventDefault()
          setPaletteOpen(true)
        } else if (e.key.toLowerCase() === 't') cycle()
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [cycle])

  useEffect(() => {
    if (!import.meta.env.PROD) return
    console.log('%cHey, fellow developer 👋', 'font: 600 16px Georgia, serif')
    console.log(`Press ⌘K (or Ctrl+K) to drive this site from the keyboard, T to cycle themes.\nSource: ${profile.github}/PortFolio_Talha\nLet's talk: ${profile.email}`)
  }, [])

  const closePalette = useCallback(() => setPaletteOpen(false), [])

  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Masthead theme={theme} onTheme={setTheme} onOpenPalette={() => setPaletteOpen(true)} />
      <main id="main">
        <Hero />
        <Ticker />
        <Launch dark={theme !== 'light'} />
        <Projects />
        <IntroVideo />
        <Experience />
        <Education />
        <Services />
        <Skills />
        <FitCheck />
        <Contact />
      </main>
      <HireBar />
      <CommandPalette open={paletteOpen} onClose={closePalette} onTheme={setTheme} />
      <footer className="colophon">
        <p className="sign-off">
          Let's build something <em>people love.</em>
        </p>
        <ul className="links">
          {links.map((l) => (
            <li key={l.url}>
              <a href={l.url} target="_blank" rel="noopener">{l.label} ↗</a>
            </li>
          ))}
        </ul>
        <div className="colophon-meta">
          <p>
            Press <kbd>⌘K</kbd> to explore from the keyboard, <kbd>T</kbd> to change theme. Built with React, TypeScript and Vite.
          </p>
          <p>
            <a href={profile.resume} target="_blank" rel="noopener">Résumé (PDF) ↗</a> · © {YEAR} Muhammad Talha Khan · Made in Lahore
          </p>
        </div>
      </footer>
    </>
  )
}
