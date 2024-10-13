import React, { useState } from 'react';
import styles from './HeaderDashboard.module.css';
import LogoPawsly from '../LogoPawsly/LogoPawsly';
import Button from '../Button/Button';
import AsideMenu from '../AsideMenu/AsideMenu';
import { ReactComponent as WaveTop } from '../statics/wave_top.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

const HeaderDashboard = () => {
    const [userMenu, setUserMenu] = useState(false);
    const [navMenu, setNavMenu] = useState(false);
    const [openOptions, setOpenOptions] = useState(false);
    const openMenuOptions = () => {
      setOpenOptions(true);
    };
    const closeMenuOptions = () => {
      setOpenOptions(false);
    };
    const userMenuHandler = () => {
        setNavMenu(false);
        setUserMenu(!userMenu);
    };
    const navMenuHandler = () => {
        setNavMenu(!navMenu);
        setUserMenu(false);
    };

    return (
        <>
            <div className={styles['dashboard__menu-desktop']}>
                <AsideMenu />
                <div className={styles['corner-menu']}>
                    <WaveTop className={styles['wave-svg']} />
                    <FontAwesomeIcon icon={faCircleUser} onClick={openMenuOptions} className={styles['user-icon']} />
                </div>
                {openOptions &&
                    <>
                        <div className={styles['menu__overlay']} onClick={closeMenuOptions} />
                        <div className={styles['menu__options']}>
                            <div className={styles['menu__header']}>
                                <div className={styles['menu__logo_options-container']}>
                                    <LogoPawsly size='small' />
                                </div>
                                <FontAwesomeIcon icon={faXmark} onClick={closeMenuOptions} className={styles['menu__button-close']} />
                            </div>
                            <div className={styles['menu__list-options']}>
                                <a className={styles['header__link']} href="#">
                                    Mi perfil
                                </a>
                                <a className={styles['header__link']} href="#">
                                    Mis mascotas
                                </a>
                                <a className={styles['header__link']} href="#">
                                    Mis recordatorios
                                </a>
                                <div className={styles['line-separator']} />
                                <Button style='light' title="Cerrar sesion" type="submit" />
                            </div>
                        </div>
                    </>
                }
            </div>
            <div className={styles['dashboard__menu-mobile']}>
                <header className={styles['header']}>
                    <FontAwesomeIcon icon={faBars} className={styles['header__open-nav-button']} onClick={navMenuHandler} />
                    <LogoPawsly size='small' />
                    <FontAwesomeIcon icon={faCircleUser} className={styles['header__open-user-button']} onClick={userMenuHandler} />
                    {userMenu &&
                        <nav className={styles['header__user']}>
                            <a className={styles['header__link']} href="#">
                                Mi Perfil
                            </a>
                            <a className={styles['header__link']} href="#">
                                Mis Mascotas
                            </a>
                            <a className={styles['header__link']} href="#">
                                Mis recordatorios
                            </a>
                            <div className={styles['header__line']} />
                            <Button title='Cerrar sesion' style='light' />
                        </nav>
                    }
                    {navMenu &&
                        <nav className={styles['header__nav']}>
                            <a className={styles['header__link']} href="#">
                                Inicio
                            </a>
                            <a className={styles['header__link']} href="#">
                                Blog
                            </a>
                            <a className={styles['header__link']} href="#">
                                Contactanos
                            </a>
                            <a className={styles['header__link']} href="#">
                                Acerca de
                            </a>
                            <hr className={styles['header__title-special']} customContent="Para Negocios" />
                            <a className={styles['header__link-special']} href="#">
                                Impulsa tu negocio
                            </a>
                        </nav>
                    }
                </header>
            </div>
        </>
    );
};

export default HeaderDashboard;
