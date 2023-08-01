import { useEffect, useState } from "react"

export const LetterList = () => {
    const [letters, changeLetters] = useState([])

    const fetchLetters = async () => {
        const response = await fetch("http://localhost:8000/letters", {
            method: "GET",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("penpal_token")).token}`
            }
        })
        const letters = await response.json()

        changeLetters(letters)
    }

    useEffect(() => {
        fetchLetters()
    }, [])

    return (
        <>
            <h1>Letter List</h1>
            {
                letters.map(letter => <div className="border p-5 border-solid hover:bg-violet-700 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">{letter.body}</div>)
            }
        </>
    )
}