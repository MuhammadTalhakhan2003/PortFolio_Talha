export type Audience = 'recruiter' | 'ceo' | 'client'

export interface Link {
  label: string
  url: string
}

export interface Pitch {
  lede: string
  points: string[]
  primary: { label: string; href: string; external?: boolean }
  secondary: { label: string; href: string; external?: boolean }
  tertiary: { label: string; href: string; external?: boolean }
  defaultInquiry: InquiryKind
}

/** Year-month string, e.g. "2025-08". */
export type YearMonth = string

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

export interface Project {
  name: string
  kind: string
  summary: string
  detail?: string
  stack: string[]
  links: Link[]
  image?: { src: string; width: number; height: number; alt: string }
}

export interface Service {
  title: string
  body: string
  proof: string
}

export const INQUIRY_KINDS = [
  'Full-time role',
  'Contract role',
  'Interview request',
  'Freelance project',
  'Other',
] as const
export type InquiryKind = (typeof INQUIRY_KINDS)[number]
