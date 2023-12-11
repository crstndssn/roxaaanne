import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import imgtest from '../../../resources/sunset.jpg'

const Blog = () => {
  return (
    <div className='forestando__blog'>
    <h2>Blog</h2>
    <div className='forestando__blog--container'>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="" />
        </div>
        <h3 className='forestando__blog--title'>entorno</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="" />
        </div>
        <h3 className='forestando__blog--title'>vida</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="test" />
        </div>
        <h3 className='forestando__blog--title'>naturaleza</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="test" />
        </div>
        <h3 className='forestando__blog--title'>casa</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="test" />
        </div>
        <h3 className='forestando__blog--title'>solar</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="test" />
        </div>
        <h3 className='forestando__blog--title'>jardín</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="test" />
        </div>
        <h3 className='forestando__blog--title'>cielo</h3>
      </div>
    </div>

  </div>
  )
}

export default Blog