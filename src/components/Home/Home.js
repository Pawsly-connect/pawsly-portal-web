import styles from "./Home.module.css";
import React from "react";
import Banner from "../banner/Banner";
import StaticSlider from "../StaticSlider/StaticSlider";
import ImageCard from "../ImageCard/ImageCard";
import imagenCelular from "../statics/imagenCelular.png";
import imagenVeterinaria from "../statics/imagenVeterinaria.png";
import imagenEscriotorio from "../statics/imagenEscriotorio.jpg";
import alimentoMascota from "../statics/StaticSlider/alimentoMascota.png";
import banoMascota from "../statics/StaticSlider/banoMascota.png";
import paseoMascota from "../statics/StaticSlider/paseoMascota.png";
import peinadoMascota from "../statics/StaticSlider/peinadoMascota.png";
const Home = () => {
  const handleButtonClick = (e) => {
    console.log("Botón clickeado:", e.target.innerText);
  };
  const cardData = [
    {
      title: "Impulsa tu Negocio",
      text: "Aumenta la visibilidad de tu negocio. Llega a más clientes y haz crecer tu negocio, ya sea una fundación, spa, guardería, petshop o veterinaria. Únete hoy y lleva tu negocio al siguiente nivel.",
      button: "Muy pronto",
      buttonPosition: "right",
      imageUrl: imagenEscriotorio,
    },
    {
      title: "Registro de Salud",
      text: "Almacena toda la información médica de tu mascota de manera segura y accesible. Mantén al día las vacunas, historial médico y medicación de tu compañero peludo con facilidad.",
      button: "Muy pronto",
      buttonPosition: "right",
      imageUrl: imagenVeterinaria,
    },
    {
      title: "Encuentra Todo para Mascotas a tu Alcance",
      text: "Encuentra todo para tu mascota en un solo lugar. Desde petshops, spas veterinarios, nuestra plataforma te conecta con los servicios más cercanos y confiables. Simplifica la búsqueda de cuidado para tus mascotas con nosotros.",
      button: "Muy pronto",
      buttonPosition: "right",
      imageUrl: imagenCelular,
    },
  ];

  const imagesBanner = [
    {
      imageUrl: peinadoMascota,
      title: "PEINADO PARA MASCOTAS",
      describe:
        "Descubre los mejores consejos y técnicas para mantener el pelaje de tu mascota saludable y brillante.",
    },
    {
      imageUrl: alimentoMascota,
      title: "ALIMENTACIÓN SALUDABLE",
      describe:
        "Explora recetas y consejos para una dieta equilibrada que mantenga a tu mascota feliz y saludable.",
    },
    {
      imageUrl: banoMascota,
      title: "BAÑANDO A TU MASCOTA",
      describe:
        "Aprende cómo darle a tu mascota un baño relajante y efectivo en casa, sin estrés para ninguno de los dos.",
    },
    {
      imageUrl: paseoMascota,
      title: "DIVERSIÓN Y EJERCICIO",
      describe:
        "Descubre los mejores juegos y actividades para mantener a tu mascota activa, feliz y en forma.",
    },
  ];
  function hola() {
    console.log("hola mundo");
  }

  return (
    <div className={styles["container-main"]}>
      <div className={styles["header"]}>
        <button onClick={hola}> holis </button>
      </div>
      <div className={styles["banner"]}>
        <div className={styles["banner__text"]}>
          <Banner
            title={"Descubre un Mundo de Cuidado para tu Mascota"}
            text={
              "Conectando a las mascotas con los mejores servicios. Descubre todo lo que Pawsly tiene para ofrecer"
            }
            button={"VAMOS"}
            buttonPosition={"left"}
            handleClick={handleButtonClick}
          />
        </div>
      </div>
      <div className={styles["imageCard"]}>
        <ImageCard data={cardData} />
      </div>
      <div className={styles["slider"]}>
        <StaticSlider images={imagesBanner} />
      </div>
    </div>
  );
};
export default Home;
