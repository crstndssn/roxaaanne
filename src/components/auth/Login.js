import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom'
import { app, auth, googleProvider, store } from '../../firebase';

import google from '../../resources/google.svg'

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
            <div className="container mx-auto flex justify-center items-center md:mt-24 xs:mt-20 md:pb-32 xs:pb-56">
                <div className="flex justify-center items-center">
                    <div className="container mx-auto flex justify-center items-center flex-col">
                        <div className="lg:w-2/3 md:w-2/3 xs:w-full flex justify-center items-center flex-col">
                            <form id="form-login" onSubmit={handleSubmit}>
                                <input
                                    name="email"
                                    type="email"
                                    id="login-email"
                                    className="text-white shadow bg-black border border-white text-xl p-4 my-2 w-full rounded-2xl focus:outline-none placeholder-gray-200"
                                    placeholder="email"
                                    autocomplete="off"
                                />
                                <input name="password" type="password" id="login-password"
                                    className="text-white shadow bg-black border border-white placeholder-gray-200 text-xl p-4 my-2 w-full rounded-2xl focus:outline-none"
                                    placeholder="contraseña" />
                                <button type="submit"
                                    className="hover:shadow transition duration-300 w-full border-2 font-medium text-white bg-black hover:bg-white border-white hover:text-black my-2 p-3 rounded-2xl md:text-2xl xs:text-xl focus:outline-none">Ingresar</button>
                            </form>
                        </div>
                        <div className="lg:w-2/3 md:w-2/3 xs:w-full flex justify-center items-center flex-col">
                            <button onClick={loginGoogle} className="bg-gray-50 text-black w-full flex justify-center items-center font-serif text-2xl border border-gray-200 shadow hover:shadow-lg transition duration-100 rounded-xl p-3 my-5 mb-3 focus:outline-none">
                                <img className="w-6 mx-2" src={google} alt="google" />Google</button>
                        </div>
                        <p className="transition duration-300 font-xl flex justify-center w-full my-5 text-gray-200">No tienes una cuenta?  <Link className="underline ml-2" to="/signup">Regístrate</Link></p>
                            <Link to="/reset" id="forget-password" class="transition duration-300 hover:underline font-xl flex justify-center w-full text-gray-200">
                                ¿Olvidaste tu contraseña?
                        </Link>
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
        </div >
    )
}

export default Login;
