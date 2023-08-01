import { useState } from 'react'
import './Home.css'
import { LetterForm } from '../components/LetterForm.jsx'
import { LetterList } from '../components/LetterList.jsx'

function Home() {

  return (
    <main className='m-10 text-slate-900 bg-yellow-400 p-5'>
        <LetterForm />
        <LetterList />
    </main>
  )
}

export default Home
