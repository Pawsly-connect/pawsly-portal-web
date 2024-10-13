import React from 'react';
import styles from './AsideMenu.module.css';
import LogoPawsly from '../LogoPawsly/LogoPawsly';

const AsideMenu = () => {
    return (
        <aside className={styles['aside__menu-container']}>
            <nav className={styles['aside__menu-nav']}>
                <LogoPawsly className={styles['aside__logo']} size='medium'/>
                <a className={styles['aside__item-general']} href="#">
                    Inicio
                </a>
                <a className={styles['aside__item-general']} href="#">
                    Blog
                </a>
                <a className={styles['aside__item-general']} href="#">
                    Contactanos
                </a>
                <a className={styles['aside__item-general']} href="#">
                    Acerca de
                </a>
                <hr className={styles['aside__title-special']} customContent="Para Negocios"/>
                <a className={styles['aside__item-special']} href="#">
                    Impulsa tu negocio
                </a>
            </nav>
        </aside>
    );
};

export default AsideMenu;
