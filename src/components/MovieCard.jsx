// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    return (
      <div>
        <p>
          Title:
          { movie.title }
        </p>
        <p>
          Subtitle:
          { movie.subtitle }
        </p>
        <p>
          Storyline:
          { movie.storyline }
        </p>
        <p>
          ImagePath:
          { movie.imagePath }
        </p>
        <p>
          Rating:
          { movie.rating }
        </p>
      </div>
    );
  }
}

export default MovieCard;
