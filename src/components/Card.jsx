import React from 'react';
import Btn from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';

const Card = ({ title, price, image }) => {
  const cardStyle = {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '300px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#fff',
    overflow: 'hidden', // Ensures content stays within the card boundaries
  };

  const imageStyle = {
    width: '300px',
    height: '150px',
    borderRadius: '8px 8px 0 0', // Rounded corners at the top only
    objectFit: 'cover',
  };

  const contentStyle = {
    padding: '16px',
  };

  const priceStyle = {
    margin: '0 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const locTime = {
    margin: ' 0 8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: 'rgb(104,131,134)'


  }

  const product = {
    margin: '8px 8px',
  }

  return (
    <div style={cardStyle}>
      <img src={image} alt="Card" style={imageStyle} />
      <div style={contentStyle}>
        <div style={priceStyle}>
          <h3>Price: {price}</h3>
          <FontAwesomeIcon icon={faHeart} style={{ color: 'bisque', fontSize: '24px' }} />
        </div>
        <p style={product}>
          {title.length > 32 ? title.slice(0, 32) + '...' : title}
        </p>
        <div style={locTime}>
          <div>
            <p >Location</p>
            <p >Time</p>
          </div>
          <div>
            <Btn title="Purchase" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Card;
