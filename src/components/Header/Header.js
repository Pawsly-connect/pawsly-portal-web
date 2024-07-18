import React from "react";
import styles from "./Header.module.css";

const Header = () => {
    return (
        <header className={styles["header"]}>
            <div className={styles["header__logo-container"]}>
                <div className={styles["header__logo-title"]}><strong>Pawsly</strong></div>
                <img className={styles["header__logo-img"]} src="../statics/pawsly_claro.png" alt="Pawsly logo" />
            </div>
            <input type="checkbox" className={styles["header__checkbox"]} id="open-menu" />
            <label htmlFor="open-menu" className={styles["header__open-nav-button"]} role="button">=</label>
            <nav className={styles["header__nav"]}>
                <ul className={styles["header__nav-list"]}>
                    <li className={styles["header__nav-item"]}><a href="#" className={`${styles["header__nav-link"]} ${styles["link--inicio"]}`}>Inicio</a></li>
                    <li className={styles["header__nav-item"]}><a href="#" className={`${styles["header__nav-link"]} ${styles["link--servicios"]}`}>Servicios</a></li>
                    <li className={styles["header__nav-item"]}><a href="#" className={`${styles["header__nav-link"]} ${styles["link--blog"]}`}>Blog</a></li>
                    <li className={styles["header__nav-item"]}><a href="#" className={`${styles["header__nav-link"]} ${styles["link--acerca_de"]}`}>Acerca de</a></li>
                    <li className={styles["header__nav-item"]}><a href="#" className={`${styles["header__nav-link"]} ${styles["link--contacto"]}`}>Contacto</a></li>
                </ul>
                <div className={styles["header__nav-button"]}>
                    <a href="#" className={`${styles["header__button"]} ${styles["link--inicia_sesion"]}`}>Inicia Sesión</a>
                    <a href="#" className={`${styles["header__button"]} ${styles["link--registrate"]}`}>Regístrate</a>
                </div>
                <div className={styles["header__nav-line"]}></div>
            </nav>
        </header>
    );
};

export default Header;