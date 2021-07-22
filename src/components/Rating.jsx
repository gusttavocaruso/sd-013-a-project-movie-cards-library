import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Rating extends Component {
  render() { // Chama o método para renderizar, criando o próprio método render
    // Recebo a props movie que é um objeto do array movies
    // Desestruturo buscando o rating dentro do movies
    const { rating } = this.props;

    // Renderizo abaixo a props movie que foi desestruturada
    return ( // O return tem que retornar um HTML
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

Rating.propTypes = {
  rating: PropTypes.number,
};

Rating.defaultProps = {
  rating: undefined,
};

export default Rating;