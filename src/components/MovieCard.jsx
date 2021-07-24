// Arquivo MovieCard que renderiza a ordem do que vai ser renderizado para cada filme
// Chamamos esse arquivo dentro de MovieList para dizer o que vai ser renderizado

import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

// ===================================

// Requisito 6: Crie um componente <MovieCard />
// Requisito 7: Renderize a imagem do filme dentro de uma tag img
// Requisito 8: Renderize o título do filme dentro de uma tag h4
// Requisito 9: Renderize o subtítulo do filme dentro de uma tag h5
// Requisito 10: Renderize a sinopse do filme dentro de uma tag p
// Requisito 13: Renderize o componente <Rating /> dentro de <MovieCard />

// ===================================

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title, subtitle, storyline, rating } = movie;
    return (
      <div className="movie-card">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="movie-card-title">{ title }</h4>
        <h5 className="movie-card-subtitle">{ subtitle }</h5>
        <p className="movie-card-storyline">{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }),
};

MovieCard.defaultProps = {
  movie: {},
};

export default MovieCard;

// feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli
