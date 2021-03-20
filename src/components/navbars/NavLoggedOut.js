import React, { Component } from 'react'
import { Link } from 'react-router-dom'

class NavLoggedOut extends Component {
  render(){
    return(
      <div>
        <div className="navbar-fixed">
          <nav>
            <div className="nav-wrapper container">
              <a href="#!" className="brand-logo center">EduHub</a>
              <ul className="right">
                <li><Link to="/signup">Create Account</Link></li>
                <li><Link to="/login">Log In</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </div>
    )
  }
}

export default NavLoggedOut
