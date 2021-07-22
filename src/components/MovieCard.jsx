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
        <hr className="h-rule" />
        <div className="movie-info">
          <span>
            <h4>{movie.title}</h4>
          </span>
          <span className="subtitle">
            <h5>
              {movie.subtitle}
            </h5>
          </span>
          <span>
            <p>
              {movie.storyline}
            </p>
          </span>
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
