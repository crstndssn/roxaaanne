import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

// R E S O U R C E S
import Card from '../../contenido/Card'
import astra from '../../../resources/sulky.mp3'

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
    <details className='genesis__section alterocio__card alterocio__card--genesis alterocio__details'>

      <summary className='alterocio__card--summary alterocio__summary'>astra</summary>

      {/* A S T R A */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>
          astra
        </summary>
        <audio src={astra} controls preload="none"></audio>
        {/* <Swiper
          slidesPerView={1}
          autoplay={{
            delay: 4000,
            disableOnInteraction: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          loop={false}
          modules={[Pagination, Autoplay]}
          className="mySwiper"
        >
          {
            sur.length !== 0 ?
              (sur.map(item => (
                <SwiperSlide>
                  <Card
                    images={item.imageLinks}
                    title={item.title}
                    category={item.category
                    } />
                </SwiperSlide>
              ))) : (<div>loading...</div>)
          }
        </Swiper> */}
        <div className='alterocio__card--grid'>
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
    </details>
  )
}

export default Astra 