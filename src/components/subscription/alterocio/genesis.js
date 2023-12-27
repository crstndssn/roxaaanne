import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Card from '../../contenido/Card'

import sulky from '../../../resources/songs/sulky.mp3'
import centro__lamaquina from '../../../resources/songs/centro.mp3'
import norte_lj from '../../../resources/songs/norte.mp3'

// Import Swiper React components
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'


import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Genesis = () => {

  const [sur, setSur] = useState('')
  const [norte, setNorte] = useState('') 
  const [centro, setCentro] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const sur = async () => {
      const { docs } = await store.collection('new').where('title', '==', "sur").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setSur(newArray)
    }
    sur()
    const norte = async () => {
      const { docs } = await store.collection('new').where('title', '==', "norte").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setNorte(newArray)
    }
    norte()
    const centro = async () => {
      const { docs } = await store.collection('new').where('title', '==', "centro").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setCentro(newArray)
    }
    centro()
  }, [])


  return (
    <details className='genesis__section alterocio__card alterocio__card--genesis alterocio__details'>

      <summary className='alterocio__card--summary alterocio__summary'>génesis</summary>

      {/* S U R */}
      <details className='detail alterocio__card--border'>
        <summary className='alterocio__card--header'>
          sur
        </summary>
        <audio src={sulky} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            sur.length !== 0 ?
              (sur.map(item => (
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>


      {/* C E N T R O */}
      <details className='detail alterocio__card--border'>
        <summary className='alterocio__card--header'>
          centro
        </summary>
        <audio src={centro__lamaquina} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            centro.length !== 0 ?
              (centro.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>


      {/* N O R T E */}
      <details className='detail alterocio__card--border'>
        <summary className='alterocio__card--header'>
          norte
        </summary>
        <audio src={norte_lj} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            norte.length !== 0 ?
              (norte.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>


    </details>
  )
}

export default Genesis 