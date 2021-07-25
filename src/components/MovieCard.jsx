import React, { Component } from 'react';
import PropsTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <section className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <div className="movie-card-body">
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
        </div>
        <div>
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    title: PropsTypes.string,
    subtitle: PropsTypes.string,
    storyline: PropsTypes.string,
    rating: PropsTypes.number,
    imagePath: PropsTypes.string,
  }).isRequired,
};

export default MovieCard;
