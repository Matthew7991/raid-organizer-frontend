import React from "react"

/**
 *
 * @param {object} params all parameters
 * @param {1 | 2 | 3 | 4 | 5 | 6} params.importance Heading level eg. 1 = h1; 2 = h2
 * @param {string} params.text Normal Text
 * @param {string} params.textHighlight Text to be highlighted
 *
 */

function Heading({ text, textHighlight, importance = 2 }) {
  const Tag = `h${importance}`
  return (
    <Tag className="text-6xl font-semibold text-white uppercase ">
      <span>{text}</span>
      <span className="block leading-relaxed text-9xl text-highlight">
        {textHighlight}
      </span>
    </Tag>
  )
}

export default Heading
