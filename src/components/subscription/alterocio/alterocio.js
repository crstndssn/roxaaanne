import React, { useEffect, useState } from 'react'
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'

import Navigation from '../../Navigation';

import Genesis from './genesis';
import Mercurio from './mercurio';
import Blue from './blue';
import Semillas from './semillas'

import lock from '../../../resources/vectors/lock.svg'

import Card from '../../contenido/Card'

import { auth } from '../../../firebase';

const Roxanne = () => {

    // // nueva configuración
  const [users, setUsers] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);
  // const [currentEmail, setCurrentEmail] = useState(null);
  const [isPremium, setIsPremium] = useState(false);

  const [usuario, setUsuario] = useState(false);
  const [admin, setAdmin] = useState(false);
  const [userSub, setUserSub] = useState(false);
  const [userEmail, setUserEmail] = useState('');
  const [currentEmail, setCurrentEmail] = useState(null);
  const [loading, setLoading] = useState(true); // Add loading state

  useEffect(() => {
    console.log("state = unknown (until the callback is invoked)"); // Log initial state

    auth.onAuthStateChanged(user => {
      if (user) {
        console.log("state = definitely signed in"); // Log when signed in
        const userEmailString = user.email || ''; // Ensure user.email is not null
        setCurrentEmail(userEmailString); // Set current email
        console.log(userEmailString + ' <- current authhhhhhh');
        setUsuario(true);
        if (user.email === 'u20171157265@usco.edu.co') {
          setAdmin(true);
          setUserSub(true);
          setUserEmail(userEmailString);
        } else {
          setAdmin(false);
          setUserEmail(userEmailString);
        }

        store.collection('sub').onSnapshot(snapshot => {
          const userList = [];
          snapshot.forEach(doc => {
            const userData = doc.data();
            userList.push(userData)
            if (userData.email === userEmailString) {
              setUserSub(true)
              console.log(currentEmail + ' <- current')
              console.log(userData.email + ' eres premium')
            } else {
              console.log(currentEmail + ' <- current')
              console.log(userData.email + ' no eres premium')
            }
          });
          setUsers(userList);
        });


      } else {
        console.log("state = definitely signed out");
        setUsuario(false);
        setAdmin(false);
        setCurrentEmail(null);
        setUserSub(false);
        setUserEmail('');
      }
      setLoading(false);
    });

  }, [])

  return (
    <div>
      <Navigation />

      <div className='alterocio'>
        {
          userSub == true ? (
            <div>
              <Genesis />
              <Mercurio />
              <Blue />
            </div>
          )
            :
            (
              <div>
                <div className="lock genesis">
                  <p className="lock__title">génesis</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="lock mercurio">
                  <p className="lock__title">mercurio</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="lock blue">
                  <p className="lock__title">blue</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                {/* <div className="lock semillas">
                  <p className="lock__title">semillas</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div> */}
              </div>
            )
        }

        <div className="lock semillas">
          <p className="lock__title">semillas</p>
          <div className="lock__button">
            <Link to="/subscription">entrar <img src={lock} /></Link>
          </div>
        </div>

        <div className="lock florecer">
          <p className="lock__title">florecer</p>
          <div className="lock__button">
            <Link to="/subscription">entrar <img src={lock} /></Link>
          </div>
        </div>

        <div className="lock viento">
          <p className="lock__title">viento</p>
          <div className="lock__button">
            <Link to="/subscription">entrar <img src={lock} /></Link>
          </div>
        </div>

      </div>

    </div>

  )
}

export default Roxanne 