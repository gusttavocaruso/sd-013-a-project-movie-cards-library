// implement MovieList component here
// https://pt-br.reactjs.org/docs/components-and-props.html

import PropTypes from 'prop-types';
import MovieCard from './MovieCard';
import React from 'react';
import movies from '../data';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
       { movies.map((movie) => <MovieCard key={ movie.title } movie= { movie }/>)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
