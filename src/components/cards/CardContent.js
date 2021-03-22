import React from 'react'
import { btnTextColor } from '../../variables.js'

import styles from '../../css/postCard.module.css'

class CardContent extends React.Component{
  constructor(props){
    super(props)
    this.state = {
      post : this.props.post,
      upvotes : this.props.upvotes,
      isSaved : false,
      isVoted : false,
      isDiscussed : false,
    }
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e){
    if(e.target.name === "vote"){
      this.props.upvotes == this.state.upvotes ?
        this.setState({
          upvotes : this.state.upvotes + 1,
          isVoted : true
        })
        :
        this.setState({
          upvotes: this.props.upvotes,
          isVoted: false
        })
    } else if (e.target.name === "comment"){

    } else {
      this.setState({
        isSaved : !this.state.isSaved
      })
    }
  }

  render(){
      const { isVoted, isSaved, isDiscussed, upvotes } = this.state
      return(
          <div>
            <p className={styles.cardBody}>
              {this.state.post}<a>  See More</a>
            </p>
            <div>
              <div className={styles.hr}></div>
              <div className={styles.cardBodyBottom}>
                  <button
                      className={styles.btn}
                      name="vote"
                      onClick={this.handleClick}
                      style={{ color : this.state.isVoted && btnTextColor }}>

                      { isVoted ? (`Voted (${upvotes})`) : (`Up Votes (${upvotes})`) }
                  </button>
                  <button
                      className={styles.btn}
                      name="comment"
                      onClick={this.handleClick}>

                      Discussions (3)
                  </button>
                  <button
                      className={styles.btn}
                      name="save"
                      onClick={this.handleClick}
                      style={{ color : this.state.isSaved && btnTextColor }}>

                      { this.state.isSaved ? "Saved" : "Save To Archive"}
                  </button>
              </div>
            </div>
          </div>
        )
      }
}

export default CardContent
