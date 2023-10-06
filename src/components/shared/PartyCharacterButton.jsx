import React, { useState } from "react"
import PartyModal from "./PartyModal"

function PartyCharacterButton({ selectedCharacter }) {
  const [modal, setModal] = useState(false)

  if (!selectedCharacter) {
    return (
      <>
        <button
          className="px-6 text-2xl bg-purple-300 border-2 rounded-full aspect-square border-slate-500 hover:bg-purple-600"
          onClick={() => setModal((prev) => !prev)}>
          +
        </button>
        <PartyModal status={modal} />
      </>
    )
  } else {
    return (
      <img
        className="w-20 aspect-square"
        src={selectedCharacter.imageUrl}
        alt=""
      />
    )
  }
}

export default PartyCharacterButton
