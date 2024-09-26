import React from 'react';
import PropTypes from 'prop-types'; // Importa PropTypes
import styles from './Button.module.css';

const Button = ({ title, disabled = false, type = '', size = 'medium', style = 'normal', handleClick = () => {} }) => {
  return (
    <button className={`${styles['button']} ${styles[size]} ${styles[style]}`} onClick={handleClick} disabled={disabled} type={type}>
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired, // `title` es obligatorio y debe ser una cadena
  disabled: PropTypes.bool, // `disabled` es opcional y debe ser un booleano
  type: PropTypes.string, // `type` es opcional y debe ser una cadena
  size: PropTypes.oneOf(['medium', 'small']), // `size` es opcional y debe ser una cadena con valor 'medium o 'small'
  style: PropTypes.oneOf(['normal', 'light']),
  handleClick: PropTypes.func // `handleClick` es opcional y debe ser una función
};

export default Button;
