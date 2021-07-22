import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie: { title, subtitle, storyline, imagePath, rating } } = this.props; // https://stackoverflow.com/questions/53712796/must-use-destructuring-props-assignment
    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </div>
    );
  }
}

MovieCard.defaultProps = {
  title: 'filme',
  subtitle: 'subtitle',
  storyline: 'storyline',
  imagePath: 'thumbnail',
};

MovieCard.propTypes = {
  movie: PropTypes.objectOf(PropTypes.object).isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  storyline: PropTypes.string,
  imagePath: PropTypes.string,
};

export default MovieCard;
