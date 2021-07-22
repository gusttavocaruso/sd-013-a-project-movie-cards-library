import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

export default class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    const moviesMap = movies
      .map((obj) => (<MovieCard
        movie={ obj }
        key={ obj.title }
      />));

    return (
      <main className="movie-list">
        { moviesMap }
      </main>);
  }
}

MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};
