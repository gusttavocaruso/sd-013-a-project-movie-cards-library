import React from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)
    );
  }
}

export default MovieList;
