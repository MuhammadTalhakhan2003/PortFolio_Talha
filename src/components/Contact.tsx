import { useState, type FormEvent, type ReactNode } from 'react'
import { INQUIRY_KINDS, type Audience, type InquiryKind } from '../types'
import { links, pitches, profile } from '../data/profile'
import { sendContact, validateContact, type ContactInput, type FieldErrors } from '../lib/contact'
import { Chapter } from './Chapter'
import { CopyButton } from './CopyButton'

type Status = { kind: 'idle' } | { kind: 'sending' } | { kind: 'sent'; email: string } | { kind: 'error'; message: string }

const empty = (): Omit<ContactInput, 'kind'> => ({ name: '', email: '', company: '', roleOrProject: '', message: '', gotcha: '' })

export function Contact({ audience }: { audience: Audience }) {
  const [fields, setFields] = useState<Omit<ContactInput, 'kind'>>(empty)
  // Until the visitor picks a type, the audience switch decides the most likely one.
  const [chosenKind, setChosenKind] = useState<InquiryKind | null>(null)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [status, setStatus] = useState<Status>({ kind: 'idle' })

  const form: ContactInput = { ...fields, kind: chosenKind ?? pitches[audience].defaultInquiry }
  const set = <K extends keyof typeof fields>(key: K, value: (typeof fields)[K]) => setFields((f) => ({ ...f, [key]: value }))

  async function onSubmit(e: FormEvent) {
    e.preventDefault()
    const found = validateContact(form)
    setErrors(found)
    if (Object.keys(found).length) {
      document.getElementById(`c-${Object.keys(found)[0]}`)?.focus()
      return
    }
    setStatus({ kind: 'sending' })
    try {
      await sendContact(profile.formEndpoint, form)
      setStatus({ kind: 'sent', email: form.email.trim() })
      setFields(empty())
    } catch (err) {
      setStatus({ kind: 'error', message: err instanceof Error ? err.message : 'The message could not be sent.' })
    }
  }

  const roleLabel = audience === 'client' ? 'Project' : 'Role you are hiring for'

  return (
    <Chapter id="contact" numeral="VI" title="Correspondence" note="Messages go straight to my inbox. I reply within 24 hours.">
      <div className="contact-layout">
        <form className="contact-form" onSubmit={onSubmit} noValidate aria-label="Contact form">
          <div className="row">
            <Field id="name" label="Your name" error={errors.name}>
              <input id="c-name" autoComplete="name" maxLength={100} value={form.name} onChange={(e) => set('name', e.target.value)} aria-invalid={!!errors.name || undefined} />
            </Field>
            <Field id="email" label="Email" error={errors.email}>
              <input id="c-email" type="email" autoComplete="email" maxLength={200} value={form.email} onChange={(e) => set('email', e.target.value)} aria-invalid={!!errors.email || undefined} />
            </Field>
          </div>
          <div className="row">
            <Field id="company" label="Company" optional>
              <input id="c-company" autoComplete="organization" maxLength={120} value={form.company} onChange={(e) => set('company', e.target.value)} />
            </Field>
            <Field id="role" label={roleLabel} optional>
              <input id="c-role" maxLength={120} value={form.roleOrProject} onChange={(e) => set('roleOrProject', e.target.value)} />
            </Field>
          </div>
          <fieldset className="field">
            <legend className="label">This is about</legend>
            <div className="chips">
              {INQUIRY_KINDS.map((k) => (
                <label className="chip" key={k}>
                  <input
                    type="radio"
                    name="kind"
                    value={k}
                    checked={form.kind === k}
                    onChange={() => setChosenKind(k)}
                  />
                  <span>{k}</span>
                </label>
              ))}
            </div>
          </fieldset>
          <Field id="message" label="Message" error={errors.message}>
            <textarea
              id="c-message"
              rows={6}
              maxLength={4000}
              placeholder="Role or project, timeline, budget range if you have one, and how you would like to talk."
              value={form.message}
              onChange={(e) => set('message', e.target.value)}
              aria-invalid={!!errors.message || undefined}
            />
          </Field>
          <input className="hp" tabIndex={-1} autoComplete="off" aria-hidden="true" name="_gotcha" value={form.gotcha} onChange={(e) => set('gotcha', e.target.value)} />
          <div className="form-foot">
            <button className="btn btn-primary" type="submit" disabled={status.kind === 'sending'}>
              {status.kind === 'sending' ? 'Sending…' : 'Send message'}
            </button>
            <p className={`form-status ${status.kind === 'sent' ? 'ok' : status.kind === 'error' ? 'err' : ''}`} role="status">
              {status.kind === 'sent' && `Message sent. I will reply to ${status.email} within 24 hours.`}
              {status.kind === 'error' && `${status.message} You can also email ${profile.email}.`}
            </p>
          </div>
        </form>

        <aside className="direct" aria-label="Direct contact">
          <h3>Direct</h3>
          <dl className="direct-list">
            <div>
              <dt>Email</dt>
              <dd>
                <a className="mono" href={`mailto:${profile.email}`}>{profile.email}</a> <CopyButton value={profile.email} />
              </dd>
            </div>
            <div>
              <dt>Phone / WhatsApp</dt>
              <dd>
                <a className="mono" href={profile.whatsapp} target="_blank" rel="noopener">{profile.phone}</a> <CopyButton value={profile.phone} />
              </dd>
            </div>
            <div>
              <dt>Based in</dt>
              <dd>{profile.location} (PKT, UTC+5)</dd>
            </div>
            <div>
              <dt>Hours</dt>
              <dd>{profile.hours}</dd>
            </div>
          </dl>
          <ul className="links">
            {links.map((l) => (
              <li key={l.url}>
                <a href={l.url} target="_blank" rel="noopener">{l.label} ↗</a>
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </Chapter>
  )
}

function Field({ id, label, optional, error, children }: { id: string; label: string; optional?: boolean; error?: string; children: ReactNode }) {
  return (
    <div className="field">
      <label className="label" htmlFor={`c-${id}`}>
        {label} {optional && <span className="hint">optional</span>}
      </label>
      {children}
      <p className="field-error">{error}</p>
    </div>
  )
}
