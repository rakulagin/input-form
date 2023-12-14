import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';

import { changeCurrentPosition } from '../../redux/slices/clientData';

import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

import ProgressBar from '../../components/progressBar/progressBar'

import BtnGroup from '../../components/btnGroup/btnGroup';

import styles from './stepThree.module.scss'

const StepThree = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
  useDispatch();
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

  const [selectedOption, setSelectedOption] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Мужской', 'Женский'];

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const onSubmit = (data: any) => {

    console.log('data', data)
    // navigate('/steps/step2')
  }

  const handleBackClick = () => {
    navigate('/steps/step2')
    dispatch(changeCurrentPosition(2))
  }

  return (
    <>
      <ProgressBar />
      <form onSubmit={handleSubmit(onSubmit)}>

      <div className={styles.block}>
          <label className={styles.title}>О себе</label>
          <textarea
            className={styles.input}
            rows={10}
            placeholder='Пишите...'
          // {...register("name", {
          //     required: "Обязательное поле",
          //     minLength: {
          //         value: 2,
          //         message: "Минимальная длина символов - 2"
          //     },
          //     pattern: {
          //         value: /^([А-Я]?)?([а-я]{0,14})?$/ig,
          //         message: "Допускаются только русские буквы"
          //     }
          // })}
          />
          {/* {errors.name && <p>123</p>} */}
        </div>


        <div className={styles.btns}>
          <button onClick={handleBackClick}>назад</button>
          <input
            // className={isValid ? "btn btn-white-blue" : "btn btn-disabled"}
            className={styles.button}
            type="submit"
            value="Далее"
          />
        </div>

        <BtnGroup next prev={'/steps/step2'} />
      </form>
    </>
  )
}

export default StepThree