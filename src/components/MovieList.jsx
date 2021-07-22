// implement MovieList component here
import React from 'react';

import MovieCard from './MovieCard';

import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        { movies.map((movie, index) => <MovieCard key={ index } movieProps={ movie } />)}
      </div>
    );
  }
}

export default MovieList;
