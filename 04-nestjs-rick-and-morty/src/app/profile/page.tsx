'use client'
import { useSearchParams } from 'next/navigation'
import CharacterProfile from '../components/CharacterProfile'
import NavBar from '../components/navbar'

function CharacterProfilePage() {
  const idParams = useSearchParams()
  const characterId = idParams.get('id')
  if (!characterId) {
    return (
      <>
        <NavBar></NavBar>
        <h1>NOT USER FOUND</h1>
      </>
    )
  }

  return (
    <>
      <NavBar></NavBar>
      <CharacterProfile id={characterId}></CharacterProfile>
    </>
  )
}

export default CharacterProfilePage
