import React from 'react'

export default function Movie({ title, year, rating = "Not Rated" }) {
  return (
    <>
      <h3>The title is {title}</h3>
      <h3>The year is {year}</h3>
      <h3>The rating is {rating}</h3>
    </>
  )
}
