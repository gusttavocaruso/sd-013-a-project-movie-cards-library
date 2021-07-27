import React from 'react';
import PropTypes from 'prop-types';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1>{ movies.title }</h1>
        <h3>{ movies.subtitle }</h3>
        <p>{ movies.storyline }</p>
        <img src={ movies.imagePath } alt={ movies.title } />
      </div>
    );
  }
}

MovieCard.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  })),
};

MovieCard.defaultProps = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string,
    subtitle: PropTypes.string,
    storyline: PropTypes.string,
    imagePath: PropTypes.string,
  })),
};

export default MovieCard;
