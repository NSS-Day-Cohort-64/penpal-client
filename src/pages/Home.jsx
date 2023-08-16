import { useState } from 'react'
import './Home.css'
import { LetterForm } from '../components/LetterForm.jsx'
import { LetterList } from '../components/LetterList.jsx'
import { NavBar } from '../components/Navbar.jsx'

function Home() {

  return (
    <main className='m-10 text-slate-900 bg-yellow-400 p-5'>
        <NavBar />
        <LetterForm />
        <LetterList />
    </main>
  )
}

export default Home
