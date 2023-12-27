import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import imgtest from '../../../resources/photos/sunset.jpg'

const Biblioteca = () => {
  return (
    <div className='forestando__biblioteca'>
    <h2>Biblioteca</h2>
    <div className='forestando__blog--container'>
      <div className='forestando__blog--card'>
        <div className='forestando__blog--container-img'>
          <img src={imgtest} alt="" />
        </div>
        <h3 className='forestando__blog--title'>anturio</h3>
      </div>
    </div>

    

  </div>
  )
}

export default Biblioteca