import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)
    );
  }
}

// Feito com a ajuda do Ygor Maia
MovieList.propTypes = {
  movies: PropTypes.shape([]).isRequired,
};

export default MovieList;
