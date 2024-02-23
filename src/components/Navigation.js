import React, { useEffect, useState } from 'react'
import { Link, useHistory } from 'react-router-dom';


import lock from '../resources/vectors/lock-bejuco.svg'
import lock_f from '../resources/vectors/lock-forestando.svg'
import cart from '../resources/vectors/cart.svg'

import login from '../resources/vectors/login.svg'
import login__forestando from '../resources/vectors/user__forestando.svg'
import login__kam from '../resources/vectors/user__kam.svg'
import login__roxy from '../resources/vectors/user__roxy.svg'
import login__bejuco from '../resources/vectors/user__bejuco.svg'

import logo from '../resources/photos/logo.png'
import logo__forestando from '../resources/vectors/logo__forestando.svg'
import logo__kam from '../resources/photos/logo__kam.png'
import logo__roxy from '../resources/photos/logo__roxy.png'
import logo__bejuco from '../resources/photos/logo__bejuco.png'

import logout from '../resources/vectors/logout.svg'
import logout__forestando from '../resources/vectors/logout__forestando.svg'
import logout__kam from '../resources/vectors/logout__kam.svg'
import logout__roxy from '../resources/vectors/logout__roxy.svg'
import logout__bejuco from '../resources/vectors/logout__bejuco.svg'

import { auth } from '../firebase';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

const Navigation = (props) => {

  const { bg, bg_name } = props

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
    setUsuario(false)
    setAdmin(false)
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
    <div className="navigation">
      <>
        {bg_name == null ? (<Link to="/" className='navigation__logo'><img src={logo} alt='roxanne home logo' /></Link>) : (<></>)}
        {bg_name == 'roxy' ? (<Link to="/" className='navigation__logo'><img src={logo__roxy} alt='roxanne roxy logo' /></Link>) : (<></>)}
        {bg_name == 'forestando' ? (<Link to="/" className='navigation__logo'><img src={logo__forestando} alt='roxanne forestando logo' /></Link>) : (<></>)}
        {bg_name == 'kam' ? (<Link to="/" className='navigation__logo'><img src={logo__kam} alt='roxanne kam logo' /></Link>) : (<></>)}
        {bg_name == 'bejuco' ? (<Link to="/" className='navigation__logo'><img src={logo__bejuco} alt='roxanne bejuco logo' /></Link>) : (<></>)}
      </>
      {/* <div className='test-safari'><img src={logo}/></div> */}

      {/* new navigation */}
      <div className="navigation__links">
        <div id="menu">

          <div className='menu-bar-contanier'>

            {/* <img className="navigation__icons navigation__icons--block" src={cart} /> */}

            {user == true ? (
              <>
                {bg_name == null ? (<img onClick={logOut} className="navigation__icons" src={logout} />) : (<></>)}
                {bg_name == 'roxy' ? (<img onClick={logOut} className="navigation__icons" src={logout__roxy} />) : (<></>)}
                {bg_name == 'forestando' ? (<img onClick={logOut} className="navigation__icons" src={logout__forestando} />) : (<></>)}
                {bg_name == 'kam' ? (<img onClick={logOut} className="navigation__icons" src={logout__kam} />) : (<></>)}
                {bg_name == 'bejuco' ? (<img onClick={logOut} className="navigation__icons" src={logout__bejuco} />) : (<></>)}
              </>

            ) : (
              <>
                {bg_name == null ? (<Link to="/login"><img className="navigation__icons" src={login} /></Link>) : (<></>)}
                {bg_name == 'roxy' ? (<Link to="/login"><img className="navigation__icons" src={login__roxy} /></Link>) : (<></>)}
                {bg_name == 'forestando' ? (<Link to="/login"><img className="navigation__icons" src={login__forestando} /></Link>) : (<></>)}
                {bg_name == 'kam' ? (<Link to="/login"><img className="navigation__icons" src={login__kam} /></Link>) : (<></>)}
                {bg_name == 'bejuco' ? (<Link to="/login"><img className="navigation__icons" src={login__bejuco} /></Link>) : (<></>)}
              </>
            )}

            <div id="menu-bar" onClick={handlerMenu}>
              <div id="bar1" class="bar" style={{
                backgroundColor: bg
              }}></div>
              <div id="bar2" class="bar" style={{
                backgroundColor: bg
              }}></div>
              <div id="bar3" class="bar" style={{
                backgroundColor: bg
              }}></div>
            </div>
          </div>

          <nav class="nav" id="nav">
            <ul>
              <li><Link to="/alterocio" onClick={hideMenu} className='navigation__links--roxanne'>alter-ocio</Link></li>
              <li><Link to="/" onClick={hideMenu} className='navigation__links--forestando'>
                <div className='forestando-lock'>
                  <span class="forest">forest</span><span class="ando">ando</span><img src={lock_f} />
                </div></Link>
              </li>
              <li><Link to="/kam" onClick={hideMenu} className='navigation__links--kam'>
                <div className='lock-forestando'>
                  <span class="kam-menu">kam</span>
                </div></Link>
              </li>
              <li><Link to="/roxy" onClick={hideMenu} className='navigation__links--kam'>
                <div className='lock-forestando'>
                  <span class="roxy-menu">roxy</span>
                </div></Link>
              </li>
              <li><Link to="/bejuco" onClick={hideMenu} className='navigation__links--kam'>
                <span class="bejuco-menu">bejuco</span>
              </Link>
              </li>
            </ul>
          </nav>
        </div>

        <div class="menu-bg" id="menu-bg"></div>
      </div>
    </div>
  )
}

export default Navigation
