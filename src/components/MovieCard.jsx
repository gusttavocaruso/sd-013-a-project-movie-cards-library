// implement MovieCard component here
import React from 'react';
import PropsTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, rating, imagePath } } = this.props;

    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movies: PropsTypes.shape({
    title: PropsTypes.string,
    subtitle: PropsTypes.string,
    storyline: PropsTypes.string,
    rating: PropsTypes.number,
    imagePath: PropsTypes.string,
  }).isRequired,
};

export default MovieCard;
