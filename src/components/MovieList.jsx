import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import movieType from './movieType';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <ul>
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </ul>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(movieType).isRequired,
};

export default MovieList;
