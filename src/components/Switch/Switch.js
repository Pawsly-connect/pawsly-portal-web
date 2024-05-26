import React from "react";
import styles from "./Switch.module.css";

const Switch = ({ option1, option2, handleClick=()=>{}}) => {
    return (
        <label className={styles["switch"]}>
            <input className={styles["switch__input"]} type="checkbox" onClick={handleClick}/>
            <span className={styles["switch__span"]}>
                <div className={styles["switch__text"]}>
                    <p className={styles["switch__text--left"]}>{option1}</p>
                    <p className={styles["switch__text--right"]}>{option2}</p>
                </div>
            </span>
        </label>
    )
}

export default Switch;
