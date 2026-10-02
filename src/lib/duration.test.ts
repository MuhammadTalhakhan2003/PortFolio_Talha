import { formatDuration, formatMonth, monthsBetween } from './duration'

describe('duration helpers', () => {
  it('formats months', () => {
    expect(formatMonth('2025-08')).toBe('Aug 2025')
    expect(formatMonth(null)).toBe('Present')
  })

  it('counts months inclusively', () => {
    expect(monthsBetween('2024-09', '2024-12')).toBe(4)
    expect(monthsBetween('2025-08', '2026-09')).toBe(14)
    expect(monthsBetween('2026-04', null, new Date(2026, 9, 2))).toBe(7)
  })

  it('formats durations', () => {
    expect(formatDuration(4)).toBe('4 mos')
    expect(formatDuration(12)).toBe('1 yr')
    expect(formatDuration(14)).toBe('1 yr 2 mos')
    expect(formatDuration(25)).toBe('2 yrs 1 mo')
  })

  it('rejects malformed dates', () => {
    expect(() => formatMonth('Aug 2025')).toThrow(/YYYY-MM/)
  })
})
