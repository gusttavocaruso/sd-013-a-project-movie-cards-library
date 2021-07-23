import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((film) => <MovieCard key={ film.title } movie={ film } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired, // https://stackoverflow.com/questions/41771217/react-linter-airbnb-proptypes-array
};

export default MovieList;
