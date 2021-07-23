/* feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Juliane Marques, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli. */
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <div className="movie-card-rating">
        <div className="rating">{ rating }</div>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

export default Rating;
