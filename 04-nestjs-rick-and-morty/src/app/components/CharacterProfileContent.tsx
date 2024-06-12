'use client'
import { useSearchParams } from 'next/navigation'
import CharacterProfile from '../components/CharacterProfile'

function CharacterProfileContent() {
  const idParams = useSearchParams()
  const characterId = idParams.get('id')

  if (!characterId) {
    return <h1>NOT USER FOUND</h1>
  }

  return <CharacterProfile id={characterId} />
}

export default CharacterProfileContent
