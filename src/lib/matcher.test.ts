import { contains, matchJob, yearsAsked } from './matcher'

describe('matchJob', () => {
  it('reports matches with evidence and lists gaps honestly', () => {
    const r = matchJob('We need 3+ years Node.js, PostgreSQL, React, TypeScript and AWS experience.')
    expect(r.matched.map((m) => m.name)).toEqual(['Node.js', 'React', 'PostgreSQL'])
    expect(r.missing.map((m) => m.name).sort()).toEqual(['AWS', 'TypeScript'])
    expect(r.score).toBe(60)
    expect(r.yearsNote).toMatch(/stretch/)
    expect(r.matched[0].where).toContain('ForthLogic')
  })

  it('does not count Node.js as a separate JavaScript hit', () => {
    expect(matchJob('Node.js developer').matched.map((m) => m.name)).toEqual(['Node.js'])
  })

  it('returns a clear verdict when nothing is recognised', () => {
    const r = matchJob('We are a friendly team that values kindness and coffee.')
    expect(r.recognised).toBe(0)
    expect(r.verdict).toMatch(/No recognised technologies/)
  })
})

describe('contains', () => {
  it('matches symbols like c# and ci/cd on word boundaries', () => {
    expect(contains('experience with c# and .net', 'c#')).toBe(true)
    expect(contains('ci/cd pipelines', 'ci/cd')).toBe(true)
    expect(contains('reacting quickly', 'react')).toBe(false)
  })
})

describe('yearsAsked', () => {
  it.each([
    ['3+ years of experience', 3],
    ['2-4 yrs', 2],
    ['minimum 5 years', 5],
    ['no number here', null],
  ])('%s -> %s', (text, expected) => {
    expect(yearsAsked(text)).toBe(expected)
  })
})
