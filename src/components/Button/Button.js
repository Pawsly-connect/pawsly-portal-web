import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './Button.module.css';

const Button = ({ title, disabled = false, type = '', handleClick = () => {} }) => {
  return (
    <button className={styles['button']} onClick={handleClick} disabled={disabled} type={type}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired, // `title` es obligatorio y debe ser una cadena
  disabled: PropTypes.bool, // `disabled` es opcional y debe ser un booleano
  type: PropTypes.string, // `type` es opcional y debe ser una cadena
  handleClick: PropTypes.func, // `handleClick` es opcional y debe ser una función
};

export default Button;
