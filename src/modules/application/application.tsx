import React from 'react'
import { Routes, Route } from 'react-router-dom'

import Layout from '../../components/layout/layout'
import MainPage from '../../pages/mainPage/mainPage'
import StepOne from '../../pages/stepOne/stepOne'
import StepTwo from '../../pages/stepTwo/stepTwo'
import StepThree from '../../pages/stepThree/stepThree'

import styles from './application.module.scss'

const Application = () => {
  return (
    <div className={styles.module}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path='/steps' element={<Layout />}>
          <Route path="step1" element={<StepOne />} />
          <Route path="step2" element={<StepTwo />} />
          <Route path="step3" element={<StepThree />} />
        </Route>
      </Routes>
    </div>
  )
}

export default Application