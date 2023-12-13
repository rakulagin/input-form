import React, { useState } from 'react'

import classNames from 'classnames';
import { useForm, Controller } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

import ProgressBar from '../../components/progressBar/progressBar'
import IconTrash from '../../components/icons/icon-trash';

import styles from '../screens.module.scss'

const StepTwo = () => {
  const navigate = useNavigate()

  const { register,control, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onChange" });

  const [advantages, setAdvantages] = useState(3)

  const addAdvantage = (e: any) => {
    e.preventDefault()
    setAdvantages(prev => prev + 1)
  }

  const removeAdvantage = (e: any) => {
    e.preventDefault()
    setAdvantages(prev => prev - 1)
  }



  const onSubmit = (data: any) => {

    console.log('data', data)
    navigate('/steps/step3')
  }

  return (
    <>
      <ProgressBar />
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className={styles.block}>
          <label className={styles.title}>Преимущества</label>
          {[...Array(advantages)].map((el:any) => (
            <div>
              <input
            className={styles.input}
            type="text"
            placeholder='Пишите...'
          />
          <div onClick={removeAdvantage}>
          <IconTrash/>
          </div>
            </div>
          ))}
        </div>

        <button onClick={addAdvantage}>плюс</button>
        
        <div>{advantages}</div>

        <label>
        <Controller
          name="checkbox1"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input type="checkbox" {...field} /> 
          )}
        />
        Checkbox 1
      </label>

      <label>
        <Controller
          name="checkbox2"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input type="checkbox" {...field} /> 
          )}
        />
        Checkbox 2
      </label>

      <label>
        <Controller
          name="checkbox3"
          control={control}
          defaultValue={false}
          render={({ field }) => (
            <input type="checkbox" {...field} /> 
          )}
        />
        Checkbox 3
      </label>

      <div className="input__block">
                    <h2 className="input__question">Ваш пол</h2>
                    <label className="input__radio">
                        <input
                            className="input__radio"
                            type="radio"
                            value="male"
                            {...register("gender", {required: true})}
                        />
                        <span className="input__answer">Мужчина</span>
                    </label>
                    <label className="input__radio">
                        <input
                            className="input__radio"
                            type="radio"
                            value="female"
                            {...register("gender", {required: true})}
                        />
                        <span className="input__answer">Женщина</span>
                    </label>
                    {errors.gender && <p>Обязательное поле</p>}
                </div>


        <div className={styles.btns}>
          <button onClick={() => { navigate('/steps/step1') }}>назад</button>
          <input
            // className={isValid ? "btn btn-white-blue" : "btn btn-disabled"}
            className={styles.button}
            type="submit"
            value="Далее"
          />
        </div>
      </form>
    </>
  )
}

export default StepTwo