import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating'; // Importa o componente Rating

class MovieCard extends React.Component {
  render() { // Chama o método para renderizar, criando o próprio método render
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie; // Faz a desestruturação apenas para fazer a chamada dos dados dos objetos

    // Renderizo abaixo a props movie que foi desestruturada
    return ( // O return tem que retornar um HTML
      <section className="movie-card">
        <div className="movie-card-body">
          <img src={ imagePath } alt={ title } className="movie-card-image" />
          <h4 className="movie-card-title">{ title }</h4>
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        <div className="movie-card-rating">
          { /* Req. 13 - Renderize o componente <Rating /> dentro de <MovieCard /> */}
          <Rating rating={ rating } />
        </div>
      </section>
    );
  }
}

// PropTypes realiza a captura de bugs na checagem de tipos
MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
    rating: PropTypes.number,
  }).isRequired,
};

export default MovieCard; // Sempre exportar o componente
