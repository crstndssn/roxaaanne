import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'

const Blog = () => {

  const [postUser, setPostUser] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('posts').get()

      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPostUser(newArray)
      console.log(postUser)
    }
    getPost()
  }, [])

  return (
    <div className="post">
      {
        postUser.length !== 0 ? (
          postUser.map(item => (
            <div className="post__card">
              <img src={item.imagen} alt="cristian dussán" />
            </div>
          ))
        )
          :
          (
            <div>
              <p>cargando...</p>
            </div >
          )
      }
    </div >
  )
}

export default Blog
