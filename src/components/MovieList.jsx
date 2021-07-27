import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div className="movie-list">
        {movies.map((movInfo) => <MovieCard key={ movInfo.title } movie={ movInfo } />)}
      </div>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })),
};

MovieList.defaultProps = {
  movies: [],
};

export default MovieList;

/* Referências: Aula ao vivo 11.2 e vídeo sobre Proptypes disponilzado no Slack pela
especialista Maitê Marques.
Estilo ajustado com a ajuda da aluna Luiza Antiques */
