import { useState } from 'react'

export function CopyButton({ value }: { value: string }) {
  const [copied, setCopied] = useState(false)
  async function copy() {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(true)
      setTimeout(() => setCopied(false), 1600)
    } catch {
      window.prompt('Copy this:', value)
    }
  }
  return (
    <button className="copy" type="button" onClick={copy} aria-label={`Copy ${value}`}>
      {copied ? 'Copied' : 'Copy'}
    </button>
  )
}
