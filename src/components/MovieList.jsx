// feito com a ajuda das mulheres da Turma 13 A - Jaqueline Silva, Vanessa Rios, Debora Teodorico, Isabella Antunes, Heleny Flavia, Julia Baptista, Aline Eiko Hoshino, Elaine Moreira, Luiza Antiques, Sthefany Caroline, Jessica Queiroz, Lanai Conceicao e tambem Pedro Delicoli.

import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    console.log(movies);
    return (
      <div className="movie-list">
        {movies.map((movie) => <MovieCard movie={ movie } key={ movie.title } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
