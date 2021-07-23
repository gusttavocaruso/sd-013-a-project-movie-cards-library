import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// import movies from '../data';
class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { rating } = movie;
    return (
      <section>
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <img src={ movie.imagePath } alt="Imagem do movie" />
        <Rating rating={ rating } />
      </section>
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
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;
