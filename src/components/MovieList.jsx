import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.defaultProps = {
  movies: [],
};

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    rating: PropTypes.number,
  })),
};

export default MovieList;
