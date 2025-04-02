import React from 'react'

export default function ArrayToList(props) {
  return (
    <ul>
      {props.names.map((name) => (
        <li>{name}</li>
      ))}
    </ul>
  )
}
