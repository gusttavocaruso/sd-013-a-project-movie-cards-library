// implement MovieCard component here
import PropTypes from 'prop-types';
import React, { Component } from 'react';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        {movie.title}
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
