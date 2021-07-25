import React from 'react';
import Rating from './Rating';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <div>
        <div>
          <img src={ imagePath } alt={ title } />
          <h4>
            { title }
          </h4>
          <h5>
            { subtitle}
          </h5>
          <p>
            {storyline}
          </p>
        </div>
        <Rating />
      </div>
    );
  }
}

export default MovieCard;
