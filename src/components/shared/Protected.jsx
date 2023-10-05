import { useEffect, useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import NavbarDashboard from "./NavbarDashboard"

function Protected() {
  const navigate = useNavigate()
  const [auth, setAuth] = useState(false)

  useEffect(() => {
    const check = async () => {
      const response = await fetch(
        import.meta.env.VITE_API_URL + "/api/auth/check",
        {
          headers: { authorization: "Bearer " + localStorage.getItem("token") },
        }
      )
      if (!response.ok) return navigate("/")
      setAuth(true)
    }
    check()
  }, [])

  return (
    <main className="flex min-h-screen gap-8 text-white bg-greenmiddle">
      <NavbarDashboard />
      {auth && <Outlet />}
    </main>
  )
}

export default Protected
