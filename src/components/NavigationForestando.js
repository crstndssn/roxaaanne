import React, { useEffect, useState, Fragment } from 'react'
import { Link, useHistory } from 'react-router-dom';

import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'

import { UserIcon } from '@heroicons/react/outline'
import { BookOpenIcon } from '@heroicons/react/outline'
import { LibraryIcon } from '@heroicons/react/outline'
import { LogoutIcon } from '@heroicons/react/outline'
import { CogIcon, PlusCircleIcon, DocumentAddIcon } from '@heroicons/react/outline'

import logo from '../resources/logo-forestando.svg'

import { auth } from '../firebase';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const NavigationForestando = () => {

  const history = useHistory();
  const [user, setUsuario] = useState(null)
  const [photo, setPhoto] = useState('')
  const [admin, setAdmin] = useState(null)

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      if (user) {
        setUsuario(true)
        setPhoto(user.photoURL)
        if (user.email === 'dussan29@gmail.com') {

          setAdmin(true)
        } else {
          setAdmin(false)

        }
      } else {
        setUsuario(false)
      }
    })
  }, [])

  const logOut = () => {
    auth.signOut()
    setUsuario(null)
    history.push('/')
  }

  function handlerMenu() {
    document.getElementById("menu-bar").classList.toggle("change");
    document.getElementById("nav").classList.toggle("change");
    document.getElementById("menu-bg").classList.toggle("change-bg");
  }

  function hideMenu() {
    document.getElementById("menu-bar").classList.remove("change");
    document.getElementById("nav").classList.remove("change");
    document.getElementById("menu-bg").classList.remove("change-bg");
  }

  return (
    <div className="navigation-forestando">
      <Link to="/" className='navigation-forestando__logo'><img src={logo} /></Link>

      {/* new navigation */}
      <div className="navigation-forestando__links">
        <div id="menu">

          <div className='menu-bar-contanier'>
            <div id="menu-bar" onClick={handlerMenu}>
              <div id="bar1" class="bar"></div>
              <div id="bar2" class="bar"></div>
              <div id="bar3" class="bar"></div>
            </div>
          </div>

          <nav class="nav" id="nav">
            <ul>
              <li><Link to="/alterocio" onClick={hideMenu} className='navigation__links--roxanne'>alter-ocio</Link></li>
              <li><Link to="/forestando" onClick={hideMenu} className='navigation__links--forestando'>
                <span class="forest">forest</span><span class="ando">ando</span></Link>
                </li>
              {/* <li><Link to="/projects" onClick={hideMenu} className='navigation__links--projects'>projects</Link></li> */}
            </ul>
          </nav>
        </div>

        <div class="menu-bg" id="menu-bg"></div>
      </div>



    </div>
  )
}

export default NavigationForestando
