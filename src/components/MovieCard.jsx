import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // Aqui o destructuring tambem é obrigatorio para fazer com que a linha abaixo puxe o prop movie, não o prop key.
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div className="movieContainer">
        <h4>{ title }</h4>
        <img src={ imagePath } alt={ title } />
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired,
};

export default MovieCard;
