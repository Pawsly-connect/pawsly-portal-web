import React from 'react';
import styles from './LogoPawsly.module.css';
import PropTypes from 'prop-types';
import pawslyClaro from '../statics/pawsly_claro.png';

const LogoPawsly = ({ size, className, handleClick = () => {} }) => {
    return (
        <div className={`${className} ${styles['logo__container']}`} onClick={handleClick}>
            <strong className={`${styles['logo__title']} ${styles[size]}`}>
                Pawsly
            </strong>
            <img className={`${styles['logo__img']} ${styles[size]}`} src={pawslyClaro} alt="Pawsly logo" />
        </div>
    );
};

LogoPawsly.propTypes = {
    size: PropTypes.oneOf(['medium', 'small']).isRequired, // `size` es opcional y debe ser una cadena con valor 'medium o 'small'
    handleClick: PropTypes.func // `handleClick` es opcional y debe ser una función
};

export default LogoPawsly;
