import React, { FC } from 'react'

import IconFolder from '../icons/icon-folder'

import styles from './UserCard.module.scss'

interface I_Contact {
  title?: string;
  link?: string;
}

const Contact: FC<I_Contact> = ({ title, link }) => {
  return (
    <div className={styles.contact}>
      <IconFolder />
      <a href={link} target='blank'>{title}</a>
    </div>
  )
}

export default Contact