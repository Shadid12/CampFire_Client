import React, { Component } from 'react';

// components
import Home from './components/Home'
import Login from './components/Login'
import Signup from './components/Signup'


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
        </Router>
      </div>
    );
  }
}

export default App;
