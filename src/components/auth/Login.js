import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { app, auth, googleProvider, store } from '../../firebase';

import Navigation from '../Navigation';

import google from '../../resources/vectors/google.svg'

const Login = () => {

  const history = useHistory();

  const [msgerror, setMsgError] = useState(null)

  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  const loginGoogle = async e => {
    e.preventDefault();
    await auth
      .signInWithPopup(googleProvider)
      .then(result => {
        console.log(result.user.uid)
        setId(result.user.uid)
        setEmail(result.user.email)
        console.log(`el id: ${result.user.uid}`)
        console.log(`el email: ${email}`)
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
    const { email, password } = e.target.elements;

    await app.auth()
      .signInWithEmailAndPassword(email.value, password.value)
      .then(result => {
        console.log(result);
        history.push(`/`);
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
      name: 'Tu nombre',
      description: 'Una breve descripcion',
      link: 'Un link para ver mas'
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
        <h3 class="login__title">ingresar</h3>

        <div className="login__form">

          <form id="form-login" onSubmit={handleSubmit}>
            <input
              name="email"
              type="email"
              id="login-email"
              className=""
              placeholder="email"
              autocomplete="off"
            />
            <input name="password" type="password" id="login-password"
              className=""
              placeholder="contraseña" />
            <button type="submit"
              className="">entrar</button>
          </form>

          <div className="login__options">
            <Link to="/signup">regístrate</Link>
            <Link to="/reset" id="forget-password">
              mi contraseña
            </Link>
          </div>

          <div className="login__google">
            <button onClick={loginGoogle} className="">
              <img src={google} alt="google" /> ingresar con Google</button>
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
    </div >
  )
}

export default Login;
