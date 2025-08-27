import React, { useState } from 'react'

function Bai2() {
    const[product, setProduct] = useState({
        id:1,
        name:"Pepsi",
        price:1000,
        quantity: 10
    });
  return (
    <div>
        <h1>Bai 2</h1>
        <p>Thong tin san pham</p>
        <p>ID: {product.id}</p>
        <p>Name: {product.name}</p>
        <p>Price: {product.price}</p>
        <p>Quantity: {product.quantity}</p>
    </div>
  )
}

export default Bai2