import { useEffect, useState } from 'react'
export interface Props {
  id: number
}
export default function Star({ id }: Props) {
  const [favorite, setFavorite] = useState<boolean>(false)

  useEffect(() => {
    // Load favorite characters from local storage
    const favoritesFromStorage = localStorage.getItem('favorites')
    if (favoritesFromStorage) {
      const favoritesArray = JSON.parse(favoritesFromStorage)
      setFavorite(favoritesArray.includes(id))
    }
  }, [id])

  const toggleFavorite = () => {
    setFavorite(!favorite)
    // Update favorite characters array
    let favoritesArray: number[] = []
    const favoritesFromStorage = localStorage.getItem('favorites')
    if (favoritesFromStorage) {
      favoritesArray = JSON.parse(favoritesFromStorage)
    }
    if (favorite) {
      // Remove character from favorites
      favoritesArray = favoritesArray.filter((favId: number) => favId !== id)
    } else {
      // Add character to favorites
      favoritesArray.push(id)
    }
    // Save updated favorites array to local storage
    localStorage.setItem('favorites', JSON.stringify(favoritesArray))
  }
  return (
    <button onClick={toggleFavorite} data-testid='Star'>
      <svg
        xmlns='http://www.w3.org/2000/svg'
        fill={`${favorite ? 'blue' : 'none'}`}
        viewBox='0 0 24 24'
        strokeWidth={1.5}
        stroke='currentColor'
        className='h-max w-8'
      >
        <path
          strokeLinecap='round'
          strokeLinejoin='round'
          d='M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z'
        />
      </svg>
    </button>
  )
}
