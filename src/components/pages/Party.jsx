import React, { createContext, useRef, useState } from "react"
import PartyCharacterButton from "../shared/PartyCharacterButton"
export const SelectedCharactersContext = createContext(null)

export default function Party() {
  const [open, setOpen] = useState(false)
  const [selectedCharacters, setSelectedCharacters] = useState([])
  const partyNameRef = useRef()

  async function senden() {
    const party = {
      name: partyNameRef.current.value,
      characters: selectedCharacters,
    }

    const response = await fetch(import.meta.env.VITE_API_URL + "/api/party", {
      method: "POST",
      headers: {
        authorization: "Bearer " + localStorage.getItem("token"),
        "content-type": "application/json",
      },
      body: JSON.stringify(party),
    })
    if (response.ok) {
      setSelectedCharacters([])
      setOpen(false)
    }
  }

  return (
    <SelectedCharactersContext.Provider
      value={{ selectedCharacters, setSelectedCharacters }}>
      <main className="flex flex-col items-center justify-center w-full min-h-screen gap-8">
        {open && (
          <input
            ref={partyNameRef}
            type="text"
            className="p-2 font-serif text-4xl text-yellow-600 border-b-2 border-yellow-600 rounded-lg outline-none bg-darkgreen"
          />
        )}
        <button
          onClick={open ? senden : () => setOpen((prev) => !prev)}
          className="px-10 text-4xl bg-purple-300 border-2 rounded-full aspect-square border-slate-500 hover:bg-purple-600">
          +
        </button>
        {open && (
          <div className="flex gap-4">
            <PartyCharacterButton
              selectedCharacter={selectedCharacters[0]}
              // setSelectedCharacters={setSelectedCharacters}
            />
            <PartyCharacterButton
              selectedCharacter={selectedCharacters[1]}
              // setSelectedCharacters={setSelectedCharacters}
            />
            <PartyCharacterButton
              selectedCharacter={selectedCharacters[2]}
              // setSelectedCharacters={setSelectedCharacters}
            />
          </div>
        )}
      </main>
    </SelectedCharactersContext.Provider>
  )
}
