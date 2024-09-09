import React from 'react';
import PropTypes from 'prop-types';
import './ImageCircleGrid.scss';
import Banner from '../Banner/Banner';

const ImageCircleGrid = ({ items }) => {
  const rows = [];
  for (let i = 0; i < items.length; i += 3) {
    rows.push(items.slice(i, i + 3));
  }

  return (
    <div className="image-grid">
      {rows.map((row, rowIndex) => (
        <div key={rowIndex} className="image-grid-row">
          {row.map((item, index) => (
            <div key={index} className="image-grid-item" style={{ backgroundImage: `url(${item.image})` }}>
              <div className="image-grid-banner">
                <Banner title={item.title} text={item.text} backgroundColor={'rgba(0, 0, 0, 0)'} boxShadow={'none'} />
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

ImageCircleGrid.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default ImageCircleGrid;
