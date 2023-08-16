import { useEffect, useState } from "react"

export const LetterForm = () => {
    const [users, changeUsers] = useState([])
    const [topics, changeTopics] = useState([])
    const [letter, updateLetterProps] = useState({
        body: "",
        recipient: 0,
        topic: 0
    })

    const fetchUsers = async () => {
        const response = await fetch("http://localhost:8000/recipients", {
            method: "GET",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("penpal_token")).token}`
            }
        })
        const userArray = await response.json()

        changeUsers(userArray)
    }
    const fetchTopics = async () => {
        const response = await fetch("http://localhost:8000/topics", {
            method: "GET",
            headers: {
                "Authorization": `Token ${JSON.parse(localStorage.getItem("penpal_token")).token}`
            }
        })
        const userArray = await response.json()

        changeTopics(userArray)
    }

    useEffect(() => {
        fetchUsers()
        fetchTopics()
    }, [])

    const mailLetter = async (evt) => {
        evt.preventDefault()

        const response = await fetch("http://localhost:8000/letters", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Token ${JSON.parse(localStorage.getItem("penpal_token")).token}`
            },
            body: JSON.stringify(letter)
        })
        const userArray = await response.json()

    }

    return (
        <main className="container--login">
            <section>
                <form className="form--login" onSubmit={() => { }}>
                    <h1>Pen Pal Society</h1>
                    <fieldset>
                        <label htmlFor="letter"> Your letter </label>
                        <textarea
                            onChange={e => {
                                const copy = {...letter}
                                copy.body = e.target.value
                                updateLetterProps(copy)
                            }}
                            value={letter.body} className="form-control"></textarea>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="recipient"> Recipient </label>
                        <select value={letter.recipient}
                            onChange={e => {
                                const copy = {...letter}
                                copy.recipient = parseInt(e.target.value)
                                updateLetterProps(copy)
                            }}
                        >
                            <option value={0}>-- Select a recipient --</option>
                            {
                                users.map(user => <option value={user.id}>{user.first_name} {user.last_name} ({user.email})</option>)
                            }
                        </select>
                    </fieldset>
                    <fieldset>
                        <label htmlFor="topic"> Topic </label>
                        <br/>
                        {
                            topics.map(t => <>
                                <input onChange={e => {
                                    const copy = {...letter}
                                    copy.topic = parseInt(e.target.value)
                                    updateLetterProps(copy)
                                }} type="radio" name="topic" style={{ width: "4rem" }} value={t.id} /> {t.label}
                            </>)
                        }
                    </fieldset>
                    <fieldset>
                        <button type="submit"
                            onClick={mailLetter}
                            className="button rounded-md bg-blue-700 text-blue-100 p-3">
                            Mail letter
                        </button>
                    </fieldset>
                </form>
            </section>
        </main>
    )
}