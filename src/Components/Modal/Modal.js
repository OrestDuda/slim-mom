import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import styles from './Modal.module.scss';
import { useSelector } from 'react-redux';
import { userSelectors } from '../../redux/user';
import BasicButton from '../BasicButton/BasicButton';
import { Link } from 'react-router-dom';
import CloseButton from 'react-bootstrap/CloseButton';

const modalRoot = document.querySelector('#modal-root');

function Modal({ onClose }) {
  const PublicUserData = useSelector(userSelectors.getPublicUser);
  const { dailyLimit, notRecommendedCategories } = PublicUserData.target;

  useEffect(() => {
    const handleKeyDown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.currentTarget === event.target) {
      onClose();
    }
  };
  return createPortal(
    <div className={styles.backdrop} onClick={handleBackdropClick}>
      <div className={styles.content}>
        <CloseButton className={styles.closeButton} onClick={onClose} />
        <h1 className={styles.title}>
          Ваша рекомендуемая суточная норма калорий составляет
        </h1>
        <p className={styles.dailyLimitContainer}>
          <span className={styles.dailyLimit}>{dailyLimit}</span>{' '}
          <span className={styles.ccal}> ккал</span>
        </p>
        <div className={styles.notRecommended}>
          <p>
            <span>Продукты, которые вам не рекомендуется употреблять</span>
          </p>
          <ol className={styles.list}>
            {notRecommendedCategories.map(item => (
              <li className={styles.listItem} key={item}>
                {item}
              </li>
            ))}
          </ol>
        </div>
        <div className={styles.button}>
          <Link to="/login">
            <BasicButton> Начать худеть</BasicButton>
          </Link>
        </div>
      </div>
    </div>,
    modalRoot,
  );
}

export default Modal;
