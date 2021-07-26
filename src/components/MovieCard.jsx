import React from 'react';
import PropType from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return <img src={ movie.imagePath } alt="" />;
  }
}

MovieCard.propTypes = {
  movie: PropType.arrayOf(PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    rating: PropType.number,
    imagePath: PropType.string,
  })).isRequired,
};

export default MovieCard;
