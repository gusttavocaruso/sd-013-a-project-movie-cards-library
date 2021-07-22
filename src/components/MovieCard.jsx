/* feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli.*/
import React, { Component } from 'react';
import Proptypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <div className="movie-card">
        <div className="movie-card-body">
          <img className="movie-card-image" src={imagePath} alt="Imagem do filme" />
          <h4 className="movie-card-title">{title}</h4>
          <h5 className="movie-card-subtitle">{subtitle}</h5>
          <p className="movie-card-storyline">{storyline}</p>
          <Rating rating={rating} />
        </div>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: Proptypes.shape({
    title: Proptypes.string,
    subtitle: Proptypes.string,
    storyline: Proptypes.string,
    rating: Proptypes.number,
    imagePath: Proptypes.string,
  }).isRequired,
};

export default MovieCard;
