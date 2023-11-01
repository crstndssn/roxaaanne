import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'


import img1 from '../../resources/planta-2.png'
import img2 from '../../resources/planta-1.png'
import img3 from '../../resources/planta-mobile.png'
import imgtest from '../../resources/sunset.jpg'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import NavigationForestando from '../NavigationForestando';  

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import Card from './Card'

const Forestando = () => {

  const [post, setPost] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('new').get()
      const roxanneArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPost(roxanneArray)
    }
    getPost()
  }, [])


  // const imagesSlider = (post) => {

  //   setImageSlider(post)

  // }

  return (
    <div>
    <NavigationForestando/>
    <div className='forestando'>

      {/* header */}
      <div className="forestando__header">
        <div className="forestando__header--interior">
          <img src={img1} alt="interior" />
          <img src={img2} alt="interior" />
        </div>
        <div className="forestando__header--orquideas">
          <img src={img3} className="max-h-screen" alt="orquídeas" />
        </div>

        <div className="forestando__header--text">
          <h1 className="forestando__header--text-h1"><span className="text-nature">forest</span><span className="text-ando">ando</span></h1>
          <p className="forestando__header--text-p">siembra vida y aprende de la naturaleza</p>
          <Link to="/blog" className="forestando__header--text-btn">Yo planto</Link>
        </div>
      </div>

      {/* blog */}
      <div className='forestando__blog'>
        <h2>Blog</h2>
        <div className='forestando__blog--container'>
          <div className='forestando__blog--card'>
            <div className='forestando__blog--container-img'>
              <img src={imgtest} alt="" />
            </div>
            <h3 className='forestando__blog--title'>sol</h3>
          </div>
          <div className='forestando__blog--card'>
            <div className='forestando__blog--container-img'>
              <img src={imgtest} alt="" />
            </div>
            <h3 className='forestando__blog--title'>luna</h3>
          </div>
          <div className='forestando__blog--card'>
            <div className='forestando__blog--container-img'>
              <img src={imgtest} alt="test" />
            </div>
            <h3 className='forestando__blog--title'>agua</h3>
          </div>
        </div>

      </div>

      {/* products */}
      <div className='forestando__gallery'>
        <h2>Productos</h2>
        <div className='forestando__products--incoming'>
          <p>incoming</p>
        </div>
      </div>

      {/* footer */}
      <div className='forestando__footer'>
        <div>
          <p>instagram</p>
        </div>
        <p>by crstndssn</p>
      </div>

    </div>
  </div>
  )
}

export default Forestando 