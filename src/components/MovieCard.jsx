// implement MovieCard component here
import React from 'react';
import Rating from './Rating'

class MovieCard extends React.Component {
  render () {
    return (
      <div>
        <img src={movie.imagePath} alt={movie.title} />
        <h4>{movie.title}</h4>
        <h5>{movie.subtitle}</h5>
        <p>storyline</p>
        <Rating rating = { rating }/>
      </div>
    )
  }
}

export default MovieCard