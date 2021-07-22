// implement MovieCard component here
import React from 'react';

import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movieProps } = this.props;
    return (
      <div>
        <img src={ movieProps.imagePath } alt={ movieProps.title } />
        <p>
          Title:
          {' '}
          {movieProps.title}
        </p>
        <p>
          Subtitle:
          {' '}
          {movieProps.subtitle}
        </p>
        <p>
          Storyline:
          {' '}
          {movieProps.storyline}
        </p>
        <p>
          Rating:
          {' '}
          {movieProps.rating}
        </p>
      </div>
    );
  }
}

MovieCard.propTypes = {
  movieProps: PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    rating: PropTypes.number,
    imagePath: PropTypes.string,
  }).isRequired,
};

export default MovieCard;
