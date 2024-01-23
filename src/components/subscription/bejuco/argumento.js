import React, { useRef, useState } from 'react'
import { store, storage } from '../../../firebase'
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

const Argumento = () => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  return (
    <div className='bg__bejuco'>
      <NavigationR bg={'#957d4f'} bg_name={'bejuco'} />

      <div className='bejuco'>
        <div className='bejuco__bejucote'>
          <h1 className="bejuco__title--argumento">argumento</h1>
        </div>

        <div class="bejuco__argumento">
          <p className='bejuco__argumento--main'>Bejuco es una pregunta por las cosas para las que no tenemos palabras.</p>

          <p className='bejuco__argumento--second'>El cortometraje: "Bejuco o Cuando las piedras sangran". Es una experiecnia audiovisual en la que recorremos los paisajes andinos y tropicales inmersos en los simbolos místicos de la cultura popular. Así que materializar esta vision necesita juntar muchos esfuerzos. </p>
        </div>
        {/* N A V I G A T I O N */}
        <div className='bejuco__navigation'>
          <Link to="/bejuco/argumento" className='bejuco__bejuquitos--item-a'>
            argumento
          </Link>
          <Link to="/bejuco/tropicos" className='bejuco__bejuquitos--item'>
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

export default Argumento