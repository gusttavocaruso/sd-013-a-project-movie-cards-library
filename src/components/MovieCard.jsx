import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    // Peguei essa dica de declaração da props no git do Emanoel https://github.com/tryber/sd-013-a-project-movie-cards-library/pull/134
    const { movie: { title, subtitle, storyline, rating, imagePath } } = this.props;

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
  movie: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieCard;
