'use client'
import Link from 'next/link'
import { useEffect, useState } from 'react'

interface Props {
  id: number
  imgUrl: string
  name: string
  status: string
  species: string
  gender: string
  location: string
}

const Card: React.FC<Props> = ({
  id,
  imgUrl,
  name,
  status,
  species,
  gender,
  location,
}) => {
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
    <div className=' max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'>
      <Link href='#'>
        <img className='w-full rounded-t-lg' src={imgUrl} alt='' />
      </Link>
      <div className='p-5'>
        <a href={`/profile?id=${id}`}>
          <h5 className='mb-2 text-wrap text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {name}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Status: </strong> {status}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Location: </strong> {location}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Species: </strong> {species}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Gender: </strong> {gender}
        </p>
        <div className='flex flex-row items-center justify-between'>
          <button onClick={toggleFavorite}>
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
          <a
            href={`/profile?id=${id}`}
            className='inline-flex items-center rounded-lg bg-blue-700 px-3 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          >
            Read more
            <svg
              className='ms-2 h-3.5 w-3.5 rtl:rotate-180'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 14 10'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M1 5h12m0 0L9 1m4 4L9 9'
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Card
