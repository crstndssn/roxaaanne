import React, { useState, useRef } from 'react'
import { store, storage } from '../../firebase'
import Select from 'react-select'

import { Editor } from '@tinymce/tinymce-react';

const AddPost = () => {

  const [imagen, setImagen] = useState('');
  const [tag, setTag] = useState('');
 
  const setPost = async (e) => {
    e.preventDefault()
    const post = {
      imagen: imagen,
      tag: tag,
    }
    try {
      await store.collection('posts').add(post)
    } catch (e) {
      console.log(e)
    }
    setImagen('')
  }

  // IMAGES
  const uploadFile = (e) => {
    let file = e.target.files[0];
    let bucketName = 'posts';
    let refStorage = storage.ref(`${bucketName}/${file.name}`)
    let upload = refStorage.put(file)
    upload.on(
      'state_changed'
      ,
      snapshot => {
        const porcentaje = snapshot.bytesTransferred / snapshot.totalBytes * 100;
        console.log(porcentaje)
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

  // TEXT
  const editorRef = useRef(null);
  const log = () => {
    if (editorRef.current) {
      // contenido del blog
      console.log(editorRef.current.getContent());
    }
  };

  return (
    <div>
      <form onSubmit={setPost}>

        {/* IMAGENES */}
        <div>
          {
            imagen === '' ? (
              <div>
                <input
                  onChange={(e) => { uploadFile(e) }}
                  name="upload-image"
                  className=""
                  type="file"
                />
              </div>
            )
              :
              (
                <div>
                  <img className="w-full" src={imagen} alt="blog" />
                  <input
                    onChange={(e) => { uploadFile(e) }}
                    name="upload-image"
                    className=""
                    type="file"
                  />
                </div>
              )
          }
        </div>

        {/* CATEGORÍA */}
        <div>
          <select name="select">
            <option value="roxanne">roxanne</option>
            <option value="forestado">forestando</option>
            <option value="projects">projects</option>
          </select>
        </div>
        
        {/* TEXTO   */}
        <div className="">
          <Editor
            apiKey="8l3e0m48sqh4sdbyy2nd6no9b1pgz91nx7yjdguwu96yse26"
            onChange={log}
            onInit={(evt, editor) => editorRef.current = editor}
            init={{
              height: 500,
              menubar: false,
              plugins: [
                'advlist autolink lists link image charmap print preview anchor',
                'searchreplace visualblocks code fullscreen',
                'insertdatetime media table paste code help wordcount'
              ],
              toolbar: 'undo redo | formatselect | ' +
                'bold italic backcolor | alignleft aligncenter ' +
                'alignright alignjustify | bullist numlist outdent indent | ' +
                'removeformat | help | link',
            }}
          />

          <div>
            <button action="submit">Publicar</button>
          </div>

        </div>
      </form>
    </div>
  )
}

export default AddPost
