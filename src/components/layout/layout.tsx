import React from "react";
import { Outlet, useNavigate } from 'react-router-dom'

import styles from './layout.module.scss'

const Layout = () => {

  const navigate = useNavigate()

  const toMain = () => {
    navigate("/")
  }

  return (
    <div className={styles.mainBlock}>
      <div className={styles.content}>
        <Outlet />
      </div>
    </div>
  )
}

export default Layout