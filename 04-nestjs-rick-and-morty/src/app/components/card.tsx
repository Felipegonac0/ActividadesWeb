'use client'
import Link from 'next/link'
import { Character } from '../types/Character'
import Star from './Star'

export interface Props {
  character: Character
}

export function Card({ character }: Props) {
  return (
    <div
      className=' max-w-sm rounded-lg border border-gray-200 bg-white shadow dark:border-gray-700 dark:bg-gray-800'
      data-testid='Card'
    >
      <Link href='#'>
        <img className='w-full rounded-t-lg' src={character.image} alt='' />
      </Link>
      <div className='p-5'>
        <a href={`/profile?id=${character.id}`}>
          <h5 className='mb-2 text-wrap text-2xl font-bold tracking-tight text-gray-900 dark:text-white'>
            {character.name}
          </h5>
        </a>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Status: </strong> {character.status}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Location: </strong> {character.location.name}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Species: </strong> {character.species}
        </p>
        <p className='mb-3 font-normal text-gray-700 dark:text-gray-400'>
          <strong>Gender: </strong> {character.gender}
        </p>
        <div className='flex flex-row items-center justify-between'>
          <Star id={character.id} />
          <a
            href={`/profile?id=${character.id}`}
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
