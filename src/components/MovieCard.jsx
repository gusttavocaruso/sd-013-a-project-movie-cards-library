import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { title, subtitle, storyline, rating, imagePath } = this.props;
    return (
      <div>
        <img src={ imagePath } width={ 400 } alt="Minha imagem" />
        <h4>{title}</h4>
        <h5>{subtitle}</h5>
        <p>{storyline}</p>
        <Rating rating={ rating } />
      </div>

    );
  }
}

MovieCard.propTypes = {
  title: PropTypes.arrayOf(PropTypes.object).isRequired,
  subtitle: PropTypes.arrayOf(PropTypes.object).isRequired,
  storyline: PropTypes.arrayOf(PropTypes.object).isRequired,
  rating: PropTypes.arrayOf(PropTypes.object).isRequired,
  imagePath: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
