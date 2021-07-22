// Crie um componente que represente toda a área com os cartões de filmes
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    // Recebo a props "movies" do App.js que é um objeto do array de movies
    // Nesses objetos temos a informação de title
    const { movies: { title } } = this.props; // Desestruturo para fazer a chamada do title

    // Renderizo abaixo a props movies enviada pelo App.js que foi desestruturada
    return (
      <section className="movie-list">
        {/* Toda vez que é realizado o MAP é necessário colocar um KEY,
         usado internamente para identificar cada item */}
        { movies.map((movie) => <MovieCard key={ title } movie={ movie } />)}
      </section>
    );
  }
}

// Eu espero receber uma prop do title e tem que ser string
MovieList.propTypes = { // Iniciando a checagem de tipos das Props
  movies: PropTypes.shape({
    title: PropTypes.string, // Eu espero receber uma prop do title e tem que ser number
  }).isRequired, // Para torna-los obrigatório
};

export default MovieList; // Sempre exportar o componente
