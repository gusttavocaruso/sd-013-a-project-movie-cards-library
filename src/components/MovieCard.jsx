// implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { title, subtitle, imagePath, rating } = movie;
    return (
      <div>
        <div>
          <img src={ imagePath } alt={ title } />
          <h4>{ title }</h4>
        </div>
      </div>
    );
  }
}

export default MovieCard;
