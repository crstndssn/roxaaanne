import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

import Navigation from '../../Navigation';

import lock from '../../../resources/vectors/lock.svg'

// R E S O U R C E S
// import sunflower1 from '../../sunflower-1.svg'
// import sunflower2 from '../../sunflower-2.svg'

// C O N T E N I D O
import Dorado from './dorado'
import Mar from './mar'
import Trapos from './trapos'


const Kam = () => {

  const [user, setUsuario] = useState(null)
  const [admin, setAdmin] = useState(null)
  const [userEmail, setUserEmail] = useState(null)
  const [userSub, setUserSub] = useState(false)

  const [allSubs, setAllSubs] = useState('')

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(true)
        if (user.email === 'dussan29@gmail.com') {
          setAdmin(true)
          setUserSub(true)
          setUserEmail(user.email)
        } else {
          setAdmin(false)
          setUserSub(false)
          setUserEmail(user.email)
        }
      } else {
        setUsuario(false)
        setAdmin(false)
      }
    })

    const getSubs = async () => {
      const subsList = store.collection('sub').where('email', 'in', [userEmail]).get()
      subsList.then(snapshot => {
        snapshot.docs.forEach(doc => {
          if (doc.id === '') {
            console.log(doc.id)
            setUserSub(false)
          } else {
            setUserSub(true)
          }
        })
      })
    }
    getSubs()
  }, [])

  return (
    <div class="bg__kam">
      <Navigation bg={'#FECD27'} bg_name={'kam'} />
      <div className='kam'>
        <h1 className="kam__title">KAM</h1>
        {
          userSub == true ? (
            <>
              <Dorado />
              <Mar />
              <Trapos />
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