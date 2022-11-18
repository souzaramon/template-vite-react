import { describe, it, expect } from 'vitest'
import { render, act } from '@testing-library/react'

import { Counter } from '~/components/Counter'

describe('Counter.tsx', () => {
  it('should render value as 0 on first render', () => {
    let { getByText } = render(<Counter />)
    expect(getByText('0')).toBeInTheDocument()
  })

  it('should render value as 1 after click on increment button', () => {
    let { getByText, rerender } = render(<Counter />)

    act(() => {
      getByText('increment').click()
    })

    rerender(<Counter />)
    expect(getByText('1')).toBeInTheDocument()
  })
})
