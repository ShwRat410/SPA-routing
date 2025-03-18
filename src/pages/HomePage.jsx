import React from 'react'
import { Link } from 'react-router-dom'

export default function HomePage() {
  return (
    <div>
      <p>Home Page <Link to="/products">Link to product page</Link></p>
    </div>
  )
}
