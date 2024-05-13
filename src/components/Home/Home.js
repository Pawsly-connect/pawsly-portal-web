import styles from "./Home.module.css";
import React from "react";
import Banner from "../banner/Banner";
const Home = () => {
    return (

        <div className={styles["container-main"]}>
            <div className={styles["header"]}>
            </div>
            <div className={styles["content"]}>
            <div className={styles["banner"]}>
                <Banner
                    title={"Descubre un Mundo de Cuidado para tu Mascota"}
                    text={"Conectando a las mascotas con los mejores servicios. Descubre todo lo que Pawsly tiene para ofrecer"}
                    button={"VAMOS"}
                    buttonPosition={"left"}
                />
            </div>
            <ul>
                <il className={styles["slide s1"]}></il>
                <il className={styles["slide s2"]}></il>
                <il className={styles["slide s3"]}></il>
                <il className={styles["slide s4"]}></il>
                <il className={styles["slide s4"]}></il>

            </ul>
            </div>
        </div>
    );
};
export default Home;