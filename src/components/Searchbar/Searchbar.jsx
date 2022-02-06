import React, { Component } from 'react';
import {
  SearchBar,
  SearchForm,
  SearchFormButton,
  Input,
  SearchFormLabel,
} from './searchbar.styled';
// import { BsSearch } from 'react-icons/bs';
class Searchbar extends Component {
  state = {
    imageName: '',
    searchInput: '',
  };
  handleNameChange = event => {
    this.setState({ imageName: event.currentTarget.value.toLowerCase() });
  };
  handleSubmit = event => {
    event.preventDefault();
    if (this.state.imageName.trim() === '') {
      alert('Enter data search');
      return;
    }
    this.props.onSubmit(this.state.imageName);
    this.setState({ imageName: '' });
    console.log(this.state.imageName);
  };
  render() {
    return (
      <SearchBar>
        <SearchForm onSubmit={this.handleSubmit}>
          <SearchFormButton type="submit">
            <SearchFormLabel>
              {/* <BsSearch.Provider
                value={{ color: 'blue', className: 'global-class-name' }}
              /> */}
              Search
            </SearchFormLabel>
          </SearchFormButton>

          <Input
            type="text"
            autoComplete="off"
            autoFocus
            value={this.setState.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </SearchForm>
      </SearchBar>
    );
  }
}
export default Searchbar;
