import React from 'react'
import { Link } from 'react-router-dom'

const Admin = () => {
  return (
    <div className='admin'>
      <Link to="/add" className='admin__add'>
        add post
      </Link>
    </div>
  )
}

export default Admin
