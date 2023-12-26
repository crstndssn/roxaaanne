import React, { useState } from 'react'
import { auth, store, storage } from '../../../firebase'

import Navigation from '../../Navigation';

import sun from '../../../resources/sun.svg'
import water from '../../../resources/water.svg'
import wheater from '../../../resources/wheater.svg'


const AddProduct = () => {

  const [imagen, setImagen] = useState('');
  const [nombre, setNombre] = useState('');
  const [nombreCientifico, setNombreCientifico] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [uso, setUso] = useState('');
  const [luz, setLuz] = useState('');
  const [agua, setAgua] = useState('');
  const [temperatura, setTemperatura] = useState('');

  const [loadImg, setLoadImg] = useState('');

  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');


  const setProduct = async (e) => {

    e.preventDefault()

    if (!imagen.trim()) {
      setError('No tiene imagen')
    }
    if (!nombre.trim()) {
      setError('No tiene nombre')
    }
    if (!nombreCientifico.trim()) {
      setError('No tiene nombre Cientifico')
    }
    if (!descripcion.trim()) {
      setError('No tiene descripción')
    }
    if (!uso.trim()) {
      setError('No tiene su uso')
    }
    if (!luz.trim()) {
      setError('No tiene luz')
    }
    if (!agua.trim()) {
      setError('No tiene luz')
    }
    if (!temperatura.trim()) {
      setError('No tiene temperatura')
    }

    const product = {
      imagen: imagen,
      nombre: nombre,
      nombreCientifico: nombreCientifico,
      descripcion: descripcion,
      uso: uso,
      luz: luz,
      agua: agua,
      temperatura: temperatura
    }

    try {
      await store.collection('products').add(product)
    } catch (e) {
      console.log(e)
    }

    setNombre('')
    setNombreCientifico('')
    setDescripcion('')
    setUso('')
    setLuz('')
    setAgua('')
    setTemperatura('')
  }

  const uploadFile = (e) => {

    let file = e.target.files[0];
    let bucketName = 'products'
    let refStorage = storage.ref(`${bucketName}/${file.name}`)
    let upload = refStorage.put(file)

    upload.on(
      'state_changed',
      snapshot => {
        const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        setLoadImg(porcentaje)
      },
      err => {
        console.log(err)
      },
      () => {
        upload.snapshot.ref
          .getDownloadURL()
          .then(url => {
            setImagen(url)
            sessionStorage.setItem('imgNewPost', url)
          })
          .catch(err => {
            console.log(`Error obteniendo id ${err}`)
          })
      }
    )

  }


  return (

    <>
      <Navigation />

      <form onSubmit={setProduct} className="forestando__add">

        {/* I M A G E N */}
        <div className="forestando__add--image">
          {
            imagen == '' ? (
              <div>
                <input
                  onChange={(e) => { uploadFile(e) }}
                  name="upload-image"
                  type="file" />

              </div>

            )
              :
              (<div>
                <img className="w-full" src={imagen} alt="producto-preview" />
                <input
                  onChange={(e) => { uploadFile(e) }}
                  name="upload-image"
                  className="bg-organic text-gray-900 py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                  type="file" />
              </div>
              )
          }
          {
            loadImg <= 100 ? (
              <p className="text-brand">cargando {Math.round(loadImg)}%</p>
            ) : (
              <span></span>
            )
          }
        </div>

        {/* T E X T */}
        <div className="forestando__add--text">
            <input
              value={nombre}
              onChange={(e) => { setNombre(e.target.value) }}
              className="forestando__add--text-title"
              placeholder="Titulo" />

            <input
              value={nombreCientifico}
              onChange={(e) => { setNombreCientifico(e.target.value) }}
              className="forestando__add--text-cientifico"
              placeholder="Nombre científico" />

            <input
              value={uso}
              onChange={(e) => { setUso(e.target.value) }}
              className="forestando__add--text-uso"
              placeholder="Interior o exterior"
            />
            <textarea
              value={descripcion}
              onChange={(e) => { setDescripcion(e.target.value) }}
              className="forestando__add--text-description"
              placeholder="Description">
            </textarea>
   
          <div className="forestando__add--text-boxes">

            <div className="box">
              <div className="box__icon">
                <img className="xs:w-16 md:w-16 md:my-0 xs:my-4" src={sun} alt="figure" />
              </div>
              <div className="box__input">
                <input
                  value={luz}
                  onChange={(e) => { setLuz(e.target.value) }}
                  placeholder="Luz" />
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <img className="xs:w-12 md:w-10 md:my-0 xs:my-4" src={water} alt="figure" />
              </div>
              <div className="box__input">
                <input
                  value={agua}
                  onChange={(e) => { setAgua(e.target.value) }}
                  placeholder="Agua" />
              </div>
            </div>
            <div className="box">
              <div className="box__icon">
                <img className="xs:w-10 md:w-9 md:my-0 xs:my-4" src={wheater} alt="figure" />
              </div>
              <div className="box__input">
                <input
                  value={temperatura}
                  onChange={(e) => { setTemperatura(e.target.value) }}
                  placeholder="Temperatura" />
              </div>
            </div>
          </div>

          <button action="submit" class="forestando__add--publish">Publicar</button>
        </div>
        {
          error ?
            (
              <div>
                <p className="bg-red-100 text-red-700 p-2 mt-4 rounded">{error}</p>
              </div>
            )
            :
            (
              <span></span>
            )
        }
      </form>
    </>

  )
}

export default AddProduct
