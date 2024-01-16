import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

// import Navigation from '../../Navigation';

// S W I P E R
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react';
import { FreeMode, Mousewheel, Navigation, Pagination, Thumbs } from 'swiper';
import "swiper/swiper.min.css";
import 'swiper/modules/free-mode/free-mode.min.css';
import 'swiper/modules/thumbs/thumbs.min.css';
import 'swiper/modules/pagination/pagination.min.css';


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
          {/* <SwiperSlide>
            <Link to="/bejuco/encuentros" className='bejuco__bejuquitos--item'>
              encuentros
            </Link>
          </SwiperSlide> */}
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

export default Bejuco