import React from 'react';
import './StaticSlider.scss';
import Banner from '../banner/Banner';

const StaticSlider = ({ images }) => {
  return (
    <div className="slider-container">
      <header className="sliderMain">
        <ul className="slider">
          {images.map((image, index) => (
            <li
              key={index}
              className={`slide s${index + 1}`}
              style={{ backgroundImage: `url(${image.imageUrl})` }}
            >
                <div className='banner'>
                    <Banner
                        title={image.title}
                        text={image.describe}       
                        verticalAlign="center"     
                    />
              
                </div>
            </li>
          ))}
        </ul>
      </header>
    </div>
  );
};

export default StaticSlider;
