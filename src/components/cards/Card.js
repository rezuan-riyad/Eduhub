import React, { Component } from 'react'

import CardHead from './CardHead'
import CardContent from './CardContent'

import styles from '../../css/postCard.module.css'

class Card extends Component {
  constructor(){
    super()
  }
  render(){
    const { name, institution, post, topic, upvotes, status, ins_short } = this.props.post
    return(
      <div className="cardContainer">
        <div className="card-panel">
          <CardHead name={name} institution={institution} ins_short={ins_short} topic={topic} status={status}/>
          <CardContent upvotes={upvotes} post={post}/>
        </div>
      </div>
    )
  }
}
export default Card
