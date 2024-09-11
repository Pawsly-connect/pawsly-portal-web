import React from 'react';
import PropTypes from 'prop-types';
import styles from './Loader.module.css';

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

Loader.propTypes = {
  show: PropTypes.bool,
};

export default Loader;
