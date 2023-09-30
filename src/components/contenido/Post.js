import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { store } from '../../firebase'


const Post = () => {

  const [post, setPost] = useState([])

  const { id } = useParams();

  const obtenerPost = async () => {
    await store.collection('new').doc(id)
      .get()
      .then((doc) => {
        console.log(doc.data())
        setPost(doc.data())
      })
      .catch((error) => {
        console.log('error getting documents: ', error);
      })
  }

  useEffect(() => {
    obtenerPost();
  }, [])

  const createMarkup = () => {
    return { __html: post.content }
  }

  return (
    <div>
      <div className='article'>
        {
          post.length !== 0 ? 
          (post.imageLinks.map(item => (
            <img src={item} alt="" srcset="" />
          ))) : (<div>cargando</div>)
          
        }
        <h1 className='article__title'>{post.title}</h1>
        {/* <img src={post.imagen} alt="imagen" className="md:max-w-screen mt-7 rounded-lg" /> */}
        <div>
          {/* <div className="md:text-xl xs:text-lg" dangerouslySetInnerHTML={createMarkup()} /> */}
        </div>
      </div>
    </div>
  )
}

export default Post
