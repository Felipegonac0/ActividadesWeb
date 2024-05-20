'use client'
import Card from './components/card'
import NavBar from './components/navbar'
import { useEffect, useState } from 'react'
import { Character } from './types/Character'

export default function Home() {
  const [characters, setCharacters] = useState<Character[]>([])
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      const response = await fetch('https://rickandmortyapi.com/api/character')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()
      setCharacters(data.results)
    } catch (error) {
      console.error('Error fetching data:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavBar></NavBar>
      <div className='m-8'>
        <div className='grid grid-cols-1 place-items-center gap-7 md:grid-cols-3'>
          {characters.map((character, index) => (
            <Card character={character} key={index} />
          ))}
        </div>
      </div>
    </>
  )
}
