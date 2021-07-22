import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    return (
      <div>
        { movies.map((menu) => <MovieCard key={ menu.rating } showInfo={ menu } />) }
      </div>
    );
  }
}

export default MovieList;
