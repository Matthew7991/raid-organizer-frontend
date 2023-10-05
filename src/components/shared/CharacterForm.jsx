import React, { useState } from "react"
import { useNavigate } from "react-router-dom"

function CharacterForm({ reload }) {
  const navigate = useNavigate()
  const [imageUrl, setImageUrl] = useState("/assets/imgs/ranger.png")

  const addCharacter = async (event) => {
    event.preventDefault()

    const formdata = new FormData(event.target)
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/characters",
      {
        method: "POST",
        headers: { authorization: "Bearer " + localStorage.getItem("token") },
        body: formdata,
      }
    )
    // console.log(response)
    if (response.status === 401) return navigate("/login")
    if (response.ok) reload((prev) => !prev)
  }

  const updateImageUrl = (event) => {
    const url = URL.createObjectURL(event.target.files[0])
    setImageUrl(url)
  }

  return (
    <form
      onSubmit={addCharacter}
      className="flex flex-col gap-6 p-8">
      <div className="grid grid-cols-2 gap-8">
        <div className="flex flex-col items-center gap-2">
          <img
            className="rounded-[50%]"
            src={imageUrl}
            alt="hero"
          />
          <input
            onChange={updateImageUrl}
            type="file"
            name="image"
          />
        </div>
        <div className="flex flex-col gap-4 text-black">
          <input
            type="text"
            name="name"
            id="name"
          />
          <select
            name="class"
            id="class">
            <option value="Warrior">Warrior</option>
            <option value="Archer">Archer</option>
            <option value="Rogue">Rogue</option>
          </select>
          <input
            type="number"
            name="level"
            id="level"
            min={0}
          />
        </div>
      </div>
      <div className="flex justify-evenly">
        <button type="reset">Reset</button>
        <button type="submit">Create Character</button>
      </div>
    </form>
  )
}

export default CharacterForm
