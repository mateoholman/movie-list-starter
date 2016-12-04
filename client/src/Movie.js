import React, { Component } from 'react';

class Movie extends Component {

  //Pass the id of the movie back to the App
  handleClick(event) {
    event.preventDefault();
    this.props.handleInfoClick(this.props);
  }

  handleCloseClick(event){
    event.preventDefault();
    this.props.handleDelClick(this.props.id);
  }

  render() {
    return(
      <div className='box' id='movie'>
        <div className='moviePoster'>
          <img src={this.props.poster} alt='A cool movie poster' onClick={this.handleClick.bind(this)} />
        </div>
        <div className='movie-title'>
          <h2>{this.props.title}</h2>
        </div>
        <i className="fa fa-times-circle" aria-hidden="true" onClick={this.handleCloseClick.bind(this)}></i>
      </div>
    );
  }
} //End Movie

export default Movie;
