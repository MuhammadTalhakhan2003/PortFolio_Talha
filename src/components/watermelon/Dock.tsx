// Adapted from Watermelon UI "dock" (https://ui.watermelon.sh, registry: dock).
// Keeps the macOS-style spring lift, click "bounce" and active dot; items are real links with
// labels/tooltips, and colours follow the portfolio's theme tokens.
import { motion, type Transition } from 'motion/react'
import { useState, type ReactNode } from 'react'
import { cn } from '../../lib/cn'

export interface DockItem {
  id: string
  label: string
  href: string
  icon: ReactNode
  external?: boolean
}

const dockSpring: Transition = { stiffness: 300, damping: 22, mass: 0.7 }

export function Dock({ items, className }: { items: DockItem[]; className?: string }) {
  const [selected, setSelected] = useState<string | null>(null)
  const [bounce, setBounce] = useState<string | null>(null)

  const handleClick = (id: string) => {
    setSelected(id)
    setBounce(id)
    setTimeout(() => setBounce(null), 200)
  }

  return (
    <motion.nav
      layout
      transition={dockSpring}
      aria-label="Elsewhere on the web"
      className={cn(
        'wm-dock relative inline-flex items-end gap-3 rounded-3xl px-3 py-2',
        'border-[1.5px] border-[var(--rule)] bg-[var(--paper-raised)] shadow-[var(--shadow)]',
        className,
      )}
    >
      {items.map((item) => (
        <motion.a
          key={item.id}
          href={item.href}
          target={item.external ? '_blank' : undefined}
          rel={item.external ? 'noopener' : undefined}
          aria-label={item.label}
          title={item.label}
          onClick={() => handleClick(item.id)}
          className="group relative block no-underline"
          style={{ transformOrigin: 'bottom' }}
          initial={{ scale: 1 }}
          whileHover={{ y: -6, scale: 1.12 }}
          whileFocus={{ y: -6, scale: 1.12 }}
          animate={{ scale: bounce === item.id ? 1.3 : 1, y: bounce === item.id ? -8 : 0 }}
          transition={{ type: 'spring', stiffness: 550, damping: 15, mass: 1.1 }}
        >
          <span
            className={cn(
              'grid size-10 place-items-center rounded-xl bg-[var(--accent-soft)] text-[var(--muted)] transition-colors duration-200',
              'group-hover:text-[var(--ink)]',
              selected === item.id && 'text-[var(--ink)]',
            )}
          >
            {item.icon}
          </span>
          <span
            className={cn(
              'pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 rounded-md px-2 py-1 text-xs font-semibold whitespace-nowrap',
              'bg-[var(--ink)] text-[var(--paper)] opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-visible:opacity-100',
            )}
          >
            {item.label}
          </span>
          <span className={cn('absolute left-1/2 mt-1 size-1 -translate-x-1/2 rounded-full bg-[var(--brass)] opacity-0 transition-opacity duration-300', selected === item.id && 'opacity-100')} />
        </motion.a>
      ))}
    </motion.nav>
  )
}
