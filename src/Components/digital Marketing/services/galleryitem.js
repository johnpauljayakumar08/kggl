import React from 'react';
import './services.css'; // Import your CSS file for styling

const GalleryItem = ({ imageUrl, hoverText }) => {
  return (
    <div className="gallery-item">
      <img src={imageUrl} alt="Gallery" className="gallery-image" />
      <div className="hover-text">{hoverText}</div>
    </div>
  );
};

export default GalleryItem;