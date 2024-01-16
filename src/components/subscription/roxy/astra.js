import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import astra from '../../../resources/songs/sulky.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Astra = () => {

  const [astra, setAstra] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const astra = async () => {
      const { docs } = await store.collection('new').where('title', '==', "astra").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setAstra(newArray)
    }
    astra()
  }, [])


  return (
    <>
      {/* A S T R A */}
      <details className='roxy__card--border'>
        <summary className='roxy__card--header'>
          astra
        </summary>
        <audio src={astra} controls preload="none"></audio>
        <h2 className='roxy__card--description'>fuerza sobrenatural para protegernos de nuestros enemigos, como un hechizo funcionamos en nuestro propósito, vengo con el viento</h2>
        <div className='roxy__card--grid'>
          {
            astra.length !== 0 ?
              (astra.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>
    </>
  )
}

export default Astra 