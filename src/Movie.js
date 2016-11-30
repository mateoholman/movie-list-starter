import React, { Component } from 'react';

class Movie extends Component {
  render() {
    return(
      <div className='box'>
        <div className='moviePoster'>
          <img src={this.props.poster} alt='A cool movie poster' />
        </div>
        <div className='movieTitle'>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
} //End Movie

export default Movie;
