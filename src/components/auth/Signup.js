import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { app, auth, googleProvider, store } from '../../firebase';

import Navigation from '../Navigation';

import google from '../../resources/google.svg'

const Signup = () => {

  const history = useHistory();

  const [msgerror, setMsgError] = useState(null)

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');

  const loginGoogle = async e => {
    e.preventDefault();
    await auth
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log(result.user.uid)
        setId(result.user.uid)
        setEmail(result.user.email)
        createUser(result.user.uid, result.user.email)
        history.push('/')
      })
      .catch((error) => {
        console.log(error)
        if (error.code === 'auth/invalid-email') {
          setMsgError('Email incorrecto')
        }
        if (error.code === 'auth/user-not-found') {
          setMsgError('Usuario no encontrado')
        }
        if (error.code === 'auth/wrong-password') {
          setMsgError('Contraseña equivocada')
        }
      })
  }


  const handleSubmit = async e => {
    e.preventDefault();

    await app.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(result => {
        console.log(result.user.uid)
        setId(result.user.uid)
        console.log(id)
        setEmail(result.user.email)
        createUser(result.user.uid, result.user.email)
        history.push('/')
      })
      .catch(error => {
        console.log(error)
        if (error.code === 'auth/invalid-email') {
          setMsgError('Email incorrecto')
        }
        if (error.code === 'auth/user-not-found') {
          setMsgError('Usuario no encontrado')
        }
        if (error.code === 'auth/wrong-password') {
          setMsgError('Contraseña equivocada')
        }
      })
  }


  const createUser = async (id, email) => {

    const user = {
      id: id,
      email: email,
      username: username,
    }

    try {
      const data = await store.collection('users').doc(user.id).set(user)
      console.log('add-user')
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }



  return (
    <div>
      <Navigation />
      <div className="login">
        <h3 class="login__title">crear cuenta</h3>

        <div className="login__form">

          <form id="form-login" onSubmit={handleSubmit}>
            <input
              onChange={(e) => { setUsername(e.target.value) }}
              type="text"
              className=""
              placeholder="username"
              autocomplete="off"
            />
            <input
              onChange={(e) => { setEmail(e.target.value) }}
              type="email"
              className=""
              placeholder="email"
              autocomplete="off"
            />
            <input
              onChange={(e) => { setPassword(e.target.value) }}
              type="password"
              className=""
              placeholder="contraseña" />
            <button type="submit"
              className="">regístrate</button>
          </form>

          <div className="login__options">
            <Link to="/ingreso">tienes una cuenta?</Link>
            <Link to="/contraseña" id="forget-password">
              mi contraseña
            </Link>
          </div>

          <div className="login__google">
            <button onClick={loginGoogle} className="">
              <img src={google} alt="google" />oogle</button>
          </div>

            {
              msgerror != null ?
                (
                  <div>
                    <p className="bg-red-100 text-red-700 p-2 mt-4 rounded">{msgerror}</p>
                  </div>
                )
                :
                (
                  <span>

                  </span>
                )
            }
        </div>
      </div>
    </div>

  )
}

export default Signup
