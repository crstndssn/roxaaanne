import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'
import Masonry from 'react-layout-masonry';

import Navigation from '../Navigation';
import Genesis from '../subscription/genesis';

import Card from './Card'

const Roxanne = () => {

  const [post, setPost] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('new').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPost(newArray)
    }
    getPost()
  }, [])


  return (
    <div>
      <Navigation />

      <div className='alterocio'>
        <Genesis />




        {/* <details className='alterocio__card alterocio__card--mercurio'>
          <summary>mercúrio</summary>
          <p>detailssss</p>
        </details>
        <details className='alterocio__card alterocio__card--blue'>
          <summary>blue</summary>
          <p>detailssss</p>
        </details>
        <details className='alterocio__card alterocio__card--florecer'>
          <summary>florecer</summary>
          <p>detailssss</p>
        </details>
        <details className='alterocio__card alterocio__card--semillas'>
          <summary>semillas</summary>
          <p>detailssss</p>
        </details> */}
        {/* <details className='alterocio__card alterocio__card--viento'>
          <summary>viento</summary>
        </details> */}
      </div>

    </div>

  )
}

export default Roxanne 