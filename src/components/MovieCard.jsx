// // implement MovieCard component here
import React from 'react';

class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;
    const { imagePath, title } = movie;
    return (
      <div>
        <img src={ imagePath } alt={ title } />
      </div>
    );
  }
}

export default MovieCard;
