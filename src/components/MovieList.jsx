import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { catalogMovies } = this.props;

    return (
      catalogMovies
        .map((movieOb) => <MovieCard key={ catalogMovies.title } movie={ movieOb } />)
    );
  }
}

MovieList.propTypes = {
  catalogMovies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  catalogMovies: [],
};

export default MovieList;
