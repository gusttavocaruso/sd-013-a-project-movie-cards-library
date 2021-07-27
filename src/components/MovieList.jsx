import React from 'react';
 Fernando-Lima-movie-cards-library
import PropTypes from 'prop-types';

import PropTypes from 'prop-types'; // biblioteca

import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
 Fernando-Lima-movie-cards-library
      <div>
        { movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}

      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}

      </div>
    );
  }
}

MovieList.propTypes = {
 Fernando-Lima-movie-cards-library
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    imagePath: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })),
};

MovieList.defaultProps = {
  movies: [],

  movies: PropTypes.arrayOf(PropTypes.object).isRequired,

};

export default MovieList;
