import React, { Component } from 'react';
import MovieList from './MovieList';
import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      movies: [
        {
          _id: '1',
          title: 'Princess Mononoke',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTU2YjNmN2UtMTkyYS00YTFhLWJkM2QtODNhODE0OGQzMDQ3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg'
        },
        {
          _id: '2',
          title: 'Total Recall',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SY1000_CR0,0,673,1000_AL_.jpg'
        }
      ]
    };
  }

  render() {
    return (
      <div className="App">
        <MovieList movies={this.state.movies} />
      </div>
    );
  }
}

export default App;
