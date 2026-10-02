import { useEffect, useMemo, useState, type FormEvent } from 'react'
import { matchJob, SAMPLE_JOB_POST, type MatchResult } from '../lib/matcher'
import { Chapter } from './Chapter'

export function FitCheck() {
  const [text, setText] = useState(SAMPLE_JOB_POST)
  const [result, setResult] = useState<MatchResult>(() => matchJob(SAMPLE_JOB_POST))
  const [error, setError] = useState('')
  const [edited, setEdited] = useState(false)

  function onSubmit(e: FormEvent) {
    e.preventDefault()
    if (text.trim().length < 40) {
      setError('Paste at least a few lines of the job post (40+ characters).')
      return
    }
    setError('')
    setResult(matchJob(text))
  }

  return (
    <Chapter
      id="fit"
      numeral="V"
      title="Fit check"
      note="Paste the requirements from your job post or project brief. Each technology is checked against where I have actually used it. Gaps are listed, not hidden. Nothing you paste leaves your browser."
    >
      <div className="fit-layout">
        <form className="fit-form" onSubmit={onSubmit} noValidate>
          <label htmlFor="jd" className="label">
            Job post or brief {!edited && <span className="hint">An example post is loaded. Replace it with yours.</span>}
          </label>
          <textarea
            id="jd"
            rows={12}
            spellCheck={false}
            value={text}
            aria-invalid={error ? true : undefined}
            aria-describedby="jd-error"
            onChange={(e) => {
              setText(e.target.value)
              setEdited(true)
            }}
          />
          <p className="field-error" id="jd-error" role="alert">
            {error}
          </p>
          <button className="btn btn-primary" type="submit">
            Check fit
          </button>
        </form>
        <FitResult result={result} />
      </div>
    </Chapter>
  )
}

function FitResult({ result }: { result: MatchResult }) {
  const [width, setWidth] = useState(0)
  useEffect(() => {
    const id = requestAnimationFrame(() => setWidth(result.score))
    return () => cancelAnimationFrame(id)
  }, [result.score])
  const meterStyle = useMemo(() => ({ width: `${width}%` }), [width])

  if (!result.recognised) {
    return (
      <div className="fit-result" aria-live="polite">
        <p className="verdict">{result.verdict}</p>
      </div>
    )
  }
  return (
    <div className="fit-result" aria-live="polite" data-testid="fit-result">
      <div className="score">
        <strong>{result.score}%</strong>
        <span>
          {result.matched.length} of {result.recognised} listed technologies
        </span>
      </div>
      <div className="meter" role="img" aria-label={`${result.score} percent match`}>
        <i style={meterStyle} />
      </div>
      <p className="verdict">{result.verdict}</p>
      {result.yearsNote && <p className="years">{result.yearsNote}</p>}
      {result.matched.length > 0 && (
        <>
          <p className="eyebrow fit-sub">Has used</p>
          <ul className="fit-list">
            {result.matched.map((m) => (
              <li key={m.name}>
                <span className="mark">✓</span>
                <span>
                  {m.name}
                  <small>{m.where}</small>
                </span>
              </li>
            ))}
          </ul>
        </>
      )}
      {result.missing.length > 0 && (
        <>
          <p className="eyebrow fit-sub">Not yet in production</p>
          <ul className="fit-list gaps">
            {result.missing.map((m) => (
              <li key={m.name}>
                <span className="mark">–</span>
                <span>{m.name}</span>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  )
}
