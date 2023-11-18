import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin'>
      <Link to="/edit" className='admin__add'>
        posts
      </Link>
      <Link to="/users " className='admin__add'>
        users
      </Link>
      <Link to="/products" className='admin__add'>
        products
      </Link>
    </div>
  )
}

export default Admin
