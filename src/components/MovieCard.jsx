/* eslint-disable react/prop-types */
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies } = this.props;
    return (
      <div>
        <h1>{ movies.title }</h1>
        <h3>{ movies.subtitle }</h3>
        <p>{ movies.storyline }</p>
        <img src={ movies.imagePath } alt={ movies.title } />
      </div>
    );
  }
}

export default MovieCard;
