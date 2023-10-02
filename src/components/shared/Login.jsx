import React from "react"

function Login() {
  const login = (event) => {
    event.preventDefault()

    const formData = new FormData(event.target)
    console.log(formData)
  }

  return (
    <form onSubmit={login}>
      <div>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          id="username"
        />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="text"
          name="password"
          id="password"
        />
      </div>
      <button>Login</button>
    </form>
  )
}

export default Login
