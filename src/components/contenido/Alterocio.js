import React, { useEffect, useState } from 'react'
import { store } from '../../firebase'
import { Link } from 'react-router-dom'
import Masonry from 'react-layout-masonry';

import Card from './Card'

const Roxanne = () => {

  const [post, setPost] = useState('')

  const [imageSlider, setImageSlider] = useState([])
  const [textPost, setTextPost] = useState('')

  useEffect(() => {
    const getPost = async () => {
      const { docs } = await store.collection('new').get()
      const newArray = docs.map(item => ({ id: item.id, ...item.data() }))
      setPost(newArray)
    }
    getPost()
  }, [])


  // const imagesSlider = (post) => {
    
  //   setImageSlider(post)

  // }

  return (
    <div className='post'>
      {
        post.length !== 0 ? 
        (post.map(item => (

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
  )
}

export default Roxanne 