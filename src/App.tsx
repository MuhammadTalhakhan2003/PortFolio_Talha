import { useAudience } from './hooks/useAudience'
import { useTheme } from './hooks/useTheme'
import { Masthead } from './components/Masthead'
import { Hero } from './components/Hero'
import { Experience } from './components/Experience'
import { Services } from './components/Services'
import { Projects } from './components/Projects'
import { Skills } from './components/Skills'
import { FitCheck } from './components/FitCheck'
import { Contact } from './components/Contact'

const YEAR = new Date().getFullYear()

export default function App() {
  const { toggle } = useTheme()
  const { audience, setAudience, audiences } = useAudience()
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Masthead onToggleTheme={toggle} />
      <main id="main">
        <Hero audience={audience} audiences={audiences} onAudienceChange={setAudience} />
        <Experience />
        <Services />
        <Projects />
        <Skills />
        <FitCheck />
        <Contact audience={audience} />
      </main>
      <footer className="colophon">
        <p>Built with React, TypeScript and Vite. Tested with Vitest, deployed to GitHub Pages by GitHub Actions on every push.</p>
        <p>© {YEAR} Muhammad Talha Khan</p>
      </footer>
    </>
  )
}
