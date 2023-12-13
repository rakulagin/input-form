import React, { useState } from 'react'

import classNames from 'classnames';
import { useForm } from "react-hook-form";
import { useNavigate } from 'react-router-dom'

import ProgressBar from '../../components/progressBar/progressBar'

import styles from '../screens.module.scss'

const StepOne = () => {
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
    navigate('/steps/step2')
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
            placeholder='+7 999 999-99-99'
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

        <div className={styles.block}>
          <label className={styles.title}>Имя</label>
          <input
            className={styles.input}
            type="text"
            placeholder='+7 999 999-99-99'
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

        <div className={styles.block}>
          <label className={styles.title}>Фамилия</label>
          <input
            className={styles.input}
            type="text"
            placeholder='+7 999 999-99-99'
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

        </div>


        <div className={styles.btns}>
          <button onClick={()=>{navigate('/')} }>назад</button>
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

export default StepOne