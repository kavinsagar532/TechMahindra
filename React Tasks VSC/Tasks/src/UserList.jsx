import React from 'react'

export default function UserList(props) {
  return (
    <>
        <ul>
            {props.content.map((content) => (
                <li>{content.name}:&nbsp;&nbsp;{content.email}</li>
            ))}
        </ul>
    </>
  )
}
