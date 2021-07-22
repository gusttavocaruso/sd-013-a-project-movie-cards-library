import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render () {
    const { movies } = this.props;
    const m = movies.map((movie) => <MovieCard key={ movie.title } movie={movie} />);

    return (
      <main className="movie-list">
        { m }
      </main>
    );
  }
  
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
