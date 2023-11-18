import React, { useState } from 'react'
import { store, storage } from '../../firebase'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import add_post from '../../resources/add-post.svg'
import edit_post from '../../resources/edit-post.svg'
import delete_post from '../../resources/delete-post.svg'

const Subs = () => {

  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('premium')

  const [allSubs, setAllSubs] = useState('')

  useEffect(() => {
    const getSubs = async () => {
      const { docs } = await store.collection('sub').get()
      const nuevoArray = docs.map(item => ({ username: item.username, ...item.data() }))
      setAllSubs(nuevoArray)
    }
    getSubs()

  }, [])

  // CREATE USER
  const addSub = async (e) => {
    e.preventDefault()
    const sub = {
      username: username,
      email: email,
      status: status
    }
    try {
      await store.collection('sub').add(sub)
      alert('usuario creado')
      window.location.reload()
    } catch (e) {
      alert(e + ' :(')
    }
  }
  

  // status
  const allStatus = ['premium', 'free']
  const editStatus = (e) => {
    e.preventDefault()
    setStatus(e.target.value)
  }

  return (
    <>
      <div>
        <form onSubmit={addSub}>
          <input
            onChange={(e) => setUsername(e.target.value)}
            name="upload-username"
            type="text"
            placeholder='username'
          />
          <input
            onChange={(e) => setEmail(e.target.value)}
            name="upload-email"
            type="email"
            placeholder='email'
          />
          <select
            className='add__year'
            onChange={e => editStatus(e)}>
            {
              allStatus.map((category, key) =>
                <option
                  key={key}
                  value={category}>
                  {category}
                </option>)
            }
          </select>


        <div className='add__send'>
          <button action="submit">publicar</button>
        </div>
        </form>
      </div>


      {/* ALL SUBS */}
      {
        allSubs.length !== 0 ? (
          allSubs.map(item => (

              <div className="edit__controls">
                <h2 className="font-serif font-medium text-3xl leading-none">{item.username}</h2>
                <div className="edit__controls--icons">
                  <Link to={`/user/${item.username}`}>
                    <img src={edit_post} className="edit__icon" alt="edit" />
                  </Link>
                </div>
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
    </>
  )
}

export default Subs
