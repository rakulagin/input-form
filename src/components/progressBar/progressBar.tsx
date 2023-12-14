import React from 'react'

import classNames from 'classnames';

import { useDispatch, useSelector } from 'react-redux';

import styles from './progressBar.module.scss'

const ProgressBar = () => {
  const { currentPosition } = useSelector(
    (state: any) => state.inputForm
  );

  return (
    <div className={
      classNames(
        // styles.bar
        currentPosition === 1 && styles.bar,
        currentPosition === 2 && styles.bar2,
        currentPosition === 3 && styles.bar3
        )}>
      <div className={
        classNames(styles.dot,
          currentPosition === 1 && styles.current,
          currentPosition > 1 && styles.complete
        )
      }>
        <div className={styles.number}>1</div>
      </div>
      <div className={
        classNames(styles.dot,
          currentPosition === 2 && styles.current,
          currentPosition > 2 && styles.complete
        )}>
        <div className={styles.number}>2</div>
      </div>
      <div className={classNames(styles.dot, currentPosition === 3 && styles.current)}>
        <div className={styles.number}>3</div>
      </div>
      
    </div>
  )
}

export default ProgressBar