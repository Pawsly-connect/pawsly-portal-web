import React from 'react';
import Slider from 'react-slick';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import './Carousel.scss';

const Carousel = ({ data }) => {
  const settings = {
    centerMode: true, // Activa el modo centrado
    centerPadding: '15%', // Ajusta el padding alrededor de la imagen central
    slidesToShow: 1, // Muestra un slide a la vez
    speed: 500, // Velocidad de la transición
    infinite: true, // Carrusel infinito
    arrows: true, // Muestra flechas de navegación
    dots: true, // Muestra puntos de navegación
    swipe: true, // Permite deslizar para cambiar de imagen
    touchMove: true, // Permite mover con el dedo en dispositivos táctiles
    adaptiveHeight: true, // Ajusta la altura del carrusel según el contenido
  };

  return (
    <div className="carousel-wrapper">
      <Slider {...settings}>
        {data.map((image, index) => (
          <div key={index} className="carousel-slide">
            <div className="carousel-image-container">
              <img src={image.imageUrl} alt={image.title} />
              <div className="carousel-banner">
                <Banner
                  title={image.title}
                  text={image.text}
                  button={image.button}
                  buttonPosition={image.buttonPosition}
                />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

Carousel.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      text: PropTypes.string,
      button: PropTypes.string,
      buttonPosition: PropTypes.string,
      imageUrl: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Carousel;