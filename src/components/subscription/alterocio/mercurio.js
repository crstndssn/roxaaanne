import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Card from '../../contenido/Card'

import antes_de_morir from '../../../resources/antes_de_morir.mp3'
import entre_las_luces from '../../../resources/entre_las_luces.mp3'
import no_soy_un_extraño from '../../../resources/no_soy_un_extraño.mp3'
import shiva_song from '../../../resources/shiva.mp3'


const Mercurio = () => {

  const [adm, setAdm] = useState('')
  const [ell, setEll] = useState('')
  const [nsue, setNsue] = useState('')
  const [shiva, setShiva] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const adm = async () => {
      const { docs } = await store.collection('new').where('title', '==', "adm").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setAdm(newArray)
    }
    adm()
    const ell = async () => {
      const { docs } = await store.collection('new').where('title', '==', "ell").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setEll(newArray)
    }
    ell()
    const nsue = async () => {
      const { docs } = await store.collection('new').where('title', '==', "nsue").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setNsue(newArray)
    }
    nsue()
    const shiva = async () => {
      const { docs } = await store.collection('new').where('title', '==', "shiva").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setShiva(newArray)
    }
    shiva()
  }, [])


  return (
    <details className='genesis__section alterocio__card alterocio__card--mercurio alterocio__details'>
      
      <summary className='alterocio__card--summary alterocio__summary'>mercurio</summary>

      {/* A D M */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>antes de morir     </summary>
        <audio src={antes_de_morir} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            adm.length !== 0 ?
              (adm.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* E N T R E   L A S   L U C E S */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>entre las luces     </summary>
        <audio src={entre_las_luces} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            ell.length !== 0 ?
              (ell.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* N O  S O Y   U N   E X T R A Ñ O */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>no soy un extraño  </summary>
        <audio src={no_soy_un_extraño} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            nsue.length !== 0 ?
              (nsue.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* S H I V A */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>shiva     </summary>
        <audio src={shiva_song} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            shiva.length !== 0 ?
              (shiva.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>
    </details>
  )
}

export default Mercurio 