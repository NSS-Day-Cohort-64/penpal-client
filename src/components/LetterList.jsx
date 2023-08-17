import { useEffect, useState } from "react"

export const LetterList = ({ letters, fetchLetters }) => {
    useEffect(() => {
        fetchLetters()
    }, [])


    const displayLetters = () => {
        if (letters.length) {
            return letters.map(letter => <div className="border p-5 border-solid hover:bg-violet-700 hover:text-violet-50 rounded-md border-violet-900 mt-5 bg-slate-50">{letter.body}</div>)
        }

        return <h3>Loading Letters...</h3>
    }

    return (
        <>
            <h1>Letter List</h1>
            { displayLetters() }
        </>
    )
}