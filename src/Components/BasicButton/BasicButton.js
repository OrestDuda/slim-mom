import React from 'react';

import styles from './BasicButton.module.scss';

const BasicButton = ({ children, ...props }) => {
  return (
    <button className={styles.basic_button} {...props}>
      {children}
    </button>
  );
};

export default BasicButton;
