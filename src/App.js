import './App.css';
import React, { Component } from 'react';
import API from './utility/api';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Modal from './components/Modal/Modal';
const Status = {
  IDLE: 'idle',
  PENDING: 'pending',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};
class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    largeImageURL: '',
    imageAlt: '',
    gallery: [],
    status: Status.IDLE,
    error: null,
    page: 1,
  };

  handleFormSubmit = imageName => {
    console.log(imageName);
    this.setState({ imageName: imageName, page: 1, gallery: [] });
  };
  componentDidUpdate(prevProps, prevState) {
    const prevName = prevState.imageName;
    const nextName = this.state.imageName;
    if (prevName !== nextName) {
      this.setState({ status: Status.PENDING });
      this.searchImage();
    }
    if (prevState.page !== this.state.page) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }
  searchImage = () => {
    const { imageName, page } = this.state;

    API.fetchImage(imageName, page)
      .then(data => {
        this.setState(({ gallery, page }) => ({
          gallery: [...gallery, ...data.hits],
          status: Status.RESOLVED,
          page: page + 1,
        }));
      })
      .catch(error => this.setState({ error, status: Status.REJECTED }));
  };
  onLoadMore = () => {
    this.searchImage();
  };
  onOpenModal = (url, alt) => {
    this.setState({ largeImageURL: url, alt: alt });
    this.toggleModal();
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { largeImageURL, error, gallery, status, showModal, imageAlt } =
      this.state;
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery
          status={status}
          error={error}
          gallery={gallery}
          onClick={this.onOpenModal}
          onLoadMore={this.onLoadMore}
        ></ImageGallery>
        {showModal && (
          <Modal closeModal={this.toggleModal}>
            <img src={largeImageURL} alt={imageAlt} />
          </Modal>
        )}
      </>
    );
  }
}

export default App;
