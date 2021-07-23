import React from 'react';
import PropTypes from 'prop-types';
import MovieList from './MovieList';

class MovieCard extends React.Component {
  render() {
    const { moviesData } = this.props;

    return (
      moviesData.map((movie) => <MovieList key={ movie.title } movieInfo={ movie } />)
    );
  }
}

MovieCard.propTypes = {
  moviesData: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieCard.defaultProps = {
  moviesData: [],
};

export default MovieCard;
