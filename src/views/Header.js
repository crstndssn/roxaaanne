import React, { useEffect, useState, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom';

import luces from '../resources/luces.jpg';
import sunset from '../resources/sunset.jpg';

import { auth } from '../firebase';

const Header = () => {

  const history = useHistory();
  const [user, setUsuario] = useState(null)
  const [photo, setPhoto] = useState('')
  const [admin, setAdmin] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(true)
        setPhoto(user.photoURL)
        if (user.email === 'dussan29@gmail.com') {
          setAdmin(true)
        } else {
          setAdmin(false)

        }
      } else {
        setUsuario(false)
      }
    })
  }, [])

  return (
    <>
      {user == false ? (
        <div className='home'>
          <img src={sunset} alt="sunset" />
        </div>
      ) : (
        <div className='home'>
          <img src={luces} alt="luces" />
        </div>
      )}
    </>
  )
}

export default Header  
