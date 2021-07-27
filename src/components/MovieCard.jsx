import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { xumbrega } = this.props;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
          <img
            key="image"
            className="movie-card-image"
            src={ xumbrega.imagePath }
            alt={ xumbrega.title }
          />
        </div>
        <div className="movie-card-body">
          <h4 key="title" className="movie-card-title">{xumbrega.title}</h4>
          <h5 key="subtitle" className="movie-card-subtitle">{xumbrega.subtitle}</h5>
          <p key="synopsis" className="movie-card-storyline">{xumbrega.storyline}</p>
        </div>
        <div className="movie-card-rating">
          <Rating rating={ xumbrega.rating } />
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
