import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

import Navigation from '../Navigation';

const ResetPassword = (e) => {

  const history = useHistory()
  const [emailReset, setEmailReset] = useState('');

  const resetEmail = (e) => {

    try {
      auth.sendPasswordResetEmail(emailReset)
      setEmailReset('')
      alert('Revisa tu correo')
      history.push('/login')
    } catch (e) {
      console.log(e)
    }

  }

  return (
    <div>
      <Navigation />
      <div className="">
        <div className="login">
          <h3 className="login__reset">Te enviaré un link para que actualices tu contraseña</h3>
          <div class="login__form">
            <form onSubmit={resetEmail}>
              <input
                onChange={(e) => { setEmailReset(e.target.value) }}
                type="email"
                placeholder="email"
                autocomplete="off" />
              <button type="submit"
                className="">enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>

  )
}

export default ResetPassword
