import React from 'react';
import s from './ImageGalleryItem';
const ImageGalleryItem = () => {
  return (
    <li className={s.ImageGalleryItem}>
      <img className={s.ImageGalleryItemPicture} src="" alt="" />
    </li>
  );
};
export default ImageGalleryItem;
