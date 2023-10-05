import React, { useState, useEffect } from "react"
import { Link, useNavigate } from "react-router-dom"

function Login() {
  const [error, setError] = useState(false)
  const [showLogin, setShowLogin] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    const check = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/auth/check",
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      if (response.status === 401) return navigate("/login")
      if (response.ok) navigate("/dashboard")
      else setShowLogin(true)
    }
    check()
  }, [])

  const login = async (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    const response = await fetch(
      import.meta.env.VITE_API_URL + "/api/auth/login",
      {
        method: "POST",
        body: formData,
      }
    )
    if (!response.ok) return setError(true)
    const data = await response.json()
    localStorage.setItem("token", data)
    navigate("/dashboard")
  }

  return (
    <>
      {" "}
      {showLogin && (
        <form
          onSubmit={login}
          className="flex flex-col gap-4">
          {error && <output>Login failed.</output>}
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
            to={"/register"}
            className="underline">
            Don't have an account yet?
          </Link>
          <button className="w-fit">Login</button>
        </form>
      )}
    </>
  )
}

export default Login
