import type { InquiryKind } from '../types'

export interface ContactInput {
  name: string
  email: string
  company: string
  roleOrProject: string
  kind: InquiryKind
  message: string
  /** Honeypot. Real people leave it empty. */
  gotcha: string
}

export type FieldErrors = Partial<Record<'name' | 'email' | 'message', string>>

const EMAIL_RE = /^[^\s@<>()]+@[^\s@<>()]+\.[a-z]{2,}$/i

export function validateContact(input: ContactInput): FieldErrors {
  const errors: FieldErrors = {}
  if (!input.name.trim()) errors.name = 'Name is required.'
  if (!EMAIL_RE.test(input.email.trim())) errors.email = 'Enter a valid email address, like name@company.com.'
  if (input.message.trim().length < 20) errors.message = 'Message needs at least 20 characters.'
  return errors
}

/** Posts to Formspree's JSON API. Throws with a readable message on failure. */
export async function sendContact(endpoint: string, input: ContactInput, fetchImpl: typeof fetch = fetch): Promise<void> {
  const res = await fetchImpl(endpoint, {
    method: 'POST',
    headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
    body: JSON.stringify({
      name: input.name.trim(),
      email: input.email.trim(),
      company: input.company.trim(),
      role_or_project: input.roleOrProject.trim(),
      inquiry_type: input.kind,
      message: input.message.trim(),
      _subject: `[Portfolio] ${input.kind}: ${input.name.trim()}${input.company.trim() ? ` (${input.company.trim()})` : ''}`,
      _replyto: input.email.trim(),
      _gotcha: input.gotcha,
    }),
  })
  if (!res.ok) {
    const data = (await res.json().catch(() => ({}))) as { errors?: { message: string }[] }
    throw new Error(data.errors?.[0]?.message ?? 'The message could not be sent. Please email me directly.')
  }
}
