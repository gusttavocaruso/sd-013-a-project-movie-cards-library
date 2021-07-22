// implement MovieList component here
import React from 'react';
import PropsTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const retorno = movies
      .map((movie) => <MovieCard movie={ movie } key={ movie.title } />);
    return (
      <section className="movie-list">
        {retorno}
      </section>
    );
  }
}

MovieList.propTypes = {
  movies: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

export default MovieList;
