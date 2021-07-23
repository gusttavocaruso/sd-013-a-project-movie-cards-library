import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      movies.map((mov, index) => <MovieCard objct={ mov } key={ index } />)
    );
  }
}

export default MovieList;
