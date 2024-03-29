import React, { useEffect, useState, Fragment } from 'react'
import { Link } from 'react-router-dom';

import check from '../resources/vectors/check.svg';

import { auth } from '../firebase';

const Pricing = () => {

  const [user, setUsuario] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(true)
      } else {
        setUsuario(false)
      }
    })
  }, [])

  return (
    <>
      {user === false ? (
        <div className="pricing">
          <div>
            <p>$30.000</p>
            <span></span>
          </div>
          <p className="pricing__less">por 1 año</p>
          <div className='pricing__feature'>
            <img src={check} width="auto" height="auto" alt="pricing page roxanne" />
            <h3>acceso a todo el contenido</h3>
          </div>
          <div className='pricing__feature'>
            <img src={check} width="auto" height="auto" alt="pricing page roxanne"  />
            <h3>descuento en la tienda</h3>
          </div>
          <div className='pricing__feature'>
            <img src={check} width="auto" height="auto" alt="pricing page roxanne"  />
            <h3>contenido especial</h3>
          </div>
          <Link to="/subscription" class="pricing__button">suscribirse</Link>
        </div>
      ) : ( <div className="pricing">
      <div>
        <p>Hola!</p>
      </div>
      <p className="pricing__less">hice algunos cambios</p>
      <div className='pricing__feature'>
        <img src={check} width="auto" height="auto" alt="pricing page roxanne"  />
        <h3>genesis, mercurio, blue están actualizadas</h3>
      </div>
      <div className='pricing__feature'>
        <img src={check} width="auto" height="auto" alt="pricing page roxanne"  />
        <h3>kam y roxy están habilitadas</h3>
      </div>
      <div className='pricing__feature'>
        <img src={check} width="auto" height="auto" alt="pricing page roxanne"  />
        <h3>la biblioteca de forestando se está creando</h3>
      </div>
    </div>
    )}
    </>
  )
}

export default Pricing  
