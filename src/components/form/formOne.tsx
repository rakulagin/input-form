import { FC } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { ThunkDispatch } from '@reduxjs/toolkit';
import { AnyAction } from 'redux';
import { RootState } from '../../redux/rootReducer';
import { addClientData } from '../../redux/slices/clientData';

import InputMask from 'react-input-mask';

import { useForm } from 'react-hook-form';
import { ErrorMessage } from '@hookform/error-message';
import { useNavigate } from 'react-router-dom'

import Button from '../button/button';

import styles from './form.module.scss'


const FormOne: FC = () => {
    const dispatch: ThunkDispatch<RootState, undefined, AnyAction> =
        useDispatch();
    const navigate = useNavigate()
    const { data } = useSelector(
        (state: any) => state.inputForm
    );

    const { register, handleSubmit, formState: { errors, isValid } } = useForm({ mode: "onSubmit" });

    const handlePhone = (e: any) => {
        dispatch(addClientData({ ...data, phone: e.target.value }))
    }

    const handleEmail = (e: any) => {
        dispatch(addClientData({ ...data, email: e.target.value }))
    }

    const onSubmit = (values: any) => {
        navigate('/steps/step1')
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className={styles.block}>
                <label className={styles.title}>Номер телефона</label>
                <InputMask
                    value={data.phone}
                    className={styles.input}
                    mask="+7(999)999-99-99"
                    placeholder="+7 (999) 999-99-99"
                    {...register("phone", {
                        required: "Обязательное поле",
                        pattern: {
                            value: /^[0-9+() -]*$/,
                            message: "Некорректный номер телефона",
                        },
                        onChange: (e: any) => handlePhone(e)
                    })}
                />
                <ErrorMessage errors={errors} name="phone" render={({ message }) => <p className={styles.errorMessage}>{message}</p>} />
            </div>

            <div className={styles.block}>
                <label className={styles.title}>Email</label>
                <input
                    className={styles.input}
                    type="text"
                    value={data.email}
                    placeholder='webstudio.fractal@example.com'
                    {...register("email", {
                        required: "Обязательное поле",
                        pattern: {
                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                            message: "Некорректный email адрес",
                        },
                        onChange: (e: any) => handleEmail(e)
                    })}
                />
                <ErrorMessage errors={errors} name="email" render={({ message }) => <p className={styles.errorMessage}>{message}</p>} />
            </div>
            <input
                className={styles.button}
                type="submit"
                value="Начать"
            />
        </form>
    )
}

export default FormOne