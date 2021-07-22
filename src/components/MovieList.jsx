import React from 'react';
import MovieCard from './MovieCard';
import movies from '../data';

export default class MovieList extends React.Component {
  render() {
    const moviesMap = movies
      .map((obj) => (<MovieCard
        movie={ obj }
        key={ obj.title }
      />));

    return (
      <main className="movie-list">
        { moviesMap }
      </main>);
  }
}
