import React from "react"
import { NavLink } from "react-router-dom"

function NavbarDashboard() {
  return (
    <nav className="flex flex-col gap-4 px-4 bg-darkgreen">
      <NavLink to={"/dashboard"}>Dashboard</NavLink>
      <NavLink to={"/dashboard/characters"}>Characters</NavLink>
    </nav>
  )
}

export default NavbarDashboard
