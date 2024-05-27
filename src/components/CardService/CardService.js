import React from 'react'
import styles from "./CardService.module.css";

const CardService = ({title, description, urlImage, orientation="left", altImage=""}) => {
  return (
    <div className={styles["cardService"]}>
      {orientation === 'left' ? (
        <>
          <img
            src={urlImage}
            className={`${styles["cardService__image"]} ${styles["cardService__image--left"]}`}
            alt={altImage}
          />
          <div className={`${styles["cardService__cardText"]} ${styles["cardService__cardText--right"]}`}>
            <h1 className={styles["cardService__title"]}>{title}</h1>
            <p className={styles["cardService__description"]}>{description}</p>
          </div>
        </>
      ) : (
        <>
          <img
            src={urlImage}
            className={`${styles["cardService__image"]} ${styles["cardService__image--right"]}`}
            alt={altImage}
          />
          <div className={`${styles["cardService__cardText"]} ${styles["cardService__cardText--left"]}`}>
            <h1 className={styles["cardService__title"]}>{title}</h1>
            <p className={styles["cardService__description"]}>{description}</p>
          </div>
        </>
      )}
    </div>
  )
}

export default CardService
