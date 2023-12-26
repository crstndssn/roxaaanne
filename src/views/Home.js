import React, { Component } from 'react'

import Navigation from '../components/Navigation';
import Header from './Header';
import Pricing from './Pricing'

export default class Store extends Component {
  render() {
    return (
      <div>
        <Navigation />
        <Header />
        <Pricing />
        <div className="footer">
          <p>by <a target='_blank' href='https://cristiandussan.com/'>crstndssn</a> © 2023</p>
        </div>
      </div>

    )
  }
}