import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map((movie) => (
          <MovieCard
            key={ movie.title }
            movie={ movie }
          />
        ))}

      </div>
    );
  }
}

// Eduardo me ajudou a concertar meu prop-types
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
