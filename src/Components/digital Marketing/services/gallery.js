import React from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css'; // Import the default CSS styles

const Gallery = ({ images }) => {
  const galleryImages = images.map(image => ({
    original: image.url,
    thumbnail: image.thumbnailUrl || image.url, // You can provide separate thumbnail URLs if needed
    description: image.alt // You can add descriptions for images
  }));

  return (
    <div className="gallery">
      <ImageGallery items={galleryImages} />
    </div>
  );
};

export default Gallery;
