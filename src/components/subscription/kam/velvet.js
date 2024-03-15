import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import velvet_song from '../../../resources/songs/ingobernable.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Velvet = () => {

  const [velvet, setVelvet] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const velvet = async () => {
      const { docs } = await store.collection('new').where('title', '==', "velvet").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setVelvet(newArray)
    }
    velvet()
  }, [])

  return (
    <details className='kam__velvet kam__velvet--details'>

      <summary className='kam__velvet--summary'>velvet</summary>

      {/* <audio src={velvet_song} controls preload="none"></audio> */}
      <div className='kam__card--grid'>
        <a>

        </a>
      </div>
    </details>
  )
}

export default Velvet