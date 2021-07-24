import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movies: { title, subtitle, storyline, imagePath, rating } } = this.props;

    return (
      <div>
        <img src={ imagePath } alt={ title } />
        <h4>
          {' '}
          { title }
          {' '}
        </h4>
        <h5>
          {' '}
          { subtitle}
        </h5>

      </div>
    );
  }
}

export default MovieCard;
