import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, imagePath, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card">
        <h4>{ title }</h4>
        <img src={ imagePath } className="movie-card-image" alt="capa" />
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
