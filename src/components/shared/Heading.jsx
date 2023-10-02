import React from "react"

function Heading({ text, textHighlight, importance = 2 }) {
  const Tag = `h${importance}`
  return (
    <Tag className="uppercase text-6xl font-semibold text-white ">
      <span>{text}</span>
      <span className="block text-9xl text-highlight leading-relaxed">
        {textHighlight}
      </span>
    </Tag>
  )
}

export default Heading
