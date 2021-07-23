import React from 'react';
import PropType from 'prop-types';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <section>
        <img src={ movie.imagePath } alt="" />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <Rating rating={ movie.rating } />
      </section>
    );
  }
}

MovieCard.propTypes = {
  movie: PropType.shape({
    title: PropType.string,
    subtitle: PropType.string,
    storyline: PropType.string,
    imagePath: PropType.string,
    rating: PropType.number,
  }).isRequired,
};

export default MovieCard;
