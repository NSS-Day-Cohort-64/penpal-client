import { useState } from 'react'
import './Home.css'
import { LetterForm } from '../components/LetterForm.jsx'
import { LetterList } from '../components/LetterList.jsx'
import { NavBar } from '../components/Navbar.jsx'

function Home() {
  const [letters, changeLetters] = useState([])

  const fetchLetters = async () => {
    const response = await fetch("http://localhost:8000/letters", {
      method: "GET",
      headers: {
        "Authorization": `Token ${JSON.parse(localStorage.getItem("penpal_token")).token}`
      }
    })
    const letterArray = await response.json()
    changeLetters(letterArray)
  }

  return (
    <main className='m-10 text-slate-900 bg-yellow-400 p-5'>
      <NavBar />
      <LetterForm setter={changeLetters} fetchLetters={fetchLetters} />
      <LetterList letters={letters} fetchLetters={fetchLetters} />
    </main>
  )
}

export default Home
