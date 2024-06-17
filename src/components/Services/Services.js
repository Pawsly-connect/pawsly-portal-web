import React, { useState } from "react";
import styles from "./Services.module.css";
import Banner from "../Banner/Banner";
import Switch from "../Switch/Switch";
import CardService from "../CardService/CardService";
import ImagePetServiceLocation from "../statics/service_location.png";
import ImagePetServiceHealth from "../statics/service_health.png";
import ImagePetServiceBusiness from "../statics/service_business.png";

const Services = () => {
  const [toggle, setToggle] = useState(true);
  const handleButtonClick = (e) => {
    setToggle(!toggle);
  };

  return (
    <div className={styles["services"]}>
      <div className={styles["image"]}>
        <div className={styles["banner-container"]}>
          <Banner title="SERVICIOS" titlePosition="center" verticalAlign="center" />
        </div>
      </div>
      <Switch
        option1="Mascotas"
        option2="Negocios"
        handleClick={handleButtonClick}
      />
      {toggle ? (
        <React.Fragment>
          <CardService
            title="Encuentra todo para mascotas a tu alcance"
            description="Encuentra todo para tu mascota en un solo lugar. Desde petshops, spas veterinarios, nuestra plataforma te conecta con los servicios más cercanos y confiables. Simplifica la búsqueda de cuidado para tus mascotas con nosotros."
            urlImage={ImagePetServiceLocation}
            orientation="left"
            altImage="Una tablet en mano mostrando una ruta GPS"
          />
          <CardService
            title="Registro de salud"
            description="Almacena toda la información médica de tu mascota de manera segura y accesible. Mantén al día las vacunas, historial médico y medicación de tu compañero peludo con facilidad."
            urlImage={ImagePetServiceHealth}
            orientation="right"
            altImage="Perro con pañoleta azul"
          />
        </React.Fragment>
      ) : (
        <React.Fragment>
          <CardService
            title="Impulsa tu negocio"
            description="Aumenta la visibilidad de tu negocio. Llega a más clientes y haz crecer tu negocio, ya sea una fundación, spa, guardería, petshop o veterinaria. Únete hoy y lleva tu negocio al siguiente nivel."
            urlImage={ImagePetServiceBusiness}
            orientation="left"
            altImage="Cartel de tienda abierta en ingles"
          />
        </React.Fragment>
      )}
    </div>
  );
};

export default Services;
