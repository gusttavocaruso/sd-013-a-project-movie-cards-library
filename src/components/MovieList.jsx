import React, { Component } from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const { movies } = this.props;

    return (
      <section>
        {movies.map((movie) => (<MovieCard
          key={ movie.title }
          movie={ movie }
        />))}
      </section>
    );
  }
}

export default MovieList;

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    subtitle: PropTypes.string,
    title: PropTypes.string,
    imagePath: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
  })),
};

MovieList.defaultProps = {
  movies: {},
};
