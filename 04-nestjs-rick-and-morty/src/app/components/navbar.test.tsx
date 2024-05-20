import { expect, it, describe } from 'vitest'
import { screen, render } from '@testing-library/react'
import NavBar from './navbar'

describe('Character Component Test', () => {
  it('should be rendered on the screen', () => {
    render(<NavBar />)
    expect(screen.getByTestId('navbar')).toBeInTheDocument()
  })
})
