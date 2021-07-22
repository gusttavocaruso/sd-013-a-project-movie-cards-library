import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return [
      <img
        key="image"
        className="movie-card-image"
        src={ movie.imagePath }
        alt={ movie.title }
      />,
      <div key="card-body" className="movie-card-body">
        <h4 key="title" className="movie-card-title">{movie.title}</h4>
        <h5 key="subtitle" className="movie-card-subtitle">{movie.subtitle}</h5>
        <p key="synopsis" className="movie-card-storyline">{movie.storyline}</p>
      </div>,
      <div key="rating-container" className="movie-card-rating">
        <Rating key="rating" className="rating" rating={ movie.rating } />
      </div>,
    ];
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    imagePath: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
