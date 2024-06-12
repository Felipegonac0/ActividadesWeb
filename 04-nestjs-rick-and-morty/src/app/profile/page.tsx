'use client'
import { Suspense } from 'react'
import NavBar from '../components/navbar'
import CharacterProfileContent from '../components/CharacterProfileContent'

function CharacterProfilePage() {
  return (
    <>
      <NavBar />
      <Suspense fallback={<div>Loading...</div>}>
        <CharacterProfileContent />
      </Suspense>
    </>
  )
}

export default CharacterProfilePage
