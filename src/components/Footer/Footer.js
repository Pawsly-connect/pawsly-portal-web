import styles from "./Footer.module.css";
import React from "react";

const Footer = () => {
    return (
        <footer className={styles["footer"]}>
            <div className={styles["footer__title"]}>
                <div className={styles["footer__line"]}></div>
                <div className={styles["footer__logo-container"]}>
                    <div className={styles["footer__logo-title"]}><strong>Pawsly</strong></div>
                    <img className={styles["footer__logo-img"]} src="./pawsly.png" alt="Pawsly Logo" />
                </div>
                <div className={styles["footer__line"]}></div>
            </div>
            <div className={styles["footer__slogan"]}>
                Encuentra todo para tu mascota, <br /> en un solo lugar.
            </div>
            <div className={styles["footer__phone"]}>TEL: 322 886 1560</div>
            <div className={styles["rounded-social-buttons"]}>
                <a className={`${styles["social-button"]} ${styles["instagram"]}`} href="https://www.instagram.com/pawslyconnect/" target="_blank" rel="noopener noreferrer"><i className={`${styles["icon"]} ${styles["icon-instagram"]}`}></i></a>
                <a className={`${styles["social-button"]} ${styles["facebook"]}`} href="https://www.facebook.com/people/Pawsly/61557116643944/" target="_blank" rel="noopener noreferrer"><i className={`${styles["icon"]} ${styles["icon-facebook"]}`}></i></a>
                <a className={`${styles["social-button"]} ${styles["twitter"]}`} href="https://www.twitter.com/PawslyConnect" target="_blank" rel="noopener noreferrer"><i className={`${styles["icon"]} ${styles["icon-twitter"]}`}></i></a>
                <a className={`${styles["social-button"]} ${styles["tiktok"]}`} href="https://www.tiktok.com/@pawslyconnect?lang=es" target="_blank" rel="noopener noreferrer"><i className={`${styles["icon"]} ${styles["icon-tiktok"]}`}></i></a>
            </div>
        </footer>
    );
};

export default Footer;