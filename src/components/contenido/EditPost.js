import React, { useState, useEffect, Fragment, useRef } from 'react'
import { useParams, useHistory, Link } from 'react-router-dom'
import { store, storage } from '../../firebase'

import { Editor } from '@tinymce/tinymce-react';

const EditPost = () => {

  const { id } = useParams();

  console.log(id)
  console.log('here comes the sun')

  const history = useHistory();

  const [post, setPost] = useState([])

  const [imagen, setImagen] = useState('');
  const [imagenStatus, setImagenStatus] = useState(null);

  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [content, setContent] = useState('');
  const [autor, setAutor] = useState('');
  const [date, setDate] = useState('');
  const [loadImg, setLoadImg] = useState('');


  const [error, setError] = useState('');
  const [notification, setNotification] = useState('');

  useEffect(async () => {
    await store.collection('new').doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data())
        const {
          imagen,
          name,
          description,
          content,
          autor,
          date
        } = doc.data()

        setPost(doc.data())

        setImagen(imagen)
        setName(name)
        setDescription(description)
        setContent(content)
        setAutor(autor)
        setDate(date)

      })
      .catch((error) => {
        console.log("Error getting documents: ", error);
      })



  }, [])

  const setUpdate = async (e) => {

    e.preventDefault()

    if (!imagen.trim()) {
      setImagenStatus(true)
      setError('No tiene imagen')
    }
    // if (!name.trim()) {
    //     setError("No tiene nombre")
    // }
    // if (!description.trim()) {
    //     setError("No tiene nombre")
    // }
    // if (!content.trim()) {
    //     setError("No tiene nombre")
    // }
    // if (!autor.trim()) {
    //     setError("No tiene nombre")
    // }

    const post = {
      imagen: imagen,
      name: name,
      content: content,
      date: date
    }

    try {
      await store.collection('posts').doc(id).set(post)
      history.push(`/post/${id}`)
    } catch (e) {
      console.log(e)
    }

    setName('')
    setContent('')
    setDate('')

  }

  const updateFile = (e) => {
    let file = e.target.files[0];
    let bucketName = 'posts'
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


  const editorRef = useRef(null)

  return (
    <form onSubmit={setUpdate} className="w-full container mx-auto flex justify-center items-center flex-col mt-8 text-gray-800 bg-red-300">


      <div className="w-full flex justify-center">
        <h1 className="xs:text-3xl md:text-5xl font-medium text-white">edit post</h1>
      </div>

      <div class="md:w-2/3 xd:w-full mt-7 flex justify-center items-start flex-col">
        <input
          value={name}
          onChange={(e) => { setName(e.target.value) }}
          className="w-full bg-black text-white border placeholder-gray-100 px-3 py-1 md:text-5xl xs:text-3xl font-medium my-2 focus:outline-none rounded-xl"
          placeholder="Title" />
      </div>

      <div className="md:w-2/3 xd:w-full mt-7">
        {
          imagenStatus == false ? (
            <div>
              <p>No hay imagen</p>
              <input
                onChange={(e) => { updateFile(e) }}
                name="upload-image"
                className="text-white bg-black py-2 md:text-xl xs:text-3xl font-medium my-1 mt-2 focus:outline-none"
                type="file" />

            </div>

          )
            :
            (
              <div>
                <img className="w-full rounded-xl" src={imagen} alt="imagen-2" />
                <input
                  onChange={(e) => { updateFile(e) }}
                  name="upload-image"
                  className="text-white bg-black py-2 md:text-xl xs:text-3xl font-medium my-1 mt-3 focus:outline-none"
                  type="file" />
              </div>
            )
        }
        {
          loadImg > 0 ? (
            <p className="text-white">cargando {Math.round(loadImg)}%</p>
          ) : (
            <span></span>
          )
        }
      </div>

      <div className="md:w-2/3 xd:w-full mt-7">
        <Editor
          value={content}
          apiKey="8l3e0m48sqh4sdbyy2nd6no9b1pgz91nx7yjdguwu96yse26"
          onEditorChange={(newValue) => {
            setContent(newValue);
          }}
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
      </div>

      <div className="md:w-2/3 xd:w-full mt-7 flex justify-center items-center pb-32">
        <div class="flex justify-center items-center w-full m-3">
          <button action="submit" class="w-full border bg-black text-white text-semibold p-3 rounded-2xl md:text-2xl xs:text-2xl focus:outline-none">Actualizar</button>
        </div>
      </div>

    </form >

  )

}

export default EditPost
