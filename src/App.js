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
  // const query = this.state.imageName;
  componentDidMount(query) {
    ;
    fetch(
      'https://pixabay.com/api/?q=${imageName}&page=1&key=24297910-266d35e9d32fe9ab4dcc44a53&image_type=photo&orientation=horizontal&per_page=12')
      .then(res => res.json())
      .then(picture => this.setState({ picture }));
  }
  handleFormSubmit = imageName => {
    console.log(imageName);
    this.setState({ imageName });
  }
  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        <ImageGallery></ImageGallery>
      </>
    );
  }
}

export default App;
