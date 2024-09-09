import './card.scss';
import Banner from '../Banner/Banner';
import React, { useState } from 'react';

const ImageCard = ({ data }) => {
  const [current, setCurrent] = useState(0);

  const handlePlayClick = () => {
    console.log('hicieron clic en ver todos');
  };

  const handleNavigationClick = (index) => {
    setCurrent(index);
  };

  return (
    <div className="card-image-wrapper card-image-wrapper--centered">
      <div className="card-image-carousel">
        {data.map((image, index) => (
          <div key={index} className={`card-image ${index === current ? 'card-image--active' : ''}`}>
            <div className="card-image__content">
              <Banner
                title={image.title}
                text={image.text}
                button={image.button}
                buttonPosition={image.buttonPosition}
              />
            </div>
            <img className="card-image__image" src={image.imageUrl} alt={image.title} />
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

export default ImageCard;
