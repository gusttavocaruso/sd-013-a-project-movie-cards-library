// implement MovieList component here
import React from 'react';
import PropsTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <div>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>);
  }
}

MovieList.propTypes = {
  movies: PropsTypes.arrayOf(PropsTypes.object).isRequired,
};

export default MovieList;
