import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating'

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card mobie-card-body">
        <img className="movie-card-image" src={ movie.imagePath } alt="movie_image" />
        <h1 className="movie-card-title">{movie.title}</h1>
        <h2 className="movie-card-subtitle">{movie.subtitle}</h2>
        <p className="movie-card-storyline">{movie.storyline}</p>
        <Rating rating={ movie.rating }/>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
