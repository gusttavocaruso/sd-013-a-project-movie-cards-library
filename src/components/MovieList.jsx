import React, { Component } from 'react';
import movies from '../data';
import MovieCard from './MovieCard';

class MovieList extends Component {
  render() {
    const cards = movies.map((card, index) => (
      <MovieCard
        key={ index }
        imagePath={ card.imagePath }
        title={ card.title }
        subtitle={ card.subtitle }
        storyline={ card.storyline }
        rating={ card.rating }
      />
    ));
    return (
      <div className="movieList__container">
        { cards }
      </div>
    );
  }
}

export default MovieList;
