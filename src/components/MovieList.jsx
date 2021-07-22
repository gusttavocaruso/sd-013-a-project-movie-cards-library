import React from 'react';
import MovieCard from './MovieCard';
import data from '../data';

class MovieList extends React.Component {
  render() {
    return (
      data.map((movies) => <MovieCard key={ movies.title } movie={ movies } />)
    );
  }
}

export default MovieList;
