// Arquivo MovieList que contém a lógica para rodas um filme de cada vez, será renderizado pelo App.js

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// ===================================

// Requisito 3: Crie um componente <MovieList />
// Requisito 4: Renderize componentes <MovieCard /> dentro de <MovieList />
// Requisito 5: Passe uma key para cada <MovieCard /> renderizado

// ===================================

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;

// feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli
