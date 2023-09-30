import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'

import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Masonry from '@mui/lab/Masonry';
import { styled } from '@mui/material/styles';

const Posts = () => {

  const [postUser, setPostUser] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('posts').limit(6).get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPostUser(newArray)
      console.log(postUser)
    }
    getPost()
  }, [])

  return (
    <div className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 gap-3 md:mb-7 xs:mb-5 mt-5">
      {
        postUser.length !== 0 ? (
          postUser.map(item => (
              <div className="post__card">
                <img src={item.imagen} alt="cristian"/>
              </div>
            ))
          )
          :
          (
            <div>
              <p>cargando</p>
            </div >
          )
      }
    </div >
  )
}

export default Posts
