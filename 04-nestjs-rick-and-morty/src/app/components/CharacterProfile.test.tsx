import { expect, it, describe } from 'vitest'
import { screen, render } from '@testing-library/react'
import CharacterProfile from './CharacterProfile'

describe('Character Component Test', () => {
  it('should be rendered on the screen', () => {
    render(<CharacterProfile id={'1'} />)
    expect(screen.getByTestId('Character-profile')).toBeInTheDocument()
  })
})
