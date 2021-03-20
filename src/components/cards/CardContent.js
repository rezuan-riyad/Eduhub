import React from 'react'

import styles from '../../css/postCard.module.css'

function CardContent(props){
  return(
    <div>
      <p className={styles.cardBody}>
        In Informatics, dummy data is benign information that does not contain any useful data,
        but serves to reserve space where real data is nominally present.
        Dummy data can be used as a placeholder for both testing and operational purposes.
        In Informatics, dummy data is benign information that does not contain any useful data,
        but serves to reserve space where real data is nominally present.
        Dummy data can be used as a placeholder for both testing and operational purposes.
        <a>  See More</a>
      </p>
      <div style={ !props.isLoggedIn.isLoggedIn ? {display: "none"} : null }>
        <div className={styles.hr}></div>
        <div className={styles.cardBodyBottom}>
          <button className={styles.btn}>Up Vote (0)</button>
          <button className={styles.btn}>Discussions (0)</button>
          <button className={styles.btn}>Save to Archive</button>
        </div>
      </div>
    </div>
  )
}

export default CardContent
