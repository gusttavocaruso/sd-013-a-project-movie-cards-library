import React from 'react';
import PropTypes from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    // console.log('linha 8 MovieCard',movie.rating, this.props);
    return (
      <section className="movie-card">
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <Rating rating={ movie.rating } />
        <p>{ movie.storyline }</p>
        <img src={ movie.imagePath } alt={ movie.title } />

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

MovieCard.defaultProps = { movie: {} };

export default MovieCard;
