import React from 'react';
import styles from './BgWrapper.module.scss';
import { useLocation } from 'react-router-dom';

export default function BgWrapper({ children }) {
  let location = useLocation();
  console.log(location);
  let classNameSwitch;
  switch (location.pathname) {
    case '/':
      classNameSwitch = [styles.bgWrapper];
      break;
    case '/login':
      classNameSwitch = [styles.bgWrapper];
      break;
    case '/registration':
      classNameSwitch = [styles.bgWrapper];
      break;
    default:
      classNameSwitch = [styles.bgOtherViews];
  }

  return <section className={classNameSwitch}>{children}</section>;
}
