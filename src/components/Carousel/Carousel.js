import './Carousel.scss';
import Banner from '../Banner/Banner';
import React, { useState } from 'react';
import PropTypes from 'prop-types';

const Carousel = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const handlePlayClick = () => {
    console.log('hicieron clic en ver todos');
  };

  const handleNavigationClick = (index) => {
    setCurrent(index);
  };

  const handleImageClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="card-image-wrapper">
      <div 
        className="card-image-carousel" 
        style={{ 
          transform: `translateX(-${(current * 100) / data.length}%)`, 
          width: `${data.length * 100}%`
        }}
      >
        {data.map((image, index) => (
          <div 
            key={index} 
            className={`card-image ${index === current ? 'card-image--active' : ''}`}
            onClick={() => handleImageClick(index)}
            style={{ 
              marginLeft: index === current ? '0' : '10%', // Margen para imágenes laterales
              marginRight: index === current ? '0' : '10%',
            }}
          >
            <img className="card-image__image" src={image.imageUrl} alt={image.title} />
            {index === current && (
              <div className="card-image__content">
                <Banner
                  title={image.title}
                  text={image.text}
                  button={image.button}
                  buttonPosition={image.buttonPosition}
                />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="card-image-navigation">
        <ul className="card-image-navigation__list" data-navigation>
          {data.map((_, index) => (
            <li
              key={index}
              className={index === current ? 'is-active' : ''}
              onClick={() => handleNavigationClick(index)}
            ></li>
          ))}
        </ul>
        <button type="button" data-play onClick={handlePlayClick}></button>
      </div>
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
