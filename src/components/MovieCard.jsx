import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: {
      imagePath,
      title,
      subtitle,
      storyline,
      rating } } = this.props;

    return (
      <div className="movie-card">
        <section className="movie-card-body">
          <img className="movie-card-image" src={ imagePath } alt={ title } />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          {/* <h2>{this.props.rating}</h2> */}
          <Rating rating={ rating } />
        </section>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
