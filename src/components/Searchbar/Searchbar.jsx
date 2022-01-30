import React, { Component } from 'react';
import s from './searchbar.module.css';
class Searchbar extends Component {
  state = {
    searchInput: '',
  };
  render() {
    return (
      <header className={s.Searchbar}>
        <form>
          <button type="submit">
            <span>Search</span>
          </button>

          <input
            type="text"
            autoComplete="off"
            autoFocus
            // onChange={}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
