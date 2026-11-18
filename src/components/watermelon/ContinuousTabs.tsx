// Adapted from Watermelon UI "continuous-tabs" (https://ui.watermelon.sh, registry: continuous-tabs).
// Same spring "active pill" via a shared layoutId; colours come from the portfolio's theme tokens
// instead of fixed zinc shades, and it is a controlled, accessible tablist.
import { LayoutGroup, motion } from 'motion/react'
import { useId } from 'react'
import { cn } from '../../lib/cn'

export interface TabItem {
  id: string
  label: string
  count?: number
}

interface Props {
  tabs: TabItem[]
  active: string
  onChange: (id: string) => void
  label: string
  className?: string
}

export function ContinuousTabs({ tabs, active, onChange, label, className }: Props) {
  const pill = useId()
  return (
    <LayoutGroup id={pill}>
      <nav
        role="tablist"
        aria-label={label}
        className={cn(
          'wm-tabs relative inline-flex max-w-full flex-wrap items-center gap-1 rounded-full p-1.5',
          'border border-[var(--rule)] bg-[var(--paper-raised)]',
          'shadow-[inset_0_-2px_4px_rgb(0_0_0/0.06),inset_0_1px_0_rgb(255_255_255/0.6),0_4px_14px_rgb(0_0_0/0.05)]',
          className,
        )}
      >
        {tabs.map((tab) => {
          const isActive = active === tab.id
          return (
            <button
              key={tab.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => onChange(tab.id)}
              className="relative cursor-pointer rounded-full border-0 bg-transparent px-4 py-2 outline-none sm:px-5"
            >
              {isActive && (
                <motion.span
                  layoutId="active-pill"
                  transition={{ type: 'spring', stiffness: 380, damping: 30, mass: 0.9 }}
                  className="absolute inset-0 rounded-full bg-[var(--accent)] shadow-sm"
                />
              )}
              <motion.span
                layout="position"
                className={cn(
                  'relative z-10 inline-flex items-center gap-2 text-sm font-semibold whitespace-nowrap transition-colors duration-200',
                  isActive ? 'text-[var(--accent-ink)]' : 'text-[var(--muted)] hover:text-[var(--ink)]',
                )}
              >
                {tab.label}
                {tab.count !== undefined && <span className="text-xs opacity-70 tabular-nums">{tab.count}</span>}
              </motion.span>
            </button>
          )
        })}
      </nav>
    </LayoutGroup>
  )
}
