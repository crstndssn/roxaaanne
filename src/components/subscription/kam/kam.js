import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

import Navigation from '../../Navigation';

import lock from '../../../resources/vectors/lock.svg'

// C O N T E N I D O
import Dorado from './dorado'
import Mar from './mar'
import Trapos from './trapos'
import Velvet from './velvet'


const Kam = () => {

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
  }, []);


  return (
    <div class="bg__kam">
      <Navigation bg={'#FECD27'} bg_name={'kam'} />

      <div className='kam'>

        <div class="kam__sunflowers">
          <h1 className="kam__title">KAM</h1>
        </div>

        {
          userSub == true ? (
            <>
              <Dorado />
              <Mar />
              <Trapos />
              <Velvet />
            </>
          )
            :
            (
              <div className="kam__lock">
                <div className="kam__lock--oro">
                  <p>dorado</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="kam__lock--mar">
                  <p>mar</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="kam__lock--trapos">
                  <p>trapos</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>

                <div className="kam__lock--velvet">
                  <p>velvet</p>
                  <div className="lock__button">
                    <Link to="/subscription">entrar <img src={lock} /></Link>
                  </div>
                </div>
              </div>
            )
        }
      </div>
    </div>
  )

}

export default Kam