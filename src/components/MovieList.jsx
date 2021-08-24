import React from 'react';
import { arrayOf } from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        { movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </div>
    );
  }
}
MovieList.propTypes = {
  movies: arrayOf(Object).isRequired,
};

export default MovieList;
