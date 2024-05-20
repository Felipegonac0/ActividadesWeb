import { useEffect, useState } from 'react'
import { Character } from '../types/Character'
export interface Props {
  id: string
}
export default function CharacterProfile({ id }: Props) {
  const [character, setCharacter] = useState<Character>({
    id: 0,
    name: '',
    status: '',
    species: '',
    gender: '',
    image: '',
    origin: {
      name: '',
      url: '',
    },
    url: '',
    location: {
      name: '',
      url: '',
    },
    episode: [''],
    created: '',
    type: '',
  })
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://rickandmortyapi.com/api/character/${id}`,
      )
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setCharacter(data)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div
      className='relative mx-auto mb-6 mt-16 w-full min-w-0 max-w-md break-words rounded-xl bg-white shadow-lg md:max-w-2xl'
      data-testid='Character-profile'
    >
      <div className='px-6'>
        <div className='flex flex-wrap justify-center'>
          <div className='flex w-full justify-center'>
            <div className='relative'>
              <img
                src={character.image}
                className='absolute -m-16 -ml-20 max-w-[150px] rounded-full border-none align-middle shadow-xl lg:-ml-16'
                alt={''}
              />
            </div>
          </div>
          <div className='mt-20 w-full text-center'>
            <div className='flex justify-center pb-0 pt-8 lg:pt-4'>
              <div className='p-3 text-center'>
                <span className='block text-xl font-bold uppercase tracking-wide text-slate-700'>
                  {character.episode.length}
                </span>
                <span className='text-sm text-slate-400'>Episodes</span>
              </div>
            </div>
          </div>
        </div>
        <div className='mt-2 text-center'>
          <h3 className='mb-1 text-2xl font-bold leading-normal text-slate-700'>
            {character.name}
          </h3>
          <div className='mb-2 mt-0 text-xs font-bold uppercase text-slate-400'>
            <i className='fas fa-map-marker-alt mr-2 text-slate-400 opacity-75'></i>
            {character.location.name}
          </div>
        </div>
        <div className='mt-6 border-t border-slate-200 py-6 text-center'>
          <div className='flex flex-wrap justify-center'>
            <div className='w-full px-4'>
              <p className='mb-4 font-normal leading-relaxed text-slate-600'>
                <strong>Status: </strong> {character.status}
              </p>
              <p className='mb-4 font-normal leading-relaxed text-slate-600'>
                <strong>Species: </strong> {character.species}
              </p>
              <p className='mb-4 font-normal leading-relaxed text-slate-600'>
                <strong>Type: </strong> {character.type}
              </p>
              <p className='mb-4 font-normal leading-relaxed text-slate-600'>
                <strong>Gender: </strong> {character.gender}
              </p>
              <p className='mb-4 font-normal leading-relaxed text-slate-600'>
                <strong>First episode: </strong> {character.episode[0]}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
