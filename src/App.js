import React, { Component } from 'react';

// components
import Nav from './Nav'
import Login from './components/Login'
import Signup from './components/Signup'


// routes 
import {Router, Route, hashHistory } from 'react-router'


class App extends Component {
  render() {
    return (
      <div>
        <Nav />
        <Router history={hashHistory}>
          <Route path="/login" component={Login}/>
          <Route path="/signup" component={Signup}/>
        </Router>
      </div>
    );
  }
}

export default App;
