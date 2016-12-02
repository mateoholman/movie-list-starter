import React, { Component } from 'react';

class InfoPanel extends Component {

  handleCloseClick(event){
    event.preventDefault();
    this.props.closeInfoPanel();
  }

  render() {
      // return(<h1>Hello World</h1>);
    return (
      <div className="container info-panel">
        <div className='box infoPoster'>
          <img src={this.props.movie.poster} alt='A cool movie poster' />
        </div>
        <div className='box movieInfo'>
          <h1>{this.props.movie.title}</h1>
          <h4>Directed by: {this.props.movie.director}</h4>
          <p>{this.props.movie.plot}</p>
        </div>
        <div className='box movieClose'>
          <button onClick={this.handleCloseClick.bind(this)}>Close</button>
        </div>
      </div>
    );
  }
}//End InfoPanel

export default InfoPanel;
