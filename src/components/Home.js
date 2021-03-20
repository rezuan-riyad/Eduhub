import React, { Component } from 'react';
import styled from 'styled-components'

// import components

import SearchModal from './modals/SearchModal'
import CreateModal from './modals/CreateModal'
import Card from './cards/Card.js'

const LeftBar = styled.div`
  position: fixed;
  min-height: 100vh;
  width: 400px;
  padding: 30px 40px 20px 20px;

  @media screen and (max-width: 992px){
    display: none;
  }
`;
const RightBar = styled.div`
    @media screen and (min-width: 992px){
      margin-left: 300px;
    }
    @media screen and (min-width: 1100px){
      margin-left: 200px;
    }
    @media screen and (min-width: 1200px){
      margin-left: auto;
    }
`;
class Home extends Component {
  render(){
    return(
      <div>
        <LeftBar>
            <h5>Upcoming Events</h5>
            <hr />
            <h5>Daily Picked</h5>
            <hr />
            <h5>Recomended</h5>
            <hr />
        </LeftBar>
        <RightBar>
            <div className="cardContainer">
              <div className="modalGroup">
                <CreateModal />
                <SearchModal />
              </div>
            </div>
            <Card isLoggedIn={this.props.isLoggedIn}/>
            <Card isLoggedIn={this.props.isLoggedIn}/>
            <Card isLoggedIn={this.props.isLoggedIn}/>
        </RightBar>
      </div>
    )
  }
}

export default Home
