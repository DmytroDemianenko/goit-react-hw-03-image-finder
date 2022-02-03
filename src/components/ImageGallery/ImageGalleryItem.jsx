import React from 'react';
import s from './ImageGalleryItem';
const ImageGalleryItem = ({ webformatURL, tags }) => {
  return (
    <>
      <li className={s.ImageGalleryItem}>
        <img
          className={s.ImageGalleryItemPicture}
          src={webformatURL}
          alt={tags}
        />
      </li>
    </>
  );
};
export default ImageGalleryItem;
