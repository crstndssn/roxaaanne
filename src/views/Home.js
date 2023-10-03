import React, { Component } from 'react'
import HomeAlterocio from '../components/home/HomeAlterocio'
import HomeForestando from '../components/home/HomeForestando'
import { Link, useHistory } from 'react-router-dom';
import sunset from '../resources/sunset.jpg';

import Navigation from '../components/Navigation';  

export default class Store extends Component {
  render() {
    return (
      <div>
        <Navigation/>
        <div className='home'>
          <img src={sunset} alt="sunset" />
        </div>
      </div>
        


    )
  }
}