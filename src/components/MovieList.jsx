import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from './MovieCard';

class MovieList extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        {movies.map(({ title, subtitle, storyline, rating, imagePath }) => (
          <MovieCard
            key={ title }
            title={ title }
            subtitle={ subtitle }
            storyline={ storyline }
            rating={ rating }
            imagePath={ imagePath }
          />
        ))}

      </div>
    );
  }
}

// Eduardo me ajudou a concertar meu prop-types
MovieList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default MovieList;
