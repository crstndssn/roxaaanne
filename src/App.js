import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Navigation from './components/Navigation';  

import Login from './components/auth/Login';
// import Signup from './components/auth/Signup';
// import Reset from './components/auth/Reset';

import Admin from './components/admin/Admin'

import Home from './views/Home';

import Post from './components/contenido/Post';
import AddPost from './components/contenido/Add';
import EditPost from './components/contenido/EditPost';
import Blog from './components/contenido/Blog';
import AdminBlog from './components/contenido/AdminBlog'

// pages
import Alterocio from './components/contenido/Alterocio'
import Forestando from './components/contenido/Forestando'
import Projects from './components/contenido/Portfolio'


export default class App extends Component {
  render() {
    return <div className="container">
      <div className="w-full z-10">
        <Router>
          <Navigation />
          <Switch>
            {/* routes users */}

            {/* <Route exact path="/test" component={Test} /> */}

            {/* auth */}
            <Route path="/login" component={Login} />
            {/* <Route path="/reset" component={Reset} />
            <Route path="/signup" component={Signup} /> */}

            <Route exact path="/edit" component={AdminBlog} />

            {/* blog */}
      
            <Route path="/blog" component={Blog} /> 
           
            {/* public */}
            <Route exact path="/" component={Home} />

            <Route path="/projects" component={Projects} />
            <Route path="/forestando" component={Forestando} />
            <Route path="/alterocio" component={Alterocio} />

            <Route path="/forestando/:id" component={Post}/>
            <Route path="/alterocio/:id" component={Post}/>

            {/* private */}
            <Route exact path="/admin" component={Admin} />
            <Route path="/add" component={AddPost} />
            <Route exact path="/edit" component={AdminBlog} />
            <Route path="/edit/:id" component={EditPost}/>


          </Switch>
        </Router>
      </div>
    </div>
  }
}
