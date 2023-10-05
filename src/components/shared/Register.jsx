import React, { useState } from "react"
import { Link, useNavigate } from "react-router-dom"

function Register() {
  const [error, setError] = useState(false)
  const navigate = useNavigate()

  const register = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/register",
      {
        method: "POST",
        body: formData,
      }
    )
    if (!response.ok) return setError(true)
    // console.log(response)
    navigate("/login")
  }

  return (
    <>
      <form
        onSubmit={register}
        className="flex flex-col gap-4">
        {error && <output>Register failed.</output>}
        <div className="flex flex-col gap-2">
          <label htmlFor="username">Username</label>
          <input
            className="border border-gray-400 w-fit"
            type="text"
            name="username"
            id="username"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            className="border border-gray-400 w-fit"
            type="password"
            name="password"
            id="password"
          />
        </div>
        <Link
          to={"/login"}
          className="underline">
          Already have an account yet?
        </Link>
        <button className="w-fit">Register</button>
      </form>
    </>
  )
}

export default Register
