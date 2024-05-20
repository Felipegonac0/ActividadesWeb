'use client'
import { useEffect, useState } from 'react'
import { Character } from '../types/Character'
import Card from '../components/card'
import NavBar from '../components/navbar'

export default function Favorites() {
  const [characters, setCharacters] = useState<Character[]>([])
  // Function to fetch data from the API
  const fetchData = async () => {
    try {
      let favoritesFromStorage = localStorage.getItem('favorites')
      if (!favoritesFromStorage) {
        favoritesFromStorage = 'not found'
      }
      const favoritesArray = JSON.parse(favoritesFromStorage)
      const response = await fetch('https://rickandmortyapi.com/api/character')
      if (!response.ok) {
        throw new Error('Failed to fetch data')
      }
      const data = await response.json()

      let favoriteCharacters = data.results
      favoriteCharacters = favoriteCharacters.filter((character: Character) =>
        favoritesArray.includes(character.id),
      )
      setCharacters(favoriteCharacters)
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
