import { describe, expect, it } from 'vitest'
import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Recommendations } from './Recommendations'
import type { RecommendationGroup } from '../types'

// Test fixtures only: these fictional people never appear on the site.
const LONG = 'Worked together on a long project. '.repeat(12)
const groups: RecommendationGroup[] = [
  {
    org: 'Example Co',
    kind: 'Professional · Testing',
    items: [
      { name: 'Test Person', headline: 'Test Engineer', relation: 'Direct manager', text: 'Short and sweet.', url: 'https://example.com/rec' },
      { name: 'Another Tester', headline: 'QA Lead', relation: 'Team colleague', text: LONG },
    ],
  },
  { org: 'Sample University', kind: 'Academic · CS', items: [{ name: 'Prof Example', headline: 'Lecturer', relation: 'Teacher', text: 'A fine student.' }] },
]

describe('Recommendations', () => {
  it('renders nothing while there are no recommendations', () => {
    const { container } = render(<Recommendations groups={[]} />)
    expect(container).toBeEmptyDOMElement()
  })

  it('groups cards by organisation with a count and the recommender details', () => {
    render(<Recommendations groups={groups} />)
    expect(screen.getByRole('heading', { level: 2, name: /what people say/i })).toBeInTheDocument()
    expect(screen.getByRole('heading', { level: 3, name: 'Example Co' })).toBeInTheDocument()
    expect(screen.getByText('2 recommendations')).toBeInTheDocument()
    expect(screen.getByText('1 recommendation')).toBeInTheDocument()
    expect(screen.getByText('Test Person')).toBeInTheDocument()
    expect(screen.getByText('Test Engineer')).toBeInTheDocument()
    expect(screen.getByText('Direct manager')).toBeInTheDocument()
    expect(screen.getByRole('link', { name: /View on LinkedIn/ })).toHaveAttribute('href', 'https://example.com/rec')
  })

  it('only offers "Read more" for long quotes and toggles it', async () => {
    const user = userEvent.setup()
    render(<Recommendations groups={groups} />)
    const buttons = screen.getAllByRole('button', { name: 'Read more' })
    expect(buttons).toHaveLength(1)
    await user.click(buttons[0])
    const card = buttons[0].closest('li') as HTMLElement
    expect(within(card).getByRole('button', { name: 'Show less' })).toHaveAttribute('aria-expanded', 'true')
  })
})
