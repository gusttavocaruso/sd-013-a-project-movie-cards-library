// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
// import movies from '../data';
// import MovieList from './MovieList';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <h4>
          Título:
          {movie.title}
        </h4>
        <h5>
          Subtítulo:
          {movie.subtitle}
        </h5>
        <p>
          Sinopse:
          {movie.storyline}
        </p>
        <img src={ movie.imagePath } alt="" />

        <Rating rating={ movie.rating } />

      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.string.isRequired,
};

export default MovieCard;
