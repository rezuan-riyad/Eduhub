import React from 'react'
import styles from '../../css/postCard.module.css'

function CardHead(props){
  const { name, status, institution, ins_short, topic} = props
  return(
    <div>
      <div className={styles.cardHead}>
          <div className={styles.image}>
          </div>
          <div>
              <div className={styles.name}>
                  {name}
              </div>
              <div className={styles.subTitle}>
                  {status}
                  <div className={styles.bar}></div>
                  {institution.length < 30 ? institution : ins_short}
                  <div className={styles.bar}></div>
                  {topic}
              </div>
          </div>
      </div>
    </div>
  )
}

export default CardHead
