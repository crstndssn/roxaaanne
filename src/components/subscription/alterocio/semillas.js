import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Card from '../../contenido/Card'

import antes_de_morir from '../../../resources/antes_de_morir.mp3'
import entre_las_luces from '../../../resources/entre_las_luces.mp3'
import no_soy_un_extraño from '../../../resources/no_soy_un_extraño.mp3'
import shiva_song from '../../../resources/shiva.mp3'


const Semillas = () => {
  const [bnr, setBnr] = useState('')
  const [ea, setEa] = useState('')
  const [mar, setMar] = useState('')
  const [qoy, setQoy] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const bnr = async () => {
      const { docs } = await store.collection('new').where('title', '==', "bnr").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setBnr(newArray)
    }
    bnr()
    const ea = async () => {
      const { docs } = await store.collection('new').where('title', '==', "ea").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setEa(newArray)
    }
    ea()
    const mar = async () => {
      const { docs } = await store.collection('new').where('title', '==', "mar").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setMar(newArray)
    }
    mar()
    const qoy = async () => {
      const { docs } = await store.collection('new').where('title', '==', "qoy").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setQoy(newArray)
    }
    qoy()
  }, [])


  return (
    <details className='genesis__section alterocio__card alterocio__card--semillas alterocio__details'>
      
      <summary className='alterocio__card--summary alterocio__summary'>semillas</summary>

      {/* B N R */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>blue and red</summary>
        <audio src={antes_de_morir} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            bnr.length !== 0 ?
              (bnr.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* E A */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>efímero anacrónico</summary>
        <audio src={entre_las_luces} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            ea.length !== 0 ?
              (ea.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* M A R */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>mar</summary>
        <audio src={no_soy_un_extraño} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            mar.length !== 0 ?
              (mar.map(item => (

                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />

              ))) : (<div>loading...</div>)
          }
        </div>
      </details>

      {/* Q O Y */}
      <details className='alterocio__card--border'>
        <summary className='alterocio__card--header'>quedándote o yéndote</summary>
        <audio src={shiva_song} controls preload="none"></audio>
        <div className='alterocio__card--grid'>
          {
            qoy.length !== 0 ?
              (qoy.map(item => (

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

export default Semillas 