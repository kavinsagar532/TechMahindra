import React from 'react'

export default function TodayDate() {
    const TodayDate = new Date().toLocaleString()
  return (
    <>
      <h3>{TodayDate}</h3>
    </>
  )
}
