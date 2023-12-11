import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Navigation from '../../Navigation';
import Genesis from './genesis';
import Mercurio from './mercurio';
import lock from '../../../resources/lock.svg'

import Card from '../../contenido/Card'

import { auth } from '../../../firebase';

const Roxanne = () => {

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
    <div>
      <Navigation />

      <div className='alterocio'>

        {/* G E N E S I S */}
        {
          userSub == true ? (
              <Genesis />
            ) 
            : 
            ( 
              <div className="lock genesis">
                <p className="lock__title">génesis</p>
                  <div className="lock__button">
                  <a>suscribete <img src={lock}/></a>
                  </div>
              </div>
            )
        }

        {/* <Genesis/> */}

        <div className="lock mercurio">
          <p className="lock__title">mercurio</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div>

        {/* <Mercurio /> */}

        <div className="lock blue">
          <p className="lock__title">blue</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div>

        <div className="lock semillas">
          <p className="lock__title">semillas</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div>

        <div className="lock florecer">
          <p className="lock__title">florecer</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div>

        <div className="lock viento">
          <p className="lock__title">viento</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Roxanne 