import React, { useContext } from "react"
import { SelectedCharactersContext } from "../pages/Party"

function PartyModalCharacter({ character, modalRef }) {
  const context = useContext(SelectedCharactersContext)
  console.log(context)
  const { setSelectedCharacters } = useContext(SelectedCharactersContext)
  function choose() {
    setSelectedCharacters((prev) => {
      return [...prev, character]
    })
    modalRef.current.close()
  }
  return (
    <div
      onClick={() => {
        choose()
      }}
      className="flex flex-col gap-4 p-4 text-center cursor-pointer hover:bg-darkgreen hover:text-white rounded-2xl">
      <img
        className="object-cover object-top w-20 rounded-full aspect-square"
        src={character.imageUrl}
        alt=""
      />
      <p>{character.name}</p>
    </div>
  )
}

export default PartyModalCharacter
