import React from 'react'

import styles from './progressBar.module.scss'

const ProgressBar = () => {
  return (
    <div className={styles.bar}>
    <div className={styles.dot}>
      <div className={styles.number}>1</div>
    </div>
    <div className={styles.dot}>
      <div className={styles.number}>2</div>
    </div>
    <div className={styles.dot}>
      <div className={styles.number}>3</div>
    </div>
  </div>
  )
}

export default ProgressBar