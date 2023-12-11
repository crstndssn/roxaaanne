import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Card from '../../contenido/Card'

import antes_de_morir from '../../resources/antes_de_morir.mp3'
import entre_las_luces from '../../resources/entre_las_luces.mp3'
import no_soy_un_extraño from '../../resources/no_soy_un_extraño.mp3'
import shiva from '../../resources/shiva.mp3'


const Blue = () => {

  const [sur, setSur] = useState('')
  const [norte, setNorte] = useState('')
  const [centro, setCentro] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const sur = async () => {
      const { docs } = await store.collection('new').where('title', '==', "sur").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setSur(newArray)
    }
    sur()
    const norte = async () => {
      const { docs } = await store.collection('new').where('title', '==', "norte").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setNorte(newArray)
    }
    norte()
    const centro = async () => {
      const { docs } = await store.collection('new').where('title', '==', "centro").get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setCentro(newArray)
    }
    centro()
  }, [])


  return (
    <details className='alterocio__card alterocio__card--genesis'>
      <summary>mercurio</summary>

      <div className='alterocio__card--header'>
        <h2>antes de morir</h2>
        <audio src={antes_de_morir} controls  preload="none"></audio>
      </div>
      <div className='post'>
        {
          sur.length !== 0 ?
            (sur.map(item => (

              <div className="post__card">
                {/* <Link to={`/roxanne/${item.id}`} key={item.id}> */}
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />
                {/* </Link>  */}
              </div>

            ))) : (<div>loading...</div>)
        }
      </div>
      <div className='alterocio__card--header'>
        <h2>entre las luces</h2>
        <audio src={entre_las_luces} controls preload="none"></audio>
      </div>
      <div className='post'>
        {
          centro.length !== 0 ?
            (centro.map(item => (

              <div className="post__card">
                {/* <Link to={`/roxanne/${item.id}`} key={item.id}> */}
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />
                {/* </Link>  */}
              </div>

            ))) : (<div>loading...</div>)
        }
      </div>
      <div className='alterocio__card--header'>
        <h2>no soy un extraño</h2>
        <audio src={no_soy_un_extraño} controls autoplay loop preload="none"></audio>
      </div>
      <div className='post'>
        {
          norte.length !== 0 ?
            (norte.map(item => (

              <div className="post__card">
                {/* <Link to={`/roxanne/${item.id}`} key={item.id}> */}
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />
                {/* </Link>  */}
              </div>

            ))) : (<div>loading...</div>)
        }
      </div>
      <div className='alterocio__card--header'>
        <h2>shiva</h2>
        <audio src={shiva} controls autoplay loop preload="none"></audio>
      </div>
      <div className='post'>
        {
          norte.length !== 0 ?
            (norte.map(item => (

              <div className="post__card">
                {/* <Link to={`/roxanne/${item.id}`} key={item.id}> */}
                <Card
                  images={item.imageLinks}
                  title={item.title}
                  category={item.category
                  } />
                {/* </Link>  */}
              </div>

            ))) : (<div>loading...</div>)
        }
      </div>
    </details>
  )
}

export default Blue 