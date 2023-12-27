import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import dorado_song from '../../../resources/songs/tu_vida_mi_vida.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Dorado = () => {

  const [dorado, setDorado] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const dorado = async () => {
      const { docs } = await store.collection('new').where('title', '==', "dorado").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setDorado(newArray)
    }
    dorado()
  }, [])

  return (
    <details className='kam__oro'>

      <summary className='kam__oro--summary'>DORADO</summary>

      <audio src={dorado_song} controls preload="none"></audio>
      <div className='kam__card--grid'>
        {
          dorado.length !== 0 ?
            (dorado.map(item => (

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

export default Dorado 