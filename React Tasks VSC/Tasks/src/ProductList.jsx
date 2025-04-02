import React from 'react'

export default function ProductList(props) {
    const showCaseProduct = props.products.filter(product=>product.price<10)
    return (
    <>
        <ul>
            {showCaseProduct.map((product)=>(
                <li>{product.name}</li>
            ))}
        </ul> 
    </>
  )
}
