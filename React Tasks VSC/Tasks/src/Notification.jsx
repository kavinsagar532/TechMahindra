import React from 'react'

export default function Notification(props) {
  return (
    <>
      <h2>{props.content ? props.content : "No Message Available"}</h2>
    </>
  )
}
