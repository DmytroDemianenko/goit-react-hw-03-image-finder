import React from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery';
const ImageGallery = () => {
  return (
    <>
      <ul className={s.ImageGallery}>
        <ImageGalleryItem></ImageGalleryItem>
      </ul>
    </>
  );
};
export default ImageGallery;
