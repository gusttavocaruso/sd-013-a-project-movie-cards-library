import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <img
        key="image"
        className="movie-card-image"
        src={ movie.imagePath }
        alt={ movie.title }/>,
      <div>
        <h4 key="title" className="movie-card-title">{movie.title}</h4>
        <h5 key="subtitle" className="movie-card-subtitle">{movie.subtitle}</h5>
        <p key="synopsis" className="movie-card-storyline">{movie.storyline}</p>
      </div>
    );
  }
}

export default MovieCard;
