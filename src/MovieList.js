import React, { Component } from 'react';
import Movie from './Movie';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return(
      <ul className='movie-list'>
        {movies.map(movie => {
          return(
            <Movie
              key={movie._id}
              id={movie._id}
              title={movie.title}
              poster={movie.poster}
            />
          )
        }
      )}
      </ul>
    );
  }
}//End MovieList

export default MovieList;
