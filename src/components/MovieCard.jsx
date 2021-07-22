import React, { Component } from 'react';
import Rating from './Rating';
import movieType from './movieType';

class MovieCard extends Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, rating, imagePath } = movie;

    return (
      <li>
        <img src={ imagePath } alt={ title } />
        <h4>{ title }</h4>
        <h5>{ subtitle }</h5>
        <p>{ storyline }</p>
        <Rating rating={ rating } />
      </li>
    );
  }
}

MovieCard.propTypes = {
  movie: movieType.isRequired,
};

export default MovieCard;
