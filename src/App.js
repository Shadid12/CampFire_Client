import React, { Component } from 'react';

// components
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'
import PostForm from './components/PostForm'
import ShowPost from './components/ShowPost'


// routes 
import {Router, Route, hashHistory } from 'react-router'


class App extends Component {

  render() {
    return (
      <div>
        <Router history={hashHistory}>
          <Route path="/" component={Home}/>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/post/new" component={PostForm}/>
        </Router>
      </div>
    );
  }
}

export default App;
