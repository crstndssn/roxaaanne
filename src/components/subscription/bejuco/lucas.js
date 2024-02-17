import React, { useRef, useState } from 'react'
import { srore, storage } from '../../../firebase'
import { Editor } from '@tinymce/tinymce-react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom'

import NavigationR from '../../Navigation';

// S W I P E R
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { FreeMode, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/thumbs/thumbs.min.css';
import 'swiper/modules/pagination/pagination.min.css';

import qr__bejuco from '../../../resources/bejuco/qr-cristian.png'
import qr__daviplata from '../../../resources/bejuco/daviplata-bejuco.png'

const Lucas = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className="bg__bejuco">
      <NavigationR bg={'#957d4f'} bg_name={'bejuco'} />
      <div className='bejuco'>

        {/* H E A D E R */}
        <div className='bejuco__bejucote'>
          <h1 className="bejuco__title--lucas">Lucas</h1>
        </div>

        {/* D E S C R I P T I O N */}
        <div className='bejuco__lucas'>
          <p>
            Conviértete en parte de la magia del cine, cada contribución cuenta para crear el cortometraje.
          </p>


          {/* N E Q U I */}
          <details>
            <summary>NEQUI</summary>
            <div>
              <img src={qr__bejuco} />
            </div>

          </details>

          {/* D A V I P L A T A */}
          <details>
            <summary>DAVIPLATA</summary>
            <div>
              <img src={qr__daviplata} />
            </div>
          </details>

        </div>

        {/* N A V I G A T I O N */}
        <div className='bejuco__navigation'>
          <Link to="/bejuco/argumento" className='bejuco__bejuquitos--item'>
            argumentos
          </Link>
          <Link to="/bejuco/tropicos" className='bejuco__bejuquitos--item'>
            trópicos
          </Link>
          <Link to="/bejuco/lucas" className='bejuco__bejuquitos--item-a'>
            lucas
          </Link>
        </div>


      </div>
    </div>
  )
}

export default Lucas