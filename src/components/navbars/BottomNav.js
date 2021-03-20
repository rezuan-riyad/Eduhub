import React from 'react'
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
const Link = styled.a`
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
      this.state = { showNotificaion: false}
    }
    handleNotification = () =>{
      this.setState({
        showNotificaion: !this.state.showNotificaion
      })
    }
    render(){
        return (
          <Container id="bottomNav">
              {this.state.showNotificaion ? <BottomNotify /> : null }
              <Link title="Create Post">
                  <Icon className="fas fa-pen"></Icon>
                  <P>Create</P>
              </Link>
              <Link title="Notifications" onClick={this.handleNotification}>
                  <Icon className="far fa-bell"></Icon>
                  <P>Notifications</P>
              </Link>
              <Link title="See Profile">
                  <Icon className="far fa-user-circle"></Icon>
                  <P>Profile</P>
              </Link>
              <Link title="Search">
                  <Icon className="fas fa-search"></Icon>
                  <P>Search</P>
              </Link>
              <Link title="Log Out">
                  <Icon className="fas fa-sign-out-alt"></Icon>
                  <P>Log Out</P>
              </Link>
          </Container>
        )
    }
}

export default BottomNav
