import React from 'react'

export default function Loading(props) {
  return (
    <>
      <h2>{props.isLoading ? props.isLoading : "Loading"}</h2>
    </>
  )
}
