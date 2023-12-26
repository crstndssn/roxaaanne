import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import circe_sound from '../../../resources/sulky.mp3'

// S W I P E R
import { Pagination, Autoplay, FreeMode } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';


const Circe = () => {

  const [circe, setCirce] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  useEffect(() => {
    const circe = async () => {
      const { docs } = await store.collection('new').where('title', '==', "circe").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setCirce(newArray)
    }
    circe()
  }, [])


  return (
    <>
      {/* C I R C E */}
      <details className='roxy__card--border'>
        <summary className='roxy__card--header'>
          circe
        </summary>
        <audio src={circe_sound} controls preload="none"></audio>
        <h2 className='roxy__card--description'>vivo en mi isla, hija del sol y amiga de la luna, oceánica de naturaleza, te convertiré en animal salvaje si no cumples mi voluntad, sólo entrarás a mi imperio con flores mágicas, ser puente y serpiente</h2>
        <div className='roxy__card--grid'>
          {
            circe.length !== 0 ?
              (circe.map(item => (

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

export default Circe 