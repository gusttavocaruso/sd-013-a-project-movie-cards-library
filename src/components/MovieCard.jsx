import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="movie-card movie-card-body">
        <h4 className="movie-card-title">{ movie.title }</h4>
        <h5 className="movie-card-subtitle">{ movie.subtitle }</h5>
        <p className="movie-card-storyline">{ movie.storyline }</p>
        <img className="movie-card-imag" src={ movie.imagePath } alt={ movie.title } />
        <Rating rating={ movie.rating } />
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
  }),
};
MovieCard.defaultProps = {
  movie: {},
};
export default MovieCard;
