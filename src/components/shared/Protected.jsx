import { useEffect, useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"

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
  return <>{auth && <Outlet />}</>
}

export default Protected
