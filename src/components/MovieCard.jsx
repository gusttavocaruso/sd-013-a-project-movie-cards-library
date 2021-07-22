import React from 'react';
import Rating from './Rating'; // Importa o componente Rating

class MovieCard extends React.Component {
  render() { // Chama o método para renderizar, criando o próprio método render
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props; // Faz a desestruturação apenas para fazer a chamada dos dados dos objetos

    // Renderizo abaixo a props movie que foi desestruturada
    return ( // O return tem que retornar um HTML
      <section className="movie-card">
        { /* Requisito 7 - Renderize a imagem do filme dentro de uma tag img */ }
        <img src={ imagePath } alt={ title } className="movie-card-image" />
        <div className="movie-card-body">
          { /* Requisito 8 - Renderize o título do filme dentro de uma tag h4 */ }
          <h4 className="movie-card-title">{ title }</h4>
          { /* Requisito 9 - Renderize o subtítulo do filme dentro de uma tag h5 */ }
          <h5 className="movie-card-subtitle">{ subtitle }</h5>
          { /* Requisito 10 - Renderize a sinopse do filme dentro de uma tag p */ }
          <p className="movie-card-storyline">{ storyline }</p>
        </div>
        { /* Requisito 13 - Renderize o componente <Rating /> dentro de <MovieCard /> */}
        <Rating rating={ rating } />
      </section>
    );
  }
}
