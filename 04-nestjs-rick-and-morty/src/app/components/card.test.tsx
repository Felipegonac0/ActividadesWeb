import { render, screen } from '@testing-library/react'
import Card from '@/app/components/card'
import { Character } from '../types/Character'
import { describe, expect, it } from 'vitest'

const mockInfoCharacter: Character = {
  id: 1,
  name: 'Rick Sanchez',
  status: 'Alive',
  species: 'Human',
  gender: 'Male',
  image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
  origin: {
    name: 'Earth (C-137)',
    url: 'https://rickandmortyapi.com/api/location/1',
  },
  url: 'https://rickandmortyapi.com/api/character/1',
  location: {
    name: 'Citadel of Ricks',
    url: 'https://rickandmortyapi.com/api/location/3',
  },
  episode: ['https://rickandmortyapi.com/api/episode/1'],
  created: '2017-11-04T18:48:46.250Z',
  type: '',
}

describe('Card Component Test', () => {
  it('should be rendered on the screen', () => {
    render(<Card character={mockInfoCharacter} />)
    expect(screen.getByTestId('Card')).toBeInTheDocument()
  })
})
