import React, { Component } from 'react';
import ImageGalleryItem from './ImageGalleryItem';
import s from './ImageGallery.module.css';
// import imageAPI from '../../utility/api';
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
    console.log(prevProps);
    const nextName = this.props.imageName;
    console.log(this.props);

    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      this.searchImage();
    }
  }
  searchImage = () => {
    const { imageName, page } = this.state;
    fetch(
      `https://pixabay.com/api/?q=${imageName}&page=1&key=24297910-266d35e9d32fe9ab4dcc44a53&image_type=photo&orientation=horizontal&per_page=12`,
    )
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return Promise.reject(
          new Error(`Нет такой картинки ${imageName}`),
        ).then(data => {
          return data.hits;
        });
      })
      .then(data => {
        this.setState(({ gallery, page, status }) => ({
          gallery: [...gallery, ...data.hits],
          status: Status.RESOLVED,
          page: page + 1,
        }));
        console.log(data);
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };
  render() {
    const {
      //  largeImageURL,
      error,
      gallery,
      status,
      //  query,
      //  showModal,
      //  imageAlt,
    } = this.state;

    if (status === 'idle') {
      return <h2>Enter some request</h2>;
    }
    if (status === 'pending') {
      return <p>Loading</p>;
    }
    if (status === 'rejected') {
      return <h2>{error.message}</h2>;
    }
    if (status === 'resolved') {
      return (
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
        </>
      );
    }
  }
}

export default ImageGallery;
// url={this.state.picture.hits[0].previewURL}
