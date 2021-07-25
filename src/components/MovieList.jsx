import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      movies.map((movie, index) => <MovieCard key={ index } movie={ movie } />)
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf.isRequired,
};
export default MovieList;
