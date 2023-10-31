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
            <p>$10.000</p>
            <span>x mes</span>
          </div>
          <p className="pricing__less">less than 3 dollars</p>
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
          <a class="pricing__button" target="_blank" href='https://www.mercadopago.com.co/subscriptions/checkout?preapproval_plan_id=2c9380848b62d285018b83055a53182f'>suscribirse</a>
        </div>

        <div className="footer">
          <p>by <a target='_blank' href='https://cristiandussan.com/'>crstndssn</a> © 2023</p>
        </div>
      </div>

    )
  }
}