import React, { useRef, useState } from 'react'
import { srore, storage } from '../../../firebase'
import { Editor } from '@tinymce/tinymce-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

// S W I P E R
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { FreeMode, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/thumbs/thumbs.min.css';
import 'swiper/modules/pagination/pagination.min.css';

const Argumento = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <>
      <div className='bejuco'>
        <div className='bejuco__bejucote'>
          <h1 className="bejuco__title">argumento</h1>
        </div>
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          direction={'vertical'}
          spaceBetween={10}
          mousewheel={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Thumbs, Mousewheel, Pagination]}
          className="mySwiper2 bejuco__bejucos"
        >
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-2.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-3.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-4.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-5.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-6.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-7.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-8.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-9.jpg" />
          </SwiperSlide>
          <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-10.jpg" />
          </SwiperSlide>
        </Swiper>
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper bejuco__bejuquitos"
        >
          {/* <SwiperSlide>
            <img src="https://swiperjs.com/demos/images/nature-1.jpg" />
          </SwiperSlide> */}
          <SwiperSlide>
            <Link to="/bejuco/argumentos" className='bejuco__bejuquitos--item'>
              argumentos
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/bejuco/tropicos" className='bejuco__bejuquitos--item'>
              trópicos
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/bejuco/encuentros" className='bejuco__bejuquitos--item'>
              encuentros
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/bejuco/lucas" className='bejuco__bejuquitos--item'>
              lucas
            </Link>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  )
}

export default Argumento