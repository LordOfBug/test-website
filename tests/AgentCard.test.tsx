import { describe, it, expect } from 'vitest'
import { render, screen } from '@testing-library/react'
import AgentCard from '../src/components/dashboard/AgentCard'

describe('AgentCard Component', () => {
  const defaultProps = {
    id: 'BURRO_01',
    name: 'Architect Burro',
    status: 'executing' as const,
    progress: 45,
    cpu: '12%',
    tokens: '450/s'
  }

  it('renders agent name and id', () => {
    render(<AgentCard {...defaultProps} />)
    expect(screen.getByText('Architect Burro')).toBeDefined()
    expect(screen.getByText('BURRO_01')).toBeDefined()
  })

  it('displays the correct progress percentage', () => {
    render(<AgentCard {...defaultProps} />)
    expect(screen.getByText('45%')).toBeDefined()
  })

  it('renders technical stats (CPU and Tokens)', () => {
    render(<AgentCard {...defaultProps} />)
    expect(screen.getByText('12%')).toBeDefined()
    expect(screen.getByText('450/s')).toBeDefined()
  })
})
