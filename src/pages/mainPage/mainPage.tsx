import React from 'react'

import UserCard from '../../components/userCard/userCard'
import FormOne from '../../components/form/formOne'

import styles from './mainPage.module.scss'

const MainPage = () => {
  return (
    <div className={styles.mainBlock}>
      <div className={styles.content}>
        <UserCard />
        <FormOne />
      </div>
    </div>
  )
}

export default MainPage