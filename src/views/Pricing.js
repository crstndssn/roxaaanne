import React, { useEffect, useState, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom';

import check from '../resources/check.svg';

import { auth } from '../firebase';

const Pricing = () => {

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
        <div className="pricing">
          <div>
            <p>$20.000</p>
            <span></span>
          </div>
          <p className="pricing__less">por 3 meses</p>
          <div className='pricing__feature'>
            <img src={check} />
            <h3>acceso a todo el contenido</h3>
          </div>
          <div className='pricing__feature'>
            <img src={check} />
            <h3>descuento en la tienda</h3>
          </div>
          <div className='pricing__feature'>
            <img src={check} />
            <h3>contenido especial</h3>
          </div>
          <a class="pricing__button" target="_blank" href='https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848b62d290018b82fa82971861'>suscribirse</a>
        </div>
      ) : ( <div className="pricing">
      <div>
        <p>Hola!</p>
      </div>
      <p className="pricing__less">hice algunos cambios</p>
      <div className='pricing__feature'>
        <img src={check} />
        <h3>mercurio, blue y semillas están actualizadas</h3>
      </div>
      <div className='pricing__feature'>
        <img src={check} />
        <h3>kam y roxy están habilitadas</h3>
      </div>
      <div className='pricing__feature'>
        <img src={check} />
        <h3>la biblioteca de forestando se está creando</h3>
      </div>
    </div>
    )}
    </>
  )
}

export default Pricing  
