import React from "react"

function P({ children }) {
  return (
    <p className="font-light text-xl uppercase max-w-prose text-white">
      {children}
    </p>
  )
}

export default P
