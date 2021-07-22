import PropsTypes from 'prop-types';
import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, imagePath, rating, storyline } } = this.props;
    return (
      <section>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropsTypes.shape({
    title: PropsTypes.string.isRequired,
    subtitle: PropsTypes.string.isRequired,
    imagePath: PropsTypes.string.isRequired,
    rating: PropsTypes.number.isRequired,
    storyline: PropsTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
