import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Banner from '../Banner/Banner';
import styles from './card.module.scss'; // Importamos los módulos CSS

const ImageCard = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const handlePlayClick = () => {
    console.log('hicieron clic en ver todos');
  };

  const handleNavigationClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className={`${styles.cardImageWrapper} ${styles.cardImageWrapperCentered}`}>
      <div className={styles.cardImageCarousel}>
        {data.map((image, index) => (
          <div
            key={index}
            className={`${styles.cardImage} ${index === current ? styles['cardImage--active'] : ''}`}
          >
            <div className={styles.cardImage__content}>
              <Banner
                title={image.title}
                text={image.text}
                button={image.button}
                buttonPosition={image.buttonPosition}
              />
            </div>
            <img className={styles.cardImage__image} src={image.imageUrl} alt={image.title} />
          </div>
        ))}
      </div>

      <div className={styles.cardImageNavigation}>
        <ul className={styles.cardImageNavigation__list} data-navigation>
          {data.map((_, index) => (
            <li
              key={index}
              className={index === current ? styles.isActive : ''}
              onClick={() => handleNavigationClick(index)}
            ></li>
          ))}
        </ul>
        <button type="button" className={styles.isPlaying} data-play onClick={handlePlayClick}></button>
      </div>
    </div>
  );
};

ImageCard.propTypes = {
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

export default ImageCard;
