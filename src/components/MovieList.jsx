import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))}
      </section>
    );
  }
}

// Refactored based on Project Movie Cards Library Stateful
MovieList.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.object,
  ).isRequired,
};

export default MovieList;
