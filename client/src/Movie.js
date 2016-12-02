import React, { Component } from 'react';

class Movie extends Component {

  //Pass the id of the movie back to the App
  handleClick(event) {
    event.preventDefault();
    this.props.handleInfoClick(this.props);
  }

  render() {
    return(
      <div className='box' id='movie'>
        <div className='moviePoster'>
          <img src={this.props.poster} alt='A cool movie poster' onClick={this.handleClick.bind(this)} />
        </div>
        <div className='movieTitle'>
          <h2>{this.props.title}</h2>
        </div>
      </div>
    );
  }
} //End Movie

export default Movie;
