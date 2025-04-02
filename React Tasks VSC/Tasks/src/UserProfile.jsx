import React from 'react'

export default function UserProfile(props) {
  return (
    <>
        <h3>Name: {props.name}</h3>
        <h3>Age: {props.age}</h3>
        <h3>Gender: {props.gender}</h3>
    </>
  )
}
