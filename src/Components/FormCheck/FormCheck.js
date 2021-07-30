import { ErrorMessage } from 'formik';
import React from 'react';
import { useField } from 'formik';

import styles from './FormCheck.module.scss';
import cn from 'classnames';

const FormCheck = ({ label, className, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className={styles.container}>
      <input
        className={cn(
          `${styles.formCheckInput}`,
          {
            isInvalid: meta.error && meta.touched,
          },
          className,
        )}
        {...props}
        {...field}

              required
      />
      <label htmlFor={props.id} className={styles.label}>
        {label}
      </label>

      <ErrorMessage name={props.name} className={styles.error} />
    </div>
  );
};

export default FormCheck;
