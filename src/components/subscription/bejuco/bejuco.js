import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

import NavigationRoxanne from '../../Navigation';

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

  const [bejucoImages, setBejucoImages] = useState('')

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

    const getImages = async () => {
      const { docs } = await store.collection('new').where('title', '==', 'trópicos').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setBejucoImages(newArray)
    }
    getImages()
  }, [])

  return (
    <div class="bg__bejuco">
      <NavigationRoxanne bg={'#957d4f'} bg_name={'bejuco'} />
      <div className='bejuco'>
        <div className='bejuco__bejucote'>
          <h1 className="bejuco__title">Bejuco</h1>
          <h2 className='bejuco__title--small'>o cuando las piedras sangran</h2>
        </div>

        {/* <Swiper
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
        </Swiper> */}

        {/* <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={4}
          freeMode={true}
          watchSlidesProgress={true}
          modules={[FreeMode, Navigation, Thumbs]}
          className="mySwiper bejuco__bejuquitos"
        >
          <SwiperSlide>
            <Link to="/bejuco/argumento" className='bejuco__bejuquitos--item'>
              argumentos
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/bejuco/tropicos" className='bejuco__bejuquitos--item'>
              trópicos
            </Link>
          </SwiperSlide>
          <SwiperSlide>
            <Link to="/bejuco/lucas" className='bejuco__bejuquitos--item'>
              lucas
            </Link>
          </SwiperSlide>
        </Swiper> */}

        {/* N A V I G A T I O N */}
        <div className='bejuco__navigation'>
          <Link to="/bejuco/argumento" className='bejuco__bejuquitos--item-a'>
            argumentos
          </Link>
          <Link to="/bejuco/tropicos" className='bejuco__bejuquitos--item-a'>
            trópicos
          </Link>
          <Link to="/bejuco/lucas" className='bejuco__bejuquitos--item-a'>
            lucas
          </Link>
        </div>
      </div>
    </div >
  )
}

export default Bejuco