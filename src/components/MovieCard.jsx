import React from 'react';
// import propTypes from 'prop-types';
import movies from '../data';

class MovieCard extends React.Component {
  render() {
    const mapMovies = movies.map((movie, index) => (
      <div key={ index }>
        <img src={ movie.imagePath } alt={ movie.title } />
        <h4>{ movie.title }</h4>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
      </div>
    ));

    return (
      <div>
        {mapMovies}
      </div>
    );
  }
}

/* MovieCard.propTypes = {
  movies: propTypes.object.isRequired,
  imagePath: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
}; */

export default MovieCard;
