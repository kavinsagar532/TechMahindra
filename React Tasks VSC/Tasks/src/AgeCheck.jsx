import React from 'react'

export default function AgeCheck(props) {
  return (
    <>
      <h1>{props.age >= 18 ? "Adult" : "Minor"}</h1>
    </>
  )
}
