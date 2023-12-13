import React, {FC} from 'react'

import Button from '../button/button'

import styles from './btnGroup.module.scss'

interface I_BtnGroup {
  next?: any;
  prev?: any;
}

const BtnGroup: FC<I_BtnGroup> = ({next, prev}) => {
  return (
    <div className={styles.group}>
      <Button prev={prev}/>
      <Button/>
    </div>
  )
}

export default BtnGroup