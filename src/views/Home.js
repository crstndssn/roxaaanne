import React, { Component } from 'react'
import HomeAlterocio from '../components/home/HomeAlterocio'
import HomeForestando from '../components/home/HomeForestando'
import { Link, useHistory } from 'react-router-dom';
import sunset from '../resources/sunset.jpg';
import check from '../resources/check.svg';

import Navigation from '../components/Navigation';

export default class Store extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <div className='home'>
          <img src={sunset} alt="sunset" />
        </div>

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
 
        <div className="footer">
          <p>by <a target='_blank' href='https://cristiandussan.com/'>crstndssn</a> © 2023</p>
        </div>
      </div>

    )
  }
}