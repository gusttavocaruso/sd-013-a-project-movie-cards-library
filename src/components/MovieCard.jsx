import React from 'react';

class MovieCard extends React.Component {
  render () {
    const { movie } = this.props;

    return (
      <section>
        <h1>{ movie.title }</h1>
        <h5>{ movie.subtitle }</h5>
        <p>{ movie.storyline }</p>
        <img src={ movie.imagePath } alt={movie.title } />
        <h4>{ movie.rating }</h4>
      </section>
    );
  }
}

export default MovieCard;
