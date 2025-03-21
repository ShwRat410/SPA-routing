import React from 'react'
import { Link } from 'react-router-dom'

const PRODUCTS=[
    {id:'p1',title:"Product 1"},
    {id:'p2',title:"Product 2"},
    {id:'p3',title:"Product 3"}
]

export default function ProductsPage() {
  return (
    <div>
      <p>Product Page</p>
      <ul>
        {PRODUCTS.map((product)=>(
            <li key={product.id}>
               <Link to={`/products/${product.id}`} >{product.title}</Link>
            </li>
        ))}
      </ul>
    </div>
  )
}
