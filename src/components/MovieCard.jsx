import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, storyline, imagePath, rating } = movie;
    return (
      <div>
        <img className="movie-card-image" src={ imagePath } alt="movieImage"/>
      </div>
    );
  }
}

export default MovieCard;
