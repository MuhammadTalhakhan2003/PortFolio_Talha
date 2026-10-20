import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

beforeAll(() => {
  // jsdom lacks these browser APIs.
  window.matchMedia ??= ((q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} })) as never
  window.IntersectionObserver ??= class {
    observe() {}
    unobserve() {}
    disconnect() {}
  } as never
  Element.prototype.scrollIntoView ??= () => {}
})
beforeEach(() => {
  localStorage.clear()
  document.documentElement.removeAttribute('data-theme')
  window.history.replaceState(null, '', '/')
})

describe('App', () => {
  it('renders the name, current role and computed durations', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Muhammad Talha Khan' })).toBeInTheDocument()
    expect(screen.getAllByText('Chatley.ai').length).toBeGreaterThan(0)
    expect(screen.getByText('1 yr 2 mos')).toBeInTheDocument() // TechClan, Aug 2025 – Sep 2026
  })

  it('features the FileFlip launch with a live link, code link and screenshot', () => {
    render(<App />)
    const launch = screen.getByRole('region', { name: 'FileFlip' })
    expect(within(launch).getByRole('link', { name: /Try FileFlip live/ })).toHaveAttribute('href', 'https://fileflip-gules.vercel.app/')
    expect(within(launch).getByRole('link', { name: /Read the code/ })).toHaveAttribute('href', 'https://github.com/MuhammadTalhakhan2003/fileflip')
    expect(within(launch).getByAltText(/FileFlip home page in light mode/)).toBeInTheDocument()
  })

  it('shows the FileFlip screenshot that matches a dark theme', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Choose a theme' }))
    await user.click(screen.getByRole('menuitemradio', { name: /Mughal/ }))
    expect(document.documentElement).toHaveAttribute('data-theme', 'mughal')
    expect(localStorage.getItem('theme')).toBe('mughal')
    expect(screen.getByAltText(/FileFlip home page in dark mode/)).toBeInTheDocument()
  })

  it('links code for Paperly and Hifazat and the Paperly live demo', () => {
    render(<App />)
    const codes = screen.getAllByRole('link', { name: /^Code/ }).map((l) => l.getAttribute('href'))
    expect(codes).toContain('https://github.com/MuhammadTalhakhan2003/Paperly')
    expect(codes).toContain('https://github.com/MuhammadTalhakhan2003/Hifazat-FYP')
    expect(screen.getByRole('link', { name: /Live demo/ })).toHaveAttribute('href', 'https://paperly-ashen.vercel.app')
  })

  it('has one pitch for everyone, with no audience switch', () => {
    render(<App />)
    expect(screen.queryByRole('button', { name: 'Recruiter' })).not.toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Job opportunity' })).toBeChecked()
  })

  it('opens the command menu with Ctrl+K and switches theme from it', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.keyboard('{Control>}k{/Control}')
    const box = screen.getByRole('combobox', { name: /command/i })
    await user.type(box, 'terminal')
    expect(screen.getAllByRole('option')).toHaveLength(1)
    await user.keyboard('{Enter}')
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(document.documentElement).toHaveAttribute('data-theme', 'terminal')
  })

  it('links the intro video walkthrough from the hero and its own section', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /intro video/i }).filter((l) => l.getAttribute('target') === '_blank')
    expect(links.length).toBeGreaterThanOrEqual(2)
    for (const l of links) expect(l).toHaveAttribute('href', 'https://www.capcut.com/sv2/ZS9UeFQpb78CJ-kei9b/')
  })

  it('offers one-tap call and WhatsApp links', () => {
    render(<App />)
    const calls = screen.getAllByRole('link', { name: /^Call/ })
    expect(calls.length).toBeGreaterThan(0)
    for (const c of calls) expect(c).toHaveAttribute('href', 'tel:+923044292975')
    for (const w of screen.getAllByRole('link', { name: /^WhatsApp/ })) expect(w.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/923044292975/)
  })

  it('runs the stack check on pasted text', async () => {
    const user = userEvent.setup()
    render(<App />)
    const box = screen.getByLabelText(/Job post or brief/)
    await user.clear(box)
    await user.type(box, 'Looking for Node.js, Express, MongoDB, GraphQL and Kubernetes engineers.')
    await user.click(screen.getByRole('button', { name: 'Check fit' }))
    const result = screen.getByTestId('fit-result')
    expect(within(result).getByText('60%')).toBeInTheDocument()
    expect(within(result).getByText('GraphQL')).toBeInTheDocument()
  })

  it('shows field errors instead of sending an incomplete message', async () => {
    const user = userEvent.setup()
    const fetchSpy = vi.spyOn(globalThis, 'fetch')
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(screen.getByText('Name is required.')).toBeInTheDocument()
    expect(fetchSpy).not.toHaveBeenCalled()
  })

  it('confirms a sent message', async () => {
    const user = userEvent.setup()
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response('{"ok":true}', { status: 200 }))
    render(<App />)
    await user.type(screen.getByLabelText(/Your name/), 'Ayesha Malik')
    await user.type(screen.getByLabelText(/^Email/), 'ayesha@northwind.io')
    await user.type(screen.getByLabelText(/^Message/), 'Are you free for a 30-minute call on Tuesday?')
    await user.click(screen.getByRole('button', { name: 'Send message' }))
    expect(await screen.findByText(/Message sent\. I will reply to ayesha@northwind\.io/)).toBeInTheDocument()
  })
})
