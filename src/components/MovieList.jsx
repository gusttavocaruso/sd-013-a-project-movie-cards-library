// implement MovieList component here
import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <div>
        {movies.map((elemnt, index) => <MovieCard key={ index } filme={ elemnt } />)}
      </div>
    );
  }
}

export default MovieList;
