import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import venus_song from '../../../resources/sulky.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Venus = () => {

  const [venus, setVenus] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const venus = async () => {
      const { docs } = await store.collection('new').where('title', '==', "venus").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setVenus(newArray)
    }
    venus()
  }, [])


  return (
    <>
      {/* V E N U S */}
      <details className='roxy__card--border'>
        <summary className='roxy__card--header'>
          venus
        </summary>
        <audio src={venus_song} controls preload="none"></audio>
        <h2 className='roxy__card--description'>llena siempre de amor y creatividad vivo entre ustedes, despues de todos soy mortal, muero y nazco en fuego, el universo me reclama pero sólo quiero ser feliz entre frutos de la montaña y flores silvestres</h2>
        <div className='roxy__card--grid'>
          {
            venus.length !== 0 ?
              (venus.map(item => (

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

export default Venus 