import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import { Gallery } from './ImageGallery.styled';
import { Button } from '../ButtonLoadMore/Button.styled';
import Spinner from '../Loader';
class ImageGallery extends Component {
  onPictureClick = (imageURL, alt) => {
    this.props.onClick(imageURL, alt);
  };

  render() {
    const { error, gallery, status, onLoadMore } = this.props;

    if (status === 'idle') {
      return <h2>Enter some request</h2>;
    }
    if (status === 'pending') {
      return <Spinner />;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
        <>
          <Gallery>
            {gallery.map(({ id, tags, webformatURL, largeImageURL }) => (
              <ImageGalleryItem
                id={id}
                key={id}
                tags={tags}
                webformatURL={webformatURL}
                largeImageURL={largeImageURL}
                onClick={this.onPictureClick}
              />
            ))}
          </Gallery>
          <Button onClick={onLoadMore}>Load more</Button>
        </>
      );
    }
  }
}

export default ImageGallery;
// url={this.state.picture.hits[0].previewURL}
