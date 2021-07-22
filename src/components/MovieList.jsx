import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return movies.map((movie) => (
      <div key="movie-card" className="movie-card">
        <MovieCard key={ movie.title } movie={ movie } />
      </div>
    ));
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
};

MovieList.defaultProps = {
  movies: [{}],
};

export default MovieList;
