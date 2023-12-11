import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E C U R S O S
import img1 from '../../../resources/planta-2.png'
import img2 from '../../../resources/planta-1.png'
import img3 from '../../../resources/planta-mobile.png'
import imgtest from '../../../resources/sunset.jpg'

// C O N T E N I D O 
import Blog from './blog'
import Biblioteca from './biblioteca'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import Navigation from '../../Navigation';  

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import Card from '../../contenido/Card'

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
    <Navigation/>
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
      <Blog/>

      {/* products */}
      <Biblioteca/>

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