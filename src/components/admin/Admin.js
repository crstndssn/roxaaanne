import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

import Navigation from '../Navigation';

import { auth } from '../../firebase';


const Admin = () => {

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
       <Navigation />
       <div className='admin'>
      <Link to="/edit/alterocio" className='admin__add'>
        alterocio
      </Link>
      <Link to="/edit/forestando" className='admin__add'>
        forestando
      </Link>
      <Link to="/edit/kam" className='admin__add'>
        kam
      </Link>
      <Link to="/edit/roxy" className='admin__add'>
        roxy
      </Link>
      <Link to="/users " className='admin__add'>
        users
      </Link>
      <Link to="/products" className='admin__add'>
        products
      </Link>
    </div>
    </>
  )
}

export default Admin
