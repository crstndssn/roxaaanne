import React, { useRef, useState } from 'react'
import { store, storage } from '../../firebase'
import { Editor } from '@tinymce/tinymce-react';
import { useEffect } from 'react';

const Add = () => {

  // data
  const [id, setId] = useState('')

  const [imageLinks, setImageLinks] = useState([])
  const [percentage, setPercentage] = useState(0)

  const [year, setYear] = useState(2022)
  const [category, setCategory] = useState('roxanne');
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  const text = useRef(null)

  // definir post
  const addPost = async (e) => {
    e.preventDefault()
    const post = {
      imageLinks: imageLinks,
      year: year,
      category: category,
      title: title,
      description: description
    }
    try {
      await store.collection('new').add(post)
      console.log('succes')
      window.location.reload()
    } catch (e) {
      console.log(e)
      console.log('error')
    }
  }

  // id 
  const postId = (e) => {
    const textId = e.target.value
    setTitle(textId)
    setId(textId.replace(/ /g, "-"))
  }

  // imagenes
  const uploadImages = (e) => {
    let image = e.target.files[0];
    let refStorage = storage.ref(`${year}/${category}/${id}/${image.name}`)
    let upload = refStorage.put(image)
    upload.on(
      'state_changed',
      snapshot => {
        const percentageUpload = snapshot.bytesTransferred / snapshot.totalBytes * 100
        setPercentage(percentageUpload)
      },
      err => {
        console.log(err)
      },
      () => {
        upload.snapshot.ref
          .getDownloadURL()
          .then(url => {
            // añadir link al array de imagenes
            setImageLinks([...imageLinks, url])
            setPercentage(0)
            sessionStorage.setItem('imgNewPost', url)
          })
          .catch(err => {
            console.log(`Error obteniendo id ${err}`)
          })
      }
    )
    console.log(imageLinks)
  }

  // years
  const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022]
  const yearChange = (e) => {
    e.preventDefault()
    setYear(e.target.value)
  }

  // categories
  const categories = ['roxanne', 'forestando', 'projects']
  const categoryChange = (e) => {
    e.preventDefault()
    setCategory(e.target.value)
  }

  // texto
  const textArea = () => {
    if (text.current) {
      setDescription(text.current.getContent());
    }
  }

  const progressPercentage = {
    width: percentage + '%'
  }

  return (
    <>
      <form className='add' onSubmit={addPost}>

        <div className='add__image'>
          {
            imageLinks.map((image, key) => {
              <p>{image}</p>
            })
          }
          {
          imageLinks === [] ? (
            <div>no hay</div>
          ) : (
            imageLinks.map((image, key) =>
              <div>
                <img src={image} alt="" />
              </div>
            )
          )
          }
          
        </div>

        <div className='add__percentage'>
          <div className='add__percentage--bar' style={progressPercentage}></div>
          <span className='add__percentage--number'>{Math.round(percentage)}%</span>
        </div>

        {/* imagenes */}
        <div className='add__images'>
          <label class="custom-file-upload">
            <input
              onChange={(e) => { uploadImages(e) }}
              name="upload-image"
              type="file"
              placeholder='upload'
            />
            seleccionar foto
          </label>
        </div>

        {/* id */}
        <div className='add__id'>
          <input
            onChange={(e) => { postId(e) }}
            name="upload-image"
            type="text"
            placeholder='post id'
            className='add__id--input'
          />
        </div>

        <div className='add__save-options'>
          <select
            className='add__year'
            onChange={e => yearChange(e)}>
            {
              years.map((category, key) =>
                <option
                  key={key}
                  value={category}>
                  {category}
                </option>)
            }
          </select>
          <select
            className='add__category'
            onChange={e => categoryChange(e)}>
            {
              categories.map((category, key) =>
                <option
                  key={key}
                  value={category}>
                  {category}
                </option>)
            }
          </select>
        </div>


        {/* text */}
        <Editor
          className='add__text'
          apiKey="8l3e0m48sqh4sdbyy2nd6no9b1pgz91nx7yjdguwu96yse26"
          onChange={textArea}
          onInit={(evt, editor) => text.current = editor}
          init={{
            height: 420,
            menubar: false,
            plugins: [
              'advlist autolink lists link image charmap print preview anchor',
              'searchreplace visualblocks code fullscreen',
              'insertdatetime media table paste code help wordcount'
            ],
            toolbar: 'undo redo | bold link',
          }}
        />


        <div className='add__send'>
          <button action="submmit">publicar</button>
        </div>

      </form>
    </>
  )
}

export default Add
