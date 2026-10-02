const MONTHS = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']

function parse(ym: string): { y: number; m: number } {
  const match = /^(\d{4})-(\d{2})$/.exec(ym)
  if (!match) throw new Error(`Expected YYYY-MM, got "${ym}"`)
  return { y: Number(match[1]), m: Number(match[2]) - 1 }
}

/** "2025-08" -> "Aug 2025"; null -> "Present". */
export function formatMonth(ym: string | null): string {
  if (!ym) return 'Present'
  const { y, m } = parse(ym)
  return `${MONTHS[m]} ${y}`
}

/** Inclusive month count between two YYYY-MM values (end null = now). */
export function monthsBetween(start: string, end: string | null, now = new Date()): number {
  const a = parse(start)
  const b = end ? parse(end) : { y: now.getFullYear(), m: now.getMonth() }
  return (b.y - a.y) * 12 + (b.m - a.m) + 1
}

/** 14 -> "1 yr 2 mos". */
export function formatDuration(months: number): string {
  const y = Math.floor(months / 12)
  const m = months % 12
  const parts: string[] = []
  if (y) parts.push(`${y} ${y === 1 ? 'yr' : 'yrs'}`)
  if (m) parts.push(`${m} ${m === 1 ? 'mo' : 'mos'}`)
  return parts.join(' ') || '1 mo'
}
