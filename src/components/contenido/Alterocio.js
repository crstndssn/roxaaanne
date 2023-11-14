import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'
import Masonry from 'react-layout-masonry';

import Navigation from '../Navigation';
import Genesis from '../subscription/genesis';
import Mercurio from '../subscription/mercurio';
import lock from '../../resources/lock.svg'

import Card from './Card'

const Roxanne = () => {

  const [post, setPost] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('new').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPost(newArray)
    }
    getPost()
  }, [])


  return (
    <div>
      <Navigation />

      <div className='alterocio'>

        {/* <Genesis /> */}

        {/* <div className="lock genesis">
          <p className="lock__title">génesis</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div> */}

        <Genesis/>
{/* 
        <div className="lock mercurio">
          <p className="lock__title">mercurio</p>
          <div className="lock__button">
            <a>suscribete <img src={lock}/></a>
          </div>
        </div> */}

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