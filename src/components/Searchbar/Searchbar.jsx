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
          <button type="submit" class="button">
            <span class="button-label">Search</span>
          </button>

          <input
            class="input"
            type="text"
            autocomplete="off"
            autofocus
            // onChange={}
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}
export default Searchbar;
