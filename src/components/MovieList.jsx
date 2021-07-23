import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        <div>
          {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
        </div>
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

export default MovieList;
