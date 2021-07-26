import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <div>
          <img src={ movie.imagePath } alt="title" />
          <h4>{movie.title}</h4>
          <p>{movie.rating}</p>
          <h5>{movie.subtitle}</h5>
          <p>{movie.storyline}</p>
          {/* <Rating className="rating" /> */}
        </div>
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
