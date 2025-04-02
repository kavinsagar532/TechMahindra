import React from 'react'

export default function RandomQuote() {
    const quotes = ['If you are going through hell, keep going.','If you build it, they will come.','If you want something done right, do it yourself.','If you want something said, ask a man; if you want something done, ask a woman.']
  return (
    <>
      <h2>RandomQuote</h2>
      <p>{quotes[Math.floor(Math.random()*quotes.length)]}</p>
    </>
  )
}
