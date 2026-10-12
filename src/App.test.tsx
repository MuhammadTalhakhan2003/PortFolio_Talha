import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from './App'

beforeAll(() => {
  // jsdom lacks these browser APIs.
  window.matchMedia ??= ((q: string) => ({ matches: false, media: q, addEventListener() {}, removeEventListener() {} })) as never
  window.IntersectionObserver ??= class {
    observe() {}
    disconnect() {}
  } as never
})
beforeEach(() => {
  localStorage.clear()
  window.history.replaceState(null, '', '/')
})

describe('App', () => {
  it('renders the name, current role and computed durations', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: 'Muhammad Talha Khan' })).toBeInTheDocument()
    expect(screen.getAllByText('Chatley.ai').length).toBeGreaterThan(0)
    expect(screen.getByText('1 yr 2 mos')).toBeInTheDocument() // TechClan, Aug 2025 – Sep 2026
  })

  it('links the intro video walkthrough from the hero and its own section', () => {
    render(<App />)
    const links = screen.getAllByRole('link', { name: /intro video/i }).filter((l) => l.getAttribute('target') === '_blank')
    expect(links.length).toBeGreaterThanOrEqual(2)
    for (const l of links) expect(l).toHaveAttribute('href', 'https://www.capcut.com/sv2/ZS9UeFQpb78CJ-kei9b/')
    expect(screen.getByRole('heading', { level: 3, name: 'Hifazat' })).toBeInTheDocument()
  })

  it('offers one-tap call and WhatsApp links for recruiters', () => {
    render(<App />)
    const calls = screen.getAllByRole('link', { name: /^Call/ })
    expect(calls.length).toBeGreaterThan(0)
    for (const c of calls) expect(c).toHaveAttribute('href', 'tel:+923044292975')
    for (const w of screen.getAllByRole('link', { name: /^WhatsApp/ })) expect(w.getAttribute('href')).toMatch(/^https:\/\/wa\.me\/923044292975/)
  })

  it('switches the pitch and the default inquiry type by audience', async () => {
    const user = userEvent.setup()
    render(<App />)
    expect(screen.getByRole('link', { name: 'Download résumé (PDF)' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Interview request' })).toBeChecked()

    await user.click(screen.getByRole('button', { name: 'Client' }))
    expect(screen.getByRole('link', { name: 'Get a fixed-price quote' })).toBeInTheDocument()
    expect(screen.getByRole('radio', { name: 'Freelance project' })).toBeChecked()
    expect(window.location.search).toBe('?for=client')
    expect(localStorage.getItem('audience')).toBe('client')
  })

  it('opens on the audience named in the link', () => {
    window.history.replaceState(null, '', '/?for=ceo')
    render(<App />)
    expect(screen.getByRole('button', { name: 'Founder / CEO' })).toHaveAttribute('aria-pressed', 'true')
  })

  it('runs the fit check on pasted text', async () => {
    const user = userEvent.setup()
    render(<App />)
    const box = screen.getByLabelText(/Job post or brief/)
    await user.clear(box)
    await user.type(box, 'Looking for Node.js, Express, MongoDB, Redis and Kubernetes engineers.')
    await user.click(screen.getByRole('button', { name: 'Check fit' }))
    const result = screen.getByTestId('fit-result')
    expect(within(result).getByText('60%')).toBeInTheDocument()
    expect(within(result).getByText('Redis')).toBeInTheDocument()
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
