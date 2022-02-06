import React, { Component } from 'react';
import { GalleryItem, GalleryPicture } from './ImageGalleryItem.styled';

class ImageGalleryItem extends Component {
  onPictureClick = () => {
    this.props.onClick(this.props.largeImageURL, this.props.tags);
  };
  render() {
    const { id, webformatURL, tags } = this.props;
    return (
      <>
        <GalleryItem>
          <GalleryPicture
            id={id}
            src={webformatURL}
            alt={tags}
            onClick={this.onPictureClick}
          />
        </GalleryItem>
      </>
    );
  }
}
export default ImageGalleryItem;
