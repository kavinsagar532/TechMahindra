import React from 'react'

export default function Paragraph() {
    const para = "React is a JavaScript library primarily used for building user interfaces (UIs) for web applications"
  return (
    <>
        <h3>{para}</h3>
        <h2>{para.split(" ").length}</h2>
    </>
  )
}
