import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const {movies} = this.props;
    return (<p> {movies.title} </p>);
  }
}

export default MovieCard;
