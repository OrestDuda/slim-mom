import React, { useCallback } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import userOperations from '../../redux/user/userOperations';

// import isLoading from '../';

import FormCheck from '../FormCheck/FormCheck';
import Button from '../BasicButton/BasicButton';

import styles from './LoginForm.module.scss';

const loginSchema = Yup.object().shape({
  email: Yup.string()
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов')
    .trim()
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
});

const LoginForm = () => {
  const dispatch = useDispatch();
  //   const loading = useSelector(isLoading);
  const email = useCallback(
    (values, { resetForm }) => {
      const { email, password } = values;
      const normalizedLogin = email.toLowerCase();
      dispatch(userOperations.logIn({ email: normalizedLogin, password }));
      resetForm();
    },
    [dispatch],
  );
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Вход</h3>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        validationSchema={loginSchema}
        onSubmit={email}
      >
        <Form>
          <FormCheck
            label="Логин"
            name="email"
            type="text"
            id="email"
            placeholder="Логин *"
          />

          <FormCheck
            label="Пароль"
            name="password"
            type="text"
            id="password"
            placeholder="Пароль *"
          />
          <div className={styles.btnThumb}>
            <Button>Вход</Button>
            <Link to="/registration">
              <Button view="btnReg" className={styles.regBtn}>
                Регистрация
              </Button>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default LoginForm;
