import { fireEvent, render, screen } from '@testing-library/react'
import Star from './Star'
import { afterEach, beforeEach, describe, expect, it } from 'vitest'

describe('Star Component Test', () => {
  const id = 1

  beforeEach(() => {
    // Clear local storage before each test
    localStorage.clear()
  })

  afterEach(() => {
    // Clean up after each test
    localStorage.clear()
  })
  it('should be rendered on the screen', () => {
    render(<Star id={id} />)
    expect(screen.getByTestId('Star')).toBeInTheDocument()
  })

  it('should save the favorite status to local storage', () => {
    render(<Star id={id} />)
    // Click to mark as favorite
    fireEvent.click(screen.getByTestId('Star'))
    // Check local storage
    const favoritesFromStorage = localStorage.getItem('favorites')
    const favoritesArray = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : []
    expect(favoritesArray).toContain(id)
  })

  it('should remove the favorite status from local storage', () => {
    // Set initial local storage state
    localStorage.setItem('favorites', JSON.stringify([id]))

    render(<Star id={id} />)
    fireEvent.click(screen.getByTestId('Star'))

    // Check local storage
    const favoritesFromStorage = localStorage.getItem('favorites')
    const favoritesArray = favoritesFromStorage
      ? JSON.parse(favoritesFromStorage)
      : []

    expect(favoritesArray).not.toContain(id)
  })
})
