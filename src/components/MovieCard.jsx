// implement MovieCard component here
import React from 'react';

import PropTypes from 'prop-types';

import '../MovieCard.css';

import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card-container">
        <img
          className="movie-image"
          src={ movie.imagePath }
          alt={ movie.title }
        />
        <div className="movie-info">
          <p>
            <strong>Title:</strong>
            {' '}
            {movie.title}
          </p>
          <p>
            <strong>Subtitle:</strong>
            {' '}
            {movie.subtitle}
          </p>
          <p>
            <strong>Storyline:</strong>
            {' '}
            {movie.storyline}
          </p>
          <Rating rating={ movie.rating } />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
