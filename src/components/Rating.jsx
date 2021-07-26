// implement Rating component here
// feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli
import React from 'react';
import PropTypes from 'prop-types';

class Rating extends React.Component {
  render() {
    const { rating } = this.props;
    return (
      <p className="rating">{ rating }</p>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number.isRequired,
};

// pode usar apenas o isRequared

export default Rating;
