import React, { useState, useEffect } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ data, delayTranslate = 5000 }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const translatePerImage = 100 / data.length;

  const handleClick = (e) => {
    let idElement = e.target.getAttribute('id');
    setTranslate(translatePerImage * -idElement);
    setImgIndex(idElement);
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  useEffect(() => {
    const fetchData = async () => {
      await delay(delayTranslate);
      if (imgIndex >= data.length - 1) {
        setTranslate(0);
        setImgIndex(0);
      } else {
        setTranslate(translate - translatePerImage);
        setImgIndex(imgIndex + 1);
      }
    };
    fetchData();
  }, [imgIndex]);

  return (
    <div className={styles['carrousel']}>
      <div
        className={styles['slides']}
        style={{ transform: `translateX(${translate}%)`, width: `${100 * data.length}%` }}
      >
        {data.map((image, index) => (
          <img
            key={index}
            id={index}
            src={image.src}
            alt={image.name}
            className={styles['image']}
            style={{ width: `${100 / data.length}%` }}
          />
        ))}
      </div>
      <div className={styles['bullets']}>
        {data.map((_, index) => (
          <i
            key={index}
            id={index}
            className={styles[index === imgIndex ? 'active' : 'inactive']}
            onClick={handleClick}
          ></i>
        ))}
      </div>
    </div>
  );
};

export default Carrousel;
