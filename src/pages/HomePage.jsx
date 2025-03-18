import React from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

export default function HomePage() {

  const navigate = useNavigate()

  function handleNavigate(){
    navigate('/products')
  }

  return (
    <div>
      <p>Home Page <Link to="/products">Link to product page</Link></p>
      <button onClick={handleNavigate}>Navigate</button>
    </div>
  )
}
