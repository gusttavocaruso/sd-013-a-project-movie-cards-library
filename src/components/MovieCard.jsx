import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { showInfo } = this.props;
    return (
      <div className="movie-card">
        <h4 className="movie-card-title">{ showInfo.title }</h4>
        <img src={ showInfo.imagePath } className="movie-card-image" alt="capa" />
        <h5>{ showInfo.subtitle }</h5>
        <p>{ showInfo.storyline }</p>
        <Rating rating={ showInfo.rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  showInfo: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard;
