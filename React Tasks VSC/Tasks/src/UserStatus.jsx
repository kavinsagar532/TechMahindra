import React from 'react'

export default function UserStatus(props) {
  return (
    <>
      <h2>{props.name}</h2>
      <p>{props.isonline ? "Online" : "Offline"}</p>
    </>
  )
}
