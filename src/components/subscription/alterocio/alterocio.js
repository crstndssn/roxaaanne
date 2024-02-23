import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Navigation from '../../Navigation';

import Genesis from './genesis';
import Mercurio from './mercurio';
import Blue from './blue';
import Semillas from './semillas'

import lock from '../../../resources/vectors/lock.svg'

import Card from '../../contenido/Card'

import { auth } from '../../../firebase';

const Roxanne = () => {

  const [user, setUsuario] = useState(null)
  const [admin, setAdmin] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userSub, setUserSub] = useState(false)

  const [detail, setDetail] = useState(null)

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

    const closeTabs = () => {
      // Fetch all the details elements
      const details = document.querySelectorAll('.detail');
      // Add onclick listeners
      details.forEach((targetDetail) => {
        targetDetail.addEventListener("click", () => {
          // Close all details that are not targetDetail
          details.forEach((detail) => {
            if (detail !== targetDetail) {
              detail.removeAttribute("open");
            }
          });
        });
      });

    }
    closeTabs()

  }, [])

  return (
    <div>
      <Navigation />

      <div className='alterocio'>
        {
          userSub == true ? (
            <div>
              <Genesis />
              <Mercurio />
              <Blue />
            </div>
          )
            :
            (
              <div>
                <div className="lock genesis">
                  <p className="lock__title">génesis</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="lock mercurio">
                  <p className="lock__title">mercurio</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="lock blue">
                  <p className="lock__title">blue</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                {/* <div className="lock semillas">
                  <p className="lock__title">semillas</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div> */}
              </div>
            )
        }

        <div className="lock semillas">
          <p className="lock__title">semillas</p>
          <div className="lock__button">
            <Link to="/subscription">entrar <img src={lock} /></Link>
          </div>
        </div>

        <div className="lock florecer">
          <p className="lock__title">florecer</p>
          <div className="lock__button">
            <Link to="/subscription">entrar <img src={lock} /></Link>
          </div>
        </div>

        <div className="lock viento">
          <p className="lock__title">viento</p>
          <div className="lock__button">
            <Link to="/subscription">entrar <img src={lock} /></Link>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Roxanne 