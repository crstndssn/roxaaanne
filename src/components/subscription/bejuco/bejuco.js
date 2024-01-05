import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';

// import Navigation from '../../Navigation';

import { FreeMode, Navigation, Thumbs } from 'swiper';

import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/thumbs/thumbs.min.css';


// R E S O U R C E S
// import sunflower1 from '../../sunflower-1.svg'
import bejuco1 from '../../../resources/bejuco/bejuco1.jpg'
import bejuco6 from '../../../resources/bejuco/bejuco6.jpg'
import bejuco7 from '../../../resources/bejuco/bejuco7.jpg'
import bejuco10 from '../../../resources/bejuco/bejuco10.jpg'

// C O N T E N I D O
// import Dorado from './dorado'
// import lila from '../subscription/lila'
// import trapos_nuevos from '../subscription/lila'


const Bejuco = () => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [user, setUsuario] = useState(null)
  const [admin, setAdmin] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userSub, setUserSub] = useState(false)

  const [allSubs, setAllSubs] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(true)
        if (user.email === 'dussan29@gmail.com') {
          setAdmin(true)
          setUserSub(true)
          setUserEmail(user.email)
        } else {
          setAdmin(false)
          setUserSub(false)
          setUserEmail(user.email)
        }
      } else {
        setUsuario(false)
        setAdmin(false)
      }
    })

    const getSubs = async () => {
      const subsList = store.collection('sub').where('email', 'in', [userEmail]).get()
      subsList.then(snapshot => {
        snapshot.docs.forEach(doc => {
          if (doc.id === '') {
            console.log(doc.id)
            setUserSub(false)
          } else {
            setUserSub(true)
          }
        })
      })
    }
    getSubs()
  }, [])

  return (
    <>
      <div className='bejuco'>

        <div className='bejuco__bejucote'>
          <h1 className="bejuco__title">Bejuco</h1>
          <h2 className='bejuco__title--small'>o Cuando las piedras sangran</h2>
        </div>

        <div className='bejucos__bejucos'>
          <swiper>

          </swiper>
        </div>
        <div className='bejucos__bejuquitos'>

        </div>




        {/* s w i p e r  */}
        <Swiper
          style={{
            '--swiper-navigation-color': '#fff',
            '--swiper-pagination-color': '#fff',
          }}
          spaceBetween={10}
          navigation={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper2"
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
          className="mySwiper"
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

        {/* t i t l e */}
        {/* <div className='bejuco__header'>
          <h1 className="bejuco__title">Bejuco</h1>
          <h2 className='bejuco__title--small'>o Cuando las piedras sangran</h2>
        </div> */}

        {/* s l i d e */}
        {/* <div className='bejuco__slide'> */}
        {/* <div className="bejuco__blur">
              <img src={bejuco1} />
            </div> */}

        {/* <div className="bejuco__slide--content">
              <img src={bejuco6} />
            <img src={bejuco7} />
            <img src={bejuco10} />
            </div>
          </div> */}


        {/* s u b t i t l e */}
        {/* <h2 className="bejuco__description">Bejuco es una pregunta por las cosas para las que no tenemos palabras</h2> */}



        {/* d e s c r i p t i o n */}
        {/* <p className='bejuco__description'>El cortometraje: "Bejuco o Cuando las piedras sangran". Es una experiecnia audiovisual en la que recorremos los paisajes andinos y tropicales inmersos en los simbolos místicos de la cultura popular. Asì que materializar esta vision necesita juntar muchos esfuerzos. </p> */}

        <div>

          {/* <div>
            <h1></h3>
          </div> */}

          {/* s w i p e r */}
          {/* <div>

          </div> */}

        </div>

      </div>

    </>
  )

}

export default Bejuco