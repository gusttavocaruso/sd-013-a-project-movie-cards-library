// Arquivo Rating cria visualmente a nota dos filmes, e é chamado no arquivo MovieCard que contém o
// que vai ser renderizado para cada filme

import React from 'react';
import PropTypes from 'prop-types';

// ===================================

// Requisito 11: Crie um componente <Rating />
// Requisito 12: Renderize a nota de um filme dentro de Rating
// Requisito 14: Passe como prop para o componente <Rating /> o atributo rating

// ===================================

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <p className="rating">{ rating }</p>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;

// feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli
