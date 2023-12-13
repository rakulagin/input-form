import React, {FC} from 'react'

import classNames from 'classnames'

import styles from './button.module.scss'

interface I_Btn {
  purpose?: any;
  next?: any;
  prev?: any;
}

const Button: FC<I_Btn> = ({prev, next, purpose}) => {
  return (
    <button
      className={styles.main}
    >
      Начать
    </button>
  )
}

export default Button