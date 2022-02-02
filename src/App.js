import './App.css';
import React, { Component } from 'react';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
// import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
// import ImageGalleryItem from './components/ImageGallery/ImageGalleryItem';

class App extends Component {
  state = {
    imageName: '',
    showModal: false,
    picture: null,
  };

  handleFormSubmit = imageName => {
    console.log(imageName);
    this.setState({ imageName });
  };
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery imageName={this.state.imageName}></ImageGallery>
      </>
    );
  }
}

export default App;
