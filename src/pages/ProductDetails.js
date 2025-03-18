import React from 'react'
import { Link, useParams } from 'react-router-dom'

export default function ProductDetailsPage() {
  const params = useParams()
  return (
    <div>
      Product Details
      <p>{params.productId}</p>
      <Link to=".." relative="path">Back</Link>
    </div>
  )
}
