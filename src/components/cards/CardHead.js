import React from 'react'
import styles from '../../css/postCard.module.css'

function CardHead(){
  return(
    <div>
      <div className={styles.cardHead}>
          <div className={styles.image}>
          </div>
          <div>
              <div className={styles.name}>Rezuan Ahmed</div>
              <div className={styles.subTitle}>
                  Student<div className={styles.bar}></div>
                  Rajshahi University<div className={styles.bar}></div>
                  Physics
              </div>
          </div>
      </div>
    </div>
  )
}

export default CardHead
