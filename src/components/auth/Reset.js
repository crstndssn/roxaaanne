import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { auth } from '../../firebase';

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
        <div className="container mx-auto flex justify-center items-center md:min-h-50 xs:min-h-auto md:mt-24 xs:mt-20">
            <div className="container mx-auto flex justify-center items-center flex-col md:w-2/4 xs:w-full text-center">
                <h3 className="text-white md:text-3xl xs:text-2xl mt-2 mb-4 md:w-2/3 xs:w-full">Te enviaré un link para que actualices tu contraseña</h3>
                <form onSubmit={resetEmail}>
                    <input
                        onChange={(e) => { setEmailReset(e.target.value) }}
                        type="email"
                        className="text-white shadow border border-white bg-black placeholder-white text-xl p-4 my-2 w-full rounded-2xl focus:outline-none" placeholder="email"
                        autocomplete="off" />
                    <button type="submit"
                        className="hover:shadow transition duration-300 w-full border-2 bg-black hover:bg-transparent border-white text-white hover:text-white my-2 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Enviar</button>
                </form>
            </div>
        </div>
    )
}

export default ResetPassword
