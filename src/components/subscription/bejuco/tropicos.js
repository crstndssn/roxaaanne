import React, { useRef, useState } from 'react'
import { store, storage } from '../../../firebase'
import { Editor } from '@tinymce/tinymce-react';
import { useEffect } from 'react';

import NavigationR from '../../Navigation';

import { Link } from 'react-router-dom'

// S W I P E R
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { FreeMode, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/thumbs/thumbs.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const Tropicos = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  const [bejucoImages, setBejucoImages] = useState('')

  useEffect(() => {
    const getImages = async () => {
      const { docs } = await store.collection('new').where('title', '==', 'trópicos').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setBejucoImages(newArray)
    }
    getImages()
  }, [])
  return (
    <div className='bg__bejuco'>
      <NavigationR bg={'#957d4f'} bg_name={'bejuco'} />
      <div className='bejuco'>
        <div className='bejuco__bejucote'>
          <h1 className="bejuco__title--tropicos">TRÓPICOS</h1>
        </div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          slidesPerView={2}
          spaceBetween={30}
          freeMode={true}
          mousewheel={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          className="mySwiper2 bejuco__bejucos"
        >
          {
            bejucoImages.length !== 0 ?
              (bejucoImages.map(item => (

                <SwiperSlide>

                  <img src={item.imageLinks} />
                </SwiperSlide>
              )))

              :

              (<>no hay imágenes</>)
          }
        </Swiper>

        {/* N A V I G A T I O N */}
        <div className='bejuco__navigation'>
          <Link to="/bejuco/argumento" className='bejuco__bejuquitos--item'>
            argumentos
          </Link>
          <Link to="/bejuco/tropicos" className='bejuco__bejuquitos--item-a'>
            trópicos
          </Link>
          <Link to="/bejuco/lucas" className='bejuco__bejuquitos--item'>
            lucas
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Tropicos