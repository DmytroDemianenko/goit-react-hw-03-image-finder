import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery';
import imageAPI from '../../utility/api';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class ImageGallery extends Component {
  state = {
    imageName: '',
    gallery: [],
    error: null,
    status: Status.IDLE,
    page: 1,
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevProps.imageName;
    const nextName = this.props.imageName;
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });

      imageAPI
        .fetchImage(nextName)
        .then(response =>
          this.setState(({ gallery, page }) => ({
            gallery: [...gallery, ...response],
            status: Status.RESOLVED,
            page: page + 1,
          })),
        )
        .catch(error => this.setState({ error, status: Status.REJECTED }));
    }
  }
  render() {
    const { status, error, gallery } = this.state;
    if (status === 'idle') {
      return <h2>Enter some request</h2>;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      <>
        <ul className={s.ImageGallery}>
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
        </ul>
      </>;
    }
  }
}

export default ImageGallery;
// url={this.state.picture.hits[0].previewURL}
