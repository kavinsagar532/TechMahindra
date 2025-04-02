import React from 'react'

export default function Feedback(props) {
    const style = {
        color : props.type === "positive" ? "green" : "red"
    }
  return (
    <>
      <h2 style = {style} > {props.info}</h2>
    </>
  )
}
