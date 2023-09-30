import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

import firebase from 'firebase/app'
import { doc, deleteDoc } from "firebase/firestore";

import eye from '../../resources/view-product.svg'
import edit from '../../resources/edit-product.svg'
import del from '../../resources/delete-product.svg'

import { DocumentAddIcon } from '@heroicons/react/outline'

const AdminBlog = () => {

  const [postUser, setPostUser] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('new').get()
      const nuevoArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPostUser(nuevoArray)
      console.log(postUser)
    }
    getPost()
    
  }, [])

  const deletePost = async (id) => {
    try {
      await store.collection('new').doc(id).delete()
      const snap = store.collection('new').doc(id).delete()
      const { docs } = store.collection('new').orderBy('date', 'desc')
      const nuevoArray = await docs.map(item => ({ id: item.id, ...item.data() }))
      setPostUser(nuevoArray)
    } catch (e) {
      console.log(e)
    }
    window.location.reload()
  }

  return (
    <div className="edit bg-red-500">
      <Link to="/add" className="edit__add">
        <DocumentAddIcon className="icon" />
        <span classNae="text-4xl font-medium">add post</span>
      </Link>
      {
        postUser.length !== 0 ? (
          postUser.map(item => (
            <div to={`/post/${item.id}`} key={item.id} className="edit__item">

              <div className="edit__content-image">
                <img className="edit__image" src={item.imageLinks[0]} />
              </div>
              <h2 className="font-serif font-medium text-3xl leading-none">{item.title}</h2>
              {/* <Link to={`/post/${item.id}`}><img src={eye} className="w-10 shadow hover:shadow-lg transition duration-100 rounded-full cursor-pointer" alt="edit" /></Link> */}
              <Link to={`/edit/${item.id}`}>
                <img src={edit} className="edit__icon" alt="edit" />
              </Link>
              <img onClick={(id) => { deletePost(item.id) }} src={del} className="edit__icon" alt="delete" />
            </div>
          ))
        )
          :
          (
            <div>
              <p>cargando</p>
            </div>
          )
      }
    </div>
  )
}

export default AdminBlog
