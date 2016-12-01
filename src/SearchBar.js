import React, { Component } from 'react';

class SearchBar extends Component {
  constructor() {
    super();
    this.state={
      searchText: ''
    };
  }

  handleSearchBarChange(event) {
    this.setState({searchText: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
  return (
      <form onSubmit={this.handleSubmit.bind(this)}>
        <input
          className='search-bar'
          type='text'
          placeholder='Search for a movie...'
          value={this.state.searchText}
          onChange={this.handleSearchBarChange.bind(this)}
        />
        <input
          type='submit'
          value='Search'
          className='submit-button'
        />
      </form>
    );
  }
}//End SearchBar

export default SearchBar;
