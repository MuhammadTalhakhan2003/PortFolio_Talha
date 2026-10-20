export interface Link {
  label: string
  url: string
}

/** Year-month string, e.g. "2025-08". */
export type YearMonth = string

export interface Shot {
  src: string
  width: number
  height: number
  alt: string
}

export interface Role {
  role: string
  company: string
  mode: string
  start: YearMonth
  end: YearMonth | null
  product?: { name: string; url: string; note: string }
  points: string[]
  stack: string[]
}

/** Small side project shown in the workshop grid. */
export interface Project {
  name: string
  kind: string
  summary: string
  stack: string[]
  links: Link[]
  image?: Shot
}

/** Headline project shown as a large alternating row. */
export interface Featured {
  name: string
  kind: string
  credit: string
  summary: string
  highlights: string[]
  stack: string[]
  links: Link[]
  image?: Shot
  /** Shown instead of a screenshot when the product has none to publish. */
  poster?: { title: string; lines: string[] }
}

export interface Launch {
  name: string
  tagline: string
  summary: string
  url: string
  code: string
  host: string
  stats: { value: string; label: string }[]
  features: { group: string; items: string }[]
  stack: string[]
  underTheHood: string[]
  shots: { light: Shot; dark: Shot; extra: (Shot & { caption: string })[] }
}

export interface IntroVideo {
  url: string
  /** Optional iframe-embeddable URL (e.g. https://www.youtube.com/embed/ID). */
  embed?: string
  title: string
  blurb: string
  chapters: { label: string; note: string }[]
}

export interface Service {
  title: string
  body: string
  proof: string
}

export const INQUIRY_KINDS = ['Job opportunity', 'Freelance project', 'Collaboration', 'Just saying hi'] as const
export type InquiryKind = (typeof INQUIRY_KINDS)[number]
