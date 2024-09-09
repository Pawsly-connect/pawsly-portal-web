import styles from './Loader.module.css';
import React from 'react';

const Loader = ({ show = false }) => {
  return (
    <>
      {show && (
        <div className={styles['loader']}>
          <div className={styles['loader__icon']} />
        </div>
      )}
    </>
  );
};
export default Loader;
