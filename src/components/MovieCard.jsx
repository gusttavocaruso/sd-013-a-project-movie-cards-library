import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return [
      <img key="image" src={ movie.imagePath } alt={ movie.title } />,
      <h4 key="title">{movie.title}</h4>,
      <h5 key="subtitle">{movie.subtitle}</h5>,
      <p key="synopsis">{movie.storyline}</p>,
      <Rating key="rating" rating={ movie.rating } />,
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
