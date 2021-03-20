import React, { Component } from 'react'
import styled from 'styled-components'

//import required css files
import '../css/signup.css'

//styled components
const FormContainer = styled.div`
    display: flex;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const Container = styled.div`
    width: 500px;
`;
//login class
class LogIn extends Component {
  render(){
    return(
      <FormContainer>

        <div className="signUp card-panel center">
          <h4>Log In</h4>
          <div className="row">

            <div className="input-field col s12">
              <input id="email" type="email" className="validate"></input>
              <label htmlFor="email">E-mail or Phone Number</label>
            </div>

            <div className="input-field col s12">
              <input id="password" type="password" className="validate"></input>
              <label htmlFor="password">Password</label>
            </div>

            <div className="col s12">
              <button className="waves-effect waves-dark btn">Log In</button>
            </div>
            <div className="col s12">
              <a><p>Forgotten Password?</p></a>
            </div>
            <div className="col s12">
                <p>Don't have an account?
                  <a> Sign Up</a>
                </p>
            </div>
          </div>
        </div>
      </FormContainer>
    )
  }
}

export default LogIn
