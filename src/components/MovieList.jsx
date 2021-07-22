import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    return (
      <main>
        <h2>Best Movie of the Week</h2>
        <div>
          {movies.map((movie, i) => <MovieCard key={ i } movie={ movie } />) }
        </div>
      </main>
    );
  }
}

export default MovieList;
