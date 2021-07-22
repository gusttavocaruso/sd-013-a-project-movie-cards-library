// implement MovieList component here
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCards from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCards key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
export default MovieList;
