import React from 'react'

export default function ShoppingCart(props) {
  return (
    <>
        <ul>
            {props.content.map((content) => (
                <li key={content.id}>{content.name}:&nbsp;&nbsp;{content.price}</li>
            ))}
        </ul>
    </>
  )
}
