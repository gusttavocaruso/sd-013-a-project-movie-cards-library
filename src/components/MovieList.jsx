import React from 'react';
import PropType from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      movies.map((movie) => (
        <MovieCard key={ movie.title } movieInfo={ movie } />))
    );
  }
}

MovieList.propTypes = {
  movies: PropType.arrayOf(PropType.object).isRequired,
};

export default MovieList;
