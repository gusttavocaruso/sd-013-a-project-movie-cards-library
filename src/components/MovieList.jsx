import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

// import styles from './MovieList.module.css';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <main>
        {movies.map((movie) => <MovieCard key={ movie.title } movie={ movie } />)}
      </main>
    );
  }
}

MovieList.propTypes = {
  movies: PropTypes.shape([{
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    imagePath: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  }]).isRequired,
};

export default MovieList;
