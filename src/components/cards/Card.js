import React, { Component } from 'react'

import CardHead from './CardHead'
import CardContent from './CardContent'

import styles from '../../css/postCard.module.css'

class Card extends Component {
  render(){
    return(
      <div className="cardContainer">
        <div className="card-panel">
          <CardHead />
          <CardContent isLoggedIn={this.props}/>
        </div>
      </div>
    )
  }
}
export default Card
