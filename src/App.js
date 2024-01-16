import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Reset from './components/auth/Reset';

import Admin from './components/admin/Admin'
import Users from './components/admin/Users'

import Home from './views/Home';
import Blog from './components/contenido/Blog';

// pages
import Alterocio from './components/subscription/alterocio/alterocio'
import AllAlterocio from './components/subscription/alterocio/all'
import EditAlterocio from './components/subscription/alterocio/edit'
import AddAlterocio from './components/subscription/alterocio/add'

import Forestando from './components/subscription/forestando/forestando'
import AllForestando from './components/subscription/forestando/all'
import AddForestando from './components/subscription/forestando/add'
import EditForestando from './components/subscription/forestando/add'

import Kam from './components/subscription/kam/kam'
import AllKam from './components/subscription/kam/edit'
import AddKam from './components/subscription/kam/add'

import Roxy from './components/subscription/roxy/roxy'
import AllRoxy from './components/subscription/roxy/edit'
import AddRoxy from './components/subscription/roxy/add'

import Bejuco from './components/subscription/bejuco/bejuco'
import BejucoAdd from './components/subscription/bejuco/add'
import BejucoArgumento from './components/subscription/bejuco/argumento'
import BejucoTropicos from './components/subscription/bejuco/tropicos'
import BejucoEncuentros from './components/subscription/bejuco/encuentros'
import BejucoLucas from './components/subscription/bejuco/lucas'


import AllBejuco from './components/subscription/bejuco/edit'
import AddBejuco from './components/subscription/bejuco/add'



export default class App extends Component {
  render() {
    return <div className="container">
      <div className="w-full z-10">
        <Router>
          <Switch>
            {/* P U B L I C */}
            <Route exact path="/" component={Home} />
            <Route path="/blog" component={Blog} /> 
            <Route path="/login" component={Login} />
            <Route path="/reset" component={Reset} />
            <Route path="/signup" component={Signup} /> 

            {/* <Route path="/forestando/:id" component={Post}/>
            <Route path="/alterocio/:id" component={Post}/> */}

            {/* P R I V A T E */}
            <Route exact path="/admin" component={Admin} />
            <Route exact path="/users" component={Users}/>

            {/* A L T E R - O C I O */}
            <Route exact path="/alterocio" component={Alterocio} />
            <Route exact path="/alterocio/add" component={AddAlterocio} />
            <Route exact path="/alterocio/edit" component={EditAlterocio} />
            <Route exact path="/alterocio/all" component={AllAlterocio} />
            
            {/* F O R E S T A N D O */}
            <Route exact path="/forestando" component={Forestando} />
            <Route exact path="/forestando/add" component={AddForestando} />
            <Route exact path="/forestando/all" component={AllForestando} />
            <Route exact path="/forestando/edit" component={EditForestando} />

            {/* K A M */}
            <Route exact path="/kam" component={Kam} />
            <Route exact path="/kam/add" component={AddKam} />
            <Route exact path="/kam/all" component={AllKam} />

            {/* R O X Y */}
            <Route exact path="/roxy" component={Roxy} />
            <Route exact path="/roxy/add" component={AddRoxy} />
            <Route exact path="/roxy/all" component={AllRoxy} />

            {/* B E J U C O */}
            <Route exact path="/bejuco" component={Bejuco} />
            <Route exact path="/bejuco/add" component={BejucoAdd} />
            <Route exact path="/bejuco/argumento" component={BejucoArgumento} />
            <Route exact path="/bejuco/tropicos" component={BejucoTropicos} />
            <Route exact path="/bejuco/encuentros" component={BejucoEncuentros} />
            <Route exact path="/bejuco/lucas" component={BejucoLucas} />


            <Route exact path="/bejuco/add" component={AddBejuco} />
            <Route exact path="/bejuco/all" component={AllBejuco} />

          </Switch>
        </Router>
      </div>
    </div>
  }
}
