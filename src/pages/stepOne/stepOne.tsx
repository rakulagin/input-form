import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';

import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';
import { addClientData } from '../../redux/slices/clientData';

import { changeCurrentPosition } from '../../redux/slices/clientData';

import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom'

import ProgressBar from '../../components/progressBar/progressBar'

import styles from './stepOne.module.scss'

const StepOne = () => {
  const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
    useDispatch();
  const { data } = useSelector(
    (state: any) => state.inputForm
  );
  const navigate = useNavigate()

  const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onSubmit" });

  const [selectedOption, setSelectedOption] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const options = ['Мужской', 'Женский'];

  const handleSelect = (option: any) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  const handleNickName = (e: any) => {
    dispatch(addClientData({ ...data, nickName: e.target.value }))
  }

  const handleFirstName = (e: any) => {
    dispatch(addClientData({ ...data, firstName: e.target.value }))
  }

  const handleSurName = (e: any) => {
    dispatch(addClientData({ ...data, surName: e.target.value }))
  }

  const onSubmit = (data: any) => {

    console.log('data', data)
    // navigate('/steps/step2')
    // dispatch(changeCurrentPosition(2))
  }

  return (
    <>
      <ProgressBar />
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.block}>
          <label className={styles.title}>Никнейм</label>
          <input
            className={styles.input}
            type="text"
            value={data.nickName}
            placeholder="Пишите..."
            {...register("nickName", {
              required: "Обязательное поле",
              maxLength: {
                value: 30,
                message: "Максимальная длина - 30 символов"
              },
              pattern: {
                value: /^[A-Za-z0-9]+$/,
                message: "Некорректное имя пользователя",
              },
              onChange: (e: any) => handleNickName(e),
            })}
          />
          <ErrorMessage errors={errors} name="nickName" render={({ message }) => <p className={styles.errorMessage}>{message}</p>} />
        </div>

        <div className={styles.block}>
          <label className={styles.title}>Имя</label>
          <input
            className={styles.input}
            type="text"
            value={data.firstName}
            placeholder="Пишите..."
            {...register("firstName", {
              required: "Обязательное поле",
              maxLength: {
                value: 50,
                message: "Максимальная длина - 50 символов"
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Некорректное имя пользователя",
              },
              onChange: (e: any) => handleFirstName(e),
            })}
          />
          <ErrorMessage errors={errors} name="firstName" render={({ message }) => <p className={styles.errorMessage}>{message}</p>} />
        </div>

        <div className={styles.block}>
          <label className={styles.title}>Фамилия</label>
          <input
            className={styles.input}
            type="text"
            value={data.surName}
            placeholder="Пишите..."
            {...register("surName", {
              required: "Обязательное поле",
              maxLength: {
                value: 50,
                message: "Максимальная длина - 50 символов"
              },
              pattern: {
                value: /^[A-Za-z]+$/,
                message: "Некорректная фамилия",
              },
              onChange: (e: any) => handleSurName(e),
            })}
          />
          <ErrorMessage errors={errors} name="surName" render={({ message }) => <p className={styles.errorMessage}>{message}</p>} />
        </div>

        <div className={styles.block}>
          <label className={styles.title}>Пол</label>
          <div className={styles.select} onClick={() => setIsOpen(!isOpen)}>
            <span>{selectedOption || 'Не выбрано'}</span>
            <i className={classNames(styles.arrow, isOpen ? styles.arrow__up : styles.arrow__down)}></i>
            {isOpen && (
              <div className={styles.options}>
                {options.map((option, index) => (
                  <div
                    key={index}
                    className={styles.option}
                    onClick={() => handleSelect(option)}
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
          <input
           type="hidden" 
           value={selectedOption} 
           {
            ...register('gender',
            //  { required: 'Обязательное поле' }
              )} />
          <ErrorMessage errors={errors} name="gender" render={({ message }) => <p className={styles.errorMessage}>{message}</p>} />
        </div>


        <div className={styles.btns}>
          <button onClick={() => { navigate('/') }}>назад</button>
          <input
            className={styles.button}
            type="submit"
            value="Далее"
          />
        </div>
      </form>
    </>
  )
}

export default StepOne