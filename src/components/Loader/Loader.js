import styles from "./Loader.module.css";
import React from "react";
const Loader = () => {
    return(
        <div className={styles["container-main"]}>
            <div className={styles["loader-bone"]}>
            </div>
        </div>
    );
};
export default Loader;
