import { it, describe } from 'vitest'
import { screen, render } from '@testing-library/react'
import CharacterProfile from './CharacterProfile'

describe('Character Component Test', () => {
  it('should be rendered on the screen', async () => {
    render(<CharacterProfile id={'1'} />)
    await screen.findByTestId('Character-profile')
  })
})
