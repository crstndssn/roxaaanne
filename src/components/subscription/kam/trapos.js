import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import trapos_song from '../../../resources/songs/ingobernable.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Trapos = () => {

  const [trapos, setTrapos] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const trapos = async () => {
      const { docs } = await store.collection('new').where('title', '==', "trapos").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setTrapos(newArray)
    }
    trapos()
  }, [])

  return (
    <details className='genesis__section alterocio__card alterocio__card--genesis alterocio__details'>

      <summary className='alterocio__card--summary alterocio__summary'>trapos</summary>

      <audio src={trapos_song} controls preload="none"></audio>
      <div className='alterocio__card--grid'>
        {
          trapos.length !== 0 ?
            (trapos.map(item => (

              <Card
                images={item.imageLinks}
                title={item.title}
                category={item.category
                } />

            ))) : (<div>loading...</div>)
        }
      </div>
    </details>
  )
}

export default Trapos