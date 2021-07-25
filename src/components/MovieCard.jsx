import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;
    return (
      <section className="movie-card">
        <div className="movie-card-body">
        <img className="movie-card-image" src={ imagePath } alt={ title } />
        <h4 className="page-titlepage-title">{title}</h4>
        <h5 className="movie-card-subtitle">{subtitle}</h5>
        <p className="movie-card-storyline">{storyline}</p>
        <div className="movie-card-rating">
          <Rating className="rating" rating={ rating } />
        </div>
        </div>
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropTypes.arrayOf(PropTypes.shape({
    imagePath: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    storyline: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
  })),
};

MovieCard.defaultProps = {
  movie: [],
};

export default MovieCard;
