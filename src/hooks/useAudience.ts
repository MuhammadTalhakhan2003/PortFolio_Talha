import { useCallback, useState } from 'react'
import type { Audience } from '../types'
import { readStored, writeStored } from '../lib/storage'

const AUDIENCES: Audience[] = ['recruiter', 'ceo', 'client']
const isAudience = (v: string | null): v is Audience => !!v && (AUDIENCES as string[]).includes(v)

/**
 * Which visitor the page speaks to. A share link can preset it with ?for=client,
 * otherwise the last choice in this browser, otherwise recruiter.
 */
export function useAudience() {
  const [audience, setAudienceState] = useState<Audience>(() => {
    const fromUrl = new URLSearchParams(window.location.search).get('for')
    if (isAudience(fromUrl)) return fromUrl
    const saved = readStored('audience')
    return isAudience(saved) ? saved : 'recruiter'
  })

  const setAudience = useCallback((next: Audience) => {
    setAudienceState(next)
    writeStored('audience', next)
    const url = new URL(window.location.href)
    if (next === 'recruiter') url.searchParams.delete('for')
    else url.searchParams.set('for', next)
    window.history.replaceState(null, '', url)
  }, [])

  return { audience, setAudience, audiences: AUDIENCES }
}
