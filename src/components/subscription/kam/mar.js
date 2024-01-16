import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import en_el_mar from '../../../resources/songs/en_el_mar.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Mar = () => {

  const [mar, setMar] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const mar = async () => {
      const { docs } = await store.collection('new').where('title', '==', "mar").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setMar(newArray)
    }
    mar()
  }, [])

  return (
    <details className='kam__mar kam__mar--details'>

      <summary className='kam__mar--summary'>mar</summary>

      <audio src={en_el_mar} controls preload="none"></audio>
      <div className='kam__card--grid'>
        {
          mar.length !== 0 ?
            (mar.map(item => (

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

export default Mar 