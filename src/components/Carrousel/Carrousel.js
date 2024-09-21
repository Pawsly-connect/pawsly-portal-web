import React, { useState, useEffect } from 'react';
import styles from './Carrousel.module.css';

const Carrousel = ({ data, delayTranslate = 5000 }) => {
  const [imgIndex, setImgIndex] = useState(0);
  const [translate, setTranslate] = useState(0);
  const [counter, setCounter] = useState(0);
  const translatePerImage = 100 / data.length;
  let isClick = false;

  const handleClick = (el) => {
    let idElement = Number(el.target.getAttribute('id'));
    translateToImage(idElement, translatePerImage * -idElement);
    isClick = true;
  };
  const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
  const translateToImage = (indexImage, TranslatePercentage) => {
    setTranslate(TranslatePercentage);
    setImgIndex(indexImage);
  };

  useEffect(() => {
    const counterTime = async () => {
      await delay(1);
      setCounter(counter + 1);
      if (counter === delayTranslate || isClick) {
        if (!isClick) {
          if (imgIndex >= data.length - 1) {
            translateToImage(0, 0);
          } else {
            translateToImage(imgIndex + 1, translate - translatePerImage);
          }
        }
        setCounter(0);
      }
    };
    counterTime();
    return () => {
      isClick = false;
    };
  }, [counter]);

  return (
    <div className={styles['carrousel']}>
      <div
        className={styles['slides']}
        style={{ transform: `translateX(${translate}%)`, width: `${100 * data.length}%` }}
      >
        {data.map((image, index) => (
          <>
            <img
              key={index}
              id={index}
              src={image.src}
              alt={image.name}
              className={styles['image']}
              style={{ width: `${100 / data.length}%` }}
            />
            <div
              className={styles['overlay']}
              id={index}
              style={{ width: `${100 / data.length}%`, left: `${(100 / data.length) * index}%` }}
            >
              <p className={styles['overlay__text-name']}>{image.name}</p>
              <p className={styles['overlay__text-description']}>{image.description}</p>
              <p className={styles['overlay__text-details']}>{image.address}</p>
              <p className={styles['overlay__text-details']}>{image.cellphone}</p>
            </div>
          </>
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
