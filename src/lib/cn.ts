import { clsx, type ClassValue } from 'clsx'
import { twMerge } from 'tailwind-merge'

/** Merge Tailwind class names (the `cn` helper Watermelon UI components expect). */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
