import React from 'react'
import { useParams } from 'react-router-dom'

export default function ProductDetailsPage() {
  const params = useParams()
  return (
    <div>
      Product Details
      <p>{params.productId}</p>
    </div>
  )
}
