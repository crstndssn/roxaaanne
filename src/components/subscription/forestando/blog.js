import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import imgtest from '../../../resources/sunset.jpg'

const Blog = () => {
  return (
    <div className='forestando__blog'>
      <h2>blog</h2>
      <p class="forestando__blog--soon">próximamente</p>
    </div>
  )
}

export default Blog