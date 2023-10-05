import React from "react"

function CharacterItem({ character }) {
  return (
    <div className="flex items-center gap-4">
      <img
        className="rounded-[50%] aspect-square w-32 object-cover object-top"
        src={character.imageUrl}
        alt={character.name}
      />
      <p>{character.name}</p>
    </div>
  )
}

export default CharacterItem
