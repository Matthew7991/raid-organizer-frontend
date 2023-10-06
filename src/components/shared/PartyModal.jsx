import React, { useEffect, useRef, useState } from "react"
import PartyModalCharacter from "./PartyModalCharacter"

function PartyModal({ status }) {
  const modalRef = useRef()
  const [load, setLoad] = useState(false)
  const [characters, setCharacters] = useState([])

  useEffect(() => {
    if (load) {
      if (!modalRef.current.open) modalRef.current.showModal()
      console.log("rerendering Party Modal")
    } else setLoad(true)
  }, [status])

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
  }, [])

  return (
    <dialog
      ref={modalRef}
      className="p-4 bg-highlight">
      <div className="grid grid-cols-3">
        {characters.map((character) => (
          <PartyModalCharacter
            character={character}
            modalRef={modalRef}
            key={character._id}
          />
        ))}
      </div>
      <form method="dialog">
        <button>OK</button>
      </form>
    </dialog>
  )
}

export default PartyModal
