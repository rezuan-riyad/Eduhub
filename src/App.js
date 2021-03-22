import React, { Component } from 'react';
import './css/materialize.css'
import './App.css';
import M from "materialize-css";

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Navbar from './components/navbars//Navbar.js'
import BottomNav from './components/navbars/BottomNav.js'
import NavLoggedOut from './components/navbars/NavLoggedOut.js'
import Home from './components/Home.js'
import Profile from './components/Profile.js'
import Archives from './components/Archives.js'
import Activities from './components/Activities.js'
import LogIn from './components/LogIn'
import SignUp from './components/SignUp'

class App extends Component{
  constructor(){
    super()
    this.state = {
      isLoggedIn: true
    }
  }
  componentDidMount(){
    // Initialize all materialize components
    M.AutoInit();
  }
  render(){
    return (
      <Router>
          <Switch>
              <Route exact path="/">
                  {this.state.isLoggedIn ? <Navbar /> : <NavLoggedOut />}
                  <Home />
                  <BottomNav />
              </Route>
              <Route path="/profile">
                  {this.state.isLoggedIn ? <Navbar /> : null}
                  {this.state.isLoggedIn ? <Profile /> : <SignUp />}
                  <BottomNav />
              </Route>
              <Route path="/archives">
                  {this.state.isLoggedIn ? <Navbar /> : null}
                  {this.state.isLoggedIn ? <Archives /> : <SignUp />}
                  <BottomNav />
              </Route>
              <Route path="/activities">
                  {this.state.isLoggedIn ? <Navbar /> : null}
                  {this.state.isLoggedIn ? <Activities /> : <SignUp />}
                  <BottomNav />
              </Route>
              <Route path="/signup">
                  <SignUp />
              </Route>
              <Route path="/login">
                  <LogIn />
              </Route>
          </Switch>
      </Router>
    )
  }
}
export default App;
