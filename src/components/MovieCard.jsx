import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <div>
          <img
            key="image"
            className="movie-card-image"
            src={ movie.imagePath }
            alt={ movie.title }
          />
        </div>
        <div>
          <h4 key="title" className="movie-card-title">{movie.title}</h4>
          <h5 key="subtitle" className="movie-card-subtitle">{movie.subtitle}</h5>
          <p key="synopsis" className="movie-card-storyline">{movie.storyline}</p>
        </div>
        <div>
          <Rating rating={ movie.rating } />
        </div>
      </section>
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
