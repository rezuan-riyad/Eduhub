import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

import { primary_color, bottomNavHeight } from '../../variables.js'

import Notifications from './Notifications'
import BottomNotify from './BottomNotify'

const Container = styled.div`
    position: fixed;
    bottom: 0%;
    left: 0%;
    height: ${bottomNavHeight};
    width: 100vw;
    display: flex;
    justify-content: space-around;
    align-items: center;
    font-size: 22px;
    background: ${primary_color};

    @media (min-width: 601px){
      display: none;
    }
`;
const A = styled.div`
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;
const P = styled.p`
    font-size: 12px;
`;
const Icon = styled.i`
    font-size: 16px;
`;

class BottomNav extends React.Component{
    constructor(props){
      super(props)
      this.state = {
        showNotificaion: false,
        activeNotification: true
      }
    }

    handleNotification = () =>{
      this.setState({
        showNotificaion: !this.state.showNotificaion,
        activeNotification : false
      })
    }
    render(){
        return (
          <Container id="bottomNav">
              {this.state.showNotificaion ? <BottomNotify /> : null }
              <A title="Create Post">
                  <Icon className="small material-icons">edit</Icon>
                  <P>Create</P>
              </A>

              <A title="Notifications" onClick={this.handleNotification}>
                <Icon className="small material-icons">
                    { this.state.activeNotification ? "notifications_active" : "notifications_none"}
                </Icon>
                <P>Notifications</P>
              </A>

              <Link to="/profile">
                <A title="See Profile">
                  <Icon className="small material-icons">account_circle</Icon>
                  <P>Profile</P>
                </A>
              </Link>

              <A title="Search">
                <Icon className="small material-icons">search</Icon>
                <P>Search</P>
              </A>

              <Link to="/">
                <A title="Home">
                  <Icon className="small material-icons">home</Icon>
                  <P>Home</P>
                </A>
              </Link>

          </Container>
        )
    }
}

export default BottomNav
