import React, { Component } from 'react';
import MovieList from './MovieList';
import SearchBar from './SearchBar';
import InfoPanel from './InfoPanel';
// import axios from 'axios';

class App extends Component {

  constructor() {
    super();
    this.state = {
      showInfoPanel: false,
      movie: {
        _id: '',
        title: '',
        director: '',
        poster: '',
        plot: ''
      },
      movies: [
        {
          _id: '1',
          title: 'Princess Mononoke',
          director: 'Hayao Miyazaki',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYTU2YjNmN2UtMTkyYS00YTFhLWJkM2QtODNhODE0OGQzMDQ3XkEyXkFqcGdeQXVyNTA4NzY1MzY@._V1_.jpg',
          plot: "On a journey to find the cure for a Tatarigami's curse, Ashitaka finds himself in the middle of a war between the forest gods and Tatara, a mining colony. In this quest he also meets San, the Mononoke Hime."
        },
        {
          _id: '2',
          title: 'Total Recall',
          director: 'Paul Verhoeven',
          poster: 'https://images-na.ssl-images-amazon.com/images/M/MV5BYzU1YmJjMGEtMjY4Yy00MTFlLWE3NTUtNzI3YjkwZTMxZjZmXkEyXkFqcGdeQXVyNDc2NjEyMw@@._V1_SY1000_CR0,0,673,1000_AL_.jpg',
          plot: 'When a man goes for virtual vacation memories of the planet Mars, an unexpected and harrowing series of events forces him to go to the planet for real - or does he?'
        }
      ]
    };
  }

  handleInfoClick(movieInfo) {
    //Set the state, then show the component
    this.setState({
      movie: movieInfo,
      showInfoPanel: true
    })
  }//End handleInfoClick

  closeInfoPanel() {
    this.setState({showInfoPanel: false})
  }

  handleSearchBarClick(event) {

  }

  render() {
    return (
      <div className="App">
        <h1>Awesome Movies</h1>
        <SearchBar />
        {this.state.showInfoPanel ? <InfoPanel movie={this.state.movie} closeInfoPanel={this.closeInfoPanel.bind(this)}/> : null}
        <MovieList movies={this.state.movies} handleInfoClick={this.handleInfoClick.bind(this)} />
      </div>
    );
  }
}

export default App;
