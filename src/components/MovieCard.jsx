// implement MovieCard component here
import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';
// import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>{movie.title}</h4>
        <img src={ movie.imagePath } alt="movie_image" />
        <h5>{movie.subtitle}</h5>
        <p>{movie.storyline}</p>
        <p>{movie.rating}</p>
        <Rating />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  })).isRequired,
};

// MovieList.defautProps = {
//   movies: [],
// };

export default MovieCard;
