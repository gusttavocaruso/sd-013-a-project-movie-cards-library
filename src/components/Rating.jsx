// Requisito 11 - Crie um componente <Rating />
import React from 'react';
import PropTypes from 'prop-types'; // Importando o PropTypes

class Rating extends React.Component {
  render() { // Chama o método para renderizar, criando o próprio método render
    // Recebo a props movie que é um objeto do array movies
    // Desestruturo buscando o rating dentro do movies
    const { movie: { rating } } = this.props;

    // Renderizo abaixo a props movie que foi desestruturada
    return ( // O return tem que retornar um HTML
      <div className="movie-card-rating">
        <span className="rating">{ rating }</span>
      </div>
    );
  }
}

// PropTypes realiza a captura de bugs na checagem de tipos
Rating.propTypes = { // Iniciando a checagem de tipos das Props
  movie: PropTypes.shape({
    rating: propTypes.number, // Eu espero receber uma prop do rating e tem que ser number
  }).isRequired, // Para torna-los obrigatório
};

export default Rating; // Sempre exportar o componente
