import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie) => movie)
    );
  }
}

export default MovieList;
