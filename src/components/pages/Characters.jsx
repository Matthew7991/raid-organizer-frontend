import React, { useState, useEffect } from "react"
import CharacterForm from "../shared/CharacterForm"
import CharacterItem from "../shared/CharacterItem"
import { useNavigate } from "react-router-dom"

function Characters() {
  const [characters, setCharacters] = useState([])
  const [reload, setReload] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    async function getCharacters() {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/characters",
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      if (response.status === 401) return navigate("/login")

      if (response.ok) {
        const data = await response.json()
        setCharacters(data)
      }
    }
    getCharacters()
  }, [reload])

  return (
    <main className="grid w-full grid-cols-2 gap-8">
      <div>
        <button>Create new Character</button>
        {characters.map((character) => (
          <CharacterItem
            character={character}
            key={character._id}
          />
        ))}
      </div>
      <div>
        <CharacterForm reload={setReload} />
      </div>
    </main>
  )
}

export default Characters
