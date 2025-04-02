import { useState,useEffect } from 'react'

export default function Pure() {
    const [randomNumber,setRandomNumber] = useState(0)
    useEffect(() => {
        setRandomNumber(Math.random())
    },[]);
  return (
    <>
        <p>Random Number: {randomNumber}</p>
    </>
  )
}
