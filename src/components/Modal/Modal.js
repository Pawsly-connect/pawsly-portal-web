import Button from '../Button/Button';
import React from 'react';
import styles from './Modal.module.css';  // Importa los estilos del modal

const Modal = ({ isOpen, closeModal, children }) => {
if (!isOpen) return null;

return (
    <div className={styles.modal}>
        <div className={styles.modalContent}>
        <div className={styles.modalBody}>
            {children}
        </div>
        <Button title="Cerrar" handleClick={closeModal} />
        </div>
    </div>
    );
};

export default Modal;
