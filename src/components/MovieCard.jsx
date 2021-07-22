// implement MovieCard component here
import React from 'react';
import PropsTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section className="movie-card movie-card-body">
        <img src={ imagePath } className="movie-card-image" alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating className="movie-card-rating" rating={ rating } />
      </section>
    );
  }
}

MovieCard.PropsTypes = {
  title: PropsTypes.string.isRequired,
  subtitle: PropsTypes.string.isRequired,
  storyline: PropsTypes.string.isRequired,
  rating: PropsTypes.number.isRequired,
  imagePath: PropsTypes.string.isRequired,
};

export default MovieCard;
