// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movies={ movie } />)}
      </div>);
  }
}

export default MovieList;
