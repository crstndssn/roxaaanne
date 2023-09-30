import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

import { Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react'

import 'swiper/swiper.min.css'
import 'swiper/modules/pagination/pagination.min.css'

import Card from '../contenido/Card'

const HomeForestando = () => {

  const [post, setPost] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('new').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPost(newArray)
    }
    getPost()
  }, [])


  return (
    <div className='homeForestando'>

      <h2>Forestando</h2>
      <p>historias interplatanarias desde las montañas hasta el mar, siguiendo a la luna esperando un nuevo amanecer</p>

      <Swiper
        freeMode={true}
        modules={[Pagination]}
        className="mySwiper"
        pagination={{
          dynamicBullets: true,
        }}
      >
        {
          post.length !== 0 ?
            (post.map(item => (
              <SwiperSlide>
                <Link to={`/roxanne/${item.id}`} key={item.id}>
                  <div className="card-home">
                    <div className='card-home__image'>
                      <img src={item.imageLinks[0]} loading="lazy" />
                    </div>
                    <h2 className="card__title">{item.title}</h2>
                  </div>
                </Link>
              </SwiperSlide>
            ))) : (<div></div>)
        }
      </Swiper>
    </div>
  )
}

export default HomeForestando