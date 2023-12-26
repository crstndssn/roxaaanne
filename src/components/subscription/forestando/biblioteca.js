import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import imgtest from '../../../resources/sunset.jpg'

const Biblioteca = () => {
  return (
    <div className='forestando__biblioteca'>
    <h2>Biblioteca</h2>
    <div className='forestando__blog--container'>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="" />
        </div>
        <h3 className='forestando__blog--title'>antirio</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="" />
        </div>
        <h3 className='forestando__blog--title'>buganbilia</h3>
      </div>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="test" />
        </div>
        <h3 className='forestando__blog--title'>agua</h3>
      </div>
    </div>

  </div>
  )
}

export default Biblioteca