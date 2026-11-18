// Adapted from Watermelon UI "shimmer-button" (https://ui.watermelon.sh, registry: shimmer-button).
// Same light sweep on hover, as a link styled with the portfolio's .btn classes.
import type { AnchorHTMLAttributes, ReactNode } from 'react'
import { cn } from '../../lib/cn'

interface Props extends AnchorHTMLAttributes<HTMLAnchorElement> {
  children: ReactNode
}

export function ShimmerLink({ children, className, ...props }: Props) {
  return (
    <a className={cn('group relative overflow-hidden', className)} {...props}>
      <span className="relative z-10">{children}</span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -translate-x-full bg-linear-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-full"
      />
    </a>
  )
}
