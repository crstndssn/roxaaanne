import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';  

import Login from './components/auth/Login';
import Signup from './components/auth/Signup';
import Reset from './components/auth/Reset';

import Admin from './components/admin/Admin'
import Users from './components/admin/Users'

import Home from './views/Home';

import Post from './components/contenido/Post';
import AddPost from './components/contenido/Add';
import EditPost from './components/contenido/EditPost';
import Blog from './components/contenido/Blog';
import AdminBlog from './components/contenido/AdminBlog'

// pages
import Alterocio from './components/subscription/alterocio/alterocio'
import Forestando from './components/subscription/forestando/forestando'
import Kam from './components/subscription/kam/kam'
import Roxy from './components/subscription/roxy/roxy'


export default class App extends Component {
  render() {
    return <div className="container">
      <div className="w-full z-10">
        <Router>
          <Switch>
            {/* auth */}
            <Route path="/login" component={Login} />
            <Route path="/reset" component={Reset} />
            <Route path="/singup" component={Signup} /> 

            {/* blog */}
            <Route path="/blog" component={Blog} /> 
           
            {/* public */}
            <Route exact path="/" component={Home} />

            {/* <Route path="/forestando" component={Forestando} /> */}
            <Route path="/alterocio" component={Alterocio} />
            <Route path="/kam" component={Kam} />
            <Route path="/roxy" component={Roxy} />

            {/* <Route path="/forestando/:id" component={Post}/>
            <Route path="/alterocio/:id" component={Post}/> */}

            {/* private */}
            <Route exact path="/admin" component={Admin} />
            <Route path="/users" component={Users}/>

            {/* alter-ocio */}
            <Route path="/alterocio/add" component={AddPost} />
            <Route exact path="/alterocio/edit" component={AdminBlog} />
            
            {/* forestando */}
            <Route path="/forestando/add" component={AddPost} />
            <Route exact path="/forestando/edit" component={AdminBlog} />

            {/* kam */}
            <Route path="/kam/add" component={AddPost} />
            <Route exact path="/kam/edit" component={AdminBlog} />

            {/* roxy */}
            <Route path="/roxy/add" component={AddPost} />
            <Route exact path="/roxy/edit" component={AdminBlog} />
          </Switch>
        </Router>
      </div>
    </div>
  }
}
