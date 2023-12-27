import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

import Navigation from '../../Navigation';

// R E S O U R C E S
// import sunflower1 from '../../sunflower-1.svg'
// import sunflower2 from '../../sunflower-2.svg'

// C O N T E N I D O
import Astra from './astra'
import Venus from './venus'
import Circe from './circe'

const Roxy = () => {
  const [user, setUsuario] = useState(null)
  const [admin, setAdmin] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userSub, setUserSub] = useState(false)

  const [bg, setBg] = useState('#ED0000')

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
    <div className='bg__roxy'>
      <Navigation bg={'#ED0000'} bg_name={'roxy'} />
      <div className='roxy'>
        <h1 className="roxy__title">roxy</h1>
        <Astra />
        <Venus />
        <Circe />
      </div>
    </div>
  )
}

export default Roxy