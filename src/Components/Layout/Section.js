import React from 'react';
import styles from './Container.module.scss';

const Section = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export default Section;
