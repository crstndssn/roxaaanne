import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

import Card from '../contenido/Card'

import sulky from '../../resources/sulky.mp3'
import centro__lamaquina from '../../resources/centro.mp3'
import norte from '../../resources/norte.mp3'

const Genesis = () => {

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
      <summary>génesis</summary>

      <div className='alterocio__card--header'>
        <h2>sur</h2>
        <audio src={sulky} controls  preload="none"></audio>
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
        <h2>centro</h2>
        <audio src={centro__lamaquina} controls preload="none"></audio>
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
        <h2>norte</h2>
        <audio src={norte} controls autoplay loop preload="none"></audio>
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

export default Genesis 