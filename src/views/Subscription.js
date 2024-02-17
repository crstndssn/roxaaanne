
import React, { useEffect, useState } from 'react'

import Navigation from '../components/Navigation';

import check from '../resources/vectors/check.svg';
import qr__bejuco from '../resources/bejuco/qr-cristian.png'
import qr__daviplata from '../resources/bejuco/daviplata-bejuco.png'

const Subscription = () => {
  return (
    <>
      <Navigation />
      <div className="subscription">
        <h1 className="subscription__title">suscripción</h1>
        <p className="subscription__description">suscribete para ver todo el contenido</p>

        {/* C A R D S  */}
        <div className='subscription__cards'>
          <div className="subscription__card subscription__alterocio">
            <h2><span className='alter'>alter</span><span className='ocio'>ocio</span></h2>
            <p>más de 1000 fotos</p>
          </div>
          <div className="subscription__card subscription__forestando">
            <h2><span className="text-nature">forest</span><span className="text-ando">ando</span></h2>
            <p>7 documentales</p>
            <p>biblioteca botánica</p>
            <p className='prox'>próximamente</p>
          </div>
          <div className="subscription__card subscription__kam">
            <h2>kam</h2>
            <p>cartas y más de 200 fotos</p>
          </div>
          <div className="subscription__card subscription__roxy">
            <h2>roxy</h2>
            <p>más de 200 fotos</p>
          </div>
        </div>


        {/* P A G O S */}

        <div className='subscription__forms'>

          <div className="subscription__pricing">
            <div>
              <p>$30.000</p>
              <span></span>
            </div>
            <p className="pricing__less">por 1 año</p>
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
          </div>

          <div className='subscription__payments'>
            <h2>métodos de pago</h2>

            <div className="subscription__payments--container">
              {/* N E Q U I */}
              <details>
                <summary>Nequi</summary>
                <div className='subscription__payments--qr'>
                  <img src={qr__bejuco} />
                  <p>escanéa el código desde Nequi o al 301-676-0223 ingresa el valor $30.000</p>
                </div>
              </details>

              {/* D A V I P L A T A */}
              <details>
                <summary>Daviplata</summary>
                <div className='subscription__payments--qr'>
                  <img src={qr__daviplata} />
                  <p>escanéa el código desde Daviplata o al 301-676-0223 ingresa el valor $30.000</p>
                </div>
              </details>


              {/* C R E D I T / P S E */}
              <details>
                <summary>
                  <a target="_blank" href='https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848b62d290018b82fa82971861'>targeta de crédito / PSE</a></summary>
                <div>
                </div>
              </details>
            </div>


            {/* C O N T A C T */}
            <div className='subscription__contact'>
              <p>si tienes alguna duda me puedes escribir</p>
              <div className='subscription__contact--buttons'>
                <a target='_blank' href='https://wa.link/9wcq0o' className='subscription__contact--wts'>whatsapp</a>
                <a target='_blank' href='https://www.instagram.com/roxaaanne___/' className='subscription__contact--ins'>instagram</a>
              </div>
            </div>
          </div>
        </div>



      </div>
    </>

  )
}

export default Subscription 