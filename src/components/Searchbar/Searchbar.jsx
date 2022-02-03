import React, { Component } from 'react';
import s from './searchbar.module.css';
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
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit}>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            value={this.setState.imageName}
            onChange={this.handleNameChange}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
