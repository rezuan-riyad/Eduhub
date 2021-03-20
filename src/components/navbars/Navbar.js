import React, { Component } from 'react'
import styled from 'styled-components'
import M from "materialize-css"

import { Link } from 'react-router-dom'

// import { scrollEffect } from '../scrollEffect.js'

import Notifications from './Notifications'

//Styled Components
const Nav = styled.nav`
    transition: top 0.2s;
`;
const Icons = styled.div`
    position: relative;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    color: #eee;
`;

const Badge = styled.div`
    height: 6px;
    width: 6px;
    border: none;
    border-radius: 50%;
    background: #ef5350;
    position: absolute;
    left: 25%;
    top: 33%;
`;

const Image = styled.div`
    height: 35px;
    width: 35px;
    border-radius: 50%;
    background: #eee;
    margin-left: 25px;
`;

// scrollEffect();
class Navbar extends Component {
  constructor(){
    super()
    this.state = {
      showNotificaion : false
    }
    this.handleNotification = this.handleNotification.bind(this)
  }
  handleNotification(e){
    this.setState({ showNotificaion: !this.state.showNotificaion})
  }
  render(){
    return(
      <div>
        <div className="navbar-fixed">
          <Nav id="navbar">
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo left">EduHub</a>
              <a href="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></a>
              <ul className="right hide-on-small-only">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/archives">Archives</Link></li>
                <li><Link to="/activities">Activities</Link></li>
                <li>
                  <Icons>
                    <i className="far fa-bell" onClick={this.handleNotification}></i>
                        { this.state.showNotificaion ? <Notifications /> : null}
                    <Badge></Badge>
                    <Link to="/profile" id="profile_icon">
                        <Image></Image>
                    </Link>
                  </Icons>
                </li>
              </ul>
            </div>
          </Nav>
        </div>

        <ul className="sidenav" id="mobile-demo">
          <li><Link to="/profile">Rezuan Ahmed</Link></li>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/archives">Archives</Link></li>
          <li><Link to="/activities">Activities</Link></li>
          <li><Link to="/login">Logout</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar
