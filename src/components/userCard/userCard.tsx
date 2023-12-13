import React from 'react'

import IconFolder from '../icons/icon-folder'
import Contact from './contact'

import styles from './UserCard.module.scss'

const UserCard = () => {
  return (
    <div className={styles.user}>
      <div className={styles.avatar}></div>
      <div className={styles.info}>
        <h1>Роман Кулагин</h1>
        <div className={styles.contacts}>
          <Contact title={'Telegram'} link={'https://t.me/ramzimamzi'} />
          <Contact title={'Github'} link={'https://github.com/rakulagin'} />
          <Contact title={'Резюме'} link={'https://career.habr.com/rakulagin'} />
        </div>
      </div>
    </div>
  )
}

export default UserCard