// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <h4>
          { movie.title }
        </h4>
        <h5>
          { movie.subtitle }
        </h5>
        <p>
          Storyline:
          { movie.storyline }
        </p>
        <img src={ movie.imagePath } alt={ `Imagem do filme ${movie.title}` } />
        <p>
          Rating:
          { movie.rating }
        </p>
      </div>
    );
  }
}

export default MovieCard;
