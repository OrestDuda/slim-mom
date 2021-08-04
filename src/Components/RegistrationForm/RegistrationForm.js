import React, { useCallback } from 'react';
import { Form, Formik } from 'formik';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import * as Yup from 'yup';
import userOperations from '../../redux/user/userOperations';
import FormCheck from '../FormCheck/FormCheck';
import Button from '../BasicButton/BasicButton';
import styles from './RegistrationForm.module.scss';

const registrationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов')
    .trim()
    .required('Обязательное поле'),
  email: Yup.string()
    .email()
    .min(3, 'Минимум 3 символа')
    .max(20, 'Максимум 20 символов')
    .trim()
    .required('Обязательное поле'),
  password: Yup.string()
    .min(6, 'Минимум 6 символов')
    .required('Обязательное поле'),
});

const RegistrationForm = () => {
  const dispatch = useDispatch();
  //   const loading = useSelector(isLoading);
  const register = useCallback(
    values => {
      const { email, password, name } = values;
      const normalizedLogin = email.toLowerCase();
      dispatch(
        userOperations.register({ email: normalizedLogin, password, name }),
      );
    },
    [dispatch],
  );
  return (
    <div className={styles.container}>
      <h3 className={styles.title}>Регистрация</h3>

      <Formik
        initialValues={{
          name: '',
          email: '',
          password: '',
        }}
        validationSchema={registrationSchema}
        onSubmit={register}
      >
        <Form>
          <FormCheck
            label="Имя"
            name="name"
            type="text"
            id="name"
            placeholder="Имя *"
          />

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
            <Link to="/login" className={styles.regBtn} />
            <Button>Регистрация</Button>
          </div>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
