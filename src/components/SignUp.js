import React, { Component } from 'react'
import styled from 'styled-components'
import '../css/signup.css'

class SignUp extends Component {
  render(){
    return(
      <div className="signUp card-panel center grey lighten-4">
        <h4>Sign Up</h4>
        <div className="row">
          <div className="col s12">
            <p className="left">All fields are required.</p>
          </div>
          <div className="input-field col s6">
            <input id="first_name" type="text" className="validate"></input>
            <label htmlFor="first_name">First Name</label>
          </div>

          <div className="input-field col s6">
            <input id="last_name" type="text" className="validate"></input>
            <label htmlFor="last_name">Last Name</label>
          </div>

          <div className="input-field col s12">
            <input id="email" type="email" className="validate"></input>
            <label htmlFor="email">E-mail or Phone Number</label>
          </div>

          <div className="input-field col s6">
            <input id="password" type="password" className="validate"></input>
            <label htmlFor="password">Password</label>
          </div>

          <div className="input-field col s6">
            <input id="confirm_pass" type="password" className="validate"></input>
            <label htmlFor="confirm_pass">Confirm Password</label>
          </div>

          <div className="input-field col s12">
            <input id="institution" type="text" className="validate"></input>
            <label htmlFor="institution">Institution Name</label>
          </div>

          <div className="col s12">
            <p className="radio-btn">
              <label>
                <input name="group1" type="radio"></input>
                <span>I am a Student</span>
              </label>
              <span className="login-text">or</span>
              <label>
                <input name="group1" type="radio"></input>
                <span>I am a Teacher</span>
              </label>
            </p>
          </div>
        {/*  <div className="col s12">
            <p className="left">
              <label>
                <input id="indeterminate-checkbox" type="checkbox"></input>
                <span className="checkbox">I accept the
                  <a> terms</a> and
                  <a> conditions</a>.
                </span>
              </label>
            </p>
          </div>  */}

          <div className="col s12">
            <button className="waves-effect waves-dark btn">Sign Up</button>
          </div>
          <div className="col s12">
            <p className="login-text">Already have an account?
              <a> Log In</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default SignUp
