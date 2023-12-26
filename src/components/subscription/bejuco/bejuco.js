import React, { useEffect, useState } from 'react';
import { store } from '../../../firebase'
import { Link } from 'react-router-dom'
import { auth } from '../../../firebase';

import Navigation from '../../Navigation';

// R E S O U R C E S
// import sunflower1 from '../../sunflower-1.svg'
import bejuco1 from '../../../resources/bejuco/bejuco1.jpg'
import bejuco6 from '../../../resources/bejuco/bejuco6.jpg'
import bejuco7 from '../../../resources/bejuco/bejuco7.jpg'
import bejuco10 from '../../../resources/bejuco/bejuco10.jpg'

// C O N T E N I D O
// import Dorado from './dorado'
// import lila from '../subscription/lila'
// import trapos_nuevos from '../subscription/lila'


const Bejuco = () => {

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
      <>
        <Navigation/>

        <div className='bejuco'>


 
        

          {/* t i t l e */}
          <h1 className="bejuco__title">Bejuco es una pregunta por las cosas para las que no tenemos palabras</h1>


          {/* s l i d e */}
          <div className='bejuco__slide'>
            <div className="bejuco__blur">
              <img src={bejuco1} />
            </div>
            
            <div className="bejuco__slide--content">
              <img src={bejuco6} />
            <img src={bejuco7} />
            <img src={bejuco10} />
            </div>
          </div>

          {/* d e s c r i p t i o n */} 
          <p className='bejuco__description'>El cortometraje: "Bejuco o Cuando las piedras sangran". Es una experiecnia audiovisual en la que recorremos los paisajes andinos y tropicales inmersos en los simbolos místicos de la cultura popular. Asì que materializar esta vision necesita juntar muchos esfuerzos. </p>

          </div>
  
      </>
    )

}

export default Bejuco