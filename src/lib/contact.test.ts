import { sendContact, validateContact, type ContactInput } from './contact'

const valid: ContactInput = {
  name: 'Ayesha Malik',
  email: 'ayesha@northwind.io',
  company: 'Northwind',
  roleOrProject: 'Senior Node.js Engineer',
  kind: 'Interview request',
  message: 'Are you free for a 30-minute call on Tuesday?',
  gotcha: '',
}

describe('validateContact', () => {
  it('accepts a complete message', () => {
    expect(validateContact(valid)).toEqual({})
  })
  it('flags each missing field', () => {
    const errors = validateContact({ ...valid, name: ' ', email: 'nope', message: 'short' })
    expect(Object.keys(errors).sort()).toEqual(['email', 'message', 'name'])
  })
})

describe('sendContact', () => {
  it('posts JSON to Formspree with a useful subject line', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"ok":true}', { status: 200 }))
    await sendContact('https://formspree.io/f/test', valid, fetchMock)
    const [url, init] = fetchMock.mock.calls[0]
    const body = JSON.parse(init.body)
    expect(url).toBe('https://formspree.io/f/test')
    expect(init.headers.Accept).toBe('application/json')
    expect(body._subject).toBe('[Portfolio] Interview request: Ayesha Malik (Northwind)')
    expect(body._replyto).toBe('ayesha@northwind.io')
  })

  it('surfaces the service error message', async () => {
    const fetchMock = vi.fn().mockResolvedValue(new Response('{"errors":[{"message":"Form not found"}]}', { status: 404 }))
    await expect(sendContact('x', valid, fetchMock)).rejects.toThrow('Form not found')
  })
})
