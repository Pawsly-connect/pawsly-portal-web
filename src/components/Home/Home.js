import styles from "./Home.module.css";
import React from "react";
const Home = () => {
    return (

        <div className={styles["container-main"]}>
            <div className={styles["header"]}>
            </div>

            <ul>
                <il className={styles["slide s1"]}></il>
                <il className={styles["slide s2"]}></il>
                <il className={styles["slide s3"]}></il>
                <il className={styles["slide s4"]}></il>
                <il className={styles["slide s4"]}></il>

            </ul>
        </div>
    );
};
export default Home;